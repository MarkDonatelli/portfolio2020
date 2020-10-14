<template>
  <div class="container-full-width">
    <div class="row">
      <!-- intro animation -->
      <div class="container-intro">
        <div ref="overlayOne" class="overlay">
          <div class="spinner">
            <div class="square-one"></div>
            <div class="square-two"></div>
          </div>
        </div>
      </div>
      <!-- end: intro animation -->

      <nav>
        <!-- <div class="menu-icon">
          <div class="menu-line"></div>
        </div> -->
      </nav>
    </div>

    <!-- home header -->
    <div id="row-home" class="row row--home-header">
      <div class="home-header">
        <div class="main-title-block">
          <div class="title-box">
            <h1 class="sub-title">Front End Developer</h1>
            <h1 class="title title-home">
              Mark
              <br />
              Donatelli
            </h1>
          </div>

          <div class="social-links">
            <ul class="social-links-list">
              <li>
                <a
                  href="https://www.linkedin.com/in/mark-donatelli-747194133/"
                  target="_blank"
                >
                  <img src="~/assets/img/icon-linkedin.svg" class="icon-svg" />
                </a>
              </li>
              <li>
                <a href="https://github.com/MarkDonatelli" target="_blank">
                  <img class="icon-svg" src="~/assets/img/icon-github.svg" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/mark_donatelli/"
                  target="_blank"
                >
                  <img class="icon-svg" src="~/assets/img/icon-instagram.svg" />
                </a>
              </li>
            </ul>
            <div class="line"></div>
          </div>
        </div>
        <div class="main-content-block">
          <div class="lg-title-wrap lg-title-wrap--desktop">
            <h1 class="title">Front</h1>
            <h1 class="title">End</h1>
            <h1 class="title title--underline">
              Developer
              <span class="underline"></span>
            </h1>

            <div class="cta-block">
              <a class="btn btn-primary" href="mailto:markdonatelli3@gmail.com">
                Let's Talk
                <font-awesome-icon far icon="arrow-right" />
              </a>
              <p class="cta-p">OR</p>
              <a
                v-scroll-to="'#title-block--projects'"
                class="btn btn-primary"
                href="#"
              >
                View Projects
                <font-awesome-icon far icon="arrow-down" />
              </a>
            </div>
          </div>
          <div class="lg-title-wrap lg-title-wrap--mobile mobile-nav-boxes">
            <a v-scroll-to="'#title-block--projects'" class="nav-box" href="#">
              <div class="btn-inner">
                <h2>Projects</h2>
                <span class="info">Check out my latest projects.</span>
              </div>
              <span class="number">01</span>
            </a>
            <a v-scroll-to="'#techs'" class="nav-box" href="#">
              <div class="btn-inner">
                <h2>Technologies</h2>
                <span class="info">Technologies I use.</span>
              </div>
              <span class="number">02</span>
            </a>
            <a v-scroll-to="'#about'" class="nav-box" href="#">
              <div class="btn-inner">
                <h2>About</h2>
                <span class="info">Attributes.</span>
              </div>
              <span class="number">03</span>
            </a>
            <a v-scroll-to="'#sayHelloScrollTo'" class="nav-box" href="#">
              <div class="btn-inner">
                <h2>Contact</h2>
                <span class="info">Have a question? Contact me here.</span>
              </div>
              <span class="number">04</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- projects -->
    <Projects />
    <!-- techs -->
    <Techs />
    <!-- About -->
    <About />
    <!-- contact form -->
    <ContactForm />
    <!-- footer -->
    <Footer />
  </div>
</template>

<script>
import { gsap, TimelineMax, Expo, Power2 } from 'gsap/all'

export default {
  data() {
    return {
      tween: new TimelineMax({ paused: true }),
      title: 'Mark Donatelli | Front End Developer',
      bodyClass: 'is-loading',
    }
  },
  mounted() {
    // page loader
    const pageLoader = gsap.timeline({ yoyo: false })

    // eslint-disable-next-line no-console
    console.log(process.env.apiSecret)

    pageLoader
      .to('.overlay', 2, {
        display: 'none',
        onComplete: () =>
          document.querySelector('body').classList.remove('is-loading'),
      })

      .to(
        '.main-title-block',
        1,
        { delay: 0.3, x: '0', ease: Expo.easeIn },
        '-=0.5'
      )
      .fromTo(
        '.title-home',
        0.7,
        { autoAlpha: 0, y: '3%' },
        { autoAlpha: 1, y: '0', ease: Power2.easeOut }
      )
      .fromTo(
        '.social-links-list',
        0.7,
        { autoAlpha: 0, y: '3%' },
        { autoAlpha: 1, y: '0', ease: Power2.easeOut },
        '-=0.3'
      )
      .to('.line', 1, { width: '200%', ease: Expo.easeInOut }, '-=0.7')
      .fromTo(
        '.main-content-block',
        0.8,
        { autoAlpha: 0, y: '2%' },
        { autoAlpha: 1, y: '0', ease: Power2.easeOut },
        '-=0.5'
      )
      .to('.underline', 0.8, { width: '100%', ease: Expo.easeInOut }, '-=0.7')

    const fedText = gsap.timeline({ yoyo: false })
    fedText.fromTo(
      '.sub-title',
      0.8,
      { autoAlpha: 0, y: '2%' },
      { delay: 3, autoAlpha: 1, y: '0', ease: Power2.easeOut }
    )
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Mark Donatelli - Front End Developer',
        },
      ],
      bodyAttrs: {
        class: this.bodyClass,
      },
    }
  },
}
</script>

<style lang="scss">
//Intro Animation
.container-intro {
  width: 100vw;
  max-width: 100vw;
  margin: 0 calc(-50vw + 50%);
}

.is-loading {
  overflow: hidden;

  height: 100vh;
  margin: 0;
}

//overlay intro
.overlay {
  position: fixed;
  z-index: 999;

  display: flex;
  overflow-x: hidden;
  overflow-y: hidden;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;
  width: 100vw;
  height: 100%;
  min-height: 100%;

  background-color: $white;

  h1 {
    position: relative;

    color: $white;

    @include fluidType(font-size, 320px, 1200px, 85px, 300px);
  }
}

//main styles
nav {
  position: absolute;
  right: 50px;

  display: flex;
  justify-content: flex-end;

  width: 100%;
  padding: 50px 0;
}

//menu icon
.menu-icon {
  z-index: 1;

  width: 50px;
  height: 25px;

  &:hover {
    cursor: pointer;

    & .menu-line {
      width: 40px;

      &::before {
        width: 50px;
      }
      &::after {
        width: 50px;
      }
    }
  }
}

.menu-line {
  position: relative;
  top: 50%;
  left: 50%;

  width: 50px;
  height: 2px;

  transition: all 0.3s;
  transform: translate(-50%, -50%);

  background-color: $black;
  @media all and(max-width:991px) {
    background-color: $white;
  }

  &::before {
    position: absolute;

    width: 40px;
    height: 2px;
    margin-top: 9px;

    content: '';
    transition: all 0.3s;

    background-color: $black;

    @media all and(max-width:991px) {
      background-color: $white;
    }
  }

  &::after {
    position: absolute;

    width: 40px;
    height: 2px;
    margin-top: -9px;

    content: '';
    transition: all 0.3s;

    background-color: $black;

    @media all and(max-width:991px) {
      background-color: $white;
    }
  }
}
// end menu icon

.title-box {
  position: relative;

  margin-top: auto;

  .sub-title {
    position: top;
    position: absolute;
    left: 5px;

    letter-spacing: 1px;

    font-size: 16px;

    @include fluidType(top, 320px, 991px, -77px, -63px);

    @media all and(min-width: 992px) {
      display: none;
    }
  }
  .title {
    position: relative;

    letter-spacing: -5px;

    color: $white;

    @include fluidType(font-size, 991px, 1200px, 60px, 90px);
    @include fluidType(line-height, 991px, 1200px, 47px, 70px);
    @include fluidType(letter-spacing, 991px, 1200px, -3px, -5px);

    @media all and(max-width: 991px) {
      @include fluidType(font-size, 320px, 991px, 60px, 80px);
      @include fluidType(line-height, 320px, 1200px, 47px, 65px);
      @include fluidType(letter-spacing, 320px, 1200px, -3px, -5px);
    }
  }
  .title-secondary {
    position: absolute;
    top: 41px;
    right: 30px;

    letter-spacing: 4px;

    font-size: 14px;
  }
}
.home-header {
  position: relative;

  display: flex;

  width: 100%;
  min-height: 100vh;
  @media all and(max-width: 991px) {
    flex-direction: column;

    min-height: 50vh;
  }
}

.main-title-block {
  position: relative;

  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  max-width: 600px;
  height: 100%;

  transform: translateX(-101%);

  color: white;
  background: $red;

  @include fluidType(padding-left, 991px, 1200px, 15px, 50px);
  @include fluidType(padding-right, 991px, 1200px, 15px, 50px);
  @include fluidType(max-width, 991px, 1200px, 315px, 600px);

  @media all and(max-width:991px) {
    max-width: 100%;
    height: 315px;
    margin-bottom: 0;
  }

  .social-links {
    position: relative;
    z-index: 1;
    top: -55px;
    left: 5px;

    margin-top: auto;

    @media all and(max-width:991px) {
      top: -20px;
    }

    ul {
      display: flex;

      padding-left: 0;

      list-style: none;
      li {
        @include fluidType(padding-right, 991px, 1200px, 25px, 50px);

        img.icon-svg {
          @include fluidType(height, 991px, 1200px, 20px, 25px);

          &:hover {
            -webkit-animation-name: up;
            animation-name: up;
            -webkit-animation-duration: 1.3s;
            animation-duration: 1.3s;
            -webkit-animation-iteration-count: infinite;
            animation-iteration-count: infinite;
          }
        }
      }
    }

    .line {
      position: absolute;

      width: 0;
      height: 2px;

      background-color: $white;

      @include fluidType(left, 991px, 1200px, 137px, 227px);
      @include fluidType(top, 991px, 1200px, 10px, 12px);
    }
  }
}

.main-content-block {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  width: 100%;

  @include fluidType(padding-left, 991px, 1200px, 15px, 50px);
  @include fluidType(padding-right, 991px, 1200px, 15px, 50px);

  .title {
    color: $black;

    font-weight: 700;

    @include fluidType(font-size, 1200px, 1600px, 120px, 170px);
    @include fluidType(line-height, 1200px, 1500px, 95px, 140px);
    @include fluidType(letter-spacing, 1200px, 1500px, -7px, -10px);

    @media all and(max-width:991px) {
      font-size: 75px;
      line-height: 57px;
    }
  }

  .title--underline {
    position: relative;

    display: inline-block;

    span.underline {
      position: absolute;
      z-index: -1;
      bottom: -4%;
      left: 0;

      width: 0%;
      height: 25%;

      background-color: $red;
    }
  }
  @media all and(max-width:991px) {
    align-items: flex-start;

    padding: 0;
  }
}

.lg-title-wrap--desktop {
  @media all and(max-width:991px) {
    display: none;
  }
}

.lg-title-wrap--mobile {
  .title--underline {
    span.underline {
      bottom: -5%;

      height: 15%;
    }
  }

  @media all and(min-width:992px) {
    display: none;
  }
  .title {
    @include fluidType(font-size, 320px, 991px, 60px, 80px);
    @include fluidType(line-height, 320px, 1200px, 47px, 65px);
    @include fluidType(letter-spacing, 320px, 1200px, -3px, -5px);
  }
}

.mobile-nav-boxes {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  width: 100%;
  margin-top: 35px;

  @media all and(min-width:992px) {
    display: none;
  }

  span.info {
    font-family: $poppins;

    @include fluidType(font-size, 320px, 990px, 15px, 18px);
  }

  .nav-box {
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 100%;
    padding-right: 15px;
    padding-left: 15px;

    transition: 200ms all linear;
    text-decoration: none;

    color: $black;
    border-top: 2px solid $black;
    background-color: $white;

    @include fluidType(padding-top, 320px, 990px, 30px, 40px);
    @include fluidType(padding-bottom, 320px, 990px, 30px, 40px);

    &:last-child {
      border-bottom: 2px solid $black;
    }

    h2 {
      position: relative;

      padding-bottom: 10px;

      @include fluidType(font-size, 320px, 990px, 30px, 65px);

      &::after {
        position: absolute;

        width: 12px;
        height: 12px;

        content: '';
        transition: 200ms all linear;

        border-radius: 50%;
        background-color: $red;

        @include fluidType(bottom, 320px, 990px, 22px, 35px);

        @media all and(max-width:550px) {
          width: 9px;
          height: 9px;
        }
      }
    }

    .number {
      position: absolute;
      right: 15px;

      @include fluidType(font-size, 320px, 990px, 35px, 95px);
    }

    &:hover {
      color: $white;
      background-color: $red;

      h2::after {
        background-color: $white;
      }
    }
  }
}

.cta-block {
  display: flex;
  align-items: center;

  margin-top: 35px;

  .cta-p {
    padding-right: 35px;
    padding-left: 28px;

    font-size: 30px;

    @media all and(max-width:768px) {
      padding-right: 25px;
      padding-left: 18px;

      font-size: 20px;
    }
  }
}

//icon float up
@-webkit-keyframes up {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);

    opacity: 1;
  }

  50% {
    -webkit-transform: translateY(-7px);
    transform: translateY(-7px);

    opacity: 1;
  }
}

@keyframes up {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);

    opacity: 1;
  }

  50% {
    -webkit-transform: translateY(-7px);
    transform: translateY(-7px);

    opacity: 1;
  }
}

.spinner {
  position: relative;

  width: 40px;
  height: 40px;
  margin: 100px auto;
}

.square-one,
.square-two {
  position: absolute;
  top: 0;
  left: 0;

  width: 20px;
  height: 20px;

  -webkit-animation: sk-cubemove 1.8s infinite ease-in-out;
  animation: sk-cubemove 1.8s infinite ease-in-out;

  background-color: $red;
}

.square-two {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}

@-webkit-keyframes sk-cubemove {
  25% {
    -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5);
  }
  50% {
    -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg);
  }
  75% {
    -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg)
      scale(0.5);
  }
  100% {
    -webkit-transform: rotate(-360deg);
  }
}

@keyframes sk-cubemove {
  25% {
    -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5);
    transform: translateX(42px) rotate(-90deg) scale(0.5);
  }
  50% {
    -webkit-transform: translateX(42px) translateY(42px) rotate(-179deg);
    transform: translateX(42px) translateY(42px) rotate(-179deg);
  }
  50.1% {
    -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg);
    transform: translateX(42px) translateY(42px) rotate(-180deg);
  }
  75% {
    -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg)
      scale(0.5);
    transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);
  }
  100% {
    -webkit-transform: rotate(-360deg);
    transform: rotate(-360deg);
  }
}
</style>

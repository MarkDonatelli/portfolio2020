<template>
  <div id="techs" class="row row--tools">
    <!--  title -->
    <div class="title-block">
      <h1 class="title title--technologies">
        Here are some technologies
        <br />
        I use to
        <span class="text-underline">
          design

          <span class="underline underline--red"></span>
        </span>
        and
        <span class="text-underline">
          build

          <span class="underline underline--red"></span>
        </span>
        <br />

        <span class="text-underline">
          websites

          <span class="underline underline--red"></span>
        </span>
        and
        <span class="text-underline">
          applications.

          <span class="underline underline--red"></span>
        </span>
      </h1>
    </div>
    <div class="col-list">
      <ul class="list">
        <li class="list-item">
          <img
            src="../assets/img/techs/html.svg"
            class="img-responsive tech-svg"
          />
        </li>
        <li class="list-item">
          <img
            src="../assets/img/techs/css.svg"
            class="img-responsive tech-svg"
          />
        </li>

        <li class="list-item">
          <img
            src="../assets/img/techs/sass-bw.svg"
            class="img-responsive tech-svg"
          />
        </li>

        <li class="list-item">
          <img
            src="../assets/img/techs/js-BW.svg"
            class="img-responsive tech-svg"
          />
        </li>
        <li class="list-item">
          <img
            src="../assets/img/techs/jquery-BW.svg"
            class="img-responsive tech-svg tech-svg--lg"
          />
        </li>
        <li class="list-item">
          <img
            src="../assets/img/techs/bs.svg"
            class="img-responsive tech-svg"
          />
        </li>
        <li class="list-item">
          <img
            src="../assets/img/techs/ps-BW.svg"
            class="img-responsive tech-svg"
          />
        </li>
        <li class="list-item">
          <img
            src="../assets/img/techs/ai.svg"
            class="img-responsive tech-svg shadow"
          />
        </li>
        <li class="list-item">
          <img
            src="../assets/img/techs/vs.svg"
            class="img-responsive tech-svg"
          />
        </li>
        <li class="list-item">
          <img
            src="../assets/img/techs/nuxt.svg"
            class="img-responsive tech-svg"
          />
        </li>
        <li class="list-item">
          <img
            src="../assets/img/techs/vue.svg"
            class="img-responsive tech-svg"
          />
        </li>
        <li class="list-item">
          <img
            src="../assets/img/techs/hs.svg"
            class="img-responsive tech-svg"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { gsap, Expo, ScrollTrigger } from 'gsap/all'
export default {
  data() {
    return {}
  },
  mounted() {
    gsap.utils.toArray('.underline--red').forEach((item) => {
      gsap.fromTo(
        item,
        {
          autoAlpha: 0,
          width: '0',
        },
        {
          scrollTrigger: {
            trigger: item,

            once: true,
          },
          duration: 1,
          autoAlpha: 1,
          width: '100%',
          delay: 1.5,
          ease: Expo.easeInOut,
          stagger: { amount: 5 },
        }
      )
    })

    ScrollTrigger.matchMedia({
      // desktop
      '(min-width: 769px)'() {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: '.row--tools',
              scrub: 0.5,
              pin: true,

              start: '-=50',

              end: '+=150%',
            },
          })

          .fromTo(
            '.list-item',
            0.8,
            { autoAlpha: 0, rotation: '45deg' },
            {
              force3D: true,
              duration: 1,
              autoAlpha: 1,
              xPercent: 0,
              rotation: '0deg',
              ease: 'power1.inOut',
              stagger: { amount: 1 },
            }
          )
      },
      '(max-width: 768px)'() {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: '.row--tools',
              scrub: 0.5,
              once: true,
              pin: false,
              end: '-=25',
            },
          })

          .fromTo(
            '.list-item',
            0.8,
            { autoAlpha: 0, rotation: '0deg' },
            {
              force3D: false,
              duration: 0.3,
              autoAlpha: 1,

              rotation: '0deg',
              ease: 'power1.inOut',
              stagger: false,
            }
          )
      },
    })
  },
}
</script>

<style lang="scss" scoped>
.row--tools {
  margin-top: -111px;

  @media (max-width: 768px) {
    margin-top: -75px;
    padding-top: 11px;
  }

  .title-block {
    @include fluidType(margin-bottom, 320px, 1200px, 0px, 50px);
    @include fluidType(padding-left, 991px, 1200px, 15px, 50px);
    @include fluidType(padding-right, 991px, 1200px, 15px, 50px);
  }
  .title {
    color: $black;

<<<<<<< HEAD
    @include fluidType(font-size, 567px, 1300px, 35px, 65px);
    @include fluidType(line-height, 567px, 1300px, 40px, 75px);
=======
    @include fluidType(font-size, 320px, 1300px, 28px, 65px);
    @include fluidType(line-height, 320px, 1300px, 32px, 75px);
>>>>>>> 38e84628d72cbafe606310b7858c1135ac77fd06

    @media (max-width: 550px) {
      br {
        display: none;
      }
    }
  }
}
.col-list {
  width: 100%;
  margin-bottom: 10px;

  ul.list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    width: 100%;
    margin: 0 auto;
    padding: 0;
    li {
      display: flex;
      align-items: center;
      flex: 1 0 25%;
      justify-content: center;

      padding: 50px 50px 0 50px;

      list-style: none;
    }
  }
}

.text-underline {
  position: relative;
}

span.underline {
  position: absolute;
  z-index: -1;
  bottom: 19%;
  left: 0;

  width: 100%;
  height: 15%;

  background-color: $red;
}
.tech-svg {
  max-width: 65px;

  @media (max-width: 768px) {
    max-width: 50px;
  }
}
.tech-svg--lg {
  max-width: 130px;

  @media (max-width: 768px) {
<<<<<<< HEAD
    max-width: 100px;
=======
    max-width: 85px;
>>>>>>> 38e84628d72cbafe606310b7858c1135ac77fd06
  }
}
</style>

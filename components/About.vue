<template>
  <div class="row row--about">
    <div class="container--about">
      <div class="container--content">
        <div class="text">
          <div class="highlight-wrap">
            <h2>Developer</h2>
            <span>
              Team player, problem solver, open minded, disciplined, always
              learning
            </span>
          </div>
          <div class="highlight-wrap">
            <h2>Coder</h2>
            <span>
              Efficient, clean, reusable code, semantic markup, and organized
              styles
            </span>
          </div>
          <div class="highlight-wrap">
            <h2>Designer</h2>
            <p>Beautiful UI layouts, color themes, and creativity</p>
          </div>
          <div class="highlight-wrap">
            <h2>Experience</h2>
            <span>
              6+ years of building production ready websites and applications
            </span>
          </div>
        </div>
        <div id="about" class="media">
          <img
            src="../assets/img/mark-hendrix.png"
            class="img-responsive img-about"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap, ScrollTrigger } from 'gsap/all'
export default {
  data() {
    return {}
  },
  mounted() {
    const info = gsap.timeline({ yoyo: false })

    info.fromTo(
      '.highlight-wrap',
      0.8,
      { autoAlpha: 0 },
      {
        duration: 1,
        autoAlpha: 1,

        ease: 'power1.inOut',
        stagger: { amount: 1.5 },
      }
    )
    ScrollTrigger.create({
      trigger: '.highlight-wrap',
      animation: info,
    })
  },
  methods: {
    scrollTo(id) {
      const element = document.getElementById(id)
      element.scrollIntoView({ behavior: 'smooth' })
    },
  },
}
</script>

<style lang="scss" scoped>
.container--about {
  position: relative;
  z-index: 0;

  width: 100%;
  margin: 75px 0 0 0;
  padding-top: 75px;
  padding-bottom: 75px;

  background-color: $grey-light--variant;

  @include fluidType(padding-left, 991px, 1200px, 15px, 50px);
  @include fluidType(padding-right, 991px, 1200px, 15px, 50px);

  @media (max-width: 768px) {
    margin-top: 35px;
    padding-top: 35px;
    padding-bottom: 30px;
  }
}
.title-block {
  display: flex;
  justify-content: flex-end;

  width: 100%;
}

.container--content {
  position: relative;

  display: flex;

  @media (min-width: 992px) {
    align-items: center;
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
}

.text {
  flex: 1 0 50%;

  .highlight-wrap {
    position: relative;
    z-index: 1;

    margin-bottom: 50px;
    h2 {
      position: relative;

      margin: 0 30px 30px 0;

      color: $black;

      font-weight: 800;

      @include fluidType(font-size, 345px, 1400px, 35px, 80px);
      @include fluidType(line-height, 345px, 1400px, 24px, 55px);

      @media all and(max-width:567px) {
        margin-bottom: 25px;
      }

      &::after {
        position: absolute;
        bottom: 0;

        content: '';

        border-radius: 50%;
        background-color: $red;

        @include fluidType(width, 345px, 1400px, 9px, 17px);
        @include fluidType(height, 345px, 1400px, 9px, 17px);
      }
    }

    span {
      font-family: $poppins;
      font-weight: normal;

      @include fluidType(font-size, 567px, 1400px, 16px, 18px);
    }

    p {
      font-family: $poppins;
      font-weight: normal;

      @include fluidType(font-size, 567px, 1400px, 16px, 18px);
    }
  }
}

.media {
  display: flex;
  align-items: flex-start;
  flex: 1 0 50%;

  @media (max-width: 768px) {
    justify-content: center;

    margin-bottom: 50px;
    padding: 18px 0 0 0;
  }

  img {
    max-width: 100%;
  }
}
</style>

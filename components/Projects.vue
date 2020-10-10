<template>
  <div class="container--projects">
    <!-- projects -->
    <div id="projects" class="row row--projects">
      <div class="projects-wrapper">
        <!--  title -->
        <div id="title-block--projects" class="title-block">
          <h1 class="title title--section title--projects">
            Projects
            <span class="underline underline--title"></span>
          </h1>
        </div>

        <div id="showcase" class="showcase">
          <div class="showcase--grid">
            <!--project - mp -->
            <div class="grid-row">
              <div class="grid-item grid-item--media project">
                <img
                  src="../assets/img/tile-dots-red.svg"
                  class="img-responsive img-decoration--left"
                />
                <div ref="animateUp" class="l-project project--animate">
                  <img
                    src="../assets/img/mp-collage.jpg"
                    class="img-responsive shadow"
                  />
                </div>
              </div>
              <div class="grid-item project-content project-content--right">
                <h2 class="project-title">MassPay</h2>
                <div class="project-details">
                  <h3>Role</h3>
                  <p>
                    UI / UX Design - Front End Development - CRS Integration
                  </p>
                  <h3>Year</h3>
                  <p>2018</p>
                  <h3>Client</h3>
                  <p>MassPay, INC</p>
                </div>
                <div class="visit-link">
                  <a
                    class="btn btn-primary"
                    href="https://www.masspaysolutions.com"
                    target="_blank"
                  >
                    Visit Site
                    <font-awesome-icon far icon="arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <!-- end :project - mp -->

            <!--project - latuda -->
            <div class="grid-row grid-row--reverse-mobile">
              <div class="grid-item grid-item--left project-content">
                <h2 class="project-title">Latuda</h2>
                <div class="project-details">
                  <h3>Role</h3>
                  <p>Front End Development</p>
                  <h3>Year</h3>
                  <p>2019</p>
                  <h3>Client</h3>
                  <p>Sunovion Pharmaceuticals Inc</p>
                </div>
                <div class="visit-link">
                  <a
                    class="btn btn-primary"
                    href="https://www.latuda.com/"
                    target="blank"
                  >
                    Visit Site
                    <font-awesome-icon far icon="arrow-right" />
                  </a>
                </div>
              </div>

              <div class="grid-item grid-item--media project">
                <img
                  src="../assets/img/tile-plus-red.svg"
                  class="img-responsive img-decoration--right"
                />
                <div ref="animateUp" class="l-project project--animate">
                  <img
                    src="../assets/img/latuda-collage.jpg"
                    class="img-responsive shadow"
                  />
                </div>
              </div>
            </div>
            <!--end: project - latuda -->

            <!-- project - be vocal -->
            <div class="grid-row">
              <div class="grid-item grid-item--media project">
                <img
                  src="../assets/img/tile-squares-red.svg"
                  class="img-responsive img-decoration--left"
                />
                <div ref="animateUp" class="l-project project--animate">
                  <img
                    src="../assets/img/be-vocal-collage.jpg"
                    class="img-responsive shadow"
                  />
                </div>
              </div>
              <div class="grid-item project-content">
                <h2 class="project-title">Be Vocal</h2>
                <div class="project-details">
                  <h3>Role</h3>
                  <p>Front End Development</p>
                  <h3>Year</h3>
                  <p>2019</p>
                  <h3>Client</h3>
                  <p>Sunovion Pharmaceuticals Inc</p>
                </div>
                <div class="visit-link">
                  <a
                    class="btn btn-primary"
                    href="https://www.bevocalspeakup.com/"
                    target="blank"
                  >
                    Visit Site
                    <font-awesome-icon far icon="arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <!--end: project - be vocal -->

            <!--project - Kynmobi -->
            <div class="grid-row grid-row--reverse-mobile">
              <div class="grid-item grid-item--left project-content">
                <h2 class="project-title">Kynmobi</h2>
                <div class="project-details">
                  <h3>Role</h3>
                  <p>Front End Development</p>
                  <h3>Year</h3>
                  <p>2020</p>
                  <h3>Client</h3>
                  <p>Sunovion Pharmaceuticals Inc</p>
                </div>
                <div class="visit-link">
                  <a
                    class="btn btn-primary"
                    href="https://www.kynmobi.com"
                    target="blank"
                  >
                    Visit Site
                    <font-awesome-icon far icon="arrow-right" />
                  </a>
                </div>
              </div>

              <div class="grid-item grid-item--media project">
                <img
                  src="../assets/img/tile-dots-red.svg"
                  class="img-responsive img-decoration--right"
                />
                <div class="l-project project--animate">
                  <img
                    src="../assets/img/kynmobi.png"
                    class="img-responsive shadow bg-white"
                  />
                </div>
              </div>
            </div>
            <!-- end: project - Kynmobi -->

            <!-- coming soon -->
            <div class="grid-row">
              <div class="grid-item grid-item--media project">
                <img
                  src="../assets/img/tile-plus-red.svg"
                  class="img-responsive img-decoration--left"
                />
                <div class="l-project project--animate project--empty shadow">
                  <img
                    src="../assets/img/portfolio-empty.jpg"
                    class="img-responsive"
                  />
                  <img src="../assets/img/projects.svg" class="svg-absolute" />
                </div>
              </div>
              <div class="grid-item project-content">
                <h2 class="project-title">
                  Coming Soon!
                </h2>
                <div class="project-details pin">
                  <p>Currently building something awesome!</p>
                </div>
              </div>
            </div>
            <!--end:  coming soon -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap, Expo, Power2 } from 'gsap/all'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default {
  data() {
    return {}
  },
  mounted() {
    ScrollTrigger.matchMedia({
      // desktop
      '(min-width: 769px)'() {
        const boxes = gsap.utils.toArray('.project--animate')
        boxes.forEach((box) => {
          gsap.to(box, {
            yPercent: -25,
            ease: Power2.inOut,
            scrollTrigger: {
              trigger: box,
              scrub: 1.5,
            },
          })
        })
      },
    })

    ScrollTrigger.matchMedia({
      '(min-width: 769px)'() {
        gsap.utils.toArray('.grid-row').forEach((item) => {
          gsap.fromTo(
            item,
            {
              autoAlpha: 0,
              y: 35,
            },
            {
              scrollTrigger: {
                trigger: item,

                once: true,
              },
              duration: 1,
              autoAlpha: 1,
              y: 0,
              delay: 0.2,
              ease: Power2.easeOut,
            }
          )
        })
      },
    })

    const tl = gsap.timeline({ paused: true })

    tl.fromTo(
      '.underline--title',
      0.8,
      { autoAlpha: 0, width: '0' },
      { autoAlpha: 1, width: '100%', ease: Expo.easeInOut }
    )

    ScrollTrigger.create({
      trigger: '.title--projects',
      start: '-=650',
      animation: tl,
    })
  },
}
</script>

<style lang="scss" scoped>
.projects-wrapper {
  width: 100%;
  max-width: 100%;
  margin: 50px 0 auto;

  @include fluidType(padding-left, 991px, 1200px, 15px, 50px);
  @include fluidType(padding-right, 991px, 1200px, 15px, 50px);

  .title-block {
    margin: 35px 0 200px 0;

    text-align: center;

    @media all and(max-width:768px) {
      margin: 35px 0 125px 0;
    }
    @media all and(max-width:567px) {
      margin: 35px 0 100px 0;
    }
  }
  .title {
    position: relative;

    display: inline-block;

    color: $black;
  }
}

.showcase--grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
}

.grid-row {
  position: relative;

  display: flex;
  flex-direction: row;
  justify-content: space-around;

  width: 100%;
  margin-bottom: 15px;

  @media all and(max-width:768px) {
    flex-direction: column;

    margin-bottom: 125px;
  }
  @media all and(max-width:576px) {
    margin-bottom: 75px;

    &:last-child {
      margin-bottom: 125px;
    }
  }
}

.grid-row--reverse-mobile {
  @media all and(max-width:768px) {
    flex-direction: column-reverse;
  }
}

.grid-item {
  position: relative;

  flex: 1 0 50%;

  max-width: 520px;
  margin-bottom: 150px;
  padding: 20px;

  @media all and(max-width:768px) {
    flex: 1 0 100%;

    width: 100%;
    margin: 20px auto;
    padding: 0;
  }

  .img-decoration--left {
    position: absolute;
    top: -7%;
    left: -20%;

    width: 75%;

    @media all and(max-width:992px) {
      width: 50%;
    }
  }

  .img-decoration--right {
    position: absolute;
    top: -7%;
    right: -20%;

    width: 75%;

    @media all and(max-width:992px) {
      width: 50%;
    }
  }
}

.l-project {
  position: relative;

  display: flex;
  flex-direction: column;

  cursor: pointer;
}

.project-content {
  .project-title {
    position: relative;

    margin-bottom: 20px;

    color: $black;

    @include fluidType(font-size, 567px, 1300px, 35px, 65px);

    &::after {
      position: absolute;
      bottom: 0;
      left: 0;

      width: 60px;
      height: 6px;

      content: '';

      background-color: $red;
    }
  }
  .project-details {
    h3 {
      color: $black;

      font-weight: 100;

      @include fluidType(font-size, 567px, 1300px, 20px, 25px);
    }
    p {
      padding: 0 0 10px 0;

      color: $black;

      @include fluidType(font-size, 567px, 1300px, 15px, 16px);
    }
  }

  .visit-link {
    margin-top: 20px;

    a.btn-primary::before {
      background-color: $white;
    }
  }
}

.project--empty {
  position: relative;

  .svg-absolute {
    position: absolute;
    top: 50%;
    left: 50%;

    width: 75%;

    transform: translate(-50%, -50%);
  }
}

//right
@-webkit-keyframes right {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);

    opacity: 1;
  }

  50% {
    -webkit-transform: translateX(7px);
    transform: translateX(7px);

    opacity: 1;
  }
}

@keyframes right {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);

    opacity: 1;
  }

  50% {
    -webkit-transform: translateX(7px);
    transform: translateX(7px);

    opacity: 1;
  }
}

//gsap testing
.cross-1 {
  position: absolute;
  top: -130px;
  left: 100%;

  width: 180px;
  height: 180px;
}

@media screen and (max-width: 900px) {
  .cross-1 {
    left: 0;
  }
}
</style>

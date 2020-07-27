<template>
  <div class="container--inner">
    <div class="main-card">
      <h1>Coming Soon...</h1>
      <p>Mark Donatelli - Front End Developer</p>
      <div class="links">
        <a href="mailto: markdonatelli3@gmail.com" class="icon-gmail">
          <img src="../assets/img/icon-gmail.png" class="img-responsive" />
        </a>

        <a
          href="https://github.com/MarkDonatelli"
          class="icon-github"
          target="_blank"
        >
          <img src="../assets/img/icon-github.png" class="img-responsive" />
        </a>

        <a
          href="https://www.linkedin.com/in/mark-donatelli-747194133/"
          target="_blank"
          class="icon-linkedin"
        >
          <img src="../assets/img/icon-linkedin.png" class="img-responsive" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Mark Donatelli - Coming Soon',
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Mark Donatelli - Coming Soon',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.container--inner {
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;
}

.main-card {
  position: relative;

  width: 100%;
  max-width: 786px;
  padding: 100px 15px;

  -webkit-transition: all 0.5s ease-out;
  transition: all 0.5s ease-out;
  text-align: center;

  border-radius: 5px;
  background-color: white;
  -webkit-box-shadow: 0 25px 20px -20px rgba(0, 0, 0, 0.3),
    0 0 15px rgba(0, 0, 0, 0.06);
  box-shadow: 0 25px 20px -20px rgba(0, 0, 0, 0.3), 0 0 15px rgba(0, 0, 0, 0.06);

  &::before {
    position: absolute;
    z-index: -1;
    top: -48px;
    left: -48px;

    display: block;

    width: 100%;
    height: 100%;

    content: '';

    border-radius: 5px;
    background: linear-gradient(to bottom right, #43cea2 0%, #185a9d 100%);
  }

  h1 {
    text-transform: uppercase;

    color: $black;

    font-size: clamp(var(--minFontSize), var(--scaler), var(--maxFontSize));
    font-weight: 800;

    --minFontSize: 2rem;
    --maxFontSize: 5rem;
    --scaler: 10vw;
  }

  p {
    letter-spacing: -2px;
    text-transform: uppercase;

    color: $black;

    font-family: $titillium;
    font-size: clamp(var(--minFontSize), var(--scaler), var(--maxFontSize));
    font-weight: 700;

    --minFontSize: 1rem;
    --maxFontSize: 2rem;
    --scaler: 5vw;
  }
}

.links {
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 315px;
  margin: 30px auto 0;
  padding: 0 15px;

  @media only screen and (max-width: 576px) {
    max-width: 215px;
  }

  a {
    // display: flex;
    // align-items: center;
    // justify-content: center;
    // width: 70px;
    // height: 70px;
    cursor: pointer;

    &:hover,
    :active,
    :focus {
      -webkit-animation-name: float, hang-and-float;
      animation-name: float hang-and-float;
      -webkit-animation-duration: 0.3s, 1.5s;
      animation-duration: 0.3s, 1.5s;
      -webkit-animation-timing-function: ease-out, ease-in-out;
      animation-timing-function: ease-out, ease-in-out;
      -webkit-animation-delay: 0s, 0.3s;
      animation-delay: 0s, 0.3s;
      -webkit-animation-iteration-count: 1, infinite;
      animation-iteration-count: 1, infinite;
      -webkit-animation-direction: normal, alternate;
      animation-direction: normal, alternate;

      -webkit-animation-fill-mode: forwards;
      animation-fill-mode: forwards;
    }
  }

  img {
    max-width: 45px;

    @media only screen and (max-width: 576px) {
      max-width: 30px;
    }
  }
}

//keyframes

// hover icon float
@-webkit-keyframes hang-and-float {
  0% {
    -webkit-transform: translateY(-6px);
    transform: translateY(-6px);
  }
  50% {
    -webkit-transform: translateY(-4px);
    transform: translateY(-4px);
  }
  100% {
    -webkit-transform: translateY(-6px);
    transform: translateY(-6px);
  }
}
@keyframes hang-and-float {
  0% {
    -webkit-transform: translateY(-6px);
    transform: translateY(-6px);
  }
  50% {
    -webkit-transform: translateY(-4px);
    transform: translateY(-4px);
  }
  100% {
    -webkit-transform: translateY(-6px);
    transform: translateY(-6px);
  }
}
@-webkit-keyframes float {
  100% {
    -webkit-transform: translateY(-6px);
    transform: translateY(-6px);
  }
}
@keyframes float {
  100% {
    -webkit-transform: translateY(-6px);
    transform: translateY(-6px);
  }
}
</style>

<template>
  <div class="container-full-width container-full-width--coming-soon">
    <ComingSoon />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.container-full-width--coming-soon {
  position: relative;
  z-index: 0;

  overflow: hidden;

  background-color: white;

  &::before {
    position: absolute;
    z-index: -1;
    top: 50%;
    left: 50%;

    width: 120vw;
    height: 100%;

    content: '';
    transform: translate(-50%, -50%) rotate(30deg) skew(30deg);

    background: #f5f5f5;
  }
}
</style>

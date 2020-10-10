<template>
  <footer>
    <div class="row row--footer">
      <div class="footer-content">
        <div class="footer-inner">
          <p>Designed & Built by Mark Donatelli &copy; Copyright 2020</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.footer-content {
  width: 100%;
  padding-left: 0 !important;

  border-top: 2px solid $black;

  @include fluidType(margin-left, 991px, 1200px, 15px, 50px);
  @include fluidType(margin-right, 991px, 1200px, 15px, 50px);
  @include fluidType(padding, 320px, 1200px, 15px, 30px);

  p {
    @include fluidType(font-size, 320px, 1200px, 14px, 16px);
  }
}
</style>

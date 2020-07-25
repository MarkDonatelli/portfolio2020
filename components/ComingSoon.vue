<template>
  <div>
    <h1>Coming Soon...</h1>
    <p>New portfolio launch!</p>
    <p>Mark Donatelli - Front End Developer</p>
    <p>
      Contact -
      <a href="mailto: markdonatelli3@gmail.com">markdonatelli3@gmail.com</a>
      <a
        href="https://www.linkedin.com/in/mark-donatelli-747194133/"
        target="_blank"
      >
        Linkedin
      </a>
    </p>
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
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
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

<style>
div {
  text-align: center;
}
</style>

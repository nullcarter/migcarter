<template>
  <div class="bg-gray-200 font-mono min-h-screen">
    <Nav></Nav>
    <div class="container mx-auto">
      <Content/>
    </div>
    <Footer class="fixed inset-x-0 bottom-0"></Footer>
  </div>
</template>

<script>
import Nav from "../components/Nav.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "PostsLayout",
  components: {
    Nav,
    Footer,
  }
}
</script>

<style lang="stylus" scoped>
@import '../styles/style.styl'

.main {
  height: 100vh;
}

</style>
<template>
  <div class="bg-gray-200 font-mono min-h-screen" v-if="page">
    <Nav></Nav>
      <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 md:mt-20 p-5 bg-gray-300">
        <img :src="page.frontmatter.heroImage" class="rounded-full mx-auto"/>
        <div class="text-left mt-10 px-5">
          <p class="font-mono font-bold text-xl md:text-3xl">Welcome to my space on the internet!</p>
          <Content />
        </div>
      </div>
    <Footer class="fixed inset-x-0 bottom-0"></Footer>
  </div>
</template>

<script>
import Nav from "../components/Nav.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Layout",
  components: {
    Nav,
    Footer,
  },
  data(){
    return {
      page: false,
    }
  },
  mounted(){
    this.page = this.$page;
  }
}
</script>

<style lang="stylus" scoped>
@import '../styles/style.styl'

.grid {
  border: solid;
}
</style>
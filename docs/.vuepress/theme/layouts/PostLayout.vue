<template>
  <div class="bg-gray-200 font-mono min-h-screen">
    <Nav></Nav>
     <div class="container mx-auto" v-if="page">
      <div class="w-full mx-auto relative">
        <div class="md:my-4 px-4 lg:px-0">
          <h2 class="text-4xl font-semibold font-mono leading-tight">
            {{ page.frontmatter.title }}
          </h2>
          <a href="#" class="inline-block bg-white text-sm rounded-full px-3 py-1 font-semibold my-2 mr-2"
          v-for="tag in page.frontmatter.tags"> 
            {{ tag }}       
          </a>
        </div>
        <img :src="page.frontmatter.heroImage" class="object-cover w-full p-5 md:p-0 border-white" style="height: 35vh"/>
      </div>

      <div class="flex flex-col lg:flex-row lg:space-x-12">

        <div class="px-4 lg:px-0 text-lg leading-relaxed w-full lg:w-3/4">
          <Content />
        </div>

        <div class="w-full lg:w-1/4 m-auto mt-12 max-w-screen-sm">
          <div class="p-4 border-t border-b md:border md:rounded">
            <div class="flex py-2">
              <img src="../../public/images/me.png"
                class="h-10 w-10 rounded-full mr-2 object-cover" />
              <div>
                <p class="font-semibold text-gray-700 text-sm"> {{page.frontmatter.author}} </p>
                <p class="font-semibold text-gray-600 text-xs"> {{page.frontmatter.position}} </p>
              </div>
            </div>
            <p class="text-gray-700 py-3">
              I promise this text isn't hard coded. 
            </p>
          </div>
        </div>
        </div>
     </div>
    <Footer class="fixed inset-x-0 bottom-0"></Footer>
  </div>
</template>

<script>
import Nav from "../components/Nav.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "PostLayout",
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
</style>
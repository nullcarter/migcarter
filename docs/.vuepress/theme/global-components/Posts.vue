<template>
  <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 font-mono">
    <router-link v-for="page in pages" :to="page.path" class="mx-auto">
      <div class="shadow-lg bg-white my-4 post">
        <img class="w-full" :src="page.frontmatter.image" />
        <div class="px-6 pt-4">
          <div class="font-bold text-xl mb-2">{{ page.title }}</div>
          <div class="text-gray-700 text-base mb-1">{{ page.frontmatter.description }}</div>
          <div class="font-bold text-sm text-gray-800">Author: {{ page.frontmatter.author }}</div>
        </div>
        <div class="px-6 py-4">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          v-for="tag in page.frontmatter.tags">
            {{ tag }}
          </span>
        </div>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "Posts",
  data() {
    return {
      pages: []
    }
  },
  mounted() {
    this.$site.pages.forEach(page => {
      if (page.frontmatter.type === 'article') {
        this.pages.push(page)
      }
    });
  }
}
</script>

<style lang="stylus" scoped>
@import '../styles/style.styl';

.post {
  max-width: 325px;
}
</style>

<template>
  <header class="mb-1 text-xl">
    <nav class="font-mono py-2 bg-white overflow-hidden">
      <div class="container flex justify-between mx-auto py-2">
        <router-link :to="'/'" class="text-left no-underline text-black">
          {{$site.title}}
        </router-link>
        <ul class="text-grey-dark list-reset flex items-center">
          <li v-for="item in $site.themeConfig.nav">
            <router-link :to="item.link" class="inline-block px-3 text-grey-darkest hover:text-grey-dark no-underline">
              {{item.text}}
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Nav",
  methods: {
  	toggle() {
    	this.open = !this.open
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../styles/style.styl';
</style>
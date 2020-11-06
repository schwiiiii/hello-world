<template>
  <div id="nav">
    <div class="border-r border-l h-full">
      <ul class="p-4 -m-1 text-left">
        <li v-for="nav in navList" :key="nav.name" class="m-1">
          <router-link
            class="block px-4 py-1 bg-white text-black tracking-wide rounded-full uppercase text-xs hover:bg-gray-200 transition duration-150 ease-out"
            exact-active-class="bg-green-500 text-white hover:bg-green-600"
            :to="nav.path"
            ><font-awesome-icon
              :icon="nav.icon"
              class="mr-1"
            ></font-awesome-icon
            >{{ nav.name }}</router-link
          >
        </li>
        <li class="m-1">
          <a
            class="block px-4 py-1 bg-white text-black tracking-wide rounded-full uppercase text-xs hover:bg-gray-200 transition duration-150 ease-out cursor-pointer"
            @click.prevent="switchHeader('HeaderNav')"
            ><font-awesome-icon icon="angle-up" class="mr-1"></font-awesome-icon
            >Header Nav</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["navList"],
  methods: {
    switchHeader(comp) {
      this.$emit("switchHeader", comp);
    }
  }
};
</script>

<style lang="scss" scoped>
#nav {
  grid-area: l;
}
</style>

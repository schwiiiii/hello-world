<template>
  <div id="nav">
    <div class="w-full border-b overflow-hidden">
      <ul class="p-4 -m-1 flex">
        <li v-for="nav in navList" :key="nav.name" class="m-1">
          <router-link
            class="px-4 py-1 bg-white text-black tracking-wide rounded-full uppercase text-xs hover:bg-gray-200 transition duration-150 ease-out"
            exact-active-class="bg-green-500 text-white hover:bg-green-600"
            :to="nav.path"
            ><font-awesome-icon :icon="nav.icon" class="mr-1"></font-awesome-icon
            >{{ nav.name }}</router-link
          >
        </li>
        <li class="m-1">
          <a
            class="px-4 py-1 bg-white text-black tracking-wide rounded-full uppercase text-xs hover:bg-gray-200 transition duration-150 ease-out cursor-pointer"
            @click.prevent="switchHeader('SidebarNav')"
            ><font-awesome-icon icon="angle-left" class="mr-1"></font-awesome-icon>Sidebar
            Nav</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        {
          name: "Home",
          path: "/",
          icon: "home"
        },
        {
          name: "About",
          path: "/about",
          icon: "question"
        }
      ]
    };
  },
  methods: {
    switchHeader(comp) {
      this.$emit("switchHeader", comp);
    }
  }
};
</script>

<style lang="scss" scoped>
#nav {
  grid-area: lt-start / lt-start / rt-end / rt-end;
}
</style>

<template>
  <div id="app" class="h-screen">
    <div id="nav">
      <SidebarNav />
    </div>
    <div id="view">
      <router-view />
    </div>
  </div>
</template>

<script>
import SidebarNav from "@/components/SidebarNav.vue";

export default {
  components: {
    SidebarNav
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: grid;
  grid-template:
    "l m r" 1fr
    / min-content 1fr 0;
}

#view {
  grid-area: m;
}

#nav {
  grid-area: l;
}
</style>

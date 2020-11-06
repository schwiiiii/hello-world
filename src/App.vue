<template>
  <div id="app" class="h-screen">
    <Component :is="nav" @switchHeader="setNav" :nav-list="navList" />
    <div id="view" :class="[nav == 'HeaderNav' ? 'top' : 'left']">
      <transition
        :name="transitionName"
        mode="out-in"
        @beforeLeave="beforeLeave"
        @enter="enter"
        @afterEnter="afterEnter"
      >
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import SidebarNav from "@/components/SidebarNav.vue";
import HeaderNav from "@/components/HeaderNav.vue";

const DEFAULT_TRANSITION = "fade";

export default {
  data() {
    return {
      transitionName: DEFAULT_TRANSITION,
      nav: "HeaderNav",
      navList: [
        {
          name: "Home",
          path: "/",
          icon: "home"
        },
        {
          name: "Marketing Message",
          path: "/marketing-message",
          icon: "images"
        }
      ]
    };
  },
  components: {
    SidebarNav,
    HeaderNav
  },
  created() {
    this.$router.beforeEach((to, from, next) => {
      let transitionName = to.meta.transitionName || from.meta.transitionName;

      if (transitionName === "slide") {
        const toDepth = to.path.split("/").length;
        const fromDepth = from.path.split("/").length;
        transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
      }

      this.transitionName = transitionName || DEFAULT_TRANSITION;

      next();
    });
  },
  methods: {
    setNav(comp) {
      this.nav = comp;
    },
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      const { height } = getComputedStyle(element);

      element.style.height = this.prevHeight;

      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = "auto";
    }
  }
};
</script>

<style lang="scss">
@import "@/scss/functions";

// initial layout
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: grid;
  height: 100vh;
  overflow: hidden;
  max-width: 1040px;
  margin: 0 auto;
  grid-template:
    "lt rt" min-content
    "l r" 1fr
    / 200px 1fr;
}

#view {
  padding: 1rem;
  overflow: auto;
  grid-area: r;

  &.top {
    grid-area: l-start / l-start / r-end / r-end;
  }
}

#nav {
  grid-area: l;
}

// Page animations
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: height, opacity;
  transition-timing-function: ease;
  overflow: hidden;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition-duration: 0.5s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  overflow: hidden;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(2em, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-2em, 0);
}
</style>

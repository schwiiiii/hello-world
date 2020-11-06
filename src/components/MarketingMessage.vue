<template>
  <div class="marketing-message h-64" :style="shellBinder">
      <div v-for="(slide, index) in data.slides" :key="index" v-show="activeSlide == index" class="p-4">
          <p class="text-4xl text-white">{{ slide.title }}</p>
          <div class="text-white my-4" v-html="slide.body"></div>

          <div class="-m-1 flex">
            <div
                v-for="n in slideCount"
                :key="`mmnav${n - 1}`"
                class="m-1 h-4 w-4 bg-white cursor-pointer"
                :class="[n - 1 == activeSlide ? 'opacity-100' : 'opacity-50']"
                @click="setActiveSlide(n - 1)"
            ></div>
          </div>
          
          <div class="-m-1">
            <button class="bg-white text-black py-1 px-3 m-1" @click="prevSlide">Previous</button>
            <button class="bg-white text-black py-1 px-3 m-1" @click="nextSlide">Next</button>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props: ["data"],
    data() {
        return {
            activeSlide: 0,
        }
    },
    computed: {
        slideCount() {
            return this.data.slides.length;
        },
        currentBGSource() {
            return require(`@/assets/marketing-message/${this.data.slides[this.activeSlide].image}`);
        },
        shellBinder() {
            return {
                backgroundImage: `url(${this.currentBGSource})`
            }
        }
    },
    methods:{
        prevSlide() {
            this.activeSlide = this.activeSlide == 0 ? this.slideCount - 1 : this.activeSlide - 1;
        },
        nextSlide() {
            this.activeSlide = this.activeSlide == this.slideCount - 1 ? 0 : this.activeSlide + 1;
        },
        setActiveSlide(index) {
            this.activeSlide = index;
        }
    }
}
</script>

<style lang="scss" scoped>
    .marketing-message {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        min-height: 33vh;
    }
</style>
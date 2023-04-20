<template>
  <div class="p-4 pb-8">
    <section class="container mb-8">
      <h1>Virtual Riso Overprint Chart</h1>
      <div class="w-full flex grid grid-cols-1 gap-1 sm:grid-cols-3 sm:gap-4 py-3 px-[2px]">
        <ColorSelector v-model="color_one" name="Color 1"></ColorSelector>
        <ColorSelector v-model="color_two" name="Color 2"></ColorSelector>
        <ColorSelector v-model="color_three" name="Color 3"></ColorSelector>
      </div>
      <div class="color-box">
        <div class="color color-1">
          <ul class="patches labels">
            <li class="patch" v-for="patch in patches_array" :key="patch" :class="`text-${color_one}`" >
              <div class="block" style="padding-top: 100%;"></div>
              <div class="text">{{ patch }} </div>              
              </li> 
          </ul>
          <ul class="patches" v-for="index in 21" :key="index">
              <li class="patch" v-for="patch in patches_array" :key="patch" :class="`bg-${color_one}/${patch}`">
                <div class="block" style="padding-top: 100%;"></div>
              </li>
          </ul>
        </div>  
        <div class="color color-2">
          <ul class="patches labels">
            <li class="patch" v-for="patch in patches_array" :key="patch" :class="`text-${color_two}`" >
              <div class="block" style="padding-top: 100%;"></div>
              <div class="text">{{ patch }} </div>            
            </li> 
          </ul>
          <ul class="patches" v-for="index in 21" :key="index">
              <li class="patch" v-for="patch in patches_array" :key="patch" :class="`bg-${color_two}/${patch}`">
                <div class="block" style="padding-top: 100%;"></div>
              </li>
          </ul>
        </div>
        <div v-if="color_three != 'Select'" class="color color-3">
          <ul class="patches" v-for="index in 21" :key="index">
              <li class="patch" v-for="patch in patches_array" :key="patch" :class="`bg-${color_three}/${patch}`">
                <div class="block" style="padding-top: 100%;"></div>
              </li>
          </ul>
          <ul class="patches labels">
            <li class="patch" v-for="patch in patches_array" :key="patch" :class="`text-${color_three}`" >
              <div class="block" style="padding-top: 100%;"></div>
              <div class="text">{{ patch }} </div>            
            </li> 
          </ul>
        </div>
      </div>
    </section>

</div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  const color_one = ref('blue');
  const color_two = ref('burgundy');
  const color_three = ref("Select");

  const patches_array = computed(() => {
    const arrayRange = (start:number, stop:number, step:number) =>
      Array.from(
        { length: (stop - start) / step + 1 },
        (value, index) => start + index * step
      );
      return arrayRange(0,100,5);
  })

</script>

<style lang="scss" scoped>
.container {
  @apply mx-auto;
  max-width: 640px;

  h1 {
    @apply pb-0;
  }
}
.color-box {
  @apply relative w-full h-full;

  .color-1 { 
    @apply absolute flex flex-col w-full justify-end ;
    margin-left: calc((100%/22));

    .patches {
      @apply flex flex-row ;
      .patch {
        @apply mix-blend-multiply border-2 border-white ;
        width: calc((100%/22));
      }
    }
  }
  .color-2 {
    @apply  absolute flex flex-row  w-full;
    margin-top: calc((100%/22));
    .patches {
      @apply flex flex-col h-full  ;
      width: calc((100%/22));      
      .patch {
        @apply block mix-blend-multiply border-2 border-white;
      };
    }
  }
  .color-3 { 
    @apply absolute flex flex-col w-full ;
    margin-top: calc((100%/22));

    .patches {
      @apply flex flex-row-reverse ;
      .patch {
        @apply mix-blend-multiply border-2 border-white;
        width: calc((100%/22));      
      }
    }
  }
  .labels {
    .patch {
      @apply relative font-bold h-full text-center overflow-hidden  ;
      font-size: .625rem;
      .text {
        @apply absolute top-0 w-full h-full flex items-center justify-center;
      }
    }
  }
}

</style>

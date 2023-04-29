<template>
  <div class="p-4 pb-8">
    <section class="container mb-8">
      <h1 class="text-xl">Virtual Riso Overprint Chart</h1>
      <div>
        <div class="w-full flex grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-4 py-3 px-[2px]">
          <ColorSelector v-model="color_one" name="Color 1"></ColorSelector>
          <ColorSelector v-model="color_two" name="Color 2"></ColorSelector>
          <ColorSelector v-model="color_three" name="Color 3"></ColorSelector>
        </div>
        <div class="pb-4">
          <h3 class="pb-1">Options</h3>
          <IntervalSelector v-model="interval"></IntervalSelector>
        </div>
      </div>

      <div class="color-box" :class="chart_class">
        <div class="color color-1">
          <ul class="patches labels">
            <li class="patch" v-for="patch in patches_array" :key="patch" :class="`text-${color_one}`" >
              <div class="block" style="padding-top: 100%;"></div>
              <div class="text">{{ patch }} </div>              
              </li> 
          </ul>
          <ul class="patches" v-for="index in interval_count" :key="index">
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
          <ul class="patches" v-for="index in interval_count" :key="index">
              <li class="patch" v-for="patch in patches_array" :key="patch" :class="`bg-${color_two}/${patch}`">
                <div class="block" style="padding-top: 100%;"></div>
              </li>
          </ul>
        </div>
        <div v-if="color_three != 'Select'" class="color color-3">
          <ul class="patches" v-for="index in interval_count" :key="index">
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
  const interval = ref(10);

  const patches_array = computed(() => {
    const arrayRange = (start:number, stop:number, step:number) =>
      Array.from(
        { length: (stop - start) / step + 1 },
        (value, index) => start + index * step
      );
      return arrayRange(0,100,interval.value);
  });

  const interval_count = computed(() => {
    if (interval.value == 25) {
      return 5;
    } else if (interval.value == 5) {
      return 21;
    } else {
      return 11;
    }
  });

  const chart_class = computed(() => {
    if (interval.value == 25) {
      return "twenty-fives";
    } else if (interval.value == 5) {
      return "fives";
    } else {
      return "tens"
    }
  });
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
    @apply absolute flex flex-col w-full justify-end;

    .patches {
      @apply flex flex-row ;
      .patch {
        @apply mix-blend-multiply border-2 border-white;
      }
    }
  }
  .color-2 {
    @apply  absolute flex flex-row  w-full;
    .patches {
      @apply flex flex-col h-full ;
      .patch {
        @apply block mix-blend-multiply border-2 border-white ;
      };
    }
  }
  .color-3 { 
    @apply absolute flex flex-col w-full;

    .patches {
      @apply flex flex-row-reverse ;
      .patch {
        @apply mix-blend-multiply border-2 border-white w-tens;
      }
    }
  }
}
.color-box.fives {
    .color-1 {
      @apply ml-fives;
      .patches {
        .patch {
          @apply w-fives;
        }
      }
    }
    .color-2 {
      @apply mt-fives;
      .patches {
        @apply w-fives;
        .patch {}
      }
    }
    .color-3 {
      @apply mt-fives;
      .patches {
        .patch {
          @apply w-fives;
        }
      }
    }
    .labels {
      .patch {
        .text {
          font-size:.425rem;
        }
      }
    }
  }
  .color-box.tens {
    .color-1 {
      @apply ml-tens;
      .patches {
        .patch {
          @apply w-tens;
        }
      }
    }
    .color-2 {
      @apply mt-tens;
      .patches {
        @apply w-tens;
        .patch {}
      }
    }
    .color-3 {
      @apply mt-tens;
      .patches {
        .patch {
          @apply w-tens;
        }
      }
    }

    .labels {
      .patch {
        .text {
          font-size:1rem;
        }
      }
    }
  }
  .color-box.twenty-fives {
    .color-1 {
      @apply ml-twenty-fives;
      .patches {
        .patch {
          @apply w-twenty-fives;
        }
      }
    }
    .color-2 {
      @apply mt-twenty-fives;
      .patches {
        @apply w-twenty-fives;
        .patch {}
      }
    }
    .color-3 {
      @apply mt-twenty-fives;
      .patches {
        .patch {
          @apply w-twenty-fives;
        }
      }
    }

    .labels {
      .patch {
        .text {
          font-size:1.5rem;
        }
      }
    }
  }
  .labels {
    .patch {
      @apply relative font-bold h-full text-center overflow-hidden  ;
      .text {
        @apply absolute top-0 w-full h-full flex items-center justify-center;
      }
    }
  }

</style>

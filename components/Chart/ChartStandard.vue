<template>
    <div class="chart-standard">
      <div class="color-box h-full" :class="chart_class">
        <div class="color color-1">
          <ul class="patches labels">
            <li class="patch" v-for="patch in patches_array" :key="patch" :class="`text-${color_one}`" >
              <div class="patch-inner"></div>
              <div class="text">{{ patch }} </div>              
              </li> 
          </ul>
          <ul class="patches" v-for="index in interval_count" :key="index">
              <li class="patch" v-for="patch in patches_array" :key="patch">
                <div class="patch-inner" :class="`bg-${color_one}/${patch}`"></div>
              </li>
          </ul>
        </div>  
        <div class="color color-2">
          <ul class="patches labels">
            <li class="patch" v-for="patch in patches_array" :key="patch" :class="`text-${color_two}`" >
              <div class="patch-inner"></div>
              <div class="text">{{ patch }} </div>            
            </li> 
          </ul>
          <ul class="patches" v-for="index in interval_count" :key="index">
              <li class="patch" v-for="patch in patches_array" :key="patch" >
                <div class="patch-inner" :class="`bg-${color_two}/${patch}`"></div>
              </li>
          </ul>
        </div>
        <div v-if="color_three != 'Select'" class="color color-3">
          <ul class="patches" v-for="index in interval_count" :key="index">
              <li class="patch" v-for="patch in patches_array" :key="patch" >
                <div class="patch-inner" :class="`bg-${color_three}/${patch}`"></div>
              </li>
          </ul>
          <ul class="patches labels">
            <li class="patch" v-for="patch in patches_array" :key="patch" :class="`text-${color_three}`" >
              <div class="patch-inner"></div>
              <div class="text">{{ patch }} </div>            
            </li> 
          </ul>
        </div>
      </div>
    </div>

</template>
<script setup lang="ts">
    import { toRefs } from 'vue';
    const props = defineProps<{
        color_one: string;
        color_two: string;
        color_three: string;
        interval: number;
    }>();
    
    const { color_one, color_two, color_three, interval} = toRefs(props);

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
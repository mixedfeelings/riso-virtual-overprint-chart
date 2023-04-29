<template>
  <div class="p-4 pb-8">
    <section class="container mb-8">
      <h1>Virtual Riso Overprint Chart</h1>
      <div class="py-2 flex gap-4">
        <ChartSelector v-model="chart_type" />
        <IntervalSelector v-if="chart_type == 'standard'" v-model="interval"></IntervalSelector>
      </div>
      <div class="w-full flex gap-2 py-2 px-[2px] grid grid-cols-2 sm:grid-cols-3">
        <ColorSelector v-model="color_one" name="Color 1"></ColorSelector>
        <ColorSelector v-model="color_two" name="Color 2"></ColorSelector>
        <ColorSelector v-model="color_three" name="Color 3"></ColorSelector>
      </div>

      <ChartStandard v-if="chart_type == 'standard'" :color_one="color_one" :color_two="color_two" :color_three="color_three" :interval="interval" />

    </section>
</div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  
  const color_one = ref('blue');
  const color_two = ref('red');
  const color_three = computed(() => {
    if (chart_type.value != "standard") {
      return "yellow";
    } else {
      return "Select";
    }
  });
  const chart_type = ref("standard");
  const interval = ref(10);
</script>


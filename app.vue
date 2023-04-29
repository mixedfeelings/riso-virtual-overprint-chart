<template>
  <div class="flex flex-col px-4">
    <section class="options container py-4">
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
    </section>
    <section class="chart container py-4">
      <ChartStandard v-if="chart_type == 'standard'" :color_one="color_one" :color_two="color_two" :color_three="color_three" :interval="interval" />
      <ChartChemical v-if="chart_type == 'chemical'" :color_one="color_one" :color_two="color_two" :color_three="color_three" />
    </section>
    <section class="footer container py-4">
    </section>
</div>
</template>

<script setup lang="ts">
  import { ref,reactive } from 'vue';
  
  const chart_type = ref("chemical");
  const interval = ref(10);

  const color_one = ref('blue');
  const color_two = ref('red');
  const color_three = ref('Select');


</script>


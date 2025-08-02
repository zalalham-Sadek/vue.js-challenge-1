<!-- src/components/StatsCounter.vue -->
<template>
  <section class="relative text-white text-center py-32 px-5 bg-fixed bg-center bg-cover bg-no-repeat" style="background-image: url('../images/MK10.webp');">
    <div class="absolute inset-0 bg-black opacity-60 z-0"></div>
    <div class="relative z-10 flex flex-wrap justify-center gap-14 max-w-6xl mx-auto">
      <CounterItem v-for="(item, index) in counters" :key="index" :icon="item.icon" :target="item.target" :label="item.label" />
    </div>
  </section>
</template>
<script setup>
import CounterItem from './CounterItem.vue';
const counters = [
  { icon: 'fas fa-check-circle', target: 100, label: 'مشروع ناجح' },
  { icon: 'fas fa-users', target: 5000, label: 'مستفيد من برامجنا' },
  { icon: 'fas fa-users', target: 5000, label: 'مستفيد من برامجنا' },
  { icon: 'fas fa-check-circle', target: 100, label: 'مشروع ناجح' },
];
</script>

<!-- src/components/partials/CounterItem.vue -->
<template>
  <div ref="counterRef" class="flex-1 min-w-[200px] bg-white/10 p-6 rounded-xl shadow-md hover:-translate-y-2 hover:shadow-xl transition-all group">
    <i :class="[icon, 'fa-3x text-secondary mb-5 group-hover:text-primary']"></i>
    <h2 class="text-4xl font-bold">{{ current }}</h2>
    <p class="text-gray-200 mt-2">{{ label }}</p>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
const props = defineProps(['icon', 'target', 'label']);
const current = ref(0);
const counterRef = ref(null);

onMounted(() => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter();
        observer.disconnect();
      }
    });
  }, { threshold: 0.3 });
  observer.observe(counterRef.value);
});

function animateCounter() {
  const speed = props.target / 100;
  const update = () => {
    if (current.value < props.target) {
      current.value += speed;
      requestAnimationFrame(update);
    } else {
      current.value = props.target;
    }
  };
  update();
}
</script>
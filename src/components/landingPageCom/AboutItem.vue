<!-- src/components/partials/AboutItem.vue -->
<template>
  <div :class="['about-item flex flex-col-reverse md:flex-row items-center gap-3 py-8', reverse ? 'md:flex-row-reverse' : '']">
    <div class="img-about w-full md:w-[45%]">
      <img :src="image" :alt="title" class="rounded-lg w-full h-auto" />
    </div>
    <div class="about-text w-full md:w-[45%] text-right pr-5">
      <h3 class="text-[2.3rem] text-secondary relative after:absolute after:top-0 after:-right-4 after:w-[60px] after:h-[60px] after:bg-white-secondary after:opacity-30 after:rounded-full after:-z-10">
        {{ title }}
      </h3>
      <p class="text-[1.1rem] text-primary-text leading-7 mt-4">{{ text }}</p>
    </div>
  </div>
</template>
<script setup>
defineProps(['image', 'title', 'text', 'reverse']);
</script>
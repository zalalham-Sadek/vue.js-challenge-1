
<!-- src/components/HeroSlider.vue -->
<template>
  <section class="hero w-screen overflow-hidden" dir="ltr">
    <div class="slider relative w-full overflow-hidden" @mouseenter="pauseAutoSlide" @mouseleave="resumeAutoSlide">
      <div ref="slidesContainer" class="slides flex transition-transform duration-500 ease-in-out">
        <div v-for="(slide, index) in slides" :key="index" class="slide min-w-full text-center relative">
          <div class="absolute inset-0 bg-black/50 z-10"></div>
          <img :src="slide.image" :alt="slide.alt" class="w-full h-[500px] object-cover relative z-0" />
        </div>
      </div>
      <div class="absolute bottom-4 w-full text-center z-20 dots" role="tablist">
        <button v-for="(slide, index) in slides" :key="index"
                :class="['w-[14px] h-[14px] mx-[6px] rounded-full transition-colors bg-white/60 hover:bg-white', index === currentIndex ? 'bg-primary' : '']"
                role="tab" @click="goToSlide(index)" :aria-label="`انتقال إلى الشريحة ${index + 1}`">
        </button>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const slides = [
  { image: './images/aym_qdr5.webp', alt: 'Slide 1' },
  { image: './images/MK10.webp', alt: 'Slide 2' },
  { image: './images/ML3.webp', alt: 'Slide 3' },
  { image: './images/aym_qdr5.webp', alt: 'Slide 4' },
];
const currentIndex = ref(0);
let interval;
const slidesContainer = ref(null);

const goToSlide = (index) => {
  currentIndex.value = index;
  updateSlider();
};

const updateSlider = () => {
  if (slidesContainer.value) {
    slidesContainer.value.style.transform = `translateX(-${currentIndex.value * 100}vw)`;
  }
};

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.length;
  updateSlider();
};

const startAutoSlide = () => interval = setInterval(nextSlide, 5000);
const pauseAutoSlide = () => clearInterval(interval);
const resumeAutoSlide = () => startAutoSlide();

onMounted(() => {
  updateSlider();
  startAutoSlide();
});
onUnmounted(() => clearInterval(interval));
</script>
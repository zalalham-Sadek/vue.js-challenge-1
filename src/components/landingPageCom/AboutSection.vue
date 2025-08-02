<!-- src/components/AboutSection.vue -->
<template>
  <section class="about py-16" dir="rtl">
    <div class="container mx-auto px-4">
      <div class="section-header text-center mb-12">
        <h3 class="text-[3.3rem] text-primary mb-4">مؤسســـة قدرات</h3>
        <p class="text-[1.8rem] text-primary-text leading-relaxed">نحن نعمل في العديد من المجالات</p>
      </div>
      <div class="section-body flex flex-col gap-2">
        <AboutItem
          v-for="(item, index) in aboutItems"
          :key="index"
          :image="item.image"
          :title="item.title"
          :text="item.text"
          :reverse="index % 2 !== 0"
        />
      </div>
    </div>
  </section>
</template>
<script setup>
import AboutItem from './AboutItem.vue';
const aboutItems = [
  {
    title: 'التعليم',
    text: 'تلتزم المؤسسة بتعزيز فرص التعليم للجميع ...',
    image: './images/education.jpg',
  },
  {
    title: 'تمكين الشباب والنساء',
    text: 'تركز المؤسسة على تمكين الشباب والنساء ...',
    image: './images/people.png',
  },
  {
    title: 'البيئة والمناخ',
    text: 'نلتزم بحماية البيئة ومكافحة التغير المناخي ...',
    image: './images/climate.jpg',
  },
];
</script>

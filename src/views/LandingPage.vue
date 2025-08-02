<template>
    <div  class="overflow-x-hidden bg-background-white">
  <TopBar />
  <Navbar />
  <HeroSlider />
  <AboutSection />
  <StatsCounter />
  <Footer />
  </div>
</template>
<script setup>
import TopBar from '@/components/landingPageCom/TopBar.vue';
import Navbar from '@/components/landingPageCom/NavBar.vue';
import HeroSlider from '@/components/landingPageCom/HeroSlider.vue';
import AboutSection from '@/components/landingPageCom/AboutSection.vue';
import StatsCounter from '@/components/landingPageCom/StatsCounter.vue';
import Footer from '@/components/landingPageCom/Footer.vue';
</script>
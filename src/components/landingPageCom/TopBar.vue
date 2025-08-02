<template>
  <div class="top-bar bg-primary text-white-primary text-sm hidden md:flex md:justify-center md:items-center">
    <div class="container flex justify-between items-center py-1 px-4 md:px-8">
      <div class="contact-info center gap-5">
        <span>
          737354001
          <i class="fa-solid fa-phone text-white-secondary p-2 text-lg"></i>
        </span>
        <span>
          info@qdurat.org
          <i class="fa-solid fa-envelope text-white-secondary p-2 text-lg"></i>
        </span>
      </div>
      <div class="social flex gap-2">
        <a v-for="(link, index) in socialLinks" :key="index" :href="link.href" target="_blank">
          <i :class="link.icon" class="text-white-secondary hover:text-white-primary hover:bg-secondary center size-9 rounded-4xl text-lg"></i>
        </a>
      </div>
    </div>
  </div>
</template>
<script setup>
const socialLinks = [
  { href: 'https://facebook.com', icon: 'fa-brands fa-square-facebook' },
  { href: 'https://twitter.com', icon: 'fa-brands fa-square-x-twitter' },
  { href: 'https://instagram.com', icon: 'fa-brands fa-square-instagram' },
  { href: 'https://youtube.com', icon: 'fa-brands fa-linkedin' },
];
</script>
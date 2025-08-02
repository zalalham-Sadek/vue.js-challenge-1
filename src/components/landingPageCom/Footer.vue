<!-- src/components/Footer.vue -->
<template>
  <footer dir="rtl" class="bg-background-white text-primary-text font-sans border-t border-gray-200 pt-10 pb-6">
    <div class="container mx-auto px-4 sm:px-6 lg:px-11">
      <div class="flex flex-col md:flex-row md:flex-wrap justify-between gap-10">
        <div class="flex flex-col sm:flex-row items-start gap-4 min-w-[250px] flex-1">
          <img src="../../assets/logo.png" alt="Logo" class="w-14 h-auto rounded-md" />
          <div class="space-y-3 mt-2 sm:mt-0">
            <h2 class="text-xl font-bold">مؤسسة قدرات</h2>
            <p class="text-sm"><i class="fa-solid fa-location-dot text-secondary ml-2"></i> اليمن - تعز - جولة وادي القاضي</p>
            <p class="text-sm"><i class="fa-solid fa-phone text-secondary ml-2"></i> 737354001</p>
            <p class="text-sm"><i class="fa-solid fa-envelope text-secondary ml-2"></i> info@qdurat.org</p>
          </div>
        </div>
        <div class="flex-1 min-w-[200px] rtl:text-right mt-6 md:mt-0">
          <ul class="space-y-2">
            <li v-for="link in links" :key="link.text">
              <a :href="link.href" class="text-sm hover:text-yellow-600 transition">{{ link.text }}</a>
            </li>
          </ul>
        </div>
        <div class="flex-1 min-w-[200px] space-y-2 rtl:text-right mt-6 md:mt-0">
          <p class="text-sm">للتواصل: 737354001</p>
          <p class="text-sm">البريد الإلكتروني: info@qdurat.org</p>
        </div>
        <div class="flex justify-start md:justify-center gap-4 text-xl text-gray-600 mt-6 md:mt-0">
          <a v-for="link in social" :key="link.icon" :href="link.href" target="_blank" class="hover:text-secondary">
            <i :class="link.icon" class="text-primary-text"></i>
          </a>
        </div>
      </div>
      <div class="text-center text-sm text-gray-500 border-t border-gray-500 mt-10 pt-4">
        &copy; 2025 مؤسسة قدرات. جميع الحقوق محفوظة.
      </div>
    </div>
  </footer>
</template>
<script setup>
const links = [
  { text: 'الرئيسية', href: 'index.html' },
  { text: 'من نحن', href: 'about.html' },
  { text: 'المشاريع', href: 'projects.html' },
  { text: 'الاخبار', href: '#' },
  { text: 'تواصل معنا', href: 'contact-us.html' },
];
const social = [
  { icon: 'fa-brands fa-square-facebook', href: 'https://facebook.com' },
  { icon: 'fa-brands fa-square-x-twitter', href: 'https://twitter.com' },
  { icon: 'fa-brands fa-square-instagram', href: 'https://instagram.com' },
  { icon: 'fa-brands fa-linkedin', href: 'https://youtube.com' },
];
</script>
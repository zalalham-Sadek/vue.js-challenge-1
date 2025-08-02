<template>
  <div  class="navbar py-1.5 sticky top-0 z-[999] bg-background-white w-full border-b border-gray-200 shadow-sm">
    <div class="relative flex items-center justify-between py-1 px-4 md:px-8">
      <div class="logo px-8">
        <img src="../../assets/logo.png" width="50" alt="Logo" />
      </div>
      <nav
        :class="[
          'nav-links absolute md:relative top-full md:top-0 right-0 md:right-auto w-full md:w-auto bg-background-white md:bg-transparent flex-col md:flex-row items-start md:items-center gap-4 md:gap-5 px-4 md:px-0 py-4 md:py-0 shadow-md md:shadow-none transition-all duration-300',
          menuOpen ? 'flex' : 'hidden',
          'md:flex'
        ]"
        id="navLinks"
      >
        <ul  dir="rtl" class="w-full md:w-auto list-none flex flex-col md:flex-row gap-4 md:gap-5 text-accent items-start md:items-center md:px-8">
          <li>
            <button @click="toggleTheme" id="theme-toggle" aria-label="Toggle theme">
              <i :class="isDark ? 'fa-sun' : 'fa-moon'" class="fa-regular text-primary-text text-xl"></i>
            </button>
          </li>
          <li v-for="link in links" :key="link.href">
            <router-link :to="link.href" class="font-bold px-2.5 py-1.5 text-primary-text hover:text-primary hover:border-b-2 hover:border-secondary" :class="link.active ? 'text-primary border-b-2 border-secondary' : ''">
              {{ link.text }}
            </router-link>
          </li>
        </ul>
      </nav>
      <button @click="toggleMenu" class="md:hidden text-[1.5em] cursor-pointer bg-none border-none text-secondary">
        <i class="fa-solid fa-bars text-primary-text"></i>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const menuOpen = ref(false);
const isDark = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const toggleTheme = () => {
  isDark.value = !isDark.value;
  document.body.classList.toggle('dark', isDark.value);
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light');
};

onMounted(() => {
  isDark.value = localStorage.getItem('theme') === 'dark';
  if (isDark.value) document.body.classList.add('dark');
});

const links = [
  { href: '/', text: 'الرئيسية', active: true },
  { href: '/', text: 'من نحن' },
  { href: '/', text: 'المشاريع' },
  { href: '#', text: 'الاخبار' },
  { href: '/', text: 'تواصل معنا' },
  { href: '/dashboard', text: 'لوحة التحكم' },
];
</script>

<style scoped>
.nav-links {
  flex-direction: column;
  background-color: var(--color-background-white);
}
@media (min-width: 768px) {
  .nav-links {
    flex-direction: row;
    background-color: transparent;
  }
}
</style>

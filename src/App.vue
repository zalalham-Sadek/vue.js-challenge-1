<template>
  <div>


      <router-view />
 
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'

const sidebarOpen = ref(false)
const sidebarCollapsed = ref(false)



// ✅ Computed to check login state
</script>

<style scoped>
.size-10 {
  width: 40px;
  height: 40px;
}
</style>

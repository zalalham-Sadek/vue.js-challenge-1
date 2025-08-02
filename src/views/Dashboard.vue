<template>
  <!-- 🎉 Toast after login -->
  
      <Topbar
      :sidebarOpen="sidebarOpen"
      @update:sidebarOpen="sidebarOpen = $event"
      :sidebarCollapsed="sidebarCollapsed"
    />
    
    <Sidebar
      v-model:sidebarOpen="sidebarOpen"
      v-model:sidebarCollapsed="sidebarCollapsed"
    />
  <main dir="rtl"
      class=" transition-all duration-300 overflow-y-auto bg-gray-50"
      :class="sidebarCollapsed ? 'md:pr-20 pt-16' : 'md:pr-64 pt-16'"
    >
        <div class="p-6">
          <h1 class="text-2xl font-bold mb-6 text-gray-800">لوحة التحكم</h1>

          <!-- قسم البطاقات -->
          <div
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <!-- عدد الفعاليات -->
            <div class="bg-white p-5 rounded-xl shadow border border-gray-100">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-gray-500">الفعاليات</p>
                  <h2 class="text-xl font-bold text-gray-800">32</h2>
                </div>
                <div class="text-blue-500 bg-blue-100 p-2 rounded-full">
                  <i class="fa-solid fa-calendar-days"></i>
                </div>
              </div>
            </div>

            <!-- عدد المتحدثين -->
            <div class="bg-white p-5 rounded-xl shadow border border-gray-100">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-gray-500">المتحدثين</p>
                  <h2 class="text-xl font-bold text-gray-800">18</h2>
                </div>
                <div class="text-purple-500 bg-purple-100 p-2 rounded-full">
                  <i class="fa-solid fa-microphone"></i>
                </div>
              </div>
            </div>

            <!-- عدد المتطوعين -->
            <div class="bg-white p-5 rounded-xl shadow border border-gray-100">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-gray-500">المتطوعين</p>
                  <h2 class="text-xl font-bold text-gray-800">104</h2>
                </div>
                <div class="text-green-500 bg-green-100 p-2 rounded-full">
                  <i class="fa-solid fa-hands-helping"></i>
                </div>
              </div>
            </div>

            <!-- التبرعات الشهرية -->
            <div class="bg-white p-5 rounded-xl shadow border border-gray-100">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-gray-500">تبرعات هذا الشهر</p>
                  <h2 class="text-xl font-bold text-gray-800">8,450 ﷼</h2>
                </div>
                <div class="text-yellow-500 bg-yellow-100 p-2 rounded-full">
                  <i class="fa-solid fa-coins"></i>
                </div>
              </div>
            </div>

            <!-- نسبة الإنجاز -->
            <div class="bg-white p-5 rounded-xl shadow border border-gray-100">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-gray-500">نسبة الإنجاز</p>
                  <h2 class="text-xl font-bold text-gray-800">76%</h2>
                </div>
                <div class="text-pink-500 bg-pink-100 p-2 rounded-full">
                  <i class="fa-solid fa-chart-line"></i>
                </div>
              </div>
            </div>

            <!-- الزوار هذا الشهر -->
            <div class="bg-white p-5 rounded-xl shadow border border-gray-100">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-gray-500">زوار هذا الشهر</p>
                  <h2 class="text-xl font-bold text-gray-800">12,390</h2>
                </div>
                <div class="text-red-500 bg-red-100 p-2 rounded-full">
                  <i class="fa-solid fa-users"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="mt-10 bg-white rounded-xl shadow p-6 border border-gray-100"
        >
          <h2 class="text-lg font-bold text-gray-800 mb-4">
            إحصائيات التبرعات
          </h2>
          <canvas id="donationChart" height="150"></canvas>
        </div>
  </main>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import Topbar from '@/components/Topbar.vue'
import Sidebar from '@/components/Sidebar.vue'


</script>

<style scoped>
/* Force height on canvas */
div :deep(canvas) {
  height: 300px !important;
}
</style>

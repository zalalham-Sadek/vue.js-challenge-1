<template>
          <div v-if="!sidebarCollapsed" class="flex items-center justify-between gap-2">
        <span class="font-bold text-lg text-white">zalalham</span>
      </div>
</template>

<script>
export default{
props :{
    sidebarCollapsed:Boolean
}
}
</script>
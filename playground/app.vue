<template>
  <div style="display: grid; height: 100vh; width: 100vw; place-items: center;">
    <ClientOnly>
      {{ newDate }}
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
const now = new Date()

const newDate = format(now, 'full')
</script>

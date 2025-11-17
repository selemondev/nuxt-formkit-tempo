<template>
  <div style="display: grid; height: 100vh; width: 100vw; place-items: center">
    {{ formattedDate }}
  </div>
</template>

<script setup lang="ts">
const { data: formattedDate } = await useFetch<Date>('/api/date')
</script>

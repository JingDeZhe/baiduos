<script setup>
const props = defineProps({
  name: { type: String, required: true },
})
</script>

<template>
  <svg aria-hidden="true" class="v-icon">
    <use :href="name" />
  </svg>
</template>

<style lang="scss"></style>

<script setup>
import { ref } from 'vue'
import { animate, cubicBezier } from 'popmotion'

const percentage = ref(0)

animate({
  from: 0,
  to: 100,
  duration: 12000,
  ease: cubicBezier(0.02, 0.68, 0.18, 1.01),
  onUpdate: (v) => {
    percentage.value = v
  },
})
</script>

<template>
  <div class="boot-screen full-ctn all-center">
    <div class="v-center gap-1 font-bold">
      <span class="text-3xl p-3 rounded bg-[#2F76D2] text-white font-serif">百度</span>
      <span class="text-5xl p-3 rounded font-serif text-[#2F76D2]">OS</span>
    </div>
    <div class="w-[20rem] mt-6">
      <n-progress type="line" :percentage="percentage" :show-indicator="false" processing />
    </div>
  </div>
</template>

<style lang="scss"></style>

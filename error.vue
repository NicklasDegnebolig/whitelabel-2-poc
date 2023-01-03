<template>
  <div
    class="mt-7 max-w-sm mx-auto text-center p-3 rounded-md bg-white shadow-md h-full"
  >
    <p class="mt-7 text-7xl font-bold">{{ error.statusCode }}</p>
    <p class="mt-7 text-6xl">Ooops.</p>
    <p class="mt-7">{{ error.message }}</p>
    <button
      class="bg-[#12b488] text-white px-3 py-2 rounded-md text-sm text-white inline-block my-7"
      @click="handleError"
    >
      Go Home...
    </button>
  </div>
</template>

<script setup>
defineProps({
  error: Object,
})
const handleError = () => clearError({ redirect: '/' })
</script>

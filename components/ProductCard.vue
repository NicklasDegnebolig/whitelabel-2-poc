<template>
  <div class="p-3 rounded-md bg-white shadow-md h-full text-center">
    <img :src="`${product.image}`" class="thumb" />
    <p class="font-bold text-gray-500 m-4 truncate">{{ product.title }}</p>
    <NuxtLink :to="`/products/${product.id}`">
      <p
        class="bg-[#12b488] text-white px-3 py-2 rounded-md text-sm text-white inline-block my-4"
      >
        View Details
      </p>
    </NuxtLink>
  </div>
</template>

<script setup>
const { product } = defineProps(['product'])
</script>

<style scoped>
.thumb {
  max-height: 120px;
  max-width: 70%;
  margin: 0 auto;
}
</style>

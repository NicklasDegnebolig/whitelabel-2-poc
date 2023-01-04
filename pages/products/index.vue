<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="product in products">
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup>
const products = await useProducts().getAllProducts()
const config = useAppConfig()

definePageMeta({
  layout: 'products',
})
useHead({
  title: `${config.logo} | Merch`,
  meta: [{ name: 'description', content: 'Nuxt 3 Merch' }],
})
</script>

<template>
  <div>
    <Head>
      <Title>Dwarf Whitelabel | {{ product.title }}</Title>
      <Meta name="description" :content="product.description" />
    </Head>

    <ProductDetails :product="product" />
  </div>
</template>

<script setup>
const { id } = useRoute().params
const product = await useProducts().getSingleProduct(id)

definePageMeta({
  layout: 'products',
})
</script>

<template>
  <div>
    <Head>
      <Title>{{ config.logo }} | {{ product.title }}</Title>
      <Meta name="description" :content="product.description" />
    </Head>

    <ProductDetails :product="product" />
  </div>
</template>

<script setup>
const { id } = useRoute().params
const product = await useBazo().products.getSingleProduct(id)

const config = useAppConfig()
definePageMeta({
  layout: 'products',
})
</script>

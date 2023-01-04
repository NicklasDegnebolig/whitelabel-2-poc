type  products = {
    title: string,
    description: string,
    price: number,
    image: string,
  }

export const useProducts = ()  => {
  const baseUrl = 'https://fakestoreapi.com/products'

  const getAllProducts  =  async  ()  => {
    const products = await useFetch<products>(baseUrl)
    return products.data 
  }

  const getSingleProduct = async (routeId: any) => {
 
    const product = await useFetch<products>(`${baseUrl}/${routeId}`)
    

    if (!product.data.value) {
      throw createError({ statusCode: 404, statusMessage: 'Product not found' })
    }
    return product.data
  }

  return {
    getAllProducts,
    getSingleProduct
  }
}

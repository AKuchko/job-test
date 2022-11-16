import client from '../http/client'

class ProductService {
    async getAllProducts() {
        const res = await client.get('/products')
        return res.data
    }

    async getProductById(id) {
        const res = await client.get(`/products/${id}`)
        return res.data
    }
}

export default new ProductService()
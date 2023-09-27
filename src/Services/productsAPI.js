import axios from 'axios'

const productsAPI = axios.create({
    baseURL: 'http://localhost:3050/products'
})

export default productsAPI
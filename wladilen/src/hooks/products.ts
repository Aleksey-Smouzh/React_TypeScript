import { useEffect, useState } from 'react'
import { IProduct } from '../models'
import axios, { AxiosError } from 'axios'

export function useProducts() {
    const [products, setProducts] = useState<IProduct[]>([])

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')


    //  для того что бы делать запросы мы создаем отдельную функцию 
    async function fetchProducts() {

        try {
            setError('')
            setLoading(true)
            const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5')
            setProducts(response.data)
            setLoading(false)


        } catch (e: unknown) {
            const error = e as AxiosError
            setLoading(false)
            setError(error.message)

        }

    }

    // тут мы используем способ загрузки данных с сервера
    useEffect(() => { fetchProducts() }, [])


    return { products, error, loading }
}
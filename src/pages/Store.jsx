import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export const Store = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const url = 'https://api.mercadolibre.com/sites/MLB/search?q=celular';
            const response = await fetch(url);
            const objJson = await response.json()
            setData(objJson.results)
        }
        fetchApi();
    },[])

  return (
    <div>Store</div>
  )
}

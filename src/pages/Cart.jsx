import React from 'react'
import { getItem } from '../services/LocalStorageFuncs';

export const Cart = () => {
    const [data, setData] = useState( getItem('carrinhoLoja') || [] )
  return (
    <div>Cart</div>
  )
}

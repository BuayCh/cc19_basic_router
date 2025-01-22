import React from 'react'
import useProductStore from '../store/product-store'
import ProductCard from '../components/ProductCard'

function MyCart() {
    const cart = useProductStore((state)=> state.cart)
  return <>
  { cart.map((product)=>{
        return <ProductCard 
        key={product.id}
        product={product} />
        
    })
  }
  
  
  </>
 
  
}

export default MyCart
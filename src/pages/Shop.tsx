import React from 'react'
import ShopText from '../components/UI/shop/ShopText'
import ShopStore from '../components/UI/shop/ShopStore'
import ShopSwipper from '../components/UI/shop/ShopSwipper'


const Shop: React.FC = () => {
  return (
    <div className=' mt-[50px]  px-4' >
        <ShopText/>
        <ShopSwipper/>
        <ShopStore/>
    </div>
  )
}

export default Shop
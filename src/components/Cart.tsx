import React, { useEffect } from 'react'
import {AiOutlineClose}from 'react-icons/ai'
import { StyledCart } from 'theme'
import { OrderCard } from './OrderCard'
import { TextCom } from './TextCom'
import { useCart } from 'hook'
const orderCartMap =[
    {
        id: 1,
        desc: 'Hello Testing',
        amount:1000,
        quantity: 1
    },
    {
        id: 2,
        desc: 'Hello Testing',
        amount:1000,
        quantity: 1
    },
    {
        id:3,
        desc: 'Hello Testing',
        amount:1000,
        quantity: 1
    },
    {
        id:4,
        desc: 'Hello Testing',
        amount:1000,
        quantity: 1
    }
]
type OrderCartItem={
    id?:number
    image?:string,
    desc?:string,
    amount?:number
}
export const Cart = () => {
    const {orderDetailVisibile_data} = useCart()
    const {CartAction,dispatch} = useCart()

useEffect(() => {
  dispatch(CartAction.OrderDetail(orderCartMap))
}, [])

    const OrderDetailClose =async ()=>{
      await dispatch(CartAction.setOrderDetailVisibile())
    }
    const Paynow =() => {
        dispatch(CartAction.payNow())
      }
  return (
    <StyledCart className={`${orderDetailVisibile_data === true ? 'active' : null}`}>
        <div className="info">
            <div className='d-flex align-items-center justify-content-between mb-4'>
        <TextCom size='lg' weight='700'>Order details</TextCom>
        <div onClick={()=>OrderDetailClose()} className='cursor-pointer'>
        <AiOutlineClose size={30}/>
        </div>
        </div>
        <OrderCard/>
        </div>
        <div className="total">
            <div className='d-flex justify-content-between py-3  align-items-center'>
                <TextCom>Subtotal</TextCom>
                <TextCom color='blue'>Ks 9000</TextCom>
            </div>
            <div className='d-flex justify-content-between py-3  align-items-center'>
                <TextCom>Tax(5%)</TextCom>
                <TextCom color='blue'>Ks 450</TextCom>
            </div>
            <div className='d-flex justify-content-between align-items-center py-3 finalAmount'>
                <TextCom>Total</TextCom>
                <TextCom color='blue'>Ks 9000</TextCom>
            </div>
            <div onClick={()=>Paynow()}>
            <button type="submit">Pay Now</button>
            </div>
        </div>
    </StyledCart>
  )
}

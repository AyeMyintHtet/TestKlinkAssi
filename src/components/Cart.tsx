import React, { useEffect } from 'react'
import {AiOutlineClose}from 'react-icons/ai'
import { StyledCart } from 'theme'
import { OrderCard } from './OrderCard'
import { TextCom } from './TextCom'
import { useCart } from 'hook'
export const Cart = () => {
    const {orderDetailVisibile_data} = useCart()
    const {CheckChanges_data,AddToCart_data,CartAction,dispatch} = useCart()

    const OrderDetailClose =async ()=>{
      await dispatch(CartAction.setOrderDetailVisibile())
    }
    const Paynow =() => {
        dispatch(CartAction.payNow())
      }
  return (
    <StyledCart className={`${orderDetailVisibile_data === true ? 'active' : null}`}>
        {AddToCart_data&&
            AddToCart_data.length > 0 ? 
            <>
        <div className="info flex-column">
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
                <TextCom color='blue'>Ks {CheckChanges_data?.total}</TextCom>
            </div>
            <div className='d-flex justify-content-between py-3  align-items-center'>
                <TextCom>Tax(5%)</TextCom>
                <TextCom color='blue'>Ks {CheckChanges_data?.percent}</TextCom>
            </div>
            <div className='d-flex justify-content-between align-items-center py-3 finalAmount'>
                <TextCom>Total</TextCom>
                <TextCom color='blue'>Ks {CheckChanges_data?.finalTotal}</TextCom>
            </div>
            <div onClick={()=>Paynow()}>
            <button type="submit">Pay Now</button>
            </div>
        </div>
            </>
            :
            <>
            <div onClick={()=>OrderDetailClose()} className='cursor-pointer d-flex justify-content-end'>
                <AiOutlineClose size={30}/>
            </div>
            <TextCom className='d-flex justify-content-center align-items-center w-100' style={{height:'100vh'}}>You didn't add To Cart. Please Choose Some Item.</TextCom>
            </>
        }
    </StyledCart>
  )
}

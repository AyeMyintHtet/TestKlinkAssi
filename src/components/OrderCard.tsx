import React, { useEffect, useState } from 'react'
import {AiOutlineMinus,AiOutlinePlus,AiOutlineClose}from 'react-icons/ai'

import { StyledOrderCard } from 'theme'
import Icon from 'assets'
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
    amount?:number,
    quantity?:number
}

export const OrderCard = () => {
    const {OrderDetail_data,CartAction,dispatch} = useCart()
    useEffect(() => {
        dispatch(CartAction.OrderDetail(orderCartMap))
      }, [])
      const Qtyfunc =async (from:'sub' | 'add',id:number)=>{
        await dispatch(CartAction.setOrderDetailItem({from,id}))
      }
  return (
    <div>
        {
            OrderDetail_data?.data?.map((item:OrderCartItem,key:number)=>{
                return(
                    <StyledOrderCard>
                        <div className='d-flex gap-3'>
                        <div style={{maxWidth:'250px'}}>
                        <img src={item.image || Icon.defaultImg} className='img-fluid' alt="" />
                        </div>
                        <div>
                        <TextCom weight='700'>{item.desc || 'Couple Shoes 2021 New One Man and One Woman Spring Korean'}</TextCom>
                            <div className='d-flex justify-content-center align-items-center gap-1 pt-2'>
                            <div className='qtyDiv'>
                                <div className="minus cursor-pointer" onClick={()=>Qtyfunc('sub',key)}>
                                    <AiOutlineMinus/>
                                </div>
                                <div className="quantity">
                                    <TextCom>{item.quantity || 1}</TextCom>
                                </div>
                                <div className="plus cursor-pointer" onClick={()=>Qtyfunc('add',key)}>
                                    <AiOutlinePlus/>
                                </div>
                            </div>
                            <TextCom color='blue'>{item.amount ? `Ks ${item.amount}`: 'Ks 3000'}</TextCom>
                            </div>
                        </div>
                        </div>
                        <div className='cursor-pointer'>
                            <AiOutlineClose/>
                        </div>
    </StyledOrderCard>
                )
            })
        }
    </div>
  )
}

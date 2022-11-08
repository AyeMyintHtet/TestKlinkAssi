import React from 'react'

import {AiOutlineShoppingCart} from 'react-icons/ai'

import { TextCom } from './TextCom'
import { StyledHeader } from 'theme'
import Icon from 'assets'
import { useCart } from 'hook'
import { useLocation } from 'react-router-dom'

export const HeaderCom = () => {
  const {CartAction,dispatch} = useCart()
  const loc = useLocation()
  console.log('loc', loc)
  const OrderDetail =async ()=>{
    await dispatch(CartAction.setOrderDetailVisibile())
  }
  return (
    <StyledHeader className={`${loc.pathname ==='/login' ? 'd-none' : null}`}>
    <section className="header">
          <div>
            <img className='img-fluid' src={Icon.logo2} alt="" />
          </div>
          <div className='d-flex justify-content-center align-items-center gap-1'>
        <div className='searchCon'>
          <TextCom as='input' placeholder='Search' />
          <div className='search-icon'>
          <img src={Icon.search} alt="" />
          </div>
        </div>
        <div className="addTocart" >
          <AiOutlineShoppingCart size={40} color={'black'} onClick={()=>{OrderDetail()}}/>
        </div>
          </div>
    </section>
    </StyledHeader>
  )
}
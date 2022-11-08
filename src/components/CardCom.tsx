import React from 'react'
import Icon from 'assets'
import { TextCom } from './TextCom'
import { StyledCard } from 'theme'
import {BsPlusLg} from 'react-icons/bs'
type CardComIProps ={
    image?: string
    desc?:string
    amount?:string
}
export const CardCom:React.FC<CardComIProps> = ({image,desc,amount,...props}) => {
  return (
    <StyledCard>
        <div className='hover-eff'>
            <div className="d-flex flex-column w-100 h-100 justify-content-center align-items-center gap-3">
            <BsPlusLg/>
            <TextCom>Click To Add To Card</TextCom>
            </div>
            </div>
        <img src={image || Icon.defaultImg} className='img-fluid w-100' alt="" />
        <TextCom>{desc || 'Couple Shoes 2021 New One Man and One Woman Spring Korean'}</TextCom>
        <TextCom color='blue'>{amount ? `Ks ${amount}` : 'Ks 3000'}</TextCom>
    </StyledCard>
  )
}

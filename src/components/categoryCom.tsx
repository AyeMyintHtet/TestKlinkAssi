import React from 'react'
import { StyledCategory } from 'theme'

type CategoryProps={
children:string
value?:number
}

export const CategoryCom:React.FC<CategoryProps> = ({children,...props}:any) => {
  return (
    <StyledCategory>{children}</StyledCategory>
  )
}

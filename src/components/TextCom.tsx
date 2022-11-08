import React from "react"
import { StyledText } from "theme"
type TextComProps={
    children?:any
    size?:string
    color?:string
    className?:string
    as?:string
    placeholder?:string
    weight?:string
    style?:any
}
export const TextCom:React.FC<TextComProps> =({children,...props}:any)=>{
return(<StyledText {...props}>{children}</StyledText>)}
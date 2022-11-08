
import styled, { createGlobalStyle } from "styled-components";
interface StyledGlobalProps{
    props?:any
}

export const StyledGlobal = createGlobalStyle<StyledGlobalProps>`
     *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
.cursor-pointer{
  cursor: pointer;
}
  h1,h2,h3,h4,h5,h6,p{
    font-family: 'Inter', sans-serif;
    margin: 0;
    padding: 0;

  }
`
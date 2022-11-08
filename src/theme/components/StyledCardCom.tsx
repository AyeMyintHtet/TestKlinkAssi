import styled from "styled-components";

export const StyledCard = styled.div`
margin-bottom: 10px;
cursor: pointer;
position: relative;
    img{
        border-radius: 12px;
    }
    .h-100{
        height: 100%;
    }
    .hover-eff{
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius:5px ;
        top: 0;
        left: 0;
        z-index: 2;
        background: #a5a5a5ab;
        opacity: 0;
        transition: all 0.4s ease;
    }
&:hover{
    .hover-eff{
        opacity: 1;
    }
}
`
import styled from "styled-components";

export const StyledHeader = styled.div`
padding:20px;
position: fixed;
    width: 100%;
    background: white;
    z-index: 99;
    box-shadow: 6px 3px 13px 0px grey;
.addTocart{
    cursor: pointer;
    position: relative;
    .cartTotal{
    display: inline-block;
    position: absolute;
    background: #2c2d87;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    right: -7px;
    top: -8px;
    p{
        color: white;
        text-align: center;
    }
    }
}
.header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    .searchCon{
        position: relative;
        width: 488px;
        @media(max-width:768px){
            width: 300px;
        }
        input{
            border: 1px solid gray;
    border-radius: 8px;
    width: 100%;
    height: 48px;
    padding: 5px 14px;
        }
        .search-icon{
            position: absolute;
    top: 3px;
    right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #2E3EA1;
    padding: 10px 1px 10px 9px;
    border-radius: 2323px;
    flex: none;
    order: 1;
    flex-grow: 0;
    width: 80px;
        }
    }
}
    
`
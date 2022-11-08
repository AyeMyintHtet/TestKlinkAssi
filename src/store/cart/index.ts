import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import serviceController, { routes, routeFilter } from 'controller'
import { isPendingAction, isFulfilledAction, isRejectedAction } from '../typehandle.action'

const initialState: any = {
    isLoading: false,
    orderDetailVisibile_data:false
  }
const AddToCart = createAsyncThunk('cartSlice/AddToCart',async(data:any,thunkAPI:any)=>{
  let specificOrder = thunkAPI.getState()?.cart?.OrderDetail_data?.data
  let AddToCart_data = thunkAPI.getState()?.cart?.AddToCart_data
  console.log('do')
  if(data >=0){
    let order = specificOrder[data]
    let obj :any= []
    if(AddToCart_data !== undefined){
      obj = [...AddToCart_data,order]
    }else{
      obj = [order]
    }
    return obj
  }
})
const CheckChanges = createAsyncThunk('cartSlice/CheckChanges',async(data:any,thunkAPI:any)=>{
  let AddToCart = thunkAPI?.getState()?.cart?.AddToCart_data
  if(AddToCart){
    let totalQty = 0;
    let total =0;
    let percent= 0;
    let finalTotal = 0;
    AddToCart.map((item:any)=>{
      totalQty += item.quantity;
      total += (item.quantity *item.Amount);
    });
    percent = Number(((5/ 100) * total).toFixed(2));
    finalTotal = total + percent;
    let obj ={
      total,
      totalQty,
      percent,
      finalTotal
    }
    return obj
  }
})
const OrderDetail = createAsyncThunk('cartSlice/OrderDetail', async(data:any,thunkAPI)=>{
  return serviceController(`${routes.allCart}`)
    .then((res)=>{
      if(res?.data){
        res?.data.map((item:any)=>{
          item.quantity = 1
        })
        let obj ={
          data:[
            ...res?.data
          ]
        }
        return obj
      }
    })
})

  const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
      setOrderDetailVisibile:(state:any,action:any)=>{
        state.orderDetailVisibile_data = !state.orderDetailVisibile_data
      },
      setQtyChanges:(state:any,action:any)=>{
        let from = action.payload.from
        let id = action.payload.id
        if(from === 'add'){
          state.AddToCart_data[id].quantity = state.AddToCart_data[id].quantity + 1
        }else{
          if(state.AddToCart_data[id].quantity > 1)state.AddToCart_data[id].quantity = state.AddToCart_data[id].quantity - 1
        }
      },
      deleteItem:(state:any,action:any)=>{
        console.log('action', action)
        let obj = []
        for(let i =0; state.AddToCart_data.length >i;i++){
          if(i !== action.payload){
            obj.push(state.AddToCart_data[i])
          }
        }
        state.AddToCart_data = obj
      },
      payNow:(state:any,action:any)=>{
        console.log('first')
        state.OrderDetail_data.data = null
      }
    },
    extraReducers: builder => {
      builder
        .addMatcher(isPendingAction('cartSlice/'), state => ({
          ...state,
          isLoading: true,
          error: null,
        }))
        .addMatcher(isFulfilledAction('cartSlice/'), (state, action) => {
          let tmp = action.type.split('/')
          return {
            ...state,
            [tmp[1] + '_data']: action.payload,
            isLoading: false,
            error: null,
          }
        })
        .addMatcher(isRejectedAction('cartSlice/'), (state, action) => ({
          ...state,
          isLoading: false,
          error: action.payload,
        }))
    },
  })

export default {
    cartSlice:cartSlice.reducer,
    setOrderDetailVisibile:cartSlice.actions.setOrderDetailVisibile,
    setQtyChanges:cartSlice.actions.setQtyChanges,
    deleteItem:cartSlice.actions.deleteItem,
    payNow:cartSlice.actions.payNow,
    OrderDetail,
    CheckChanges,
    AddToCart
}
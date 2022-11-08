import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import serviceController, { routes, routeFilter } from 'controller'
import { isPendingAction, isFulfilledAction, isRejectedAction } from '../typehandle.action'

const initialState: any = {
    isLoading: false,
    orderDetailVisibile_data:false
  }

const OrderDetail = createAsyncThunk('cartSlice/OrderDetail', async(data:any,thunkAPI)=>{
  if(data){
    let total=0;
    let totalQuantity = 0;
    data.map((item:any)=>{
      total += item.quantity * item.amount
      totalQuantity += item.quantity
    })
    let percentage = (total/100) * 5;
    let totalAmount = total + percentage

    let obj = {
      totalQuantity,
      totalAmount,
      total,
      percentage,
      data:[
        ...data
      ]
    }
    return obj
  }
})

  const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
      setOrderDetailVisibile:(state:any,action:any)=>{
        state.orderDetailVisibile_data = !state.orderDetailVisibile_data
      },
      setOrderDetailItem:(state:any,action:any)=>{
        let from = action.payload.from
        let id = action.payload.id
        if(from === 'add'){
          state.OrderDetail_data.data[id].quantity = state.OrderDetail_data.data[id].quantity + 1
        }else{
          if(state.OrderDetail_data.data[id].quantity > 1)state.OrderDetail_data.data[id].quantity = state.OrderDetail_data.data[id].quantity - 1
        }
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
    setOrderDetailItem:cartSlice.actions.setOrderDetailItem,
    payNow:cartSlice.actions.payNow,
    OrderDetail
}
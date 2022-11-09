import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { isPendingAction, isFulfilledAction, isRejectedAction } from '../typehandle.action'

const initialState: any = {
    isLoading: false
  }
const AuthUser = createAsyncThunk('authSlice/AuthUser',async (data:any)=>{
    return await data
})
  const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
      builder
        .addMatcher(isPendingAction('authSlice/'), state => ({
          ...state,
          isLoading: true,
          error: null,
        }))
        .addMatcher(isFulfilledAction('authSlice/'), (state, action) => {
          let tmp = action.type.split('/')
          return {
            ...state,
            [tmp[1] + '_data']: action.payload,
            isLoading: false,
            error: null,
          }
        })
        .addMatcher(isRejectedAction('authSlice/'), (state, action) => ({
          ...state,
          isLoading: false,
          error: action.payload,
        }))
    },
  })

export default {
    authSlice:authSlice.reducer,
    AuthUser
}
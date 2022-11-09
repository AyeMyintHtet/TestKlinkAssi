import { configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import { combineReducers } from 'redux'
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage'

import cart from './cart'
import auth from './auth'

const reducers = combineReducers({
  cart: cart.cartSlice,
  auth:auth.authSlice
})

const persistConfig = {
  key: 'root',
  devTools: process.env.NODE_ENV !== 'production',
  storage: storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

const rootStore = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
})

export const store = rootStore
export const persist = persistStore(rootStore)

export { default as cart } from './cart'
export { default as auth } from './auth'


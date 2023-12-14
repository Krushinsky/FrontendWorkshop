import { configureStore } from '@reduxjs/toolkit'
import items from '../redux/itemsSlice'
import cart from '../redux/cartSlice'
import showPayment from './showPayment'

export const store = configureStore({
    reducer: {
        items: items,
        cart: cart,
        showPayment
    },
  })
  
  // Infer the `RootState` and `AppDispatch` types from the store itself
  export type RootState = ReturnType<typeof store.getState>
  // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
  export type AppDispatch = typeof store.dispatch
import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
  value: number
}

export const itemsSlice = createSlice({
  name: 'items',
  initialState:{
        selectedCategory: 'Electrician'
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    
    filterCategory: (state, action) =>{
      state.selectedCategory = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = itemsSlice.actions
export const getSelectedCategory=state=>state.items.selectedCategory;
export const {filterCategory} = itemsSlice.actions;
export default itemsSlice.reducer
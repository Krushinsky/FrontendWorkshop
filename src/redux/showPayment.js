import { createSlice } from '@reduxjs/toolkit'
    

const initialState = {
    value: {display: 'none'}
}

export const counterSlice = createSlice({
  name: 'showPayment',
  initialState,
  reducers: {
    set: (state) => {state.value = {display: 'block'}
}
  },
})

// Action creators are generated for each case reducer function
export const { set } = counterSlice.actions

export default counterSlice.reducer
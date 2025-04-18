import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './slices/cartSlice' 
import restaurantReducer from './slices/restaurantSlice' 

export default configureStore({
  reducer: {
    cart: cartReducer,
    restaurant: restaurantReducer
  },
})
import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './slices/cartSlice'  // default export'u import edin
import restaurantReducer from './slices/restaurantSlice'  // default export'u import edin

export default configureStore({
  reducer: {
    cart: cartReducer,
    restaurant: restaurantReducer
  },
})
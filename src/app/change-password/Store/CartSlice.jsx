import { createSlice } from '@reduxjs/toolkit'

var cartItem = JSON.parse(localStorage.getItem('cartItems'));
var cartItem = cartItem ? cartItem : [];

const initialState = {
  cartItems: cartItem,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state) => {
      state.value += 1
    },
    removeItem: (state, action) => {
      if(confirm('Are you sure you want to remove this item?')){
        var data = state.cartItems.filter((v) => {
            if(v.id !== action.payload){
                return v;
            }
        });

        state.cartItems = data;
        localStorage.setItem('cartItems', JSON.stringify(data));
    }
    },
    updateCartMinus: (state, action) => {
      var data = state.cartItems.map((v) => {
        if(v.id === action.payload){
          if(v.quantity > 1){
            v.quantity = v.quantity - 1;
            return v;
          } else {
            return v;
          }
        } else {
          return v;
        }
      });
      
      localStorage.setItem('cartItems', JSON.stringify(data));
    },
    updateCartPlus: (state, action) => {
      var data = state.cartItems.map((v) => {
        if(v.id === action.payload){
          v.quantity = v.quantity + 1;
          return v;
        } else {
          return v;
        }
      });

      state.cartItems = data;
      localStorage.setItem('cartItems', JSON.stringify(data));
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeItem, updateCartMinus, updateCartPlus } = cartSlice.actions

export default cartSlice.reducer
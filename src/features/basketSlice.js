import { createSlice } from '@reduxjs/toolkit'

const initialState = {
items:localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem("cartItems")) : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0
};

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addToBasket: (state, action) => {
          const itemIndex = state.items.findIndex((item) => item.id === action.payload.id);
              if (itemIndex >= 0) {
                state.items[itemIndex].cartQuantity += 1
              }
              else{
                const tempProduct = { ...action.payload, cartQuantity: 1 };
                state.items.push(tempProduct)
              }
           localStorage.setItem('cartItems', JSON.stringify(state.items))
        },
        removeFromBasket: (state, action) => {
          const index = state.items.findIndex((basketItem) => basketItem.id === action.payload.id);
          let newBasket = [...state.items];
          if (index >= 0) {
            newBasket.splice(index, 1);
          } else {
            console.warn(`Can't remove product (id: ${action.payload.id}) as its not in Basket!`);
          }

          state.items = newBasket;
          localStorage.setItem('cartItems', JSON.stringify(state.items))
        },
        decreaseCart: (state, action) => {
          const itemIndex = state.items.findIndex(
            basketItem => basketItem.id === action.payload.id
          )
          if (state.items[itemIndex].cartQuantity > 1) {
            state.items[itemIndex].cartQuantity -= 1
          }
          else if (state.items[itemIndex].cartQuantity === 1) {
            const nextCartItems = state.items.filter(
              (basketItem) => basketItem.id  !== action.payload.id
              );
            state.items = nextCartItems;
          }
          localStorage.setItem('cartItems', JSON.stringify(state.items))
        },
        increaseCart: (state, action) => {
          const itemIndex = state.items.findIndex(
            basketItem => basketItem.id === action.payload.id
          )
          if (state.items[itemIndex].cartQuantity >= 0) {
            state.items[itemIndex].cartQuantity += 1
          }
          // else if (state.items[itemIndex].cartQuantity === 1) {
          //   const nextCartItems = state.items.filter(
          //     (basketItem) => basketItem.id !== action.payload.id
          //   );
          //   state.items = nextCartItems;
          // }
        },
        removeCart:(state)=>{
          state.items=[];
          state.cartTotalQuantity=0;
          state.cartTotalAmount=0;
        }
        
    },
});

export const { addToBasket, removeFromBasket, decreaseCart, increaseCart, removeCart} = basketSlice.actions
export const selectItems = (state) => state.basket.items;
export const selectTotal = (state) => state.basket.items.reduce((total, item) => total + item.price * item.cartQuantity  ,0)
export default basketSlice.reducer
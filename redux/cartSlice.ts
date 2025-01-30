import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./index";

interface CartSate {
    cart: any,
    likedProducts: any[]; // Add liked products

}

const initialState: CartSate = {
    cart: [],
    likedProducts: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        // multiple actions
        addToCart: (state, action) => {
            const isPresent = state.cart.find((item: any) => {
                return item._id == action.payload._id;
            })
            if (isPresent) {
                // update the quantity not add one more product
                state.cart = state.cart.map((item: any) => {
                    return item._id == action.payload._id ? { ...item, quantity: item.quantity + 1 } : item;
                })
            }
            else {
                state.cart.push({ ...action.payload, quantity: 1 })
            }
        },
        removeFromTheCart: (state, action) => {
            state.cart = state.cart.filter((item: any) => {
                return item._id !== action.payload;
            })
        },
        incrementQuantity: (state, action) => {
            state.cart = state.cart.map((item: any) => {
                return item._id == action.payload._id ? { ...item, quantity: item.quantity + 1 } : item;
            })
        },
        decrementQuantity: (state, action) => {
            state.cart = state.cart.map((item: any) => {
                return item._id == action.payload._id ? { ...item, quantity: item.quantity - 1 } : item;
            })
        },
        likeProduct: (state, action) => {
            const isLiked = state.likedProducts.find((item: any) => item._id === action.payload._id);
            if (!isLiked) {
                state.likedProducts.push(action.payload); // Add to liked products
            }
        },
        unlikeProduct: (state, action) => {
            state.likedProducts = state.likedProducts.filter((item: any) => item._id !== action.payload);
        },

    }
});
export const { addToCart, removeFromTheCart, incrementQuantity, decrementQuantity, likeProduct, unlikeProduct } = cartSlice.actions;

export const getCart = (state: RootState) => state.cart.cart
export const getLikedProducts = (state: RootState) => state.cart.likedProducts;

export default cartSlice.reducer;


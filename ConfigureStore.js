import { configureStore } from "@reduxjs/toolkit";
import { foodItems } from "./items";
export default configureStore({
    reducer:{
        foodStorage:foodItems

    }
})
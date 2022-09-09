
import { createSlice } from "@reduxjs/toolkit";
const itemState={
fooditems:[{id:" ",option:"",value:2,cost:100,}]
}
const Slice=createSlice({
    name:'items',
    initialState:itemState,
    reducers:{
       
        addItem:(state,action)=>{
            var isavailable=false;
            state.fooditems.forEach(ele=>{
                if(ele.id===action.payload.id)
                {
ele.value+=1;
isavailable=true;
                }
            })
            if(isavailable)
            {}
            else{
                state.fooditems.push(action.payload)
                state.fooditems[state.fooditems.length-1].value=1;
            }


        }


        ,
        removeItem:(state,action)=>{
            state.fooditems.forEach((ele,index)=>{
                if(ele.id===action.payload.id)
                {
                    ele.value= ele.value-1;
                    if(ele.value===0)
                    {
                        state.fooditems.splice(index,1)
                    }
                }

            })
        }


    }
})
export const foodItems= Slice.reducer

export const {addItem,removeItem}=Slice.actions;
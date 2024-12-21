import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{value:[]},
    reducers:{
        add:(state,action)=>{
            state.value.push(action.payload);
            // for(const i of state.value){
            //     // console.log("hii->")
            //     console.log(i);
            // }

        },
        remove:(state,action)=>{
            state.value=  state.value.filter((item)=> item.id!==action.payload);
           
        },
    }
})
export const {add,remove} =cartSlice.actions;
export default cartSlice.reducer;
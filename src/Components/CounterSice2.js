import { createSlice } from "@reduxjs/toolkit";
import { DecrementNew, IncrementNew } from "./StoreType";

const CounterSliceNew = createSlice({
    name:'CoutnerSliceNew',
    initialState:{
        count:0,
        status:''
    },
    reducers:{
        increment_By_Twice: (state , action ) =>{
                state.count = state.count + 2
                state.status = IncrementNew;
        },

        decrement_By_Twice: (state , action ) =>{
            state.count = state.count - 2;
            state.status = DecrementNew;
    }
    }
} );

export const {increment_By_Twice, decrement_By_Twice} = CounterSliceNew.actions

export default CounterSliceNew;

import { Decrement, Increment } from './StoreType';
import {createSlice} from '@reduxjs/toolkit';


const CounterSlice  = createSlice({
    name:'CounterSlice',
    initialState: {
        count: 0,
        status: ''
    },
    reducers:{
        increment: (state, action)=> {

            state.count =  state.count + 1;
            state.status = Increment
        },
        decrement: (state, action) => {

            state.count =  state.count - 1;
            state.status = Decrement
        }
    }
});

export const {increment, decrement} = CounterSlice.actions

export default CounterSlice;
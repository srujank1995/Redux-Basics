import { configureStore, createSlice} from '@reduxjs/toolkit'
import { Decrement, Increment } from './StoreType';

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
 

const store = configureStore({
    reducer: {
        counterStore: CounterSlice.reducer
    }
})

export default store;
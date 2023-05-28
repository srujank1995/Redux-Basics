import { configureStore} from '@reduxjs/toolkit';
import CounterSlice from './CounterSlice1';
import CounterSliceNew from './CounterSlice2';
import CounterSliceTodo from './CounterSliceTodo';

const store = configureStore({
    reducer: {
        counterStore: CounterSlice.reducer,
        counterStoreNew: CounterSliceNew.reducer,
        counterStoretodo: CounterSliceTodo.reducer,
    },
})

export default store;
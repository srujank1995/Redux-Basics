import { configureStore} from '@reduxjs/toolkit';
import CounterSlice from './CounterSlice1';
import CounterSliceNew from './CounterSlice2';

const store = configureStore({
    reducer: {
        counterStore: CounterSlice.reducer,
        counterStoreNew: CounterSliceNew.reducer
    },
})

export default store;
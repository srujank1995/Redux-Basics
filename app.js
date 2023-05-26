import store from "./Store.js";
import {Insertnumber,DeleteNumber} from './Store.js'

store.subscribe(() => console.log(store.getState()))


store.dispatch(Insertnumber(10));
store.dispatch(Insertnumber(11));


store.dispatch(DeleteNumber());
store.dispatch({type:"uknonw"});



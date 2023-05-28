import {createSlice} from "@reduxjs/toolkit"

const CounterSliceTodo = createSlice({
    name:"To-Do List",
    initialState: [],
    reducers:{
        TodoListAdd: (state, action) =>{
            state.push({id:Date.now(), text:action.payload, completed:false})
        },

        TodoListToggle: (state, action) =>{
           if(state.find((elem)=> elem.id=== action.payload)){
                elem.completed = !elem.completed
           }
        },

        TodoListRemove: (state, action) =>{
            return state.filter((elem) => {elem.id !== action.payload})
        }
    }
});

export const {TodoListAdd, TodoListToggle, TodoListRemove} = CreateSlice.actions
export default CounterSliceTodo;

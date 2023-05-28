import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment } from "./Components/CounterSlice1";
import { decrement_By_Two, increment_By_Two } from "./Components/CounterSlice2";
import { useState } from "react";
import { TodoListAdd, TodoListRemove, TodoListToggle } from "./Components/CounterSliceTodo";

const App = () => {
  const dispatch = useDispatch();
  const StoreSelector = useSelector((state) => state.counterStore);
  const StoreSelector1 = useSelector((state) => state.counterStoreNew);
  const StoreSelectorTodo = useSelector((todo) => todo.counterStoretodo);
  const [defaultText, SetDefaultText] = useState("");

  const AddBtnFn = () => {
    if (defaultText.trim() !=="") {
      dispatch(TodoListAdd(defaultText));
      SetDefaultText("");
    }
  };

  const Togglefunction = () =>{
    dispatch(TodoListToggle(id))
  };

  const RemoveItems =() =>{
    dispatch(TodoListRemove(id))
  }
  return (
    <div>
      <div className="constainer">
        <div className="container1">
          <span className="btn1">{StoreSelector.count}</span>
          <span className="btn1">{StoreSelector.status}</span>
          <br></br>

          <button
            className="btn1"
            onClick={() => {
              dispatch(increment());
            }}
          >
            Increment
          </button>
          <button
            className="btn1"
            onClick={() => {
              dispatch(decrement());
            }}
          >
            Decrement
          </button>
        </div>
        <br></br>
        <div className="constainer2">
          <span className="btn1">{StoreSelector1.count}</span>
          <span className="btn1">{StoreSelector1.status}</span>
          <hr></hr>
          <br></br>
          <button
            className="btn1"
            onClick={() => {
              dispatch(increment_By_Two());
            }}
          >
            Increment by 2
          </button>

          <button
            className="btn1"
            onClick={() => {
              dispatch(decrement_By_Two());
            }}
          >
            Decrement by 2
          </button>
        </div>
      </div>
      <div>
        <h1>TO-DO LIST</h1>
        <input
          type="text"
          value={defaultText}
          onChange={(e) => {
            SetDefaultText(e.target.value);
          }}
        />

        <button type="button" onClick={AddBtnFn}>
          ADD Items..
        </button>

        <ul>
          {StoreSelectorTodo.map((list) => {
            <li key={list.id} />;
          })}
        </ul>

        <span onClick={Togglefunction(list.id)}>{list.text}</span>
        <button type="button" onClick={RemoveItems(list.id)}>
          Remove Items
        </button>
      </div>
    </div>
  );
};

export default App;

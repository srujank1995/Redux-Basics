import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment } from "./Components/ParentStore";

const App = () => {
  const dispatch = useDispatch();
  const StoreSelector = useSelector((state) => state.counterSlice);
  return (
    <div className="App">
      <div>
      {StoreSelector.count}
      {StoreSelector.status}
      <button
        onClick={() => {dispatch(increment());}}>
        Increment
      </button>
      <button
        onClick={() => {dispatch(decrement());}}>
        Decrement
      </button>
      </div>
     
    </div>
  );
};

export default App;

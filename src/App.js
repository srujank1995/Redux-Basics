import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment } from "./Components/CounterSlice1";
import {
  decrement_By_Twice,
  increment_By_Twice,
} from "./Components/CounterSlice2";

const App = () => {
  const dispatch = useDispatch();
  const StoreSelector = useSelector((state) => state.counterStore);
  const StoreSelector1 = useSelector((state) => state.counterStoreNew);

  return (
    <div className="constainer">
      <div className="container1">
        <span
          
        >
          {StoreSelector.count}
        </span>
        <span
      
        >
          {StoreSelector.status}
        </span>
        <hr></hr>
        <br></br>

        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          Decrement
        </button>
      </div>
      <br></br>
      <div className="constainer2"> 
        <span >
          {StoreSelector1.count}
        </span>
        <span>
          {StoreSelector1.status}
        </span>
        <hr></hr>
        <br></br>
        <button
            onClick={() => {
            dispatch(increment_By_Twice());
          }}
        >
          Increment by 2
        </button>

        <button
          onClick={() => {
            dispatch(decrement_By_Twice());
          }}
        >
          Decrement by 2
        </button>
      </div>
    </div>
  );
};

export default App;

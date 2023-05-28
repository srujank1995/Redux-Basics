import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment } from "./Components/CounterSlice1";
import { decrement_By_Twice, increment_By_Twice } from "./Components/CounterSice2";


const App = () => {
  const dispatch = useDispatch();
  const StoreSelector = useSelector((state) => state.counterStore);
  const StoreSelector1 = useSelector((state) => state.counterStoreNew);
  console.log("StoreSelector",StoreSelector)
  console.log("StoreSelector",StoreSelector1)
  return (
    <div className="App">
      <div>
      {StoreSelector.count}
      {StoreSelector.status}
      <hr></hr>
      <br></br>
      {StoreSelector1.count}
      {StoreSelector1.status}
      <button
        onClick={() => {dispatch(increment());}}>
        Increment
      </button>
      <button
        onClick={() => {dispatch(decrement());}}>
        Decrement
      </button>
      </div>
     <div>
     <button
        onClick={() => {dispatch(increment_By_Twice());}}>
        Increment by 2
      </button>

      <button
        onClick={() => {dispatch(decrement_By_Twice());}}>
        Decrement by 2
      </button>
     </div>
    </div>
  );
};

export default App;

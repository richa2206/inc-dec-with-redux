import React from "react";
import {inc_counter, dec_counter} from "./Action/counterAction";
import {useSelector, useDispatch} from "react-redux";


function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch=useDispatch();
  return (
    <div className="App">
     <div>
        <h1>Welcome to my counter</h1>
        <h2>The Count is : {counter.count}</h2>
      </div> 
    <p>
      <button onClick={()=>{dispatch(inc_counter())}}>Increment</button>
    </p>

    <p>
      <button onClick={()=>{dispatch(dec_counter())}}>Decrement</button>
    </p>

     
    </div>
  );
}

export default App;

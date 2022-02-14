import React from "react";
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './actions/index'
function App() {
  const appState = useSelector((state) => state.incrementDecrement)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <header >
        <p> Learn Redux </p>
      </header>
      <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }} >
        <button onClick={() => { dispatch(decrement()) }} >-</button>
        <input value={appState} />
        <button onClick={() => { dispatch(increment()) }}>+</button>
      </div>

    </div>
  );
}

export default App;

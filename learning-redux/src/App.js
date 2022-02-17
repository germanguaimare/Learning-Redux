import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import * as actions from "./actions/index.js"



function App() {
  const counter = useSelector(state => state.counter)
  const logged = useSelector(state => state.logged)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>Learning Redux</h1>
      <p>Here I will display my counter: {counter}</p>
      <p>These buttons will add or substract to my counter <button onClick={() => dispatch(actions.increment())}>+</button><button onClick={() => dispatch(actions.decrement())}>-</button></p>
      <hr></hr>
      <h3>Am I logged in? {logged? "Yes" : "No"}</h3>
      <button onClick={() => dispatch(actions.log())}>{logged? "Sign Out" : "Sign In"}</button>
      {logged ? <h2>This is a hidden text</h2> : ""}
    </div>
  );
}

export default App;

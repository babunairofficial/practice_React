import { useState } from 'react'

import './App.css'

function App() {

  //hooks
  let [counter, setCounter] = useState(0);
  
  
  
  const increaseValue = () => {
    console.log("clicked", counter);
    setCounter(counter + 1);
  }

  const decreaseValue = () => {
    console.log("clicked", counter);
    setCounter(counter - 1);
  }

  return (
    <>
      <h1>Babu Nair</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={increaseValue}>Increase value</button>
      <br />
      <button onClick={decreaseValue}>Decrease Value</button>
    </>
  )
}

export default App

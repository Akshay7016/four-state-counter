import { useState } from 'react';
import './App.css'

const App = () => {

  const [count, setCount] = useState(0);

  const decreaseCounter = () => {
    return count>0 ? setCount(count - 1) : "";
  }
  return (
    <div className='App'>
      <header>
        <h1>
          Counter Application using State/Hook
        </h1>
      </header>

      <h2>Current value of counter is {count}</h2>
      <button onClick={() => setCount(0)}>Reset Counter</button>
      <button onClick={() => (count>9 ? "" : setCount(count + 1))}>Increase Counter</button>
      <button onClick={decreaseCounter}>Decrease Counter</button>
    </div>
  );
}
export default App;

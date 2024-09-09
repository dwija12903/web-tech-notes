import React, { useReducer, useContext, useState } from 'react';

// Step 1: Define the reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

// Step 2: Create a context to hold the state and dispatch function
const CounterContext = React.createContext();

// Step 3: Create a custom hook to access the context
const useCounter = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error('useCounter must be used within a CounterProvider');
  }
  return context;
};

// Step 4: Create a provider component to wrap the application
const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const [message, setMessage] = useState('');

  const updateMessage = (newMessage) => {
    setMessage(newMessage);
  };

  return (
    <CounterContext.Provider value={{ state, dispatch, message, updateMessage }}>
      {children}
    </CounterContext.Provider>
  );
};

// Step 5: Create a component to display and interact with the counter
const Counter = () => {
  const { state, dispatch, message, updateMessage } = useCounter();

  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const decrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  const handleChange = (e) => {
    updateMessage(e.target.value);
  };

  return (
    <div>
      <h2>Counter: {state.count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <input type="text" value={message} onChange={handleChange} placeholder="Enter message" />
      <p>Message: {message}</p>
    </div>
  );
};

const App = () => {
  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>
  );
};

export default App;

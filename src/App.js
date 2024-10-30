import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Toast } from '@bbb324/react-master-toast';
const type = 'success'
function App () {
  const [toasts, setToasts] = useState([]);
  const [counter, setCounter] = useState(0);
  const addToast = (type) => {
    const newToast = {
      id: counter,
      type,
      message: `This is a ${type} message!`
    }
    setToasts(prev => [...prev, newToast]);
    setCounter(prev => prev + 1);
  }
  const removeToast = id => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }
  const buttonStyle = type => ({
    marginRight: '0.5rem',
    padding: '0.5rem 1rem',
    borderRadius: '0.25rem',
    border: 'none',
    cursor: 'pointer',
    backgroundColor:
      type === 'success' ? '#059669' :
        type === 'error' ? '#dc2626' :
          type === 'warning' ? '#d97706' :
            '#3b82f6',
    color: 'white'
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button
          key={type}
          onClick={() => addToast(type)}
          style={buttonStyle(type)}
          className={`${type}-button`}
        >{type.charAt(0).toUpperCase() + type.slice(1)} Toast</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {toasts.map(toast => (
            <Toast key={toast.id}
              type={toast.type}
              message={toast.message}
              className={'toast-box'}
              onClose={() => removeToast(toast.id)}
            />
          ))}


          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

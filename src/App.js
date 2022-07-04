import React from 'react';
import Main from './components/main/main.js';
import HeadingNote from './components/heading/heading.js';
import "./App.css";

function App() {
  return (
    
    <div className="bg-lime-400 flex-1 flex-col shadow-lime-400 shadow-inner border-none min-h-screen">
    <HeadingNote/>
      <Main />
    </div>
  );
}

export default App;
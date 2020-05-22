import React, { useState } from 'react';
import './AcercaDe.sass';

function AcercaDe() {
  // Declaración de una variable de estado que llamaremos "count"  
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1 className="micolor">Acerca De</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default AcercaDe;
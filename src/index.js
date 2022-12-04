import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Conprovider } from './context/context';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div style={{height:"100vh", backgroundColor:"#9b9b9b"}}>
    <Conprovider>
    <App />
    </Conprovider>

  
  </div>
);

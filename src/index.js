import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { FirebaseContext } from './Context/FirebaseContext';
import firebase  from './firebase/firebaseConfig'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FirebaseContext.Provider value={{firebase}}>
    
  <App />
  </FirebaseContext.Provider>
  
);



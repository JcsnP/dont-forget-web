import React, { useState, useEffect } from 'react';

import './App.css';
import "bulma/css/bulma.min.css";

// import store
import { useItemStore } from './store';

// import components
import Form from './components/Form';
import List from './components/List';

function App() {
  const item = useItemStore().item;
  useEffect(() => {
    // save into localstorage
    localStorage.setItem('item', JSON.stringify(item));
  }, [item]);
  
  return (
    <div className="container">
      <Form />
      {
        item.map((item, key) => (
          <List id={item.id} name={item.name} amount={item.amount} checked={item.checked} ley={key} />
        ))
      }
    </div>
  );
}

export default App;

import React, { useEffect } from 'react';

import './App.css';
import "bulma/css/bulma.min.css";

// import store
import { useItemStore } from './store';

// import components
import Form from './components/Form';
import List from './components/List';
import ProgressBar from './components/ProgressBar';

function App() {
  const item = useItemStore().item;
  useEffect(() => {
    // save into localstorage
    localStorage.setItem('item', JSON.stringify(item));
  }, [item]);

  return (
    <div className="container">
      <h1 className="is-size-1 has-text-weight-bold is-uppercase has-text-centered my-3">don't forget !</h1>
      <Form />

      <ProgressBar />

      {
        item.map((item, key) => (
          <List id={item.id} name={item.name} amount={item.amount} checked={item.checked} ley={key} />
        ))
      }
    </div>
  );
}

export default App;

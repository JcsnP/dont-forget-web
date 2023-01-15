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
      <div className="block is-capitalized has-text-centered">
        <p>The website is developed with React.js and LocalStorage is also implemented in the web.</p>
      </div>

      <Form />

      <ProgressBar />

      {
        item.map((item, key) => (
          <List id={item.id} name={item.name} amount={item.amount} checked={item.checked} ley={key} />
        ))
      }

      <div className="tags has-addons mt-3">
        <span className="tag">Source Code</span>
        <a className="tag is-primary" href="https://github.com/JcsnP/dont-forget-web">Here</a>
      </div>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import { useItemStore } from "../store";
import { v4 as uuid } from 'uuid';

function Form() {
  const [itemName, setItemName] = useState('');
  const [itemAmount, setItemAmount] = useState(0);

  const item = useItemStore().item;
  const addItem = useItemStore((state) => state.addItem);

  const addItemIntoList = () => {
    if(itemName.length && parseInt(itemAmount) > 0) {
      addItem({id: uuid(), name: itemName, amount: parseInt(itemAmount), checked: false});     
      setItemName('');
      setItemAmount(0);
    } else {
      alert('Please enter something or Enter amount more than 0');
    }
  }

  return(
    <>
      <div className="card">
        <div className="card-content">
          <div className="content">
            <div className="field">
              <div className="field-body">
                <div class="field">
                  <label class="label">Name</label>
                  <div class="control">
                    <input class="input is-small" type="text" placeholder="Mouse, Keyboard, Shoes" value={itemName} onChange={(e) => {setItemName(e.target.value)}} />
                  </div>
                </div>

                <div class="field">
                  <label class="label">Amount</label>
                  <div class="control">
                    <input class="input is-small" type="number" placeholder="1" value={itemAmount} onChange={(e) => {setItemAmount(e.target.value)}} />
                  </div>
                </div>
              </div>
            </div>
            <div className="field">
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <button class="button is-info is-small is-fullwidth" onClick={() => {addItemIntoList()}}>Save Item</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
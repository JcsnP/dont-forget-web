import React, { useState } from "react";
import { useItemStore } from "../store";

function List({id, name, amount, checked}) {
  const removeItem = useItemStore((state) => state.removeItem);
  const updateItem = useItemStore((state) => state.updateItem);
  const checkedItem = useItemStore((state) => state.checkedItem);

  const [modalVisible, setModalVisible] = useState(false);

  // handle new update
  const [newName, setNewName] = useState(name);
  const [newAmount, setNewAmount] = useState(amount);

  const handleClick = () => {
    setModalVisible(!modalVisible);
  }

  const handleUpdate = () => {
    updateItem(id, {name: newName, amount: parseInt(newAmount)});

    // close modal
    setModalVisible(!modalVisible);
  }

  const active = modalVisible ? 'is-active': '';
  return(
    <>
      <div className="card mt-2" style={checked ? {borderLeft: '6px solid #009A68'} : {borderLeft: '6px solid #FF0000'}}>
        <div className="card-content">
          <div className="content">
            <div className="columns">
              <div className="column is-two-fifths">
                Item Name: {name}
              </div>
              <div className="column">
                Amount: {amount}
              </div>
              <div className="column buttons are-small is-flex is-justify-content-space-between">
                <button class={checked ? "button is-success is-flex-grow-4 mx-1 my-0" : "button is-warning is-flex-grow-4 mx-1 my-0"} onClick={() => {checkedItem(id)}}>{checked ? 'Picked' : 'Pick up'}</button>
                <button class="button is-info is-flex-grow-4 mx-1 my-0" onClick={handleClick}>Edit</button>
                <button class="button is-danger is-flex-grow-4 mx-1 my-0" onClick={() => {removeItem(id)}}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      { /* modal */}
        <div className={`modal ${active}`}>
          <div className="modal-background" />
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Edit Item</p>
              <button
                className="delete"
                aria-label="close"
                onClick={handleClick}
              />
            </header>
            <section className="modal-card-body">
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    value={newName}
                    placeholder={name.concat('อีกอัน')}
                    onChange={(e) => {setNewName(e.target.value)}}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Amount</label>
                <div className="control">
                  <input
                    className="input"
                    type="number"
                    value={newAmount}
                    placeholder={amount}
                    onChange={(e) => {setNewAmount(e.target.value)}}
                  />
                </div>
              </div>
            </section>
            <footer className="modal-card-foot">
              <button className="button is-success" onClick={handleUpdate}>Save changes</button>
              <button className="button" onClick={handleClick}>
                Cancel
              </button>
            </footer>
          </div>
        </div>
    </>
  );
}

export default List;
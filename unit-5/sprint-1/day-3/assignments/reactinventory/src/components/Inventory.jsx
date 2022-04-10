
import { useState } from "react";

export const Inventory = () => {
    const [inv, setInv] = useState({
        books: 10,
        notebooks: 13,
        pens: 40,
        inkpens : 8
    });
    // Create add and remove functions here that changes the
    // state.
    // console.log('setInv:', setInv)

    const handleBooks = (value) =>
    {
        console.log('inv:', inv.books)
        console.log('value:', value)
        inv["books"] += value;
        console.log('inv["books"]:', inv)
        setInv({books : inv.books, notebooks : inv.notebooks, pens : inv.pens, inkpens : inv.inkpens}); 
        console.log('inv["books"]:', inv)
    }
    const handlenotebooks = (value) =>
    {
        console.log('inv:', inv)
        inv["notebooks"] += value;
        setInv({books : inv.books, notebooks : inv.notebooks, pens : inv.pens, inkpens : inv.inkpens})
        console.log('inv:', inv)
    }
    const handlepens = (value) =>
    {
        inv["pens"] += value;
        
        setInv({books : inv.books, notebooks : inv.notebooks, pens : inv.pens, inkpens : inv.inkpens})
    }
    const handleinkpens = (value) =>
    {
        inv["inkpens"] += value;

        setInv({books : inv.books, notebooks : inv.notebooks, pens : inv.pens, inkpens : inv.inkpens})
    }
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books: </span>
        <button className="circlularButton" onClick = {() =>{
            handleBooks(1);
        }}>+</button>
        <button className="circlularButton" onClick = {() =>{
            if(inv.books <= 0)
            {
                return;
            }
            handleBooks(-1);
        }}>-</button>
        <span>{inv.books}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button className="circlularButton" onClick = {() =>{
            handlenotebooks(1)
        }}>+</button>
        <button className="circlularButton" onClick = {() =>{
            if(inv.notebooks <= 0)
            {
                return;
            }
            handlenotebooks(-1);
        }}>-</button>
        <span>{inv.notebooks}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button className="circlularButton" onClick = {() =>{
            handlepens(1);
        }}>+</button>
        <button className="circlularButton" onClick = {() =>{
            if(inv.pens <= 0)
            {
                return;
            }
            handlepens(-1);
        }}>-</button>
        <span>{inv.pens}</span>
      </div>
      <div className="items">
        <span>Ink Pens: </span>
        <button className="circlularButton" onClick = {() =>{
            handleinkpens(1);
        }}>+</button>
        <button className="circlularButton" onClick ={() =>{
            if(inv.inkpens <= 0)
            {
                return;
            }
            handleinkpens(-1);
        }}>-</button>
        <span>{inv.inkpens}</span>
      </div>
            {/*calculate total and show it*/}
      total: {inv.books + inv.notebooks + inv.pens + inv.inkpens}
    </div>
  );
};
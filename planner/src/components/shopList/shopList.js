//Displays list of item to purchase.
//Abilty to add, edit and delete them.
// Once clicked purchased, modal window pop up to enter price that will then update the budget.
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ShopList() {
  const [list, setList] = useState({
    shop_list: ""
  });
  const stateFormChange = e => {
    setList({
      ...list,
      [e.target.member]: e.target.value
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <div className="Add-Item">
      <h1>Shopping List Options</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <select>
            <option>Party Hats</option>
            <option>Confetti</option>
            <option>Pizza, Soda, Chips, Cake</option>
            <option>Decorations</option>
            <option>Chairs and Table</option>
            <option>Balloons</option>
            <option>Games</option>
            <option>Music</option>
            <option>Select All Above</option>
          </select>
        </label>
        <Link to="/">
          <button type="button">Add to Cart</button>
        </Link>
      </form>
    </div>
  );
}
//Dont know exactly where I should link to 
// having trouble finding specific items from api 
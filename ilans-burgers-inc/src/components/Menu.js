import React from 'react';
import './Menu.css'; // Assuming you have a CSS file for styling

const Menu = () => {
  return (
    <div className="menu-section">
      <h2>Our Menu</h2>
      <div className="menu-items">
        <div className="menu-item">
          <img src="https://images.pexels.com/photos/1251196/pexels-photo-1251196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Classic Burger" />
          <h3>The Classic Burger</h3>
        </div>
        <div className="menu-item">
          <img src="https://images.pexels.com/photos/6740517/pexels-photo-6740517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Veggie Delight" />
          <h3>The Veggie Delight</h3>
        </div>
        <div className="menu-item">
          <img src="https://images.pexels.com/photos/17121731/pexels-photo-17121731/free-photo-of-close-up-of-chicken-burgers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Spicy Chicken" />
          <h3>The Spicy Chicken</h3>
        </div>
        <div className="menu-item">
          <img src="https://images.pexels.com/photos/1583891/pexels-photo-1583891.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Double Stack" />
          <h3>French Fries</h3>
        </div>
        <div className="menu-item">
          <img src="https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg" alt="Double Stack" />
          <h3>Salad</h3>
        </div>
        <div className="menu-item">
          <img src="https://images.pexels.com/photos/1739347/pexels-photo-1739347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Double Stack" />
          <h3>Ice Cream</h3>
        </div>
      </div>
    </div>
  );
}

export default Menu;

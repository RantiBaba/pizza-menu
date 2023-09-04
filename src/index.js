import React from 'react';
import ReactDOM from 'react-dom/client';
import pizzaData from './data';
import './index.css';

const App = () => {
  return (
    <div className='container'>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
};

const Header = () => {
  const style = {};
  return (
    <header className='header'>
      <h1 data-testid='header' style={style}>
        Sarumi Pizza Co.
      </h1>
    </header>
  );
};

const Menu = () => {
  const pizzas = pizzaData;
  const pizzaNumber = pizzas.length;

  return (
    <main data-testid='menu-list' className='menu'>
      <h2>Our Menu</h2>

      {pizzaNumber > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. Al from
            our stove oven, all organic, all delicious.
          </p>
          <ul className='pizzas'>
            {pizzas.map(pizza => (
              <Pizza
                key={pizza.id}
                photoName={pizza.photoName}
                name={pizza.name}
                ingredients={pizza.ingredients}
                price={pizza.price}
                soldOut={pizza.soldOut}
              />
            ))}
          </ul>
        </>
      ) : (
        <p>Sorry, we're working on our menu. Pease come back later!</p>
      )}
    </main>
  );
};

const Pizza = ({ photoName, name, ingredients, price, soldOut }) => {
  // if (soldOut) {
  //   return null;
  // }

  return (
    <li
      data-testid='pizza-menu'
      className={`pizza ${soldOut ? 'sold-out' : ''}`}
    >
      <img src={photoName} alt={name} />
      <div>
        <h3 data-testid='pizza-name'>{name}</h3>
        <p data-testid='pizza-ingredients'>{ingredients}</p>
        <span data-testid={soldOut ? 'sold-out' : 'price'}>
          {soldOut ? 'SOLD OUT' : price}
        </span>
      </div>
    </li>
  );
};

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className='footer' data-testid='footer'>
      {isOpen ? (
        <Order openHour={openHour} closeHour={closeHour} />
      ) : (
        <Closed openHour={openHour} />
      )}
    </footer>
  );
};

const Order = ({ openHour, closeHour }) => {
  return (
    <div className='order'>
      <p>
        We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online.
      </p>
      <button className='btn'>Order now</button>
    </div>
  );
};

const Closed = ({ openHour }) => {
  return <p>We're closed. We open at {openHour}:00.</p>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Authentic Italian cuisine. 6 creative dishes to choose from. Al from our stove oven, all organic, all delicious.

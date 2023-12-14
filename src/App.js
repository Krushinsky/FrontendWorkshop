import './App.css';
import React from 'react';
import Login from './Login';
import Logout from './Logout';
import Items from './Components/ItemsComponents/Items';
import AllCategories from './Components/Filter/AllCategories';
import Cart from './Components/Cart/Cart';
import Service from "../src/Service";
import StripeContainer from './Stripe/StripeContainer';

function App() {
  
  return (
    <div className="App">
      <div className='Header'>
        <div>
          <h1>
            Home Workshop
          </h1>
        </div>

        <div className='Login'>
          <Login/>
          <Logout/>
        </div>

      </div>
      <div className='Service'>
        <div><AllCategories/></div>
        <div><Items/></div>
        <div><Cart/></div>
      </div>
      
      <div className='Stripe'>
        <StripeContainer/>
      </div>
      
      <div>
        <Service/>
      </div>
      
      
    </div>
  );
}

export default App;

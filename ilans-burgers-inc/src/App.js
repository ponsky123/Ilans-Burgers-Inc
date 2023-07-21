import React from 'react';
import MyNavbar from './components/Navbar';
import Main from './components/Main';
import Menu from './components/Menu';
import Locations from './components/Locations';
import ContactUs from './components/ContactUs';

const App = () => {
  return (
    <div>
      <MyNavbar />
      <Main />
      <Menu />
      <Locations />
      <ContactUs />
    </div>
  );
}

export default App;

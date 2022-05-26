import React from 'react';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Mosaic from './components/Mosaic/Mosaic';
import Videos from './components/Videos/Videos';
import Contact from './components/Contact/Contact';
import Profile from './components/Profile/Profile';
import Services from './components/Services/Services';
import Treatments from './components/Treatments/Treatments';
import Depositions from './components/Depositions/Depositions';
import SocialMedia from './components/SocialMedia/SocialMedia';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Mosaic />
      <Services />
      <Profile />
      <Videos />
      <Treatments />
      <Depositions />
      <SocialMedia />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

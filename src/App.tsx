import React from 'react';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Contact from './components/Contact/Contact';
import Services from './components/Services/Services';
import Treatments from './components/Treatments/Treatments';
import Depositions from './components/Depositions/Depositions';
import SocialMedia from './components/SocialMedia/SocialMedia';

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Services />
      <Treatments />
      <Depositions />
      <SocialMedia />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

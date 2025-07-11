import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import OrderProcess from './components/OrderProcess';
import PaymentMethods from './components/PaymentMethods';
import DeliveryPricing from './components/DeliveryPricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Gallery />
      <OrderProcess />
      <PaymentMethods />
      <DeliveryPricing />
      <Footer />
    </div>
  );
}

export default App;
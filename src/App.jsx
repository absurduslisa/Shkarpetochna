import React from 'react';
import { typography,borders } from './styles/global';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Product from "./pages/ProductPage";
import About from "./pages/AboutPage";
import Events from './pages/Events';
import Cart from "./pages/Cart";
import Auth from "./pages/Auth"


// Components
import PageHeader from './components/layout/PageHeader'
import PageFooter from './components/layout/PageFooter'

function App() {
  return (
    <div className=''>
      <BrowserRouter >
        <PageHeader />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/account" element={<Auth />} />

        </Routes>

        <PageFooter/>
      </BrowserRouter>

    </div>
  );
}

export default App
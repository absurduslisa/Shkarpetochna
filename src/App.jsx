import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

// Pages
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Product from "./pages/ProductPage";
import About from "./pages/AboutPage";
import Events from './pages/Events';
import Cart from "./pages/Cart";
import Auth from "./pages/Auth";
import Error from "./pages/Error"


// Providers
import { CartProvider } from "./context/CartContext";

// Components
import PageHeader from './components/layout/PageHeader'
import PageFooter from './components/layout/PageFooter'

function App() {
  return (
    <CartProvider>
      <BrowserRouter >
        <ScrollToTop />
        <div className="flex flex-col min-h-dvh">
        <PageHeader />
        <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/account" element={<Auth />} />
          <Route path="*" element={<Error />} />
        </Routes>
        </main>
        <PageFooter/>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App
// import logo from './logo.svg';
import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductScreen from './screens/ProductScreen';
import Cart from './screens/Cart';

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <main className='py-3'>
        <Container>
          { <h1>Welcome To ProShop</h1> }
          <Routes>
            <Route path='/' element={<HomeScreen />}></Route>
            <Route path="/product/:id" element={ <ProductScreen/>}></Route>
            <Route path="/cart" element={ <Cart /> }></Route>
          </Routes>
        </Container>
      </main>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;

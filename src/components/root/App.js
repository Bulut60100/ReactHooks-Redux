import React from 'react';
import { Container } from 'reactstrap';
import Navi from '../navi/navi';
import Dashboard from './dashboard';
import { Routes, Route } from 'react-router-dom';
import CartDetail from '../cart/cartDetail';
import AddOrUpdateProduct from '../products/AddOrUpdateProduct';
import notFound from '../common/notFound';
import ProductDetail from '../products/productDetail';

function App() {
  return (
    <Container>
      <Navi />
      <Routes>
        <Route path="/" exact element={<Dashboard />} />
        <Route path="/product" exact element={<Dashboard />} />
        <Route path="/saveProduct/:productId" element={<AddOrUpdateProduct />} />
        <Route path="/saveProduct" element={<AddOrUpdateProduct />} />
        <Route path="/cart" exact element={<CartDetail />} />
        <Route path="/asd" element={<ProductDetail />} />
        <Route element={notFound} />
      </Routes>
    </Container>
  );
}

export default App;

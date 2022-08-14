import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import ProductAdd from './components/ProductAdd';
import ProductList from './components/ProductList';
import { Container, Title } from './StylesMain';

const App = () => {
  return (
    <>
      <Title>Product Managment - Rodrigo Roldán</Title>
      <Container>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="addproduct" element={<ProductAdd />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Container>
    </>
  )
}

export default App;

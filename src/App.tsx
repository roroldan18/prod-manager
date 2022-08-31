import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import ProductAdd from './pages/ProductAdd';
import ProductList from './pages/ProductList';
import { Container, Footer, Title } from './StylesMain';

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
        <Footer>
          Assignment Product App
        </Footer>
      </Container>
    </>
  )
}

export default App;

import React from 'react';
import MaterialLayout from './components/Layout/MaterialLayout';
import CheckoutPage from './components/CheckoutPage';
import Home from './components/Home';
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MaterialLayout> <CheckoutPage /></MaterialLayout>} />
        <Route path="/users" element={<Home/>} />
      </Routes>
    </>
  );
}

export default App;

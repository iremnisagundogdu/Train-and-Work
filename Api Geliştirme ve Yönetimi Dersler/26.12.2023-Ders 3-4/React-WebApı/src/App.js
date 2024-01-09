import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Categories from './Components/Categories';
import Products from './Components/Products';
import EditProduct from './Components/EditProduct';
import AddProduct from './Components/AddProduct';
import AddCategory from './Components/AddCategory';

function App() {
  return (
    <>
      <Routes>
        {/* Ana Sayfa */}
        <Route path="/" element={
          <div className="container-fluid">
            <div className="row text-center">
              <div className="col-6">
                <Categories />
              </div>
              <div className="col-6">
                <Products />
              </div>
            </div>
          </div>
        } />

        {/* Ürün Ekleme Sayfası */}
        <Route path="/add-product" element={<AddProduct />} />

        {/* Ürün Düzenleme Sayfası */}
        <Route path="/edit-product/:id" element={<EditProduct />} />

        {/* Kategori Ekleme Sayfası */}
        <Route path="/add-category" element={<AddCategory />} />

        {/* Ne yazılırsa yazılsın anasayfaya yönlendirme kısmı */}
        <Route path="*" element={
          <div className="container-fluid">
            <div className="row text-center">
              <div className="col-6">
                <Categories />
              </div>
              <div className="col-6">
                <Products />
              </div>
            </div>
          </div>}
          />
      </Routes>
    </>
  );
}

export default App;

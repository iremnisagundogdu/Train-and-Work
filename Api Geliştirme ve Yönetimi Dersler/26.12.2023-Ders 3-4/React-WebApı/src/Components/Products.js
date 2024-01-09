import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Products() {
    const [products, setProducts] = useState([]);
    const [currentProduct, setCurrentProduct] = useState({ id: 0, name: '', price: 0, stock: 0, isStatus: true });
    const [modalType, setModalType] = useState('add');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://localhost:7109/api/Product');
                setProducts(response.data);
            } catch (error) {
                console.error('There was an error fetching the products!', error);
            }
        };

        fetchProducts();
    });
    const fetchProducts = async () => {
        try {
            const response = await axios.get('https://localhost:7109/api/Product');
            setProducts(response.data);
        } catch (error) {
            console.error('There was an error fetching the products!', error);
        }
    };

    const deleteProduct = async (id) => {
        try {
            await axios.delete(`https://localhost:7109/api/Product/${id}`);
            // Kategori listesini güncelle
            fetchProducts();
        } catch (error) {
            console.error('There was an error deleting the category!', error);
        }
    };

    const handleModalSubmit = async () => {
        if (modalType === 'add') {
            try {
                await axios.post('https://localhost:7109/api/Product', currentProduct);
                fetchProducts();
            } catch (error) {
                console.error('There was an error adding the product!', error);
            }
        } else if (modalType === 'update') {
            try {
                await axios.put(`https://localhost:7109/api/Product/${currentProduct.id}`, currentProduct);
                fetchProducts();
            } catch (error) {
                console.error('There was an error updating the product!', error);
            }
        }
        
        // Modalı programatik olarak kapatma
        document.getElementById('productModal').querySelector('[data-bs-dismiss="modal"]').click();
    };

    

    const openAddModal = () => {
        setModalType('add');
        setCurrentProduct({ id: 0, name: '', price: 0, stock: 0, isStatus: true });
    };

    const openUpdateModal = (product) => {
        setModalType('update');
        setCurrentProduct(product);
    };


    return (
        <div className="container mt-4">
            <h2>Ürünler</h2>
            <Link type="button" className="btn btn-success mt-2 mb-2" to="/add-product">
                Ürün Ekle
            </Link>
            <table className="table table-striped table-hover table-dark">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Ürün Adı</th>
                        <th>Ürün Fiyatı</th>
                        <th>Ürün Stok</th>
                        <th>Ürün Status</th>
                        <th></th>
                        {/* Diğer başlık sütunları buraya eklenebilir */}
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.stock}</td>
                            <td>{product.isStatus?"Aktif":"Pasif"}</td>
                            <td>
                                <button data-bs-toggle="modal" data-bs-target="#productModal" onClick={() => openUpdateModal(product)} className='btn btn-info'>Güncelle</button> | 
                                 <button onClick={()=> deleteProduct(product.id)} className='btn btn-danger ms-1'>Sil</button>
                            </td>
                            {/* Diğer ürün bilgileri burada gösterilebilir */}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="modal fade" id="productModal" tabIndex="-1" aria-labelledby="productModalLabel" aria-hidden="true">
    <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="productModalLabel">{modalType === 'add' ? 'Ürün Ekle' : 'Ürün Güncelle'}</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <form>
                    <div className="mb-3">
                        <label htmlFor="productName" className="form-label">Ürün Adı</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="productName" 
                            value={currentProduct.name} 
                            onChange={(e) => setCurrentProduct({ ...currentProduct, name: e.target.value })} 
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="productPrice" className="form-label">Fiyat</label>
                        <input 
                            type="number" 
                            className="form-control" 
                            id="productPrice" 
                            value={currentProduct.price} 
                            onChange={(e) => setCurrentProduct({ ...currentProduct, price: e.target.value })} 
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="productStock" className="form-label">Stok</label>
                        <input 
                            type="number" 
                            className="form-control" 
                            id="productStock" 
                            value={currentProduct.stock} 
                            onChange={(e) => setCurrentProduct({ ...currentProduct, stock: e.target.value })} 
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="productCategory" className="form-label">Kategori ID</label>
                        <input 
                            type="number" 
                            className="form-control" 
                            id="productCategory" 
                            value={currentProduct.categoryId} 
                            onChange={(e) => setCurrentProduct({ ...currentProduct, categoryId: e.target.value })} 
                        />
                    </div>
                    <div className="mb-3 form-check">
                        <input 
                            type="checkbox" 
                            className="form-check-input" 
                            id="productStatus" 
                            checked={currentProduct.isStatus} 
                            onChange={(e) => setCurrentProduct({ ...currentProduct, isStatus: e.target.checked })} 
                        />
                        <label className="form-check-label" htmlFor="productStatus">Aktif</label>
                    </div>
                </form>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Kapat</button>
                <button type="button" className="btn btn-primary" onClick={handleModalSubmit}>{modalType === 'add' ? 'Ekle' : 'Güncelle'}</button>
            </div>
        </div>
    </div>
</div>
        </div>
    );
}

export default Products;

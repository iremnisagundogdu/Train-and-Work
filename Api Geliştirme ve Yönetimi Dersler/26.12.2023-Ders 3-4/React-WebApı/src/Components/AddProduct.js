import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function AddProduct() {

    const [currentProduct, setCurrentProduct] = useState({
        name: '',
        price: 0,
        stock: 0,
        categoryId: 0,
        isStatus: true
    });

    const handleSubmit = async (e) => {
        e.preventDefault(); // Formun varsayılan gönderim işlemini engelle
        try {
            await axios.post('https://localhost:7109/api/Product', currentProduct);
            // İsteği başarılı bir şekilde gönderdikten sonra yapılacak işlemler
            alert('Ürün başarıyla eklendi');
            // Formu temizle veya başka bir sayfaya yönlendirme yapabilirsiniz
            setCurrentProduct({ name: '', price: 0, stock: 0, categoryId: 0, isStatus: true });
        } catch (error) {
            console.error('Ürün eklenirken bir hata oluştu!', error);
        }
    };
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('https://localhost:7109/api/Category');
                setCategories(response.data);
            } catch (error) {
                console.error('Kategoriler yüklenirken hata oluştu!', error);
            }
        };

        fetchCategories();
    });

    return (
        <>
            <div className='container bg-dark text-bg-dark'>
                <div className='row text-center'>
                    <h2>Ürün Ekle</h2>
                    <div className="offset-2"></div>
                    <div className='col-10 text-center'>
                        <form onSubmit={handleSubmit}>
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
                                <label htmlFor="productCategory" className="form-label">Kategori</label>
                                <select
                                    className="form-control"
                                    id="productCategory"
                                    value={currentProduct.categoryId}
                                    onChange={(e) => setCurrentProduct({ ...currentProduct, categoryId: e.target.value })}
                                >
                                    <option value="">Kategori Seçiniz</option>
                                    {categories.map(category => (
                                        <option key={category.id} value={category.id}>{category.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-3 form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="productStatus"
                                    checked={currentProduct.isStatus}
                                    onChange={(e) => setCurrentProduct({ ...currentProduct, isStatus: e.target.checked })}
                                />
                                <label className="form-check-label" htmlFor="productStatus">Aktif/Pasif</label>
                            </div>

                            <button className='btn btn-success' onClick={handleSubmit}>Ekle</button>
                        </form>
                    </div>



                </div>
                <hr className='mt-2' />

                <Link to="*" className='btn btn-warning'>Ana Sayfaya Dön</Link>
            </div>



        </>
    );
}

export default AddProduct;
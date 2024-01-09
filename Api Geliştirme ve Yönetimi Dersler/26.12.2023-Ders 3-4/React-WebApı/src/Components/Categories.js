import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Categories() {
    const [categories, setCategories] = useState([]);
    const [currentCategory, setCurrentCategory] = useState({ id: 0, name: '', isStatus: true });
    const [modalType, setModalType] = useState('add');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://localhost:7109/api/Category');
                setCategories(response.data);
            } catch (error) {
                console.error('There was an error!', error);
            }
        };

        fetchData();
    });

    const fetchData = async () => {
        try {
            const response = await axios.get('https://localhost:7109/api/Category');
            setCategories(response.data);
        } catch (error) {
            console.error('There was an error!', error);
        }
    };
    const deleteCategory = async (id) => {
        try {
            await axios.delete(`https://localhost:7109/api/Category/${id}`);
            // Kategori listesini güncelle
            fetchData();
        } catch (error) {
            console.error('There was an error deleting the category!', error);
        }
    };


    const handleModalSubmit = async () => {
        if (modalType === 'add') {
            try {
                await axios.post('https://localhost:7109/api/Category', currentCategory);
                fetchData();
            } catch (error) {
                console.error('There was an error adding the category!', error);
            }
        } else if (modalType === 'update') {
            try {
                await axios.put(`https://localhost:7109/api/Category/${currentCategory.id}`, currentCategory);
                fetchData();
            } catch (error) {
                console.error('There was an error updating the category!', error);
            }
        }
        // Modalı programatik olarak kapat
        document.querySelector('.btn-close').click();
    };

    const openAddModal = () => {
        setModalType('add');
        setCurrentCategory({ id: 0, name: '', isStatus: true }); // Boş değerler ile modalı başlat
    };

    const openUpdateModal = (category) => {
        setModalType('update');
        setCurrentCategory(category); // Güncellenecek kategoriyi ayarla
        
    };

    return (
        <div className="container mt-4">
            <h2>Kategoriler</h2>
            <Link type="button" className="btn btn-success mt-2 mb-2" to="/add-category" >
                Kategori Ekle
            </Link>
            <table className="table table-striped table-hover table-dark">
                <thead>
                    <tr>
                        <th>Kategori Id</th>
                        <th>Kategori Adı</th>
                        <th>Kategori Status</th>
                        <th></th>

                    </tr>
                </thead>
                <tbody>
                    {categories.map((category) => (
                        <tr key={category.id}>
                            <td>{category.id}</td>
                            <td>{category.name}</td>
                           
                            <td>{category.isStatus? <span className='btn btn-success'>Aktif</span>:<span className='btn btn-danger'>Pasif</span>}</td>
                            <td>
                            <button 
                                    className='btn btn-info' 
                                    onClick={() => openUpdateModal(category)}
                                    data-bs-toggle="modal" data-bs-target="#exampleModal"
                                >
                                    Güncelle
                                </button> | 
                                 <button onClick={() => deleteCategory(category.id)} className='btn btn-danger ms-1'>Sil</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{modalType === 'add' ? 'Ürün Ekle' : 'Ürün Güncelle'}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <input type="text" className="form-control mb-3" placeholder="Kategori Adı" value={currentCategory.name} onChange={(e) => setCurrentCategory({ ...currentCategory, name: e.target.value })} />
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" checked={currentCategory.isStatus} onChange={(e) => setCurrentCategory({ ...currentCategory, isStatus: e.target.checked })} id="isStatusCheck" />
                                <label className="form-check-label" htmlFor="isStatusCheck">
                                    Aktiflik
                                </label>
                            </div>
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

export default Categories;

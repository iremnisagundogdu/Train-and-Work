import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function AddCategory() {
    const [category, setCategory] = useState({
        name: '',
        isStatus: true
    });

    const handleSubmit = async (e) => {
        e.preventDefault(); // Formun varsayılan gönderim işlemini engelle

        try {
            await axios.post('https://localhost:7109/api/Category', category);
            alert('Kategori başarıyla eklendi');
            // Formu temizle veya başka bir sayfaya yönlendir
            setCategory({ name: '', isStatus: true });
        } catch (error) {
            console.error('Kategori eklenirken bir hata oluştu!', error);
        }
    };

    return (
        <div className="container mt-4">
            <h2>Kategori Ekle</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="categoryName" className="form-label">Kategori Adı</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="categoryName" 
                        value={category.name} 
                        onChange={(e) => setCategory({ ...category, name: e.target.value })}
                        required
                    />
                </div>
                <div className="mb-3 form-check">
                    <input 
                        type="checkbox" 
                        className="form-check-input" 
                        id="categoryStatus" 
                        checked={category.isStatus} 
                        onChange={(e) => setCategory({ ...category, isStatus: e.target.checked })}
                    />
                    <label className="form-check-label" htmlFor="categoryStatus">Aktif</label>
                </div>
                <button type="submit" className="btn btn-primary">Kategori Ekle</button>
            </form>
            <hr className='mt-2' />

            <Link to="*" className="btn btn-warning" >Anasayfaya dön</Link>
        </div>
    );
}

export default AddCategory;

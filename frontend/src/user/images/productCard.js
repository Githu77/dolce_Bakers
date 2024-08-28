import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductForm = () => {
    const [product, setProduct] = useState({
        title: '',
        details: '',
        price: '',
        image: ''
    });
    const [products, setProducts] = useState([]);
    const [editingProductId, setEditingProductId] = useState(null);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = () => {
        axios.get('http://localhost:8001/products')
            .then(res => setProducts(res.data))
            .catch(err => console.error(err));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (editingProductId) {
            axios.put(`http://localhost:8001/products/${editingProductId}`, product)
                .then(res => {
                    console.log(res.data);
                    fetchProducts();
                    setEditingProductId(null);
                    setProduct({ title: '', details: '', price: '', image: '' });
                })
                .catch(err => console.error(err));
        } else {
            // Add new product
            axios.post('http://localhost:8001/products/add', product)
                .then(res => {
                    console.log(res.data);
                    fetchProducts();
                    setProduct({ title: '', details: '', price: '', image: '' });
                })
                .catch(err => console.error(err));
        }
    };

    const handleEdit = (product) => {
        setProduct(product);
        setEditingProductId(product._id);
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8001/products/${id}/`)
            .then(res => {
                console.log(res.data);
                fetchProducts();
            })
            .catch(err => console.error(err));
    };

    return (
        <div className="product-form-container">
            <h2 className="form-title">{editingProductId ? 'Edit Product' : 'Add New Product'}</h2>
            <form className="product-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        value={product.title}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="details">Details</label>
                    <textarea
                        name="details"
                        id="details"
                        value={product.details}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input
                        type="number"
                        name="price"
                        id="price"
                        value={product.price}
                        onChange={handleChange}
                        required
                        min="0"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="image">Image URL</label>
                    <input
                        type="text"
                        name="image"
                        id="image"
                        value={product.image}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button className="submit-btn" type="submit">{editingProductId ? 'Update Product' : 'Add Product'}</button>
            </form>

            <h2 className="product-list-title">Product List</h2>
            <table className="product-table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Details</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((prod) => (
                        <tr key={prod._id}>
                            <td>{prod.title}</td>
                            <td>{prod.details}</td>
                            <td>${prod.price}</td>
                            <td><img src={prod.image} alt={prod.title} className="product-image" /></td>
                            <td className="actions">
                                <button className="edit-btn" onClick={() => handleEdit(prod)}>Edit</button>
                                <button className="delete-btn" onClick={() => handleDelete(prod._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductForm;

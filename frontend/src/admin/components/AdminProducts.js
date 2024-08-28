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
        <div>
            <h2>{editingProductId ? 'Edit Product' : 'Add New Product'}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title</label>
                    <input
                        type="text"
                        name="title"
                        value={product.title}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Details</label>
                    <textarea
                        name="details"
                        value={product.details}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <div>
                    <label>Price</label>
                    <input
                        type="number"
                        name="price"
                        value={product.price}
                        onChange={handleChange}
                        required
                        min="0"
                    />
                </div>
                <div>
                    <label>Image URL</label>
                    <input
                        type="text"
                        name="image"
                        value={product.image}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">{editingProductId ? 'Update Product' : 'Add Product'}</button>
            </form>

            <h2>Product List</h2>
            <table>
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
                            <td><img src={prod.image} alt={prod.title} style={{ width: '50px' }} /></td>
                            <td>
                                <button onClick={() => handleEdit(prod)}>Edit</button>
                                <button onClick={() => handleDelete(prod._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductForm;

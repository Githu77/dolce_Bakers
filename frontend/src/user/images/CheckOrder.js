import React, { useState } from 'react';

const OrderForm = ({ products = [] }) => {
  const [order, setOrder] = useState({
      customer_name: '',
      customer_email: '',
      customer_address: '',
      items: [
          { product: '', quantity: 1, price: 0 }
      ],
      total_price: 0,
      status: 'Pending',
  });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setOrder({
            ...order,
            [name]: value,
        });
    };

    const handleItemChange = (index, e) => {
        const { name, value } = e.target;
        const items = [...order.items];
        items[index][name] = value;

        if (name === 'price' || name === 'quantity') {
            const totalPrice = items.reduce((total, item) => {
                return total + item.price * item.quantity;
            }, 0);
            setOrder({
                ...order,
                items,
                total_price: totalPrice,
            });
        } else {
            setOrder({
                ...order,
                items,
            });
        }
    };

    const addItem = () => {
        setOrder({
            ...order,
            items: [...order.items, { product: '', quantity: 1, price: 0 }],
        });
    };

    const removeItem = (index) => {
        const items = [...order.items];
        items.splice(index, 1);
        const totalPrice = items.reduce((total, item) => {
            return total + item.price * item.quantity;
        }, 0);
        setOrder({
            ...order,
            items,
            total_price: totalPrice,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(order);
    };

    return (
        <div>
            <h2>Create New Order</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Customer Name</label>
                    <input
                        type="text"
                        name="customer_name"
                        value={order.customer_name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Customer Email</label>
                    <input
                        type="email"
                        name="customer_email"
                        value={order.customer_email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Customer Address</label>
                    <input
                        type="text"
                        name="customer_address"
                        value={order.customer_address}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Order Items</label>
                    {order.items.map((item, index) => (
                        <div key={index}>
                            <select
                                name="product"
                                value={item.product}
                                onChange={(e) => handleItemChange(index, e)}
                                required
                            >
                                <option value="">Select Product</option>
                                {products.map((product) => (
                                    <option key={product._id} value={product._id}>
                                        {product.title}
                                    </option>
                                ))}
                            </select>
                            <input
                                type="number"
                                name="quantity"
                                value={item.quantity}
                                onChange={(e) => handleItemChange(index, e)}
                                required
                                min="1"
                            />
                            <input
                                type="number"
                                name="price"
                                value={item.price}
                                onChange={(e) => handleItemChange(index, e)}
                                required
                                min="0"
                            />
                            <button type="button" onClick={() => removeItem(index)}>Remove</button>
                        </div>
                    ))}
                    <button type="button" onClick={addItem}>Add Item</button>
                </div>
                <div>
                    <label>Total Price: ${order.total_price}</label>
                </div>
                <div>
                    <label>Status</label>
                    <select
                        name="status"
                        value={order.status}
                        onChange={handleChange}
                        required
                    >
                        <option value="Pending">Pending</option>
                        <option value="Processing">Processing</option>
                        <option value="Completed">Completed</option>
                        <option value="Cancelled">Cancelled</option>
                    </select>
                </div>
                <button type="submit">Create Order</button>
            </form>
        </div>
    );
};

export default OrderForm;

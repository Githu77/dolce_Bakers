import { Router } from 'express';
import Order from '../models/order.js';

const router = Router();

// the GET route to retrieve all orders
router.get('/', (req, res) => {
    Order.find()
        .then(orders => res.json(orders))
        .catch(err => res.status(400).json('Error: ' + err));
});

// the route to retrieve specific order by ID
router.get('/:id', (req, res) => {
    Order.findById(req.params.id)
        .then(order => res.json(order))
        .catch(err => res.status(400).json('Error: ' + err));
});

// POST route to create a new order
router.post('/', (req, res) => {
    const { customer_name, customer_email, customer_address, items, total_price, status } = req.body;
    
    const newOrder = new Order({
        customer_name,
        customer_email,
        customer_address,
        items,
        total_price,
        status
    });

    newOrder.save()
        .then(() => res.json('Order added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// the PUT route to update an order by ID
router.put('/:id', (req, res) => {
    Order.findById(req.params.id)
        .then(order => {
            order.customer_name = req.body.customer_name || order.customer_name;
            order.customer_email = req.body.customer_email || order.customer_email;
            order.customer_address = req.body.customer_address || order.customer_address;
            order.items = req.body.items || order.items;
            order.total_price = req.body.total_price || order.total_price;
            order.status = req.body.status || order.status;

            order.save()
                .then(() => res.json('Order updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

// the DELETE route to delete an order by ID
router.delete('/:id', (req, res) => {
    Order.findByIdAndDelete(req.params.id)
        .then(() => res.json('Order deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

export default router;

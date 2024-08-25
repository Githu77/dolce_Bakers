import { Router } from 'express';
import Product from '../models/product.js';

const router = Router();

// the GET route to retrieve all products
router.get('/', (req, res) => {
    Product.find()
        .then(products => res.json(products))
        .catch(err => res.status(400).json('Error: ' + err));
});

// the GET route to retrieve a specific product by ID
router.get('/:id', (req, res) => {
    Product.findById(req.params.id)
        .then(product => res.json(product))
        .catch(err => res.status(400).json('Error: ' + err));
});

// the POST route to create a new product
router.post('/add', (req, res) => {
    const { title, details, price, image } = req.body;

    const newProduct = new Product({
        title,
        details,
        price,
        image
    });

    newProduct.save()
        .then(() => res.json('Product added successfully!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// the PUT route to update an existing product by ID
router.put('/:id', (req, res) => {
    Product.findById(req.params.id)
        .then(product => {
            product.title = req.body.title || product.title;
            product.details = req.body.details || product.details;
            product.price = req.body.price || product.price;
            product.image = req.body.image || product.image;

            product.save()
                .then(() => res.json('Product updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

// the DELETE route to delete a product by ID
router.delete('/:id', (req, res) => {
    Product.findByIdAndDelete(req.params.id)
        .then(() => res.json('Product deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

export default router;

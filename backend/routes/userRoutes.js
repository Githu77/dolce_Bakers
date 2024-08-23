import { Router } from 'express';
import User from '../models/user.js';

const router = Router();

// will retrieve all users
router.get('/', (req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

// the POST route to add a new user
router.post('/add', (req, res) => {
    const { username, email, password_hash } = req.body;
    const newUser = new User({
        username,
        email,
        password_hash,
    });

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

export default router;

import { Router } from 'express';
import User from '../models/user.js';
import bcrypt from 'bcrypt';


const router = Router();

// Get all users (for admin purposes, typically not public)
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(400).json({ message: 'Error: ' + err });
    }
});

// Signup (Create a new user)
router.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;

    // Validate that all fields are provided
    if (!username || !email || !password) {
        return res.status(400).json({ message: 'Username, email, and password are required' });
    }

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Generate salt and hash the password
        const salt = await bcrypt.genSalt(10);
        if (!salt) {
            return res.status(500).json({ message: 'Error generating salt' });
        }
        const hashedPassword = await bcrypt.hash(password, salt);
        if (!hashedPassword) {
            return res.status(500).json({ message: 'Error hashing password' });
        }

        // Create a new user with the hashed password
        const newUser = new User({
            username,
            email,
            password_hash: hashedPassword, // Store the hashed password
        });

        await newUser.save();
        res.status(201).json({ message: 'User registered successfully!' });
    } catch (err) {
        res.status(400).json({ message: 'Error: ' + err.message });
    }
});



// Login (Authenticate user)
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        // Compare the provided password with the stored hash
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        res.redirect('./home');
    } catch (err) {
        res.status(400).json({ message: 'Error: ' + err });
    }
});

export default router;

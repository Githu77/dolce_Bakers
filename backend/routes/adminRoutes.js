import { Router } from 'express';
import Admin from '../models/admin.js';
import bcrypt from 'bcrypt';

const router = Router();

// can get admin data
router.get('/', async (req, res) => {
    try {
        const admins = await Admin.find();
        res.json(admins);
    } catch (err) {
        res.status(400).json({ message: 'Error: ' + err });
    }
});


// Admin Signup
router.post('/signup', async (req, res) => {
    const { adminUsername, adminEmail, adminPassword } = req.body;

    // to validate that all fields are provided
    if (!adminUsername || !adminEmail || !adminPassword) {
        return res.status(400).json({ message: 'Username, email, and password are required' });
    }

    try {
        // Check if the admin already exists
        const existingAdmin = await Admin.findOne({ adminEmail });
        if (existingAdmin) {
            return res.status(400).json({ message: 'Admin already exists' });
        }

        // Generate a salt and hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(adminPassword, salt);

        // Create a new admin with the hashed password and set role as admin
        const newAdmin = new Admin({
            adminUsername,
            adminEmail,
            adminPasswordHash: hashedPassword,
            role: 'admin'
        });

        await newAdmin.save();
        res.status(201).json({ success: true, message: 'Admin registered successfully!' });
    } catch (err) {
        res.status(400).json({ message: 'Error: ' + err.message });
    }
});

// Admin Login
router.post('/login', async (req, res) => {
    const { adminEmail, adminPassword } = req.body;

    try {
        // Find the admin by email
        const admin = await Admin.findOne({ adminEmail });
        if (!admin) {
            return res.status(400).json({ success: false, message: 'Admin not found' });
        }

        // Compare the provided password with the stored hash
        const isMatch = await bcrypt.compare(adminPassword, admin.adminPasswordHash);
        if (!isMatch) {
            return res.status(400).json({ success: false, message: 'Invalid credentials' });
        }

        // Respond with success if authentication is successful
        res.json({ success: true, message: 'Login successful!' });
    } catch (err) {
        res.status(400).json({ success: false, message: 'Error: ' + err.message });
    }
});

export default router;

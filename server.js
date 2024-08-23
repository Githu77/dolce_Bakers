import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from config.env file
dotenv.config ({ path: 'config.env' });

const app = express();
const port = process.env.PORT || 8001;

app.use(cors());
app.use(express.json());

// Debugging: Print environment variables
console.log('Port:', process.env.PORT);
console.log('Mongo URI:', process.env.MONGO_URI);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

  import orderRoutes from './backend/routes/orderRoutes.js';
  import productRoutes from './backend/routes/productRoutes.js';
  import userRoutes from './backend/routes/userRoutes.js';
  
  app.use('/orders', orderRoutes);
  app.use('/products', productRoutes);
  app.use('/users', userRoutes);
  


app.get('/', (req, res) => {
    res.send('Server is running');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

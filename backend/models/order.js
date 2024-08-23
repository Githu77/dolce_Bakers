import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// Schema for individual items in order
const orderItemSchema = new Schema({
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
        min: 1,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
});

// Schema for the order
const orderSchema = new Schema({
    customer_name: {
        type: String,
        required: true,
        trim: true,
    },
    customer_email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    customer_address: {
        type: String,
        required: true,
        trim: true,
    },
    items: [orderItemSchema],
    total_price: {
        type: Number,
        required: true,
        min: 0,
    },
    status: {
        type: String,
        required: true,
        enum: ['Pending', 'Processing', 'Completed', 'Cancelled'],
        default: 'Pending',
    },
    placed_at: {
        type: Date,
        default: Date.now,
    }
}, {
    timestamps: true,
});

export default mongoose.model('Order', orderSchema);

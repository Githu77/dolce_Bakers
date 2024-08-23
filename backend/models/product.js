import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const productSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    details: {
        type: String,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    image: {
        type: String,
        required: true,
        trim: true,
    }
}, {
    timestamps: true,
});

export default mongoose.model('Product', productSchema);

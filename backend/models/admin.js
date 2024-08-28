import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const Schema = mongoose.Schema;

const adminSchema = new mongoose.Schema({
    adminUsername: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3,
    },
    adminEmail: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    adminPasswordHash: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: 'admin',
    }
}, {
    timestamps: true,
});


// this is to compare passwords
adminSchema.methods.comparePassword = function (candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password_hash);
};

export default mongoose.model('Admin', adminSchema);
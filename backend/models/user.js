import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    password_hash: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
});

// this will hash password before saving the document
userSchema.pre('save', async function (next) {
    if (this.isModified('password_hash')) {
        try {
            // Generate a salt and hash the password
            const salt = await bcrypt.genSalt(10);
            this.password_hash = await bcrypt.hash(this.password_hash, salt);
            next();
        } catch (err) {
            next(err);
        }
    } else {
        next();
    }
});

// this is to compare passwords
userSchema.methods.comparePassword = function (candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password_hash);
};

export default mongoose.model('User', userSchema);

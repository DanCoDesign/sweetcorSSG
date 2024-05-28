import mongoose, { Schema, models } from "mongoose";
const userSchema = new Schema(
    {
        email: {
            type: 'string',
            required: true,
        },
        password: {
            type: 'string',
            required: true,
        },
        admin: {
            type: 'boolean',
            required: true,
        }
    },
    { timestamps: true }
);

const User = models.User || mongoose.model("User", userSchema);

export default User;
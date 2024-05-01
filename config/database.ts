import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
    const uri = `mongodb+srv://ozdemir:${process.env.DATABASE_PASSWORD}@cluster0.923rs.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(uri);
        console.log("MongoDB connected successfully");
    } catch (error: any) {
        console.error("Failed to connect to MongoDB", error?.message || error);
        process.exit(1);
    }
};

export default connectDB;

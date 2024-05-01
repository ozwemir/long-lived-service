import mongoose, { Document, Model } from "mongoose";

interface IKey extends Document {
    key: string;
}
const keySchema = new mongoose.Schema<IKey>({
    key: {
        type: String,
        required: [true, "Key is required"]
    }
}, { timestamps: true });

const KeyModel: Model<IKey> = mongoose.model<IKey>("key", keySchema);

export default KeyModel;
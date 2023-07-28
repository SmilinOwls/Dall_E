import mongoose from 'mongoose';

const Photo = new mongoose.Schema({
  name: { type: String, required: true },
  prompt: { type: String, required: true },
  src: { type: String, required: true },
});

export default mongoose.model('Photo', Photo);
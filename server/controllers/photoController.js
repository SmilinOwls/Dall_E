import Photo from '../models/Photo';
import { v2 as cloudinary } from 'cloudinary';

const photoController = {
    initial: (req, res, next) => {
        cloudinary.config({
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET,
        });
        next();
    },
    getAllPhoto: async (req, res) => {
        try {
            const photos = await Photo.find({});
            res.status(200).json({sucess: true, data: photos});
        } catch (error) {
            res.status(500).json({success: false, message: 'Fetching posts failed, please try again' });
        }
    },
    sharePhoto: async (req, res) => {
        try {
            const { name, prompt, src } = req.body;
            const photoUrl = await cloudinary.uploader.upload(src);
            const newPhoto = await Photo.create({
                name: name,
                prompt: prompt,
                src: photoUrl.url
            });
            
            res.status(200).json({sucess: true, data: newPhoto});
        } catch (error) {
            res.status(500).json({success: false, message: 'Fetching posts failed, please try again' });
        }
    }

};

export default photoController;
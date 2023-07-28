import { Configuration, OpenAIApi } from 'openai';

const dallController = {
    initial: (req, res, next) => {
        const configuration = new Configuration({
            apiKey: process.env.OPENAI_API_KEY,
        });
        req.openai = new OpenAIApi(configuration);
        next();
    },
    createImage: async (req, res) => {
        const openai = req.openai;
        try {
            const { prompt } = req.body;
            const response = await openai.createImage({
                prompt: prompt,
                n: 1,
                size: '1024x1024',
                response_format: 'b64_json'
            });

            const photo = response.data.data[0].b64_json;
            res.status(200).json({ success: true, photo: photo });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, messgae: "Something went wrong!"});
        }
    }
};

export default dallController;
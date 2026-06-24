const OpenAI = require("openai");
require("dotenv").config();

let client = null;

if (process.env.OPENAI_API_KEY) {
    client = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY
    });
}

const chat = async (req, res) => {

    try {

        if (!client) {
            return res.status(503).json({
                success: false,
                answer: "AI service is not configured."
            });
        }

        const { question } = req.body;

        const completion = await client.chat.completions.create({
            model: "gpt-4.1-mini",
            messages: [
                {
                    role: "system",
                    content: `
You are Beauty Salon AI Assistant.

Rules:
- Recommend hairstyles.
- Suggest skincare routines.
- Suggest beauty treatments.
- Answer politely.
- Keep answers under 150 words.
`
                },
                {
                    role: "user",
                    content: question
                }
            ],
            temperature: 0.7
        });

        res.json({
            success: true,
            answer: completion.choices[0].message.content
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            answer: "AI Service Error"
        });
    }
};

module.exports = { chat };
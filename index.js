import OpenAI from "openai";

process.loadEnvFile()

const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY});

async function main() {
  const response = await openai.chat.completions.create({
    model: "gpt-4-vision-preview",
    messages: [
      {
        role: "user",
        content: [
          { type: "text", text: "Can you describe this image?" },
          {
            type: "image_url",
            image_url: {
              "url": "https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg",
            },
          },
        ],
      },
    ],
  });
  console.log(response.choices[0]);
}
main();


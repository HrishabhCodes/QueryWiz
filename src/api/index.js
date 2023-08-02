import axios from "axios";
import { sendPrompt } from "../utils/prompts";
import { promptDummyData } from "../utils/dummyData";

export const fetchAnswer = async (question) => {
  const data = JSON.stringify(promptDummyData);
  const messages = sendPrompt(question, data);

  const body = JSON.stringify({
    model: "gpt-3.5-turbo-16k-0613",
    messages: messages,
    max_tokens: 1500,
    temperature: 0,
    stream: false,
  });

  let response;
  try {
    response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      body,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }

  return response.data.choices[0].message.content;
};

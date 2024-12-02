let secretOpenAIKey = "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";

//import OpenAI from "openai";
const openai = new OpenAI();

const completion = openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
        { role: "system", content: "You are a helpful assistant." },
        {
            role: "user",
            content: "Write a haiku about recursion in programming.",
        },
    ],
});

console.log(completion.choices[0].message);
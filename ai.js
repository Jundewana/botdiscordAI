const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
apiKey: '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',
});

const openai = new OpenAIApi(configuration);

async function ask(prompt) {
try {
    const response = await openai.createCompletion({
    model: "text-davinci-002",
    prompt,
    temperature: 0.7,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    });
    const answer = response.data.choices[0].text;
    return answer;
} catch (error) {
    console.error("Kesalahan mengambil respons dari OpenAI API:", error);
    throw error;
}
}
module.exports = {
ask,
};

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    organization: "org-GezQNUcA39UtWR8TCUJztMjp",
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);

async function listEngines() {
    try {
        const response = await openai.listEngines();
        console.log(response);
    } catch (error) {
        console.error("Kesalahan saat melakukan list engines:", error);
        throw error;
    }
}

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
    listEngines
};
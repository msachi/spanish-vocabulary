const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration);

const runCompletion = async (prompt) => {
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt,
    max_tokens: 256
  });
  return completion.data.choices[0].text.replace(/\"/g, '').replace(/\n/g,'');
}

module.exports = runCompletion;
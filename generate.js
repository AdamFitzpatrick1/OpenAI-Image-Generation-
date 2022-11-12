import { Configuration, OpenAIApi } from "openai";
import { writeFileSync } from 'fs';

const configuration = new Configuration({
    apiKey: '', //Create an OpenAI account, then create an API key and paste it between the quotation marks
});

const openai = new OpenAIApi(configuration);

const prompt = 'Hello AI World'

const result = await openai.createImage({
    prompt,
    n: 1,
    size: "1024x1024"
});

const url = result.data.data[0].url;
console.log(url);

//Save image to disk

const imgResult = await fetch(url)
const blob = await imgResult.blob();
const buffer = Buffer.from(await blob.arrayBuffer() )
writeFileSync(`./img/${Date.now()}.png`, buffer);

console.log("The prompt used was: ", prompt)


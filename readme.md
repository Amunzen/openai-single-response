# Openai Single Response

`openai-single-response` is a JavaScript library for interacting with OpenAI's GPT models, including the latest gpt-3.5-turbo. It provides an easy-to-use API for generating chat completions, managing chat streams, and handling responses with or without schema validation.

Features
Easy integration with OpenAI's Chat models.
Support for both streaming and non-streaming chat completions.
Optional schema validation for responses.
Convenient utilities for message composition.
Installation
bash
Copy code
npm install openai-single-response

# or

yarn add openai-single-response
Usage
Basic Usage
Here's a quick example to get you started:

javascript
Copy code
import { getSingleChatCompletion } from openai-single-response;

async function chat() {
const response = await getSingleChatCompletion({
apiKey: 'your-api-key',
systemPrompt: "Your system prompt",
userPrompt: "Your user prompt",
});

console.log(response);
}

chat();
Advanced Usage
For more advanced scenarios, such as using chat streams or tool completions, refer to the following examples:

javascript
Copy code
// Add examples for using chat streams and tool completions
API Reference
getSingleChatStream: Used for creating a chat stream.
getSingleChatCompletion: Used for getting a single chat completion.
getSingleChatToolCompletion: Used for getting a completion with tool integration.
For detailed API documentation, refer to API.md.

Contributing
Contributions are always welcome! If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

Licensing
The code in this project is licensed under MIT.

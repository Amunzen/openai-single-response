# Openai Single Response

`openai-single-response` is a JavaScript library for interacting with OpenAI's GPT models.
It provides an easy-to-use API for generating chat completions, managing chat streams, and handling responses with or without schema validation.

# Features

- Easy integration with OpenAI's Chat models.
- Support for both streaming and non-streaming chat completions.
- Optional schema validation for responses.
- Convenient utilities for message composition.

# Installation

```bash
npm install openai-single-response
```

# Usage

## Basic Usage

Here's a quick example to get you started:

```javascript
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
```

# Licensing

The code in this project is licensed under MIT.

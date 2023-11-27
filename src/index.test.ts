import { getSingleChatCompletion } from "./index"
import dotenv from "dotenv"

dotenv.config()

describe("getSingleChatCompletion", () => {
  it("should get a response from OpenAI", async () => {
    const apiKey = process.env.OPENAI_API_KEY!
    const model = "gpt-3.5-turbo-1106" // Replace with the model you want to use
    const systemPrompt = "Hello, how can I help you?"
    const userPrompt = "Tell me a joke"
    try {
      const result = await getSingleChatCompletion({
        apiKey,
        model,
        systemPrompt,
        userPrompt,
      })
      console.log("Result:", result)
      expect(result).toBeDefined()
    } catch (error) {
      console.error("Error:", error)
    }
    return
  })
})

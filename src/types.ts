import { ChatCompletionCreateParamsBase } from "openai/resources/chat/completions"

type Model = ChatCompletionCreateParamsBase["model"]

export type BaseChatAIProps = {
  apiKey: string
  model?: Model
  systemPrompt?: string
  userPrompt?: string
}

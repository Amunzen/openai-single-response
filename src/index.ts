import { OpenAIStream } from "ai"
import OpenAI from "openai"
import { z } from "zod"
import { composeMessages } from "./utils"
import type {
  ChatCompletionTool,
  ChatCompletionToolChoiceOption,
} from "openai/resources/chat/completions"
import type { BaseChatAIProps } from "./types"

const defaultModel = "gpt-3.5-turbo"

export function getOpenAI({ apiKey }: { apiKey?: string }) {
  if (!apiKey) throw new Error("Openai Api Key is undefined")
  return new OpenAI({ apiKey })
}

export async function getSingleChatStream({
  apiKey,
  model = defaultModel,
  systemPrompt,
  userPrompt,
}: BaseChatAIProps) {
  const openai = getOpenAI({ apiKey })
  const response = await openai.chat.completions.create({
    model,
    messages: composeMessages({ systemPrompt, userPrompt }),
    stream: true,
  })
  return OpenAIStream(response)
}

// Function overload signatures
export async function getSingleChatCompletion(
  props: BaseChatAIProps & { schema: z.ZodType }
): Promise<any>
export async function getSingleChatCompletion(
  props: BaseChatAIProps
): Promise<string>

export async function getSingleChatCompletion({
  apiKey,
  model = defaultModel,
  systemPrompt,
  userPrompt,
  schema,
}: BaseChatAIProps & {
  schema?: z.ZodType<any, any>
}) {
  const openai = getOpenAI({ apiKey })

  const response = await openai.chat.completions.create({
    model,
    messages: composeMessages({ systemPrompt, userPrompt }),
    stream: false,
    response_format: { type: schema ? "json_object" : "text" },
  })
  const { content } = response.choices[0].message
  if (!content) throw new Error("content is undefined")
  return schema ? schema.parse(content) : content
}

export async function getSingleChatToolCompletion<T>({
  apiKey,
  model = defaultModel,
  systemPrompt,
  userPrompt,
  tools,
  tool_choice,
  schema,
}: BaseChatAIProps & {
  tools: ChatCompletionTool[]
  tool_choice: ChatCompletionToolChoiceOption
  schema: z.ZodType
}) {
  const openai = getOpenAI({ apiKey })

  const response = await openai.chat.completions.create({
    model,
    messages: composeMessages({ systemPrompt, userPrompt }),
    tools,
    tool_choice,
    stream: false,
    response_format: { type: schema ? "json_object" : "text" },
  })
  const argStr = response.choices[0].message?.tool_calls?.[0].function.arguments
  if (!argStr) throw new Error("argString is undefined")
  const argObj = JSON.parse(argStr)
  return schema.parse(argObj) as T
}

import { ChatCompletionMessageParam } from "openai/resources"

export function composeMessages({
  systemPrompt,
  userPrompt,
}: {
  systemPrompt?: string
  userPrompt?: string
}) {
  if (!systemPrompt && !userPrompt) {
    throw new Error("systemPrompt or userPrompt must be provided")
  }
  const messages: ChatCompletionMessageParam[] = []
  if (systemPrompt) messages.push({ role: "system", content: systemPrompt })
  if (userPrompt) messages.push({ role: "user", content: userPrompt })
  return messages
}

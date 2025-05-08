import { ChatPromptTemplate } from "@langchain/core/prompts";
import rawJsonData from "../../public/data.json";
import formatData from "./formatData";
import llm from "@/config/llm";
import { StringOutputParser } from "@langchain/core/output_parsers";

const aiResponse = async (userQuery) => {
  try {
    const formatedJsonData = formatData(rawJsonData);

    const answerTemplate = `You are a helpful assistant for a software license marketplace.
Use the context below to answer the question.

Guidline: 
-  If the context does not provide enough information to answer, respond with:
"I’m sorry, I couldn’t find relevant information to answer that."
- Skip unnecessary greetings but greet back if greeted.  
- Do **not** generate false information. Keep responses concise yet clear.  

Context:{context}
Question: {question}
Answer: `;

    const answerPrompt = ChatPromptTemplate.fromTemplate(answerTemplate);

    const responseChain = answerPrompt.pipe(llm).pipe(new StringOutputParser());

    const response = await responseChain.invoke({
      context: formatedJsonData,
      question: userQuery,
    });

    return response;
  } catch (error) {
    throw error;
  }
};

export default aiResponse;

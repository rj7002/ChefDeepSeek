const API_URL = "https://api.sambanova.ai/v1/chat/completions";
const API_KEY = "82c3b4bb-1d1b-4746-9ab6-21db50664370";

const SYSTEM_PROMPT = `
You are a friendly and creative chef. When a user gives you a list of ingredients they have, suggest a recipe that they could cook using some or all of those ingredients.

- You don't have to use every ingredient they list.
- You can include a few additional ingredients that are common or might elevate the recipe, but keep extras minimal.
- Your goal is to help them cook something practical, tasty, and relatively simple.
- Format your response in **markdown** so it renders nicely on a web page.
- Include a **recipe name**, a short **description**, a list of **ingredients**, and **step-by-step instructions**.
`;

export async function getRecipeFromIngredients(ingredients) {
  const payload = {
    model: "DeepSeek-R1-Distill-Llama-70B",
    messages: [
      { role: "system", content: SYSTEM_PROMPT },
      { role: "user", content: `Here are the ingredients I have: ${ingredients.join(', ')}` }
    ],
    max_tokens: 2048,
    temperature: 0.7,
    top_p: 0.9,
    top_k: 50,
    stream: false
  };

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();
    let content = data?.choices?.[0]?.message?.content || 'No recipe returned.';

    content = content.replace(/<think>[\s\S]*?<\/think>/gi, '').trim();
    return content
  } catch (error) {
    console.error('Error fetching recipe:', error);
    return 'An error occurred while generating the recipe.';
  }
}

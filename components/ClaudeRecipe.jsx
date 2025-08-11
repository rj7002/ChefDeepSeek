import React from "react"
import { getRecipeFromIngredients } from "./ai"
import ReactMarkdown from 'react-markdown'

export default function ClaudeRecipe(props) {
    const ingredients = props.ingredients
    const [recipe, setRecipe] = React.useState("Generating recipe...")
    React.useEffect(() => {
        async function fetchRecipe() {
            const result = await getRecipeFromIngredients(ingredients)
            setRecipe(result)
        }

        fetchRecipe()
    }, [ingredients])
    return <section className="recipe">
        <h2>Chef DeepSeek Recommends:</h2>
        <ReactMarkdown children={recipe}/>
    </section>
}

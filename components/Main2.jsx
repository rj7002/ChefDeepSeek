import React from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientList from "./IngredientList"
export default function Main2() {
    
    const [ingredients,setIngredients] = React.useState([])
    const ingredientList = ingredients.map(i => (
        <li className="items">{i}</li>
    ))
    function handleClick(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(function() {
            return [...ingredients,newIngredient]
        })
    }

    function handleClick2(event) {
        event.preventDefault()
        setIngredients( function() {
            return [...ingredients].slice(0,ingredients.length-1)
        })
    }

    const [recipeShown,setRecipeShown] = React.useState(false)

    function getRecipe() {
        setRecipeShown(prevRecipeShown => !prevRecipeShown)
    }
   
    return (
        <>
            <main>
                <form action={handleClick}>
                    <input type="text" placeholder="e.g. thyme" name="ingredient"/>
                    <button>+ Add Ingredient</button>
                    <button onClick={handleClick2}>+ Remove Ingredient</button>
                </form>
                {ingredients.length > 0 && <IngredientList ingredients={ingredients} ingredientList={ingredientList} getRecipe={getRecipe} recipeShown={recipeShown}/>}  
                {recipeShown && 
                <>
                <ClaudeRecipe ingredients={ingredients}/>
                </>
                }      
            </main>
        </>
    )
}
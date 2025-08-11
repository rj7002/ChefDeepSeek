export default function IngredientList(props) {
    return (
            <>
            <h1 id="ingname">Listed ingredients:</h1>
            
            <ul className="ingredients">
                {props.ingredientList}
            </ul>
            {props.ingredients.length > 3 &&
                <>
                <div id="generate">
                <div id="generatetext">
                    <h2>Ready for a recipe?</h2>
                    <p>Generate a recipe from your list of ingredients</p>
                </div>
                <button onClick={props.getRecipe}>{props.recipeShown ? "Remove the" : "Get a"} recipe</button>
                </div> 
                </>
            }
            </>
    )
} 
    
    
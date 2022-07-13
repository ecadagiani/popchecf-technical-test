
export interface IngredientType {
    id: number
    name: string
}

export interface RecipeIngredientType {
    quantity?: number
    peopleNumber?: number
    ingredient: IngredientType
}

export interface RecipesType {
    id: number
    title: string
    content?: string
    ingredients: [RecipeIngredientType]
  }
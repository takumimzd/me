/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * Recipe API
 * OpenAPI spec version: 1.0.0
 */
export interface RecipeStepImage {
  id: number;
  imageUrl: string;
  recipeStepId: number;
}

export interface RecipeStep {
  id: number;
  order: number;
  description: string;
  recipeId: number;
}

export interface RecipeIngredient {
  id: number;
  name: string;
  amount: string;
  recipeId: number;
}

export interface User {
  id: number;
  name: string;
}

export interface Recipe {
  id: number;
  title: string;
  description: string;
  userId: number;
}
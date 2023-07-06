class RecipesController < ApplicationController
  before_action :authenticate_user

  def index
    if logged_in?
      recipes = Recipe.all.includes(:user)
      render json: recipes, include: :user
    else
      render json: { error: 'Unauthorized' }, status: :unauthorized
    end
  end

  def create
    recipe = current_user.recipes.build(recipe_params)
    if recipe.save
      render json: recipe,  status: :created
    else
      render json: { errors: recipe.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def recipe_params
    params.permit(:title, :instructions, :minutes_to_complete)
  end

  def logged_in?
    session[:user_id].present?
  end

  def authenticate_user
    unless logged_in?
      render json: { error: 'Unauthorized' }, status: :unauthorized
    end
  end
end

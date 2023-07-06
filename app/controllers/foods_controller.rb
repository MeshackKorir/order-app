class FoodsController < ApplicationController
    before_action :authenticate_user

    def index
      if logged_in?
        foods = Food.all
        render json: foods, include: :user
      else
        render json: { error: 'Unauthorized' }, status: :unauthorized
      end
    end
  
    def create
      food = Food.create(food_params)
      if food.save
        render json: food,  status: :created
      else
        render json: { errors: food.errors.full_messages }, status: :unprocessable_entity
      end
    end

    def update
      @food = Food.find(params[:id])
      if @food.update(food_params)
        render json: @food, status: :ok
      else
        render json: { error: 'Failed to update food.' }, status: :unprocessable_entity
      end
    end
  

    def destroy
      food = Food.find(params[:id])
      food.destroy
      head :no_content
    end
  
    private
    def food_params
      params.permit(:name, :quantity, :description, :price)
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

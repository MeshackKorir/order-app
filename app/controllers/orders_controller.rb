class OrdersController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :user_not_found
  before_action :authenticate_user
    def create
      order = Order.new(order_params)
      if order.save
        render json: order, status: :created
      else
        render json: order.errors, status: :unprocessable_entity
      end
    end

    def index
      orders = Order.order(created_at: :desc)
      render json: orders, include: ['user', 'orderitems', 'orderitems.food'] 
    end

    def show
      user = User.find(params[:id])
      orders = user.orders.includes(:orderitems)
      render json: orders, include: ['orderitems', 'orderitems.food']

    end
  
   



    private
  
    def order_params
      params.require(:order).permit(:user_id, :quantity, :price)
    end
    def user_not_found
      render json: { error: "User not found" }, status: :not_found
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
  
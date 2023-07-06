class OrdersController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :user_not_found

    def create
      order = Order.new(order_params)
      if order.save
        render json: order, status: :created
      else
        render json: order.errors, status: :unprocessable_entity
      end
    end

    def index
      orders = Order.all
      render json: orders
    end

    def show
      user = User.find(params[:id])
      orders = user.orders.includes(:orderitems)
      render json: orders, include: { orderitems: { include: :foods } }
    end
  
    private
  
    def order_params
      params.require(:order).permit(:user_id, :quantity, :price)
    end
    def user_not_found
      render json: { error: "User not found" }, status: :not_found
    end
  end
  
class OrderitemsController < ApplicationController

    def create
        order_items = params[:order_items]
        
        # Loop through the order items and create them individually
        order_items.each do |order_item_params|
          Orderitem.create(order_item_params.permit(:order_id, :food_id, :quantity, :price))
        end
        
        # Respond with a success message or appropriate JSON response
        render json: { message: 'Order items created successfully' }
      end
end

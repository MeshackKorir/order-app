class OrderitemSerializer < ActiveModel::Serializer
  attributes :id,  :order_id, :food_id, :quantity ,:price, :created_at
  belongs_to :food
end

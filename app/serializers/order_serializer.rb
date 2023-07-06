class OrderSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :quantity, :price, :created_at
  has_many :orderitems
  has_many :foods, through: :order_items
end
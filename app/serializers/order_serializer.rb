class OrderSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :quantity, :price, :created_at
  has_many :orderitems
  belongs_to :user
end
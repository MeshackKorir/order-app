class FoodSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :price, :quantity, :image
  has_many :orderitems
end

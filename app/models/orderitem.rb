class Orderitem < ApplicationRecord
    # Associations
    belongs_to :order
    belongs_to :food
  end
  
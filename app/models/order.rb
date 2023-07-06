class Order < ApplicationRecord
    # Associations
    belongs_to :user
    has_many :orderitems
  end
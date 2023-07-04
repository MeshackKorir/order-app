class CreateOrderitems < ActiveRecord::Migration[6.1]
  def change
    create_table :orderitems do |t|
      t.integer :order_id
      t.integer :food_id
      t.integer :quantity
      t.integer :price
      t.timestamps
    end
  end
end

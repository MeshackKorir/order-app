class CreateFoods < ActiveRecord::Migration[6.1]
  def change
    create_table :foods do |t|
      t.string :name
      t.integer :quantity
      t.integer :description
      t.integer :price
      t.timestamps
    end
  end
end

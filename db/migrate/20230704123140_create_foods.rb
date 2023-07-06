class CreateFoods < ActiveRecord::Migration[6.1]
  def change
    create_table :foods do |t|
      t.string :name
      t.integer :quantity
      t.text :description
      t.integer :price
      t.string :image, default: 'one.jpg'
      t.timestamps
    end
  end
end

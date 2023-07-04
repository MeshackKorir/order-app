User.destroy_all
Food.destroy_all
Orderitem.destroy_all

puts 'started'

user1 = User.create(username: "meshack", email: "Meshack@gmail.com",address: "Nairobi block c",password: "meshack",phone: "0722123223")
user2 = User.create(username: "mathew", email: "denis@gmail.com",address: "Mombasa block c",password: "mathew",phone: "072255523")
user3 = User.create(username: "charity", email: "charity@gmail.com",address: "Eldoret block c",password: "charity",phone: "076666223")
user4 = User.create(username: "denis", email: "denis@gmail.com",address: "Kisumu block c",password: "denis",phone: "0725555223")

food1 = Food.create(name: "Pizza", quantity: "10", description: "Order fine Pizza Here", price: "1000")
food2 = Food.create(name: "Beef", quantity: "5", description: "Order fine Beef Here", price: "500")
food3 = Food.create(name: "Chicken", quantity: "7", description: "Order fine Chicken Here", price: "400")
food4 = Food.create(name: "Stale", quantity: "9", description: "Order fine Stale Here", price: "300")

order1 = Order.create(user_id: user1.id, quantity: "2", price: "40")
order2 = Order.create(user_id: user2.id, quantity: "4", price: "40")
order3 = Order.create(user_id: user3.id, quantity: "3", price: "40")
order4 = Order.create(user_id: user1.id, quantity: "6", price: "40")

orderitem1 = Orderitem.create(order_id: order1.id, food_id: food1.id, quantity: "1", price: "40" )
orderitem2 = Orderitem.create(order_id: order2.id, food_id: food2.id, quantity: "1", price: "20")
orderitem3 = Orderitem.create(order_id: order3.id, food_id: food1.id, quantity: "1", price: "40")
orderitem4 = Orderitem.create(order_id: order4.id, food_id: food4.id, quantity: "1", price: "50")

#   create_table "orders", force: :cascade do |t|
#     t.integer "user_id"
#     t.integer "quantity"
#     t.integer "price"
#     t.datetime "created_at", precision: 6, null: false
#     t.datetime "updated_at", precision: 6, null: false
#   end


puts 'End'




#   create_table "orderitems", force: :cascade do |t|
#     t.integer "order_id"
#     t.integer "food_id"
#     t.integer "quantity"
#     t.integer "price"
#     t.datetime "created_at", precision: 6, null: false
#     t.datetime "updated_at", precision: 6, null: false
#   end
# create_table "foods", force: :cascade do |t|
#     t.string "name"
#     t.integer "quantity"
#     t.integer "description"
#     t.integer "price"
#     t.datetime "created_at", precision: 6, null: false
#     t.datetime "updated_at", precision: 6, null: false
#   end


#   create_table "recipes", force: :cascade do |t|
#     t.integer "user_id"
#     t.string "title"
#     t.text "instructions"
#     t.integer "minutes_to_complete"
#     t.datetime "created_at", precision: 6, null: false
#     t.datetime "updated_at", precision: 6, null: false
#     t.index ["user_id"], name: "index_recipes_on_user_id"
#   end

#   create_table "users", force: :cascade do |t|
#     t.string "username"
#     t.string "email"
#     t.string "phone"
#     t.string "address"
#     t.string "password_digest"
#     t.datetime "created_at", precision: 6, null: false
#     t.datetime "updated_at", precision: 6, null: false
#   end

User.destroy_all
Food.destroy_all
Orderitem.destroy_all
Order.destroy_all

puts 'started'

user1 = User.create(username: "meshack", email: "Meshack@gmail.com",address: "Nairobi block c",password: "meshack",phone: "0722123223")
user2 = User.create(username: "mathew", email: "denis@gmail.com",address: "Mombasa block c",password: "mathew",phone: "072255523")
user3 = User.create(username: "charity", email: "charity@gmail.com",address: "Eldoret block c",password: "charity",phone: "076666223")
user4 = User.create(username: "denis", email: "denis@gmail.com",address: "Kisumu block c",password: "denis",phone: "0725555223")

food1 = Food.create(name: "Pizza", quantity: "10", description: "Order fine Pizza Here", price: "1000" ,image: "one.jpg")
food2 = Food.create(name: "Garbage Salad", quantity: "5", description: "Order fine Beef Here", price: "500",image: "two.jpg")
food3 = Food.create(name: "Chicken", quantity: "7", description: "Order fine Chicken Here", price: "400",image: "three.jpg")
food4 = Food.create(name: "Cheese Fries", quantity: "9", description: "Order fine Stale Here", price: "300",image: "four.jpg")
food5 = Food.create(name: "Red Sauce Pasta", quantity: "7", description: "Order fine Chicken Here", price: "400",image: "five.jpg")
food6 = Food.create(name: "Garlic Bread", quantity: "9", description: "Order fine Stale Here", price: "300",image: "six.jpg")

order1 = Order.create(user_id: user1.id, quantity: "2", price: "40")
order2 = Order.create(user_id: user2.id, quantity: "4", price: "40")
order3 = Order.create(user_id: user3.id, quantity: "3", price: "40")
order4 = Order.create(user_id: user1.id, quantity: "6", price: "40")

orderitem1 = Orderitem.create(order_id: order1.id, food_id: food1.id, quantity: "1", price: "40" )
orderitem2 = Orderitem.create(order_id: order2.id, food_id: food2.id, quantity: "1", price: "20")
orderitem3 = Orderitem.create(order_id: order3.id, food_id: food1.id, quantity: "1", price: "40")
orderitem4 = Orderitem.create(order_id: order4.id, food_id: food4.id, quantity: "1", price: "50")



puts 'End'





## Project Title: Food app delivery System

## License Free.
## copyright Free Software.

## Authors Mathew Kipkoech , Charity Joseph, Meshack Korir and Denis Kamau

## Project Descrition
  The app is designed for food stores that want to online.a user can only access the services when loggen in. once logged in he/she can order food and view his/her orders.Admin can view all orders add foods or delete foods.


# setup instruction
        bundle install -on ruby folder
        rails db:migrate db:seed
        rails s

        npm install -on react folder
        npm start -on react folder

##  Summary
    #  Met objectives 
      perform all CRUD operations
      user can register,login, logout and reset password
      user can order food
      user can view his/her orders
      admin can add/delete fooods and view all orders

# Project obectives accomplished
  # FRONTEND - react
    App built in React
    Application has 11 routes
    6 Routes are protected by session
    user can reset password

  # BACKEND - rails
      Application has 12 endpoints(2 PATCH, 2 DELETE , 4 GET, 4   POST)
      7 endpoints are works when logged in
      4 database models creatd (user,food,order and orderitems)
      2 many-to-many relations 2 one-to-many relations



##### domain model

    https://drive.google.com/file/d/1u57YHkQCuCA2QnoY1-DIa0GFKmmkDhH5/view?usp=sharing

####   schema
  create_table "foods", force: :cascade do |t|
    t.string "name"
    t.integer "quantity"
    t.text "description"
    t.integer "price"
    t.string "image", default: "one.jpg"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "orderitems", force: :cascade do |t|
    t.integer "order_id"
    t.integer "food_id"
    t.integer "quantity"
    t.integer "price"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "orders", force: :cascade do |t|
    t.integer "user_id"
    t.integer "quantity"
    t.integer "price"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "phone"
    t.string "address"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end


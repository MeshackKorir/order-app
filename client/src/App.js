import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/header";
import Main from "./components/Main";
import Login from "./components/Login";
import Register from "./components/Register";
import { useEffect, useState } from "react";
import Addfood from "./components/Addfood";
import Order from "./components/Order";
import Myorders from "./components/Myorders";

function App() {
  const [foods, setFoods] = useState([]);
  const [cart, setCart] = useState(0);
  const [orders, setOrders] = useState([]);
  const [allorders, setAllOrders] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user);

          if (user && user.id) {
            fetch(`/orders/${user.id}`)
              .then((r) => r.json())
              .then((orders) => setOrders(orders));

            fetch("/foods")
              .then((r) => r.json())
              .then((foods) => setFoods(foods));

            fetch("/orders")
              .then((r) => r.json())
              .then((allorders) => setAllOrders(allorders));
          }
        });
      }
    });
  }, []);

  function handleAddFood(newFood) {
    setFoods([...foods, newFood]);
  }

  function handleDeleteFood(id) {
    const updatedFoods = foods.filter((food) => food.id !== id);
    setFoods(updatedFoods);
  }

  function handleLogout() {
    setUser(null);
  }

  const handleUpdateCart = (value) => {
    setCart(value);
  };

  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      <div className="wrapper">
        <Header user={user} onLogout={handleLogout} cart={cart} />
        <Routes>
          <Route
            path="/"
            element={
              <Main foods={foods} user={user} updateCart={handleUpdateCart} />
            }
          />
          <Route
            path="/addfood"
            element={
              <Addfood
                foods={foods}
                user={user}
                allorders={allorders}
                updateFood={handleDeleteFood}
                handleAddFood={handleAddFood}
              />
            }
          />
          <Route
            path="/order"
            element={
              <Order foods={foods} user={user} updateCart={handleUpdateCart} />
            }
          />
          <Route
            path="/myorders"
            element={
              <Myorders
                orders={orders}
                user={user}
                updateCart={handleUpdateCart}
              />
            }
          />

          {/* <Route path="/admin" element={<Admin user ={user}  foods ={foods} onFoodDelete={handleDeleteFood}
        onUpdateFood={handleUpdateFood}/>} /> */}
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;

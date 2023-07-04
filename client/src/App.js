import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/header";
import Main from "./components/Main";
import Login from "./components/Login";
import Register from "./components/Register";
import { useEffect, useState } from "react";
function App() {
  const [allItems, setAllItems] = useState([]);
  const [phones, setphones] = useState([]);
  const [orders, setorders] = useState([]);
  const [customers, setcustomers] = useState([]);
  const [search, setSearch] = useState("");
  const [calculations, setCalculations] = useState([]);

  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;
 
  function handleLogout() {
    setUser(null);
  }

  return (
    <>
      <div className="wrapper">
        <Header user={user} onLogout={handleLogout} />

        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;

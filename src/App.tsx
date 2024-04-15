import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { useEffect, useState } from "react";
import axios from "axios";
import AllMovements from "./components/Movements";
import ShowMovement from "./components/ShowMovement";
import AllSessions from "./components/Sessions";
import Signup from "./components/Signup";

function App() {
  const [user, setUser] = useState(null);
  async function fetchUser() {
    const token = localStorage.getItem("token");
    const resp = await axios.get(`/api/user`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(resp.data);
    setUser(resp.data);
  }
  //if there is a token (so if user logged in) it will fetch the user
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) fetchUser();
  }, []);
  return (
    <Router>
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/movements" element={<AllMovements />} />
        <Route path="/sessions" element={<AllSessions user={user} />} />
        <Route path="/movements/:movementId" element={<ShowMovement />} />
      </Routes>
    </Router>
  );
}

export default App;

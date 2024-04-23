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
import Login from "./components/Login";
import AllPosts from "./components/Posts";
import About from "./components/About";
import AddMovementModal from "./components/AddMovement";
import { baseUrl } from "./config";

function App() {
  const [user, setUser] = useState(null);
  async function fetchUser() {
    const token = localStorage.getItem("token");
    const resp = await axios.get(`${baseUrl}/user`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("This is the resp.data", token);
    setUser(resp.data);
  }
  //if there is a token (so if user logged in) it will fetch the user
  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) fetchUser();
    console.log("This is the user", user);
  }, []);
  return (
    <Router>
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login fetchUser={fetchUser} />} />
        <Route path="/movements" element={<AllMovements user={user} />} />
        <Route
          path="/addmovement"
          element={<AddMovementModal onClose user={user} />}
        />
        <Route path="/sessions" element={<AllSessions user={user} />} />
        <Route path="/posts" element={<AllPosts user={user} />} />
        <Route
          path="/movements/:movementId"
          element={<ShowMovement user={user} />}
        />
        <Route path="/posts/:postId" element={<AllPosts user={user} />} />
      </Routes>
    </Router>
  );
}

export default App;

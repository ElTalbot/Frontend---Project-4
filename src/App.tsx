import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/home/Home";
import { useEffect, useState } from "react";
import axios from "axios";
import AllMovements from "./pages/allMovements/Movements";
import ShowMovement from "./pages/showMovement/ShowMovement";
import AllSessions from "./pages/allSessions/Sessions";
import SignupPage from "./pages/signupPage/signupPage";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import "./app.scss";
import LoginPage from "./pages/loginPage/loginPage";

import AllPosts from "./pages/community/community";
import About from "./pages/about/About";
import Privacy from "./pages/legal/privacy";
import Terms from "./pages/legal/terms";
import AddMovementModal from "./pages/AddMovementForm/AddMovementForm";
import { baseUrl } from "./config";

function App() {
  const [user, setUser] = useState(null);
  async function fetchUser() {
    const token = localStorage.getItem("token");
    const resp = await axios.get(`${baseUrl}/user`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setUser(resp.data);
  }
  //if there is a token (so if user logged in) it will fetch the user
  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) fetchUser();
  }, []);
  return (
    <Router>
      <Header user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LoginPage fetchUser={fetchUser} />} />
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
      <Footer user={user} setUser={setUser} />
    </Router>
  );
}

export default App;

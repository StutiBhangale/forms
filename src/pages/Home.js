import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Home.css";
function Home() {
  const nav = useNavigate();

  const userName = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("loggedin");
    nav("/login");
  };
  return (
    <div className="container">
      <h4>Home</h4>
      <div className="centered-content">Welcome {userName.name}</div>
      <div className="centered-content">
        <Button onClick={handleLogout} variant="primary" type="submit">
          Logout
        </Button>
      </div>
    </div>
  );
}

export default Home;

import React from "react";
import "./styles.css";
import axios from "axios";
import MatchCard from "./matchCard";
export default function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="matches-container">
      <h1 style={{ textAlign: "center" }}>Live Football</h1>
      <form onSubmit={handleSubmit}>
        <h2>Search any team</h2>
        <input type="text" />
      </form>
      <div className="matches-list-conateiner">
        <MatchCard />
      </div>
    </div>
  );
}

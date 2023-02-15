import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import MyGames from "./Components/MyGames";
import GameList from "./Components/GameList";
import gameListState from "./Components/GameListState";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<GameList state={gameListState} />} />
        <Route exact path="/myGames" element={<MyGames />} />
      </Routes>
    </Router>
  );
}

export default App;

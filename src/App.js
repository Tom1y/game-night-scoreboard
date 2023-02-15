import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import GameDetail from "./Components/GameDetail";
import GameList from "./Components/GameList";
import gameListState from "./Components/GameListState";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<GameList state={gameListState} />} />
        <Route
          exact
          path="/gameDetail/:id"
          element={<GameDetail state={gameListState} />}
        />
      </Routes>
    </Router>
  );
}

export default App;

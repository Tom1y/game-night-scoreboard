import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./GameList.css";

function GameList(props) {
  const navigate = useNavigate();

  function pageRedirect(id) {
    navigate(`/gameDetail/${id}`);
  }
  // console.log(props.state);
  return (
    <>
      {props.state.games.map((game) => {
        return (
          <div
            className="gameCard"
            onClick={() => pageRedirect(game.id)}
            key={game.id}
          >
            <h2>{game.name}</h2>
            <img src={game.heroImgUrl} alt="hero img"></img>
          </div>
        );
      })}
    </>
  );
}

export default observer(GameList);

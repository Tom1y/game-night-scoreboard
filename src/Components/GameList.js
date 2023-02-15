import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import "./GameList.css";

function GameList(props) {
  // console.log(props.state);
  return (
    <>
      {props.state.games.map((game) => {
        return (
          <div className="gameCard">
            <h2>{game.name}</h2>
            <img src={game.heroImgUrl} alt="hero img"></img>
          </div>
        );
      })}
    </>
  );
}

export default observer(GameList);

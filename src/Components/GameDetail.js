import React from "react";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import "./GameDetail.css";

function GameDetails(props) {
  let { id } = useParams();

  let game = props.state.games.find((element) => element.id.toString() === id);

  function handleSubmit(e) {
    e.preventDefault();
    game.addPlayer(e.target.player.value);
  }

  function addWins(name) {
    let player = game.players.find((element) => element.name === name);
    player.wins++;
  }

  function decreaseWins(name) {
    let player = game.players.find((element) => element.name === name);
    player.wins--;
  }

  function increaseNumOfGamesPlayed(name) {
    let player = game.players.find((element) => element.name === name);
    player.played++;
  }

  function decreaseNumOfGamesPlayed(name) {
    let player = game.players.find((element) => element.name === name);
    player.played--;
  }

  function removePlayer(name) {
    let player = game.players.find((element) => element.name === name);
    let index = game.players.indexOf(player);
    game.players.splice(index, 1);
  }

  return (
    <div className="gameDetail">
      <div className="gameDetailInfo">
        <img
          src={game.heroImgUrl}
          className="gameDetailImg"
          alt="game img"
        ></img>
        <h2>{game.name}</h2>
      </div>
      <table>
        <tbody>
          <tr>
            <th>players</th>
            <th>games played</th>
            <th>wins</th>
            <th></th>
          </tr>
          {game.players.map((player) => {
            return (
              <tr key={player.name}>
                <th>{player.name}</th>
                <th>
                  {player.played}{" "}
                  <button onClick={() => decreaseNumOfGamesPlayed(player.name)}>
                    -
                  </button>
                  <button onClick={() => increaseNumOfGamesPlayed(player.name)}>
                    +
                  </button>
                </th>
                <th>
                  {player.wins}{" "}
                  <button onClick={() => decreaseWins(player.name)}>-</button>
                  <button onClick={() => addWins(player.name)}>+</button>
                </th>
                <th>
                  <button onClick={() => removePlayer(player.name)}>
                    remove player
                  </button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
      <form onSubmit={handleSubmit} className="gameDetailAddPlayer">
        <input type="text" name="player" placeholder="player name"></input>
        <button>Add player</button>
      </form>
    </div>
  );
}

export default observer(GameDetails);

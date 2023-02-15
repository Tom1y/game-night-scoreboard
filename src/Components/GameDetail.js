import React from "react";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";

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
      <table>
        <tbody>
          <tr>
            <th>{game.name}</th>
            <th>num. of games played</th>
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
      <form onSubmit={handleSubmit}>
        <input type="text" name="player"></input>
        <button>Add player</button>
      </form>
    </div>
  );
}

export default observer(GameDetails);

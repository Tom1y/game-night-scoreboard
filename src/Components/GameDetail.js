import { observable } from "mobx";
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

  return (
    <div className="gameDetail">
      <table>
        <tbody>
          <tr>
            <th>{game.name}</th>
            <th>num. of games played</th>
            <th>wins</th>
          </tr>
          {game.players.map((player) => {
            return (
              <tr key={player.name}>
                <th>{player.name}</th>
                <th>{player.played}</th>
                <th>{player.wins}</th>
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

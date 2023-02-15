import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import "./GameList.css";

function GameList(props) {
  const navigate = useNavigate();

  function pageRedirect(id) {
    navigate(`/gameDetail/${id}`);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.state.newGame(
      e.target.game.value,
      e.target.heroImgUrl.value,
      e.target.detailPageUrl.value
    );
  }

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
      <h3>Add game</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="game" placeholder="name of the game"></input>
        <input type="text" name="heroImgUrl" placeholder="add img url"></input>
        <input
          type="text"
          name="detailPageUrl"
          placeholder="add detail page url"
        ></input>
        <button>Add game</button>
      </form>
    </>
  );
}

export default observer(GameList);

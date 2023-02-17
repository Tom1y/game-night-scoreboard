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
      e.target.detailPageUrl.value,
      e.target.description.value
    );
  }

  return (
    <>
      <div className="gameCardsLayout">
        {props.state.games.map((game) => {
          return (
            <div className="gameCard" key={game.id}>
              <h2>{game.name}</h2>
              <img src={game.heroImgUrl} alt="hero img"></img>
              <p>{game.description}</p>
              <div>
                <button>
                  <a href={game.detailPageUrl} target="_blank">
                    game page
                  </a>
                </button>
                <button onClick={() => pageRedirect(game.id)}>
                  scoreboard
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="addGameCard">
        <h3>Add game</h3>
        <form onSubmit={handleSubmit} className="addGameForm">
          <input type="text" name="game" placeholder="name of the game"></input>
          <input
            type="text"
            name="heroImgUrl"
            placeholder="add img url"
          ></input>
          <input
            type="text"
            name="description"
            placeholder="short game description"
          ></input>
          <input
            type="text"
            name="detailPageUrl"
            placeholder="add detail page url"
          ></input>
          <button>Add game</button>
        </form>
      </div>
    </>
  );
}

export default observer(GameList);

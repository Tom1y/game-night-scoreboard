import { makeAutoObservable } from "mobx";

class GameList {
  games = [];

  constructor() {
    makeAutoObservable(this);
  }

  totalGames() {
    return this.games.length;
  }

  createGame(
    game = {
      id: 0,
      name: "",
      numOfPlayers: 0,
      numOfGamesPlayed: 0,
      detailPageUrl: "",
      heroImgUrl: "",
    }
  ) {
    this.games.push(game);
  }

  updateGame(gameId, update) {
    const gameIndexAtId = this.games.findIndex((game) => game.id === gameId);
    if (gameIndexAtId > -1 && update) {
      this.games[gameIndexAtId] = update;
    }
  }

  deleteGame(gameId) {
    const gameIndexAtId = this.games.findIndex((game) => game.id === gameId);
    if (gameIndexAtId > -1) {
      this.games.splice(gameIndexAtId, 1);
    }
  }
}

const gameListState = new GameList();
gameListState.createGame({
  id: 1,
  name: "Catan",
  numOfGamesPlayed: 2,
  numOfPlayers: 4,
  detailPageUrl: "https://boardgamegeek.com/boardgame/13/catan",
  heroImgUrl:
    "https://cf.geekdo-images.com/W3Bsga_uLP9kO91gZ7H8yw__itemrep/img/IzYEUm_gWFuRFOL8gQYqGm5gU6A=/fit-in/246x300/filters:strip_icc()/pic2419375.jpg",
});
gameListState.createGame({
  id: 2,
  name: "Uno",
  numOfGamesPlayed: 6,
  numOfPlayers: 3,
  detailPageUrl: "https://boardgamegeek.com/boardgame/2223/uno",
  heroImgUrl:
    "https://cf.geekdo-images.com/6V2cU_EV_vPdE_C3MEyMkw__itemrep/img/5PllXAcUEihn4JdqHc9YM2qfU8M=/fit-in/246x300/filters:strip_icc()/pic6332152.png",
});

export default gameListState;

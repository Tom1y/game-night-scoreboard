import { makeAutoObservable } from "mobx";
class Game {
  id = 0;
  name = "";
  players = [];
  numOfGamesPlayed = 0;
  heroImgUrl = "";
  detailPageUrl = "";

  constructor(id, name, heroImgUrl, detailPageUrl) {
    this.id = id;
    this.name = name;
    this.heroImgUrl = heroImgUrl;
    this.detailPageUrl = detailPageUrl;
    makeAutoObservable(this);
  }

  addPlayer(name) {
    for (let player of this.players) {
      if (player.name === name) {
        return;
      }
    }
    this.players.push({ name: name, played: 0, wins: 0 });
  }
}

class GameList {
  games = [];

  constructor() {
    makeAutoObservable(this);
  }

  createGame(game) {
    this.games.push(game);
  }
}

const gameListState = new GameList();
gameListState.createGame(
  new Game(
    1,
    "Catan",
    "https://cf.geekdo-images.com/W3Bsga_uLP9kO91gZ7H8yw__itemrep/img/IzYEUm_gWFuRFOL8gQYqGm5gU6A=/fit-in/246x300/filters:strip_icc()/pic2419375.jpg",
    "https://boardgamegeek.com/boardgame/13/catan"
  )
);
gameListState.createGame(
  new Game(
    2,
    "Uno",
    "https://cf.geekdo-images.com/6V2cU_EV_vPdE_C3MEyMkw__itemrep/img/5PllXAcUEihn4JdqHc9YM2qfU8M=/fit-in/246x300/filters:strip_icc()/pic6332152.png",
    "https://boardgamegeek.com/boardgame/2223/uno"
  )
);

export default gameListState;

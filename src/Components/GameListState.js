import { makeAutoObservable } from "mobx";
class Game {
  id = 0;
  name = "";
  players = [];
  numOfGamesPlayed = 0;
  heroImgUrl = "";
  detailPageUrl = "";
  description = "";

  constructor(id, name, heroImgUrl, detailPageUrl, description) {
    this.id = id;
    this.name = name;
    this.heroImgUrl = heroImgUrl;
    this.detailPageUrl = detailPageUrl;
    this.description = description;
    makeAutoObservable(this);
  }

  addPlayer(name) {
    if (!this.players.find((element) => element.name === name)) {
      this.players.push({ name: name, played: 0, wins: 0 });
    }
    //   for (let player of this.players) {
    //     if (player.name === name) {
    //       return;
    //     }
    //   }
    //   this.players.push({ name: name, played: 0, wins: 0 });
  }
}

class GameList {
  id = 0;
  games = [];

  constructor() {
    makeAutoObservable(this);
  }

  newGame(name, heroImgUrl, detailPageUrl, description) {
    let game = new Game(
      this.id++,
      name,
      heroImgUrl,
      detailPageUrl,
      description
    );
    this.games.push(game);
  }
}

const gameListState = new GameList();
gameListState.newGame(
  "Catan",
  "https://cf.geekdo-images.com/W3Bsga_uLP9kO91gZ7H8yw__itemrep/img/IzYEUm_gWFuRFOL8gQYqGm5gU6A=/fit-in/246x300/filters:strip_icc()/pic2419375.jpg",
  "https://boardgamegeek.com/boardgame/13/catan",
  "Collect and trade resources to build up the island of Catan in this modern classic."
);
gameListState.newGame(
  "Uno",
  "https://cf.geekdo-images.com/6V2cU_EV_vPdE_C3MEyMkw__itemrep/img/5PllXAcUEihn4JdqHc9YM2qfU8M=/fit-in/246x300/filters:strip_icc()/pic6332152.png",
  "https://boardgamegeek.com/boardgame/2223/uno",
  "Get rid of your cards first, but don't forget to say UNO!"
);
gameListState.newGame(
  "7 Wonders Duel",
  "https://cf.geekdo-images.com/zdagMskTF7wJBPjX74XsRw__itemrep/img/x5L93n_pSsxfFZ0Ir-JqtjLf-Jw=/fit-in/246x300/filters:strip_icc()/pic2576399.jpg",
  "https://boardgamegeek.com/boardgame/173346/7-wonders-duel",
  "Science? Military? What will you draft to win this head-to-head version of 7 Wonders?"
);
gameListState.newGame(
  "Carcasonne",
  "https://cf.geekdo-images.com/okM0dq_bEXnbyQTOvHfwRA__itemrep/img/_GLRhUoVx6Zp4kTE0rv_gi9cyOQ=/fit-in/246x300/filters:strip_icc()/pic6544250.png",
  "https://boardgamegeek.com/boardgame/822/carcassonne",
  "Shape the medieval landscape of France, claiming cities, monasteries and farms."
);

export default gameListState;

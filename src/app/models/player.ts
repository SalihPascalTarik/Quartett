import {Card} from "./card";

export class Player {

  cardsPlayer: Card[]=[];
  id: Number;
  name: string;
  points: Number;


  constructor(id:number, name: string, points: Number) {
    this.id=id;
    this.name = name;
    this.points = points;
  }
}

export const PLAYERS: Player[]=[
  new Player(1,"Spieler 1", 0),
  new Player(2,"Computer", 0)
]

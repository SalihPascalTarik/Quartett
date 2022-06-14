export class Card {

  cards: number;
  titleT: string;
  quantityT: Number;
  heightT: Number;
  lenghtT: Number;
  widthT: Number;


  constructor(cards: number, titleT: string, quantityT: Number, heightT: Number, lenghtT: Number, widthT: Number) {
    this.cards = cards;
    this.titleT = titleT;
    this.quantityT = quantityT;
    this.heightT = heightT;
    this.lenghtT = lenghtT;
    this.widthT = widthT;
  }
}

export const CARDS: Card[]=[
  new Card(1,"Tank",5,80,40,6000),
  new Card(2,"Tank2",10,70,30,5000),
  new Card(3,"Tank3",15,50,60,8000),
]

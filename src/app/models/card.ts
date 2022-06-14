export class Card {

  id: number;
  titleT: string;
  quantityT: Number;
  heightT: Number;
  lenghtT: Number;
  widthT: Number;


  constructor(id: number, titleT: string, quantityT: Number, heightT: Number, lenghtT: Number, widthT: Number) {
    this.id = id;
    this.titleT = titleT;
    this.quantityT = quantityT;
    this.heightT = heightT;
    this.lenghtT = lenghtT;
    this.widthT = widthT;

  }


}

export const CARDS: Card[]=[
  new Card(1,"Leopard",4700,2.62,9.55,3.37),
  new Card(2,"Oplot-M",368,2.22,7.71,3.60),
  new Card(3,"AMX-56 Leclerc",132,2.53,6.88,3.70),

  new Card(4,"panzer4",4700,2.62,9.55,3.37),
  new Card(5,"panzer5",368,2.22,7.71,3.60),
  new Card(6,"panzer6",132,2.53,6.88,3.70)

]

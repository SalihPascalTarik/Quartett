import { Component } from '@angular/core';
import { Card, CARDS} from "./models/card";
import {Game} from "./models/game";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  game: Game;
  cards=CARDS;
  a=0;
  b=0;
  constructor() {
    this.game = new Game();
    console.log(this.game.cards);
    for(let i=0;i<this.game.cards.length;i++){
      if(i % 2 == 0){
        this.game.player1.cardsPlayer.push(this.game.cards[i]);
        console.log(this.game.player1.cardsPlayer)

      }else{
        this.game.player2.cardsPlayer.push(this.game.cards[i+1]);
        console.log(this.game.player2.cardsPlayer)

      }

    }


  }

}

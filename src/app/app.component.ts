import { Component } from '@angular/core';
import { Card, CARDS} from "./models/card";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cards = CARDS;




    a = Math.round(Math.random() * 2);
    b = Math.round(Math.random() * 2);

    if(a=3){
      a=a-1;
    }


}

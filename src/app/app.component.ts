import { Component } from '@angular/core';
import { Card, CARDS} from "./models/card";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  cards=CARDS;


}

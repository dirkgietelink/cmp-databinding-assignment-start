import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  odds: number[] = [];
  evens: number[] = [];

  onGameStarted(curGameTime: number) {
    console.log(curGameTime);
    if (curGameTime % 2 === 0) {
      this.evens.push(curGameTime);
    } else {
      this.odds.push(curGameTime);
    }
  }

}

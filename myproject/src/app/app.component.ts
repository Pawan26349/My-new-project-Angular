import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello world';
  constructor(){
    // setTimeout(() => {
    //   this.title="changed Title";
    // }, 2000);
  }
}

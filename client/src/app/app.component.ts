import { AppService } from './app.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  response = '';

  constructor(private appService: AppService) {}

  getHolloWorld() {
     this.appService.getHelloWorld().subscribe((hello) => {
                this.response = hello;
            });
  }

}

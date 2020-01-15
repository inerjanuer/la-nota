import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'la-nota';

  constructor (private router:Router){}

  logout():void{
  	this.router.navigate(['/inicio'])	
  }
  
}

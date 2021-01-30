import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
  categories : any;
  dishOfTheDay : any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://jelonek-app.herokuapp.com/').toPromise().then((app) => {
      this.categories = (app as any);

      let dishes = (app as any);
      let dishesQuantity = dishes.length;
      let random = Math.floor(Math.random() * dishesQuantity);
      this.dishOfTheDay = dishes[random];   
    });
  }
  filterByCategory(type : any){
    return this.categories.filter((x : any) => x.idkategoria == type);
  }
  
  
}

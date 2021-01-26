import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {

  categories : any;
  dishOfTheDay : any;

  customOptions: OwlOptions = {
    autoHeight: false,
    autoWidth: true,
    center: true,
    loop: true,
    margin: 100,
    nav: false,
    merge: true,
    dots: true,
    autoplay: false,
    items: 1
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:3300').toPromise().then((app) => {
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



import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare var $: any;

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {

  dishes: any;
  dishesQuantity : any;
  categories : any;
  uniqueItems: any;


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:3300').toPromise().then((app) => {
      this.dishes = (app as any);
      this.categories = (app as any);
      this.dishesQuantity = this.dishes.length;
      let random = Math.floor(Math.random() * this.dishesQuantity);
      this.dishes = this.dishes[random];
      
      this.uniqueItems = this.categories;
    });
    
    $('.owl-carousel').owlCarousel({
      loop:false,
      margin:10,
      nav:false,
      merge:true,
      autoplay:false, //TODO true
      autoplayTimeout:4000,
      items:1
    });



  }

  
}



import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {gsap} from 'gsap'
import * as AOS from 'aos';
declare var $: any;

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
    AOS.init({
      once: true,
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      disable: function () {
        let maxWidth = 1355;
        return window.innerWidth < maxWidth;
      },
    }
    )
    this.http.get('http://localhost:3300').toPromise().then((app) => {
      this.categories = (app as any);

      let dishes = (app as any);
      let dishesQuantity = dishes.length;
      let random = Math.floor(Math.random() * dishesQuantity);
      this.dishOfTheDay = dishes[random];   
    });
    gsap.from(".animation",{duration:2,opacity:0,y:-50,scale:0.7,ease:"back"});
  }
  filterByCategory(type : any){
    return this.categories.filter((x : any) => x.idkategoria == type);
  }
  
  
}


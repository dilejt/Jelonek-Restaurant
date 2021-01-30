import { Component, OnInit } from '@angular/core';
import { OwlCarousel } from 'ngx-owl-carousel';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';

declare let $:any;
let owl = $('owl-carousel-o');

@Component({
  selector: 'app-opinie',
  templateUrl: './opinie.component.html',
  styleUrls: ['./opinie.component.css']
})
export class OpinieComponent implements OnInit {
  customOptions: any = {
    loop: true,
    mouseDrag:false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoplay:true,
    paginationSpeed : 400,
    singleItem:true,
    animateOut: 'animate__animated animate__slideOutDown',
    animateIn: 'animate__animated animate__flipInX',
    //animateIn: 'animate__animated animate__slideInUp',
    navSpeed: 400,
    responsive: {
      0: {
        items: 1 
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
    
  }
declare activeSlides:SlidesOutputData;
declare slidesStore:any[];
  constructor() { }
  getData(data: SlidesOutputData)
  {
    this.activeSlides = data;
    console.log(this.activeSlides);
  }
  
  
  ngOnInit(): void 
  {}

}
$('owl-carousel-o').on('mousewheel', 'ng-template', function (e: { deltaY: number; preventDefault: () => void; }) 
{
  if (e.deltaY>0) 
  {
    $('owl-carousel-o').trigger('next.owl.carousel');
  } 
  else 
  {
    $('owl-carousel-o').trigger('prev.owl.carousel');
  }
  e.preventDefault();
});
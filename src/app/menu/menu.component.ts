import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { gsap } from 'gsap'

declare var $: any;
var tomatoAnim = true;

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
    this.http.get('http://localhost:3300').toPromise().then((app) => {
      this.categories = (app as any);

      let dishes = (app as any);
      let dishesQuantity = dishes.length;
      let random = Math.floor(Math.random() * dishesQuantity);
      this.dishOfTheDay = dishes[random];

      $(window).scrollTop(0);
    });

  }

  filterByCategory(type : any){
    return this.categories.filter((x : any) => x.idkategoria == type);
  }
  
}

$(document).ready(function() {

  $(window).scroll(function() {

    var topPosition = parseInt($("#decorationImg1").css("top"), 10);
    if($(window).scrollTop()>=topPosition-450 && $(window).scrollTop()<=topPosition){
      if(tomatoAnim)
      {
        gsap.from("#decorationImg1",{transformOrigin: "50% 50%", opacity: 0, x:-200});
        gsap.to("#decorationImg1",{duration: 1, rotation: 360, opacity: 1, x:0});
        tomatoAnim = false;
      }
    }
    var $width = $(window).width();
    if($width >= 1850){
      windowScroll();
    }

  });

});

function windowScroll()
{
  var st = $(window).scrollTop();
  $("#decorationImg0").css({"top":1100-st * 0.5 + "px"});
  $("#decorationImg2").css({"top":10500-st * 0.4 + "px"});
  $("#decorationImg3").css({"top":13000-st * 0.5 + "px"});
  $("#decorationImg4").css({"top":17000-st * 0.5 + "px"});
  $("#decorationImg5").css({"top":21000-st * 0.5 + "px"});
  $("#decorationImg6").css({"top":24000-st * 0.5 + "px"});
}

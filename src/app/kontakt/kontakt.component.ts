import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { gsap,TimelineMax,Power2,TweenMax } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StarRatingComponent } from 'ng-starrating';
declare var $: any;
@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.css'],
  animations: []
})
export class KontaktComponent implements OnInit {

  opinionForm : any;
  rating : any;

  onClickSubmit(data : any) {
    data.rating = this.rating;
    
    const headers = new HttpHeaders()
    .set('Authorization', 'my-auth-token')
    .set('Content-Type', 'application/json');

    this.http.post('http://localhost:3300/kontakt', data, {
      headers: headers
    })
    .subscribe(data => {
    });
  }
  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_j2x8r1d', 'template_irk4mw1', e.target as HTMLFormElement, 'user_AiaCcuoHWj0ESy1Z8X13w')
      .then((result: EmailJSResponseStatus) => {     
      }, (error) => {
      });
  }
  
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    $(window).scrollTop(0);
    f1();
    animacja();
    this.opinionForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      subject: new FormControl(''),
      message: new FormControl(''),
    });
    TweenMax.set(".char", {opacity: 0});
    var tl=new TimelineMax({repeat:0,repeatDelay:0});
    tl.staggerTo(".char",1.5,{opacity:1,y:20,ease:Power2.easeInOut,repeat:0,yoyo:false,},0.13 ).delay(3);
  }

  onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) 
  {
    this.rating=$event.newValue;
  }
}
(function(){
  emailjs.init("user_AiaCcuoHWj0ESy1Z8X13w");
})();

function f1()
{
  AOS.init({
    once: true,
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    disable: function () {
      let maxWidth = 1355;
      return window.innerWidth < maxWidth;
    },
  })
}

function animacja()
{
  
  let mql = window.matchMedia('(max-width: 600px)');
  if(mql.matches==false)
  {
    gsap.registerPlugin(CSSRulePlugin, ScrollTrigger);

     let tl = gsap.timeline({
      scrollTrigger:{
        trigger:".anim1",
        pin:false,  
        start:"bottom bottom",
      }
     });

     let rule = CSSRulePlugin.getRule("span:after");
     tl.from(".anim1", {y:-50, stagger: .2, opacity: 0})
       .to(rule, {duration: 0.7,cssRule: {scaleY: 0}}, "-=2.2");
  }
}

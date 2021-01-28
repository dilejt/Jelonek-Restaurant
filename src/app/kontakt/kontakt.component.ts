import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { gsap } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.css'],
  animations: []
})
export class KontaktComponent implements OnInit {

  constructor( ) { }
  
  ngOnInit(): void {
    f1() 
    animacja();
  }
 
}
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
  }
  )

}
function animacja()
{
  let mql = window.matchMedia('(max-width: 600px)');
  if(mql.matches==false)
  {
    gsap.registerPlugin(CSSRulePlugin, ScrollTrigger);
    //  let tl = gsap.timeline({defaults:{duration: 1}});
     let tl = gsap.timeline({
     scrollTrigger:{
       trigger:".anim1",
       pin:false,
       start:"bottom bottom",
     }
     })
     let rule = CSSRulePlugin.getRule("span:after");
     tl.from(".anim1", {y:-50, stagger: .2, opacity: 0})
       .to(rule, {duration: 0.7,cssRule: {scaleY: 0}}, "-=2.2")
       .from("aside", {backgroundPosition: '200px 0px', opacity: 0}, "-=1.5")
  }
   else
   {

   }
}
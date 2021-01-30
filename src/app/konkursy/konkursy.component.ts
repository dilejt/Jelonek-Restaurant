import { Component, OnInit } from '@angular/core';
import { gsap } from "gsap";
import { delay } from 'lodash';
@Component({
  selector: 'app-konkursy',
  templateUrl: './konkursy.component.html',
  styleUrls: ['./konkursy.component.css']
})
export class KonkursyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let mql = window.matchMedia('(max-width: 1670px)');
    if(mql.matches==false)
    {
      gsap.from(".animation2",{duration:1.5,opacity:0,x:-600,scale:0.7,ease:"bounce"});

      gsap.from(".animation",{duration:1.5,opacity:0,x:300,scale:0.7,ease:"bounce"}).delay(1.5);
      gsap.from(".animation1",{duration:1.5,opacity:0,y:-400,x:200,scale:0.7,ease:"back"}).delay(0.7);

    }
    else
    {

    }
  }

}

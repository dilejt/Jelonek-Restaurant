import { Component, OnInit } from '@angular/core';
import {gsap} from 'gsap'
import * as AOS from 'aos';
import { loader } from '../loader';

declare var $: any;

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    loader();
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
    gsap.from(".animation",{duration:1,opacity:0,x:-100,y:-400,scale:0.8,ease:"power"}).delay(3);
    $(window).scrollTop(0);
  }

}

import { Component, OnInit } from '@angular/core';
import {gsap} from 'gsap'

declare var $: any;
@Component({
  selector: 'app-onas',
  templateUrl: './onas.component.html',
  styleUrls: ['./onas.component.css']
})
export class OnasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    gsap.from(".animation",{duration:1,opacity:0,x:-400,scale:0.8,ease:"power0"});
    $(document).scroll(function()
    {
      checkOffset();
    })

  }
 
}
function checkOffset() {
  if($('#header').offset().top + $('#header').height() 
                                         >= $('#tabela').offset().top - 10)
      $('#przycisk').css('position', 'absolute');
  if($(document).scrollTop() + window.innerHeight < $('#stop').offset().top+80)
      $('#przycisk').css('position', 'fixed'); // restore when you scroll up
}
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { loader } from '../loader';

declare let $:any;

@Component({
  selector: 'app-opinie',
  templateUrl: './opinie.component.html',
  styleUrls: ['./opinie.component.css']
})
export class OpinieComponent implements OnInit {
  clients : any;

  opinionOptions: any = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: true,
    dots: false,
    autoplay: true,
    paginationSpeed : 400,
    singleItem: true,
    animateOut: 'animate__animated animate__slideOutDown',
    animateIn: 'animate__animated animate__flipInX',
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

  constructor(private http: HttpClient) { }
  
  ngOnInit(): void 
  {
    loader();
    $(window).scrollTop(0);

    this.http.get('https://jelonek-app.herokuapp.com/opinie').toPromise().then((app) => {
      this.clients = (app as any);
    });
  }

}  
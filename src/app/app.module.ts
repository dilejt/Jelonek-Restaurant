import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { MenuComponent } from './menu/menu.component';
import { KonkursyComponent } from './konkursy/konkursy.component';
import { IndexComponent } from './index/index.component';
import { OnasComponent } from './onas/onas.component';
import { FilterPipe } from './index/uniqueFilter.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NewsComponent } from './news/news.component';
import { OpinieComponent } from './opinie/opinie.component';

@NgModule({
  declarations: [
    AppComponent,
    KontaktComponent,
    MenuComponent,
    KonkursyComponent,
    IndexComponent,
    OnasComponent,
    FilterPipe,
    NewsComponent,
    OpinieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

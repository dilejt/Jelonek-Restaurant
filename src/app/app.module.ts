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

@NgModule({
  declarations: [
    AppComponent,
    KontaktComponent,
    MenuComponent,
    KonkursyComponent,
    IndexComponent,
    OnasComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

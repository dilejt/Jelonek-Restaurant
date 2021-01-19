import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { MenuComponent } from './menu/menu.component';
import { KonkursyComponent } from './konkursy/konkursy.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OnasComponent } from './onas/onas.component';

@NgModule({
  declarations: [
    AppComponent,
    KontaktComponent,
    MenuComponent,
    KonkursyComponent,
    OnasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

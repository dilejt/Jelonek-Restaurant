import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KonkursyComponent } from './konkursy/konkursy.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { MenuComponent } from './menu/menu.component';
import { NewsComponent } from './news/news.component';
import { IndexComponent } from './index/index.component';
import { OnasComponent } from './onas/onas.component';
import { OpinieComponent } from './opinie/opinie.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: 'kontakt', component: KontaktComponent},
  { path: 'menu', component: MenuComponent},
  { path: 'konkursy', component: KonkursyComponent},
  { path: 'onas', component: OnasComponent},
  { path: 'news', component: NewsComponent},
  { path: 'opinie', component: OpinieComponent},
  { path: '', component: IndexComponent}
];

@NgModule({
  imports: [HttpClientModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

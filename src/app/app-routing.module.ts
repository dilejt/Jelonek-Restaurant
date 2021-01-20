import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KonkursyComponent } from './konkursy/konkursy.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { MenuComponent } from './menu/menu.component';
import { NewsComponent } from './news/news.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  { path: 'kontakt', component: KontaktComponent},
  { path: 'menu', component: MenuComponent},
  { path: 'konkursy', component: KonkursyComponent},
  { path: 'news', component:NewsComponent},
  { path: '', component: IndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxRutFormatterComponent } from './ngxRutFormatter/ngx-rut-formatter.component';

const routes: Routes = [
  {
    path: 'ngxRutFormatter',
    component: NgxRutFormatterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

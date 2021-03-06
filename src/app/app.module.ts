import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxRutFormatterModule } from '@mlezcano1985/ngx-rut-formatter';
import { FormsModule } from '@angular/forms';
import { NgxRutFormatterComponent } from './ngxRutFormatter/ngx-rut-formatter.component';

@NgModule({
  declarations: [
    AppComponent,
    NgxRutFormatterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxRutFormatterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

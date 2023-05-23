import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { ProductosComponent } from './productos/productos.component';
import { ComprarComponent } from './comprar/comprar.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    ProductosComponent,
    ComprarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

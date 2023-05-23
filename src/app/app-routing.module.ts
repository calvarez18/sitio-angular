import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { ProductosComponent } from './productos/productos.component';
import { ComprarComponent } from './comprar/comprar.component';

const routes: Routes = [
  { path: '',redirectTo: '/bienvenida', pathMatch: 'full' },
  { path: 'bienvenida',component: BienvenidaComponent },
  { path: 'comprar',component: ComprarComponent },
  { path: 'productos',component: ProductosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

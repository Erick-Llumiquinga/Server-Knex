import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngresarComponent } from '../app/paises/ingresar/ingresar.component'
import { LeerComponent } from '../app/paises/leer/leer.component'

const routes: Routes = [
  { path: 'leer', component: LeerComponent},
  { path: 'ingresar', component: IngresarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

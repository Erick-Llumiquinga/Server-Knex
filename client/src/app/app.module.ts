import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { PaisesComponent } from './paises/paises.component';
import { LeerComponent } from './paises/leer/leer.component';
import { IngresarComponent } from './paises/ingresar/ingresar.component';
import { TablasComponent } from './body/tablas/tablas.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    PaisesComponent,
    LeerComponent,
    IngresarComponent,
    TablasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

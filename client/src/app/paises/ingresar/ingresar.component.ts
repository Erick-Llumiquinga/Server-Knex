import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment'

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.scss']
})
export class IngresarComponent implements OnInit {

  constructor(private http:HttpClient) { }
  descripcion: string = '';
  estadoRegistros: string = '2';
  credencialesIngresos: string = '1';

  ngOnInit() {
  }

  postEtnias = () =>{
    let register = {tabla: 'catalogo.etnias', register: [{
      descripcion: this.descripcion,
      idEstadosRegistro: this.estadoRegistros,
      idCredenciales_ingreso: this.credencialesIngresos
    }]}
    this.http.post(environment.url + 'ingresarEtnia', register)
    .subscribe(data=>{
      console.log(data)
    })
  } 
}

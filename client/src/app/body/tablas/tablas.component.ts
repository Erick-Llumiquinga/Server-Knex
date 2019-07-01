import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html',
  styleUrls: ['./tablas.component.scss']
})
export class TablasComponent implements OnInit {

  tablaSeleccionada: number
  tablas: string[]
  datos: any[]
  campos: any[];
  datoUnitario: number = 0;
  status: boolean = true;
  datoEditar: string ="";
  id: number
  

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.tablas = ['catalogo.etnias', 'catalogo.generos', 'catalogo.paises']
    this.tablaSeleccionada = 999
    
    //Escojer tablas dinamicas this.tablas[this.tablaSeleccionada];


    // this.datos = [
    //   {nombre: 'Maria',apellido: 'Robles', edad: 20},
    //   {nombre: 'Jairo', apellido: 'Padilla', edad: 21},
    //   {nombre: 'Jairo', apellido: 'Padilla', edad: 50},
    //   {nombre: 'Jairo', apellido: 'Padilla', edad: 39},
    //   {ciudad: 'Quito', barrio: 'Colmena', parroquia: "San Roque"},
    //   {ciudad: 'Quito', barrio: 'Solanda', parroquiaad: "Solanda"}
    // ]
    // this.campos = Object.keys(this.datos[0]); 
    // console.log(this.datos)
  }

  leerDatos() {
    this.http.get<any>(environment.url + `leerEtnia?tabla=${this.tablas[this.tablaSeleccionada]}`)
    .subscribe(data =>{
      this.datos = data.data;
      this.campos = Object.keys(this.datos[0]);
      console.log(this.datoUnitario)
    })
  }

  eliminarDatos(){
    let datos = {tabla: this.tablas[this.tablaSeleccionada], id: this.datoUnitario}
    this.http.post(environment.url + 'delete', datos)
    .subscribe(data=>{
      console.log("Dato Eliminado")
    })
  }

  editar(){
    let datos = {tabla: this.tablas[this.tablaSeleccionada], datos: [{id: this.datoUnitario, }]}
  }

  activarEditado(){
    this.id = this.datoUnitario;
  }

}

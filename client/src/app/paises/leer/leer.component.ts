import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-leer',
  templateUrl: './leer.component.html',
  styleUrls: ['./leer.component.scss']
})
export class LeerComponent implements OnInit {

  constructor(private http:HttpClient) { }

  titulos: any[] = ['Numero', 'Descripcion'];
  datos: any;
  ngOnInit() {
    this.getEtnias()
  }

  getEtnias = () =>{ 
    this.http.get<any>(environment.url + 'leerEtnia?tabla=catalogo.etnias')
    .subscribe(data=>{
      this.datos = data.data;
      console.log(this.datos)
    })
  }

}

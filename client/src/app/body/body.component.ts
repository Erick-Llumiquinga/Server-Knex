import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  constructor(private http:HttpClient) { }

  name: string = '';
  lastname: string = '';
  userName: string = '';
  password: string = '';
  password2: string = '';
  status: boolean = false;
  datos: any ='';
  id: string = '';
  
  ngOnInit() {
  }

  postUser = () =>{
    let url = 'http://localhost:3001/server/login'
    let register = {table: 'sesion.usuarios',
    register: [{
      name: this.name,
      lastname: this.lastname,
      userName: this.userName,
      password: this.password
    }]}
    this.http.post(url,register)
    .subscribe(data=>{
     alert('Datos Guardados')
    })
  }

  getUser = () =>{
    let table = 'sesion.usuarios'
    let url = `http://localhost:3001/server/getUser?tabla=${table}`
    this.http.get<any>(url)
    .subscribe(data=>{
      this.status = true;
      this.datos = data.datos
      this.datos.forEach(element => {
        this.id = element.id
        this.name = element.name
        this.lastname = element.lastname
        this.userName = element.userName
      });
     console.log(this.datos)
    })
  }

  putUser = () =>{
    let url = 'http://localhost:3001/server/editUser'
    let register = {table: 'sesion.usuarios',
    register: [{
      id: this.id,
      name: this.name,
      lastname: this.lastname,
      userName: this.userName,
      password: this.password
    }]}
    this.http.put(url,register)
    .subscribe(data=>{
     alert('Datos Editados')
    })
  }

  deleteUser = () =>{
    let url = 'http://localhost:3001/server/login'
    let register = {table: 'sesion.usuarios',
    register: [{
      name: this.name,
    }]}
    this.http.put(url,register)
    .subscribe(data=>{
     alert('Datos Eliminados')
    })
  }

}

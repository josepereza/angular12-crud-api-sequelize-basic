import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http:HttpClient) { }
  createAuthor(author:any){
    console.log('servie', author)
   return  this.http.post('http://localhost:3000/author', author)
  }
}

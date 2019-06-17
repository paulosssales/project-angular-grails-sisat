import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  marcaURL = "http://localhost:8080/marca";

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<any[]>(`${this.marcaURL}`);
  }

  post
  
  salvar(marca: JSON){
    this.http.post(`${this.marcaURL}`, marca);
  }
}

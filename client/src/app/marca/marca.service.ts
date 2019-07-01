import { Marca } from './marca.component';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Modelo } from '../modelo/modelo.component';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  marcaURL = 'http://localhost:8080/marca';

  constructor(private http: HttpClient) { }

  // listar(): Promise<any> {
  //   return this.http.get<any>(`${this.marcaURL}`)
  //     .toPromise()
  //     .then(resp => resp);
  // }

  // consultar(): Promise<Marca[]> {
  //   return this.http.get<Marca[]>(this.marcaURL , {responseType: 'json'})
  //     .toPromise()
  //     .then(response => response);
  // }

  consultar(): Promise<IMarca[]> {
    return this.http.get<Marca[]>(this.marcaURL, {responseType: 'json'})
    .toPromise()
    .then(resp => resp);
  }

  salvar(marca) {
    this.http.post(`${this.marcaURL}`, marca);
  }
}

export interface IMarca{
  id: string;
  nome: string;
  impressoras: {'id': 'any'};
  toners: {'id': 'any'};
  modelos: Modelo;
}

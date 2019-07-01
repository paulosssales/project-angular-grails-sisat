import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Modelo } from './modelo.component';
import { Marca } from '../marca/marca.component';
import { Estoque } from '../estoque/estoque-grid/estoque-grid.component';

@Injectable({
  providedIn: 'root'
})
export class ModeloService {

  private _marcaURL = 'http://localhost:8080/modelo';

  constructor(private http: HttpClient) { }

  consultar(): Promise<IModelo[]> {
    return this.http.get<Modelo[]>(this._marcaURL , {responseType: 'json'})
      .toPromise()
      .then(response => response);
  }
}

export interface IModelo {
  id: string;
  nome: string;
  marca: Marca;
  estoque: Estoque;
}

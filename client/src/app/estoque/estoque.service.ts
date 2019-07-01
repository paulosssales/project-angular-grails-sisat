import { Injectable } from '@angular/core';
import { Estoque } from './estoque-grid/estoque-grid.component';
import { HttpClient } from '@angular/common/http';
import { Modelo } from '../modelo/modelo.component';

@Injectable({
  providedIn: 'root'
})
export class EstoqueService {

  private _marcaURL = 'http://localhost:8080/estoque';

  constructor(private http: HttpClient) { }

  consultar(): Promise<IEstoque[]> {
    return this.http.get<Estoque[]>(this._marcaURL , {responseType: 'json'})
      .toPromise()
      .then(response => response);
  }
}
export interface IEstoque {
  id: string;
  quantidade: string;
  quantidadeMinima: string;
  modelo: Modelo;
}

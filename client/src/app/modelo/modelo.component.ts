import { Component, OnInit } from '@angular/core';
import { ModeloService } from './modelo.service';
import { Router } from '@angular/router';
import { Marca } from '../marca/marca.component';
import { Estoque } from '../estoque/estoque-grid/estoque-grid.component';

@Component({
  selector: 'app-modelo',
  templateUrl: './modelo.component.html',
  styleUrls: ['./modelo.component.css']
})
export class ModeloComponent implements OnInit {

  modelos: Modelo[];

  constructor(private modeloService: ModeloService,
    private router: Router) { }

  ngOnInit() {
    this.consultar();
  }

  consultar() {
    this.modeloService.consultar()
      .then(dados => {
        this.modelos = dados;
        console.log('obj- modelo ' + this.modelos);
      });
  }

  marcaDetaisl(modelo: Modelo) {
    this.router.navigate(['/marca', modelo.marca.id]);
  }

  estoqueDetaisl(modelo: Modelo) {
    this.router.navigate(['/estoque', modelo.estoque.id]);
  }
}

export class Modelo {
  id: string;
  nome: string;
  marca: Marca;
  estoque: Estoque;
}

import { EstoqueService } from './../estoque.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Modelo } from 'src/app/modelo/modelo.component';

@Component({
  selector: 'app-estoque-grid',
  templateUrl: './estoque-grid.component.html',
  styleUrls: ['./estoque-grid.component.css']
})
export class EstoqueGridComponent implements OnInit {

  estoques = [];

  constructor(private estoqueService: EstoqueService,
    private router: Router) { }

  ngOnInit() {
    this.consultar();
  }

  consultar() {
    this.estoqueService.consultar()
      .then(dados => {
        this.estoques = dados;
      });
  }

  modeloDetaisl(estoque: Estoque) {
    this.router.navigate(['/modelo', estoque.modelo.id]);
  }

}

export class Estoque {
  id: string;
  quantidade: string;
  quantidadeMinima: string;
  modelo: Modelo;
}

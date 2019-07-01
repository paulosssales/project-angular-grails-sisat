import { Component, OnInit } from '@angular/core';
import { MarcaService } from './marca.service';
import { ModeloService } from '../modelo/modelo.service';
import { Router } from '@angular/router';
import { Modelo } from '../modelo/modelo.component';

@Component({
  selector: 'app-marca',
  templateUrl: './marca.component.html',
  styleUrls: ['./marca.component.css']
})
export class MarcaComponent implements OnInit {

  marca: Marca;
  tamanho = 0;
  marcas = [];
  marcasModelos: Modelo[];
  modelos: any[];

  constructor(private marcaService: MarcaService,
              private modeloService: ModeloService,
              private router: Router) { }

  ngOnInit() {
    this.consultar();
  }

  listar() {
    this.marcaService.consultar().then(dados => this.marcas = dados);
  }

  consultar() {
    this.marcaService.consultar()
      .then(dados => {
        this.marcas = dados;
        // this.modelos = this.marcas.pop().modelos;
        this.modeloService.consultar()
        .then(resp => {
          this.modelos = resp;
          console.log(this.marcas);
          console.log(this.modelos);
        });
        // const marca = JSON.stringify(this.marcas);
        // this.tamanho = dados.length -1;
        // console.log("obj Marca- " + marca);
      });
  }

  buscarModelos() {
    this.modeloService.consultar()
      .then(dados => { this.modelos = dados;
      });
  }

  salvar() {
    this.marcaService.salvar(this.marca);
  }

  modeloDetaisl(marca: Marca) {
    this.router.navigate(['/modelo', marca.modelos[0].id]);
  }
}

export class Marca {
  id: string;
  nome: string;
  impressoras: {'id': 'any'};
  toners: {'id': 'any'};
  modelos: Modelo;
}


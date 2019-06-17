import { Component, OnInit } from '@angular/core';
import { MarcaService } from './marca.service';

@Component({
  selector: 'app-marca',
  templateUrl: './marca.component.html',
  styleUrls: ['./marca.component.css']
})
export class MarcaComponent implements OnInit {

  marca: JSON;

  marcas: Array<any>;

  constructor(private marcaService: MarcaService) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.marcaService.listar().subscribe(dados => this.marcas = dados);
  }

  salvar(){
    this.marcaService.salvar(this.marca);
  }

}

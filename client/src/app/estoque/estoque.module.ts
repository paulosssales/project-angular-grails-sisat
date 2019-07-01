import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstoqueCadastroComponent } from './estoque-cadastro/estoque-cadastro.component';
import { EstoquePesquisaComponent } from './estoque-pesquisa/estoque-pesquisa.component';
import { EstoqueGridComponent } from './estoque-grid/estoque-grid.component';
import { EstoqueService } from './estoque.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    EstoqueCadastroComponent,
    EstoquePesquisaComponent,
    EstoqueGridComponent
  ],
  exports: [
    EstoqueGridComponent,
  ],
  providers: [
    EstoqueService
  ]
})
export class EstoqueModule { }

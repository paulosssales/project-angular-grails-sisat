import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicitantePesquisaComponent } from './solicitante-pesquisa/solicitante-pesquisa.component';
import { SolicitanteGridComponent } from './solicitante-grid/solicitante-grid.component';
import { SolicitanteCadastroComponent } from './solicitante-cadastro/solicitante-cadastro.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SolicitantePesquisaComponent, SolicitanteGridComponent, SolicitanteCadastroComponent]
})
export class SolicitanteModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicitacaoPesquisaComponent } from './solicitacao-pesquisa/solicitacao-pesquisa.component';
import { SolicitacaoGridComponent } from './solicitacao-grid/solicitacao-grid.component';
import { SolicitacaoCadastroComponent } from './solicitacao-cadastro/solicitacao-cadastro.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SolicitacaoPesquisaComponent, SolicitacaoGridComponent, SolicitacaoCadastroComponent]
})
export class SolicitacaoModule { }

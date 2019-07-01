import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TonerDespachoCadastroComponent } from './toner-despacho-cadastro/toner-despacho-cadastro.component';
import { TonerDespachoPesquisaComponent } from './toner-despacho-pesquisa/toner-despacho-pesquisa.component';
import { TonerDespachoGridComponent } from './toner-despacho-grid/toner-despacho-grid.component';
import { TonerRecebidoGridComponent } from './toner-recebido-grid/toner-recebido-grid.component';
import { TonerRecebidoPesquisaComponent } from './toner-recebido-pesquisa/toner-recebido-pesquisa.component';
import { TonerRecebidoCadastroComponent } from './toner-recebido-cadastro/toner-recebido-cadastro.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TonerDespachoCadastroComponent, TonerDespachoPesquisaComponent, TonerDespachoGridComponent, TonerRecebidoGridComponent, TonerRecebidoPesquisaComponent, TonerRecebidoCadastroComponent]
})
export class TonerModule { }

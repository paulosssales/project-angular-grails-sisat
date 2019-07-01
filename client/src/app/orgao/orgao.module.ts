import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrgaoPesquisaComponent } from './orgao-pesquisa/orgao-pesquisa.component';
import { OrgaoGridComponent } from './orgao-grid/orgao-grid.component';
import { OrgaoCadastroComponent } from './orgao-cadastro/orgao-cadastro.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OrgaoPesquisaComponent, OrgaoGridComponent, OrgaoCadastroComponent]
})
export class OrgaoModule { }

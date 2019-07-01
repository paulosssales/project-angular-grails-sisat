import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModeloCadastroComponent } from './modelo-cadastro/modelo-cadastro.component';
import { ModeloGridComponent } from './modelo-grid/modelo-grid.component';
import { ModeloPesquisaComponent } from './modelo-pesquisa/modelo-pesquisa.component';
import { ModeloComponent } from './modelo.component';
import { ModeloService } from './modelo.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ModeloComponent,
    ModeloCadastroComponent,
    ModeloGridComponent,
    ModeloPesquisaComponent
  ],
  exports:[
    ModeloComponent
  ],
  providers:[
    ModeloService
  ]
})
export class ModeloModule { }

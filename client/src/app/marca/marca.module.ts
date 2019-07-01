import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarcaCadastroComponent } from './marca-cadastro/marca-cadastro.component';
import { MarcaGridComponent } from './marca-grid/marca-grid.component';
import { MarcaPesquisaComponent } from './marca-pesquisa/marca-pesquisa.component';
import { MarcaComponent } from './marca.component';
import { MarcaService } from './marca.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MarcaComponent,
    MarcaCadastroComponent,
    MarcaGridComponent,
    MarcaPesquisaComponent
  ],
  providers:[
    MarcaService
  ],
  exports:[
    MarcaComponent
  ]
})
export class MarcaModule { }

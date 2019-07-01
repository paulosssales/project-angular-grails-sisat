import { EstoquePesquisaComponent } from './estoque/estoque-pesquisa/estoque-pesquisa.component';
import { EstoqueGridComponent } from './estoque/estoque-grid/estoque-grid.component';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import { MarcaPesquisaComponent } from './marca/marca-pesquisa/marca-pesquisa.component';
import { ModeloComponent } from './modelo/modelo.component';
import { MarcaCadastroComponent } from './marca/marca-cadastro/marca-cadastro.component';
import { IndexComponent } from './index/index.component';
import { MarcaComponent } from './marca/marca.component';
import { MarcaGridComponent } from './marca/marca-grid/marca-grid.component';
import { ModeloCadastroComponent } from './modelo/modelo-cadastro/modelo-cadastro.component';
import { ModeloPesquisaComponent } from './modelo/modelo-pesquisa/modelo-pesquisa.component';
import { ModeloGridComponent } from './modelo/modelo-grid/modelo-grid.component';
import { EstoqueCadastroComponent } from './estoque/estoque-cadastro/estoque-cadastro.component';

const routes: Routes = [
  {path: '', redirectTo: 'index', pathMatch: 'full'},
  {path: 'index', component: IndexComponent},
  {path: 'marca', component: MarcaComponent, 
    children: [
      { path: ':id', component: MarcaComponent},
      { path: 'cadastrar', component: MarcaCadastroComponent},
      { path: 'pesquisa', component: MarcaPesquisaComponent},
      { path: 'grid', component: MarcaGridComponent }
    ]},
  {path: 'modelo', component: ModeloComponent,
    children: [
      {path: ':id', component: ModeloComponent},
      {path: 'cadastrar', component: ModeloCadastroComponent},
      {path: 'pequisar', component: ModeloPesquisaComponent},
      {path: 'grid', component: ModeloGridComponent}
    ]},
  { path: 'estoque', component: EstoqueGridComponent,
    children: [
      { path: ':id', component: EstoquePesquisaComponent },
      { path: 'cadastrar', component: EstoqueCadastroComponent }
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
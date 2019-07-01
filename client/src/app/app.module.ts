import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from './app.component';

import { EstoqueModule } from './estoque/estoque.module';
import { ImpressoraModule } from './impressora/impressora.module';
import { IndexComponent } from './index/index.component';
import { MarcaModule } from './marca/marca.module';
import { MarcaService } from './marca/marca.service';
import { ModeloModule } from './modelo/modelo.module';
import { ModeloService } from './modelo/modelo.service';
import { NavComponent } from './nav/nav.component';
import { NavService } from './nav/nav.service';
import { OrgaoModule } from './orgao/orgao.module';
import { SolicitacaoModule } from './solicitacao/solicitacao.module';
import { SolicitanteModule } from './solicitante/solicitante.module';
import { TonerModule } from './toner/toner.module';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    TonerModule,
    OrgaoModule,
    SolicitanteModule,
    SolicitacaoModule,
    ImpressoraModule,
    EstoqueModule,
    MarcaModule,
    ModeloModule,

    NgbModule.forRoot()
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy},
    NavService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlterarComponent } from './Clientes/alterar/alterar.component';
import { ConsultarComponent } from './Clientes/consultar/consultar.component';
import { IncluirComponent } from './Clientes/incluir/incluir.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsultarComponent,
    IncluirComponent,
    AlterarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

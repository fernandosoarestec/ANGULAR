import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlterarComponent } from './Clientes/alterar/alterar.component';
import { ConsultarComponent } from './Clientes/consultar/consultar.component';
import { IncluirComponent } from './Clientes/incluir/incluir.component';

const routes: Routes = [

   {path:'consultar', component:ConsultarComponent},
   {path:'incluir', component:IncluirComponent},
   {path:'alterar', component:AlterarComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FuncionariosComponent } from './pages/funcionarios/funcionarios.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';

const routes: Routes = [
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:'home', component:HomeComponent},
  {path:'funcionarios', component:FuncionariosComponent},
  {path:'cadastro', component:CadastroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

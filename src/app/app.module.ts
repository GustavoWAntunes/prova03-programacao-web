import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './sharepages/header/header.component';
import { FooterComponent } from './sharepages/footer/footer.component';
import { MenuComponent } from './sharepages/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { FuncionariosComponent } from './pages/funcionarios/funcionarios.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';


import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    FuncionariosComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


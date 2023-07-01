import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  id!: number;
  nome!: string; 
  departamento!: string; 
  endereco!: string; 
  email!: string; 
  cadastroData: any;
  statusMessage!: string;
  statusColor!: string;

  constructor(private http: HttpClient) {}

  consultarCadastro() {
    const url = `https://bu.furb.br/mcardoso/progWeb/apiRestAval.php/cadastro/${this.id}`;
    this.http.get(url).subscribe(
      (data: any) => {
        this.cadastroData = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  excluirCadastro() {
    const url = `https://bu.furb.br/mcardoso/progWeb/apiRestAval.php/cadastro`;
    this.http.delete(url).subscribe(
      (data: any) => {
        this.statusMessage = data.mensagem;
        this.statusColor = data.status === 'Ok' ? 'green' : 'red';
      },
      (error) => {
        console.error(error);
      }
    );
  }

  inserirCadastro() {
    const url = `https://bu.furb.br/mcardoso/progWeb/apiRestAval.php/cadastro`;
    const data = {
      id: this.id,
      nome: this.nome,
      departamento: this.departamento,
      endereco: this.endereco,
      email: this.email
    };
    this.http.put(url, data).subscribe(
      (data: any) => {
        this.statusMessage = data.mensagem;
        this.statusColor = data.status === 'Ok' ? 'green' : 'red';
      },
      (error) => {
        console.error(error);
      }
    );
  }
}

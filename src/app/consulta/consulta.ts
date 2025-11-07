import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import {FlexLayoutModule} from "@angular/flex-layout"
import {MatCardModule} from '@angular/material/card'
import {FormsModule} from "@angular/forms"
import { MatFormField, MatLabel } from "@angular/material/form-field"
import {MatInputModule}from "@angular/material/input"
import {MatIconModule}  from "@angular/material/icon"
import {MatButtonModule} from "@angular/material/button"
import {MatTableModule} from "@angular/material/table"
import { Cliente } from '../cliente';
import { Client } from '../cadastro/client';
import { ɵnormalizeQueryParams } from '@angular/common';
import {MatSnackBar} from '@angular/material/snack-bar'

@Component({
  selector: 'app-consulta',
  imports: [FlexLayoutModule,
    MatCardModule,
    FormsModule,
    MatFormField,
    MatLabel,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule
  ],
  templateUrl: './consulta.html',
  styleUrl: './consulta.scss',
})
export class Consulta {
  nomeBusca: string = '';
  listaClientes: Client[] = [];
  colunasTable: string[] = ['id','nome', 'cpf', 'dataNascimento', 'email', 'municipios',  'uf', "actions", 'delete'];
  deletando: boolean = false;
  snack: MatSnackBar = inject(MatSnackBar);

  constructor(
    private Router: Router,
    private service: Cliente) {

   }

  ngOnInit() {
    this.listaClientes = this.service.pesquisarClientes('');
  }
pesquisar(){
this.listaClientes = this.service.pesquisarClientes(this.nomeBusca)

}

prepararEdit(id: string) {
  this.Router.navigate(['/cadastro'], { queryParams: { id } });
}

preparandoDelete(client : Client){
  this.mostrarMsg("Tem certeza que quer deletar?")
  client.deletando = true
}

deletarCliente(id: string) {
  this.service.deletarCliente(id);
  this.listaClientes = this.service.pesquisarClientes('');
  this.deletando = false
  this.mostrarMsg("Deletado com sucesso")
}
 mostrarMsg(msg:string ){
  this.snack.open(msg, "Ok")
 }
}

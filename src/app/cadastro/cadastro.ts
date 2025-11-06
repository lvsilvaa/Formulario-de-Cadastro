import { Component } from '@angular/core';
import {FlexLayoutModule} from "@angular/flex-layout"
import {MatCardModule} from '@angular/material/card'
import {FormsModule} from "@angular/forms"
import { MatFormField, MatLabel } from "@angular/material/form-field"
import {MatInputModule}from "@angular/material/input"
import {MatIconModule}  from "@angular/material/icon"
import {MatButtonModule} from "@angular/material/button"
import { Client } from './client'
import {Cliente} from '../cliente'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  imports: [
    FlexLayoutModule, 
    MatCardModule, 
    FormsModule, 
    MatFormField, 
    MatLabel,
    MatInputModule,
    MatIconModule,
    MatButtonModule] ,
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.scss',
})
export class Cadastro {
client : Client = Client.newClient();
atualizar: boolean = false;

constructor(
  
  private service : Cliente,
private route:ActivatedRoute) {

}
ngOnInit(){
  this.route.queryParamMap.subscribe((query: any) => {
    const params = query['params'];
    const id = params['id'];
    if (id) {
      let clienteEncontrado = this.service.pesquisarPorId(id);
      if(clienteEncontrado){
        this.atualizar = true;
        this.client = clienteEncontrado;
        return;
      
      }
    }
  });
}
salvar(){  
 this.service.salvar(this.client);
 this.limpar()
}

limpar(){ 
  this.client = Client.newClient();
 }
}


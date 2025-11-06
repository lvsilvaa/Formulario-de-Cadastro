import { Component, inject  } from '@angular/core';
import {FlexLayoutModule} from "@angular/flex-layout"
import {MatCardModule} from '@angular/material/card'
import {FormsModule} from "@angular/forms"
import { MatFormField, MatLabel } from "@angular/material/form-field"
import {MatInputModule}from "@angular/material/input"
import {MatIconModule}  from "@angular/material/icon"
import {MatButtonModule} from "@angular/material/button"
import { Client } from './client'
import {Cliente} from '../cliente'
import { ActivatedRoute, Router } from '@angular/router';
import {NgxMaskDirective, provideNgxMask} from 'ngx-mask'
import{MatSnackBar} from "@angular/material/snack-bar"

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
    MatButtonModule,
  NgxMaskDirective] ,
  providers: provideNgxMask(),
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.scss',
})
export class Cadastro {
client : Client = Client.newClient();
atualizar: boolean = false;
snack: MatSnackBar = inject(MatSnackBar);

constructor(
  
  private service : Cliente,
private route:ActivatedRoute,
private router: Router) {

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
  if(!this.atualizar){
 this.service.salvar(this.client);
 this.mostrarMsg("Salvo com sucesso")
 this.limpar()
} else {
  this.service.atualizar(this.client);
  this.router.navigate(['/consulta']);
  this.mostrarMsg("atualizado com sucesso")
}

}

limpar(){ 
  this.client = Client.newClient();
 }

 mostrarMsg(msg:string ){
  this.snack.open(msg, "Ok")
 }
}


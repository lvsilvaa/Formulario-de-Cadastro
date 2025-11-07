import { Component, inject  } from '@angular/core';
import {FlexLayoutModule} from "@angular/flex-layout"
import {MatCardModule} from '@angular/material/card'
import {FormsModule} from "@angular/forms"
import { MatFormFieldModule } from "@angular/material/form-field"
import {MatInputModule}from "@angular/material/input"
import {MatIconModule}  from "@angular/material/icon"
import {MatButtonModule} from "@angular/material/button"
import{MatSelectChange, MatSelectModule} from "@angular/material/select"
import { Client } from './client'
import {Cliente} from '../cliente'
import { ActivatedRoute, Router } from '@angular/router';
import {NgxMaskDirective, provideNgxMask} from 'ngx-mask'
import{MatSnackBar} from "@angular/material/snack-bar"
import { BrasilAPI } from '../brasil-api';
import { Municipio, Estado } from '../brasilAPI.models';
import {CommonModule} from '@angular/common'

@Component({
  selector: 'app-cadastro',
  imports: [
    FlexLayoutModule, 
    CommonModule,
    MatCardModule, 
    FormsModule, 
  MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
  NgxMaskDirective] ,
  providers: provideNgxMask(),
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.scss',
})
export class Cadastro {
client : Client = Client.newClient();
atualizar: boolean = false;
snack: MatSnackBar = inject(MatSnackBar);
estados: Estado[] = [];
municipios: Municipio[] = [];

constructor(
  
  private service : Cliente,
  private brasilApiService: BrasilAPI,
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
        if (this.client.uf){
          const event = {value: this.client.uf}
          this.carregarMunicipios(event as MatSelectChange);
          return
        }
      
      }
    }
  });
  this.carregarUFs()
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

 carregarUFs(){
  this.brasilApiService.listarUFs().subscribe({
    next: listaEstados => this.estados = listaEstados.sort((a,b)=> a.nome.localeCompare(b.nome, 'pt-BR')),
    error: erro => console.log("ocorreu um erro", erro)
  })
 }

 carregarMunicipios(event: MatSelectChange) {
  const ufSelecionada = event.value
  this.brasilApiService.listarMunicipios(ufSelecionada).subscribe({
    next: listarMunicipios => { this.municipios = listarMunicipios.sort((a, b) => a.nome.localeCompare(b.nome, 'pt-BR'))

    },
    error: erro => console.log("ocorreu um erro ao carregar os municipios", erro) 
  })
 
}
}


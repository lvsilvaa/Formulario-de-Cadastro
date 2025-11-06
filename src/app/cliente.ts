import { Injectable } from '@angular/core';
import { Client } from './cadastro/client';

@Injectable({
  providedIn: 'root',
})
export class Cliente {

  static REPO_CLIENTES = "_CLIENTES"

  constructor() {}

  salvar(client : Client){
    const storage = this.obterStorage();
    storage.push(client);
    localStorage.setItem(Cliente.REPO_CLIENTES, JSON.stringify(storage));
    
}
atualizar(client: Client){
    const clientes = this.obterStorage();
    clientes.forEach(c => {
      if(c.id === client.id){
        Object.assign(c, client);
      }
    });
    localStorage.setItem(Cliente.REPO_CLIENTES, JSON.stringify(clientes));
  }


  deletarCliente(id: string){
    let clientes = this.obterStorage();
    clientes = clientes.filter(c => c.id !== id);
    localStorage.setItem(Cliente.REPO_CLIENTES, JSON.stringify(clientes));
    
  }


pesquisarClientes(nomeBusca: string): Client[]{

   const clientes = this.obterStorage();
    if(!nomeBusca || nomeBusca.trim() === ''){
      return clientes;
    }
    const termo = nomeBusca.toLowerCase();
    return clientes.filter(c => c.name?.toLowerCase().includes(termo));
   }

   pesquisarPorId(id: string): Client  | undefined {
    const clientes = this.obterStorage();
    return clientes.find(c => c.id === id);
   }

private obterStorage(): Client[]{
    const clientesJson = localStorage.getItem(Cliente.REPO_CLIENTES);
    if(clientesJson){
      const clientes : Client[] = JSON.parse(clientesJson);
      return clientes;
    }
    const clientes : Client[] = [] 
  localStorage.setItem(Cliente.REPO_CLIENTES, JSON.stringify(clientes));
    return clientes;
  }
}

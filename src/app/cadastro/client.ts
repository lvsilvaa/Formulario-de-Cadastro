import { v4 as uuid } from 'uuid';

export class Client {
    id?: string;
    name?: string;
    email?: string;
    cpf?: string;
    dataNascimento?: string;
    deletando: boolean = false;
    uf?: string;
    municipios?: string;


static newClient(){
    const client = new Client();
    client.id = uuid();
    return client;
}
}
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Pessoa } from '../app/pessoas.model';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(private storage: Storage) { }

  async insert(pessoa: Pessoa) {
    const pessoas: Pessoa[] = (await this.storage.get("pessoas"));
    pessoa.id = pessoas.length + 1;
    return this.storage.set("pessoas", [...pessoas, pessoa]);
  }

  async SearchId(id) {
    const pessoas: Pessoa[] = (await this.storage.get("pessoas"));
    return pessoas.find((pessoa) => pessoas.id == id);
  }

  async SearchCor(racaCor) {
    const pessoas: Pessoa[] = (await this.storage.get("pessoas"));
    return pessoas.filter((pessoa) => pessoa.racaCor == racaCor);
  }

}

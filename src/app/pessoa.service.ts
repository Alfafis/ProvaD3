import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Pessoa } from '../app/pessoas.model';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(private storage: Storage) { }

  public insert(pessoa: Pessoa) {

  }

}

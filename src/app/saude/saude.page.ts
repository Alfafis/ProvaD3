import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../pessoas.model';
import { PessoaService } from '../pessoa.service';
import { create } from 'domain';

@Component({
  selector: 'app-saude',
  templateUrl: './saude.page.html',
  styleUrls: ['./saude.page.scss'],
})
export class SaudePage implements OnInit {

  pessoa: Pessoa = {};

  constructor(private pessoaService: PessoaService) { }

  async ngOnInit() { }

  async create() {
    await this.pessoaService.insert(this.pessoa);
    console.log(this.pessoa);
  }

  async SearchId() {
    console.log(await this.pessoaService.SearchId(this.id));
  }

  async SearchCor() {
    console.log(await this.pessoaService.SearchCor(this.racaCor))
  }

}

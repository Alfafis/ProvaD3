import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../pessoas.model';

@Component({
  selector: 'app-saude',
  templateUrl: './saude.page.html',
  styleUrls: ['./saude.page.scss'],
})
export class SaudePage implements OnInit {

  pessoa: Pessoa
  aux: any[]

  constructor() { }

  async ngOnInit() {

  }

  SearchId() {
    this.pessoa.forEach(element => {
      if (element.id == this.aux.id) {

      }
    });
  }
  SearchCor() {

  }

}

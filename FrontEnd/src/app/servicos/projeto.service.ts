// projeto.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Projeto {
  id: string;
  nome: string;
  descricao: string;
  status: string;
  responsavel: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProjetoService {
  private projetosSubject = new BehaviorSubject<Projeto[]>([]);
  projetos$ = this.projetosSubject.asObservable();

  constructor() {
    const projetosSalvos = localStorage.getItem('projetos');
    const projetosIniciais = projetosSalvos ? JSON.parse(projetosSalvos) : [];
    this.projetosSubject.next(projetosIniciais);
  }

  listarProjetos(): Projeto[] {
    return this.projetosSubject.getValue();
  }

  cadastrarProjeto(projeto: Projeto): void {
    const projetosAtuais = [...this.projetosSubject.getValue()];
    projeto.id = (projetosAtuais.length + 1).toString();
    projetosAtuais.push({ ...projeto }); // nova referência
    this.projetosSubject.next(projetosAtuais);
    localStorage.setItem('projetos', JSON.stringify(projetosAtuais));
  }

  atualizarProjeto(id: string, projetoAtualizado: Projeto): void {
    const projetosAtuais = [...this.projetosSubject.getValue()];
    const index = projetosAtuais.findIndex((projeto) => projeto.id === id);

    if (index !== -1) {
      projetosAtuais[index] = { ...projetoAtualizado }; // nova referência
      this.projetosSubject.next(projetosAtuais);
      localStorage.setItem('projetos', JSON.stringify(projetosAtuais));
    }
  }

  excluirProjeto(id: string): void {
    const projetosAtuais = [...this.projetosSubject.getValue()];
    const index = projetosAtuais.findIndex((projeto) => projeto.id === id);

    if (index !== -1) {
      projetosAtuais.splice(index, 1);
      this.projetosSubject.next(projetosAtuais);
      localStorage.setItem('projetos', JSON.stringify(projetosAtuais));
    }
  }

  refreshProjetos(): void {
    const projetosSalvos = localStorage.getItem('projetos');
    const projetosIniciais = projetosSalvos ? JSON.parse(projetosSalvos) : [];
    this.projetosSubject.next(projetosIniciais);
  }
}

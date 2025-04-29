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
    // Carrega os projetos do localStorage
    const projetosSalvos = localStorage.getItem('projetos');
    const projetosIniciais = projetosSalvos ? JSON.parse(projetosSalvos) : [];

    this.projetosSubject.next(projetosIniciais);
  }

  // Método para listar todos os projetos
  listarProjetos(): Projeto[] {
    return this.projetosSubject.getValue();
  }

  // Método para cadastrar um novo projeto
  cadastrarProjeto(projeto: Projeto): void {
    const projetosAtuais = this.projetosSubject.getValue();
    projeto.id = (projetosAtuais.length + 1).toString(); // Gerando ID simples
    projetosAtuais.push(projeto);
    this.projetosSubject.next(projetosAtuais);
    localStorage.setItem('projetos', JSON.stringify(projetosAtuais)); // Atualiza o localStorage
  }

  // Método para atualizar um projeto existente
  atualizarProjeto(id: string, projetoAtualizado: Projeto): void {
    const projetosAtuais = this.projetosSubject.getValue();
    const index = projetosAtuais.findIndex((projeto) => projeto.id === id);

    if (index !== -1) {
      projetosAtuais[index] = projetoAtualizado;
      this.projetosSubject.next(projetosAtuais); // Atualiza a lista de projetos
      localStorage.setItem('projetos', JSON.stringify(projetosAtuais)); // Atualiza o localStorage
    }
  }

  // Método para excluir um projeto
  excluirProjeto(id: string): void {
    const projetosAtuais = this.projetosSubject.getValue();
    const index = projetosAtuais.findIndex((projeto) => projeto.id === id);

    if (index !== -1) {
      projetosAtuais.splice(index, 1);
      this.projetosSubject.next(projetosAtuais); // Atualiza a lista de projetos
      localStorage.setItem('projetos', JSON.stringify(projetosAtuais)); // Atualiza o localStorage
    }
  }

  refreshProjetos(): void {
    // Recarrega os projetos do localStorage e emite novamente para atualizar todas as inscrições
    const projetosSalvos = localStorage.getItem('projetos');
    const projetosIniciais = projetosSalvos ? JSON.parse(projetosSalvos) : [];
    this.projetosSubject.next(projetosIniciais);
  }
}

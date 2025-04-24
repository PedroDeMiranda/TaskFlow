// src/app/servicos/projeto.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // singleton para toda a app :contentReference[oaicite:2]{index=2}
})
export class ProjetoService {
  private projetos = [
    {
      id: '1',
      nome: 'Redesign do App',
      status: 'Em andamento',
      descricao: 'Refatoração completa do layout mobile.',
      responsavel: 'Ana Beatriz Souza',
    },
    {
      id: '2',
      nome: 'Sistema de Relatórios',
      status: 'Parado',
      descricao: 'Implementar relatórios gerenciais mensais.',
      responsavel: 'Carlos Henrique Lima',
    },
  ];

  /** Retorna uma cópia da lista atual de projetos */
  listarProjetos(): any[] {
    return this.projetos.slice(); // nova referência a cada chamada :contentReference[oaicite:3]{index=3}
  }

  obterProjetoPorId(id: string) {
    return this.projetos.find((p) => p.id === id);
  }

  atualizarProjeto(id: string, dadosAtualizados: any) {
    const i = this.projetos.findIndex((p) => p.id === id);
    if (i !== -1) {
      this.projetos[i] = { ...this.projetos[i], ...dadosAtualizados };
    }
  }

  excluirProjeto(id: string) {
    const index = this.projetos.findIndex((p) => p.id === id);
    if (index !== -1) {
      this.projetos.splice(index, 1);
    }
  }
}

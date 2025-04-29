import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProjetoService, Projeto } from '../../servicos/projeto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-cadastro-projeto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tela-cadastro-projeto.component.html',
  styleUrls: ['./tela-cadastro-projeto.component.css'],
})
export class TelaCadastroProjetoComponent {
  nomeProjeto = '';
  descricao = '';
  responsavel = '';
  status = 'em andamento'; // Já define um padrão

  membrosEquipe = [
    'Ana Beatriz Souza',
    'Carlos Henrique Lima',
    'Fernanda Ribeiro',
    'João Marcos Pereira',
  ];

  constructor(private projetoService: ProjetoService, private router: Router) {}

  cadastrarProjeto() {
    const novoProjeto: Projeto = {
      id: Date.now().toString(), // gera ID único
      nome: this.nomeProjeto,
      status: this.status,
      descricao: this.descricao,
      responsavel: this.responsavel,
    };

    this.projetoService.cadastrarProjeto(novoProjeto);

    alert('Projeto cadastrado com sucesso!');
    this.router.navigate(['/projetos']); // Redireciona para listagem

    console.log('Projeto cadastrado:', novoProjeto);
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tela-cadastro-projeto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tela-cadastro-projeto.component.html',
  styleUrls: ['./tela-cadastro-projeto.component.css'],
})
export class TelaCadastroProjetoComponent {
  nomeProjeto = '';
  status = '';
  descricao = '';
  responsavel = '';

  // Lista estática dos membros da equipe (futuramente será dinâmica)
  membrosEquipe = [
    'Ana Beatriz Souza',
    'Carlos Henrique Lima',
    'Fernanda Ribeiro',
    'João Marcos Pereira',
  ];

  cadastrarProjeto() {
    console.log('Projeto cadastrado:', {
      nome: this.nomeProjeto,
      status: this.status,
      descricao: this.descricao,
      responsavel: this.responsavel,
    });

    // Integração futura com backend aqui
  }
}

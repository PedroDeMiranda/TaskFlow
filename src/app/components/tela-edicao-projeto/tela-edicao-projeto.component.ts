import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProjetoService } from '../../servicos/projeto.service'; // Certifique-se de que esse caminho está correto

@Component({
  selector: 'app-tela-edicao-projeto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tela-edicao-projeto.component.html',
  styleUrls: ['./tela-edicao-projeto.component.css'],
})
export class TelaEdicaoProjetoComponent implements OnInit {
  projetoId: string | null = null;

  projeto = {
    nome: '',
    status: '',
    descricao: '',
    responsavel: '',
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projetoService: ProjetoService
  ) {}

  ngOnInit() {
    this.projetoId = this.route.snapshot.paramMap.get('id');

    if (this.projetoId) {
      const projetoEncontrado = this.projetoService.obterProjetoPorId(
        this.projetoId
      );
      if (projetoEncontrado) {
        this.projeto = { ...projetoEncontrado };
      }
    }
  }

  salvar() {
    if (this.projetoId) {
      this.projetoService.atualizarProjeto(this.projetoId, this.projeto);
      console.log('Projeto atualizado:', this.projeto);
    }
    this.router.navigate(['/projetos']);
  }

  cancelar() {
    this.router.navigate(['/projetos']);
  }
}

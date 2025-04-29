import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjetoService } from '../../servicos/projeto.service';
import { Subscription } from 'rxjs'; // Para gerenciar a inscrição

@Component({
  selector: 'app-tela-status-projetos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tela-status-projetos.component.html',
  styleUrls: ['./tela-status-projetos.component.css'],
})
export class TelaStatusProjetosComponent implements OnInit, OnDestroy {
  projetosEmAndamento: any[] = [];
  projetosParados: any[] = [];
  projetosConcluidos: any[] = [];

  private subscription: Subscription = new Subscription();

  constructor(private projetoService: ProjetoService) {}

  ngOnInit() {
    this.subscription = this.projetoService.projetos$.subscribe((projetos) => {
      this.projetosEmAndamento = projetos.filter(
        (p) => p.status === 'em andamento'
      );
      this.projetosParados = projetos.filter((p) => p.status === 'parado');
      this.projetosConcluidos = projetos.filter(
        (p) => p.status === 'concluido'
      );
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe(); // Sempre limpa inscrição para evitar vazamento de memória
  }
}

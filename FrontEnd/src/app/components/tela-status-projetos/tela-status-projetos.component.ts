import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjetoService } from '../../servicos/projeto.service';
import { Subscription } from 'rxjs'; // Para gerenciar a inscrição
import { CdkDragDrop, DragDropModule } from '@angular/cdk/drag-drop'; // Importa o DragDropModule
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-status-projetos',
  standalone: true,
  imports: [CommonModule, DragDropModule], // Adiciona o DragDropModule
  templateUrl: './tela-status-projetos.component.html',
  styleUrls: ['./tela-status-projetos.component.css'],
})
export class TelaStatusProjetosComponent implements OnInit, OnDestroy {
  projetosEmAndamento: any[] = [];
  projetosParados: any[] = [];
  projetosConcluidos: any[] = [];

  private subscription: Subscription = new Subscription();

  constructor(private projetoService: ProjetoService, private router: Router) {}

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

  // Método para lidar com o drop e atualizar o status e a lista de projetos
  onDrop(event: CdkDragDrop<any[]>, novoStatus: string) {
    const projetoArrastado = event.item.data; // O projeto arrastado
    const listaDestino = event.container.data; // A lista de destino
    const listaOrigem = event.previousContainer.data; // A lista de origem

    // Atualiza o status do projeto
    projetoArrastado.status = novoStatus;

    // Remove o projeto da lista de origem
    const index = listaOrigem.indexOf(projetoArrastado);
    if (index !== -1) {
      listaOrigem.splice(index, 1); // Remove da lista de origem
    }

    // Adiciona o projeto à lista de destino
    listaDestino.push(projetoArrastado); // Adiciona à lista de destino

    // Atualiza o projeto no serviço
    this.projetoService.atualizarProjeto(projetoArrastado.id, projetoArrastado);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe(); // Sempre limpa inscrição para evitar vazamento de memória
  }

  voltarParaLogado() {
    this.router.navigate(['/logado']);
  }
}

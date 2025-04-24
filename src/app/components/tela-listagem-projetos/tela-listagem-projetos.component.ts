import { Component, OnInit } from '@angular/core'; // ngOnInit :contentReference[oaicite:5]{index=5}
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProjetoService } from '../../servicos/projeto.service'; // injeção de serviço :contentReference[oaicite:6]{index=6}

@Component({
  selector: 'app-tela-listagem-projetos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './tela-listagem-projetos.component.html',
  styleUrls: ['./tela-listagem-projetos.component.css'],
})
export class TelaListagemProjetosComponent implements OnInit {
  listaProjetos: any[] = [];

  constructor(private projetoService: ProjetoService) {} // DI :contentReference[oaicite:7]{index=7}

  ngOnInit() {
    this.listaProjetos = this.projetoService.listarProjetos(); // lê sempre do serviço :contentReference[oaicite:8]{index=8}
  }

  excluirProjeto(id: string) {
    this.projetoService.excluirProjeto(id);
    this.listaProjetos = this.projetoService.listarProjetos();
  }
}

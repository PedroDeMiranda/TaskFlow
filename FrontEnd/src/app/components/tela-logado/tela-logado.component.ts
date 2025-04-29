import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../servicos/auth.service';

@Component({
  selector: 'app-tela-logado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tela-logado.component.html',
  styleUrls: ['./tela-logado.component.css'],
})
export class TelaLogadoComponent implements OnInit {
  usuarioId: string | null = null;
  nomeUsuario: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.nomeUsuario = this.authService.getUsuario();
  }

  irParaEquipe() {
    this.router.navigate(['/equipe']);
  }

  irParaProjetos() {
    this.router.navigate(['/projetos']);
  }

  irParaCadastroProjeto() {
    this.router.navigate(['/cadastro-projeto']);
  }

  irParaStatusProjetos() {
    this.router.navigate(['/status-projetos']); // <-- NOVA FUNÇÃO
  }
}

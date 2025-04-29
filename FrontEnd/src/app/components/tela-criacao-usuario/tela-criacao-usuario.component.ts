import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../../servicos/usuario.service'; // ajusta o caminho conforme seu projeto

@Component({
  selector: 'app-tela-criacao-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tela-criacao-usuario.component.html',
  styleUrls: ['./tela-criacao-usuario.component.css'],
})
export class TelaCriacaoUsuarioComponent {
  usuario = {
    nomeCompleto: '',
    email: '',
    senha: '',
  };

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  criarConta() {
    this.usuarioService.criarUsuario(this.usuario);
    alert('Conta criada com sucesso!');
    this.router.navigate(['/']); // Pode redirecionar para login ou home
  }

  voltar() {
    this.router.navigate(['/']);
  }
}

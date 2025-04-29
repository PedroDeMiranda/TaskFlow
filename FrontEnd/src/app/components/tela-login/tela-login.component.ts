import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../servicos/auth.service'; // <-- Importa o service

@Component({
  standalone: true,
  selector: 'app-tela-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css'],
})
export class TelaLoginComponent {
  usuario: string = '';
  senha: string = '';
  mensagemErro: string = '';

  usuarioValido: string = 'admin';
  senhaValida: string = 'admin';

  constructor(private router: Router, private authService: AuthService) {}

  fazerLogin() {
    console.log('Usuário:', this.usuario);
    console.log('Senha:', this.senha);

    if (
      this.usuario === this.usuarioValido &&
      this.senha === this.senhaValida
    ) {
      // Guarda o nome do usuário no AuthService
      this.authService.setUsuario(this.usuario);

      // Redireciona para a página 'logado'
      this.router.navigate(['/logado']);
    } else {
      this.mensagemErro = 'Usuário ou senha inválidos. Tente novamente.';
    }
  }

  criarConta() {
    this.router.navigate(['/cadastro']);
  }

  esqueciSenha() {
    console.log('Esqueci minha senha clicado');
  }
}

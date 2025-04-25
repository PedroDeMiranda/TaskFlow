import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

  fazerLogin() {
    console.log('Usuário:', this.usuario);
    console.log('Senha:', this.senha);
  }

  criarConta() {
    this.router.navigate(['/cadastro']);
  }

  esqueciSenha() {
    console.log('Esqueci minha senha clicado');
  }
}

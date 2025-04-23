import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-tela-criacao-usuario',
  imports: [CommonModule, FormsModule],
  templateUrl: './tela-criacao-usuario.component.html',
  styleUrls: ['./tela-criacao-usuario.component.css'],
})
export class TelaCriacaoUsuarioComponent {
  nomeCompleto: string = '';
  email: string = '';
  senha: string = '';

  criarUsuario() {
    console.log('Usuário criado:', this.nomeCompleto, this.email, this.senha);
    // Aqui depois vai sua integração com o backend
  }
}

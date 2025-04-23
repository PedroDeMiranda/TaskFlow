import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tela-home.component.html',
  styleUrls: ['./tela-home.component.css'],
})
export class TelaHomeComponent {
  constructor(private router: Router) {}

  irParaLogin() {
    this.router.navigate(['/login']);
  }

  irParaCadastro() {
    this.router.navigate(['/cadastro']);
  }
}

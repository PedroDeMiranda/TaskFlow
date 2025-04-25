import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tela-equipe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tela-equipe.component.html',
  styleUrls: ['./tela-equipe.component.css'],
})
export class TelaEquipeComponent {
  membros = [
    { nome: 'Éder Campos', cargo: 'Desenvolvedor Front-end' },
    { nome: 'Gabriel Heron', cargo: 'Desenvolvedor SQL' },
    { nome: 'Pedro Miranda', cargo: 'Desenvolvedor Back-End' },
    { nome: 'Tiago Grigul', cargo: 'Desenvolvedor Back-End' },
  ];
}

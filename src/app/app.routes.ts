import { Routes } from '@angular/router';
import { TelaLoginComponent } from './components/tela-login/tela-login.component';
import { TelaCriacaoUsuarioComponent } from './components/tela-criacao-usuario/tela-criacao-usuario.component';
import { TelaHomeComponent } from './components/tela-home/tela-home.component';

export const routes: Routes = [
  { path: '', component: TelaHomeComponent },
  { path: 'login', component: TelaLoginComponent },
  { path: 'cadastro', component: TelaCriacaoUsuarioComponent },
];

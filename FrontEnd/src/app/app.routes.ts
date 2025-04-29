import { Routes } from '@angular/router';
import { TelaLoginComponent } from './components/tela-login/tela-login.component';
import { TelaCriacaoUsuarioComponent } from './components/tela-criacao-usuario/tela-criacao-usuario.component';
import { TelaHomeComponent } from './components/tela-home/tela-home.component';
import { TelaEquipeComponent } from './components/tela-equipe/tela-equipe.component';
import { TelaCadastroProjetoComponent } from './components/tela-cadastro-projeto/tela-cadastro-projeto.component';
import { TelaListagemProjetosComponent } from './components/tela-listagem-projetos/tela-listagem-projetos.component';
import { TelaEdicaoProjetoComponent } from './components/tela-edicao-projeto/tela-edicao-projeto.component';
import { TelaLogadoComponent } from './components/tela-logado/tela-logado.component';
import { TelaStatusProjetosComponent } from './components/tela-status-projetos/tela-status-projetos.component';

export const routes: Routes = [
  { path: '', component: TelaHomeComponent },
  { path: 'login', component: TelaLoginComponent },
  { path: 'cadastro', component: TelaCriacaoUsuarioComponent },
  { path: 'equipe', component: TelaEquipeComponent },
  { path: 'cadastro-projeto', component: TelaCadastroProjetoComponent },
  { path: 'projetos', component: TelaListagemProjetosComponent },
  { path: 'editar-projeto/:id', component: TelaEdicaoProjetoComponent },
  { path: 'logado', component: TelaLogadoComponent },
  { path: 'status-projetos', component: TelaStatusProjetosComponent },
];

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private usuarioLogado: string = '';

  setUsuario(usuario: string) {
    this.usuarioLogado = usuario;
  }

  getUsuario(): string {
    return this.usuarioLogado;
  }
}

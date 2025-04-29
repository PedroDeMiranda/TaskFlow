// src/app/servicos/usuario.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private usuarios: any[] = [];

  constructor() {}

  criarUsuario(usuario: any) {
    this.usuarios.push(usuario);
    console.log('Usuário cadastrado com sucesso:', usuario);
  }

  listarUsuarios() {
    return this.usuarios;
  }
}

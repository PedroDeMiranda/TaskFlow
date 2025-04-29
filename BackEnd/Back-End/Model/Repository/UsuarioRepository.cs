using Back_End.Model;
using Microsoft.AspNetCore.Identity.Data;
using Microsoft.EntityFrameworkCore;
using Back_End.Infra.Data;
using Back_End.Model.Repository.Interfaces;
using System;

namespace Back_End.Model.Repository
{
    public class UsuarioRepository : IUsuarioRepository
    {
        private readonly AppDbContext _appDbContext;

        public UsuarioRepository(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        public async Task<List<Usuario>> Listar()
        {
            return await _appDbContext.Usuarios.ToListAsync();
        }

        public async Task<Usuario> Login(LoginRequest loginRequest)
        {
            var login = await _appDbContext.Usuarios.FirstOrDefaultAsync(a => a.Email == loginRequest.Email);

            if (login == null)
            {
                throw new Exception("Usuário ou senha invalido!");
            }

            return login;
        }

        public async Task<Usuario> BuscarPorId(int id)
        {
            var lUsuario = await _appDbContext.Usuarios.FirstOrDefaultAsync(a => a.Id == id);
            if (lUsuario != null)
                return lUsuario;

            throw new Exception("Usuario não encontrado!");
        }

        public async Task<Usuario> Salvar(Usuario usuario)
        {
            try
            {
                usuario.ValidarDados();

                if (usuario.Id < 0) // Novo usuário
                {
                    usuario.GerarHashSenha(); // Gerar hash só na criação
                    _appDbContext.Usuarios.Add(usuario);
                }
                else // Atualizar usuário existente
                {
                    var usuarioEditar = await _appDbContext.Usuarios
                        .FirstOrDefaultAsync(a => a.Id == usuario.Id);

                    if (usuarioEditar == null)
                    {
                        throw new Exception("Usuário não encontrado!");
                    }

                    usuarioEditar.Nome = usuario.Nome;
                    usuarioEditar.Email = usuario.Email;

                    // Se for alterar a senha
                    if (!string.IsNullOrWhiteSpace(usuario.Senha))
                    {
                        usuarioEditar.Senha = string.Empty; // Zera para segurança
                        usuarioEditar.GerarHashSenha();
                        usuarioEditar.AtualizarSenha(usuario.Senha);
                    }
                }

                await _appDbContext.SaveChangesAsync();
                return usuario;
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                throw;
            }
        }


        public async Task<bool> Excluir(int id)
        {
            try
            {
                var usuarioExcluir = _appDbContext.Usuarios.FirstOrDefault(a => a.Id == id);

                if (usuarioExcluir != null)
                {
                    _appDbContext.Usuarios.Remove(usuarioExcluir);
                    await _appDbContext.SaveChangesAsync();

                    return true;
                }

                throw new Exception("Usuario não encontrado!");
            }
            catch (Exception)
            {
                throw;
            }
        }

      
    }
}
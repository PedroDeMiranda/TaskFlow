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
                #region  ValidarDados
                /*
                if (usuario.Numero.Length < 10 || usuario.Numero.Length > 16)
                {
                    throw new Exception("Telefone invalido!");
                }
                */

                #endregion

                if (usuario.Id > 0)
                {
                    var usuarioEditar = _appDbContext.Usuarios.FirstOrDefault(a => a.Id == usuario.Id);

                    if (usuarioEditar == null)
                    {
                        throw new Exception("Usuario não encontrado!");
                    }

                    usuarioEditar.Email = usuario.Email;
                    usuarioEditar.Nome = usuario.Nome;
                    usuarioEditar.Senha = usuario.Senha;
                }
                else
                {
                    _appDbContext.Usuarios.Add(usuario);
                }


                await _appDbContext.SaveChangesAsync();

                return usuario;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
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
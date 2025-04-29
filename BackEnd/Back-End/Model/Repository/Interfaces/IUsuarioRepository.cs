using Back_End.Model;
using Microsoft.AspNetCore.Identity.Data;

namespace Back_End.Model.Repository.Interfaces
{
    public interface IUsuarioRepository
    {
        Task<List<Usuario>> Listar();
        Task<Usuario> BuscarPorId(int id);
        Task<Usuario> Login(LoginRequest loginRequest);
        Task<Usuario> Salvar(Usuario usuario);
        Task<bool> Excluir(int id);
    }
}
using Back_End.Model.Repository.Interfaces;

namespace Back_End.Model.Repository
{
    public class TarefaRepository : ITarefaRepository
    {
        public Task<Tarefas> BuscarporId(int id)
        {
            throw new NotImplementedException();
        }

        public Task<Tarefas> Editar(int id)
        {
            throw new NotImplementedException();
        }

        public Task<Tarefas> Excluir(int id)
        {
            throw new NotImplementedException();
        }

        public Task<List<Tarefas>> List()
        {
            throw new NotImplementedException();
        }

        public Task<List<Tarefas>> Listar()
        {
            throw new NotImplementedException();
        }

        public Task<Tarefas> Salvar(Tarefas tarefas)
        {
            throw new NotImplementedException();
        }
    }
}

namespace Back_End.Model.Repository.Interfaces
{
    public interface ITarefaRepository
    {
        Task<List<Tarefas>> List();

        Task<Tarefas> BuscarporId(int id);

        Task<Tarefas> Salvar(Tarefas tarefas);

        Task<Tarefas> Excluir(int id);

        Task<Tarefas> Editar(int id);
    }
}

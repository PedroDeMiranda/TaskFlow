namespace Back_End.Model.Repository.Interfaces
{
    public interface ITarefaRepository
    {
        Task<List<Tarefa>> Listar();

        Task<Tarefa> BuscarporId(int id);

        Task<Tarefa> Salvar(Tarefa tarefas);

        Task<Tarefa> Excluir(int id);
    }
}

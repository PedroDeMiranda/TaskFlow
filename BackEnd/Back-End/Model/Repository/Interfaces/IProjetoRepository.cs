namespace Back_End.Model.Repository.Interfaces
{
    public interface IProjetoRepository
    {
        Task<IEnumerable<Projeto>> GetAllAsync();
        Task<Projeto?> GetByIdAsync(int id);
        Task AddAsync(Projeto projeto);
        Task DeleteAsync(int id);
    }

}

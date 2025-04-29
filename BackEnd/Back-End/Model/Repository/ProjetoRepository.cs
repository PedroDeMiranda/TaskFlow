using Back_End.Infra.Data;
using Back_End.Model.Repository.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Back_End.Model.Repository
{
    public class ProjetoRepository : IProjetoRepository
    {
        private readonly AppDbContext _context;

        public ProjetoRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Projeto>> GetAllAsync()
        {
            return await _context.Projetos.Include(p => p.Tarefas).ToListAsync();
        }

        public async Task<Projeto?> GetByIdAsync(int id)
        {
            return await _context.Projetos.Include(p => p.Tarefas)
                                          .FirstOrDefaultAsync(p => p.Id == id);
        }

        public async Task AddAsync(Projeto projeto)
        {
            _context.Projetos.Add(projeto);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var projeto = await GetByIdAsync(id);
            if (projeto is null) return;
            _context.Projetos.Remove(projeto);
            await _context.SaveChangesAsync();
        }
    }

}

using Microsoft.EntityFrameworkCore;
using Back_End.Model;

namespace Back_End.Infra.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Usuario> Usuarios { get; set; }

        public DbSet<Tarefa> Tarefas { get; set; }
    }
}
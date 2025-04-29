using Back_End.Infra.Data;
using Back_End.Model.Repository.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Back_End.Model.Repository
{
    public class TarefaRepository : ITarefaRepository
    {
        private readonly AppDbContext _appDbContext;

        public TarefaRepository(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        public async Task<Tarefa> BuscarporId(int id)
        {
            var tarefa = await _appDbContext.Tarefas.FirstOrDefaultAsync(t => t.Id == id);
            if (tarefa != null)
                return tarefa;

            throw new Exception("Tarefa não encontrada!");
        }

        public async Task<Tarefa> Excluir(int id)
        {
            var tarefaExcluir = await _appDbContext.Tarefas.FirstOrDefaultAsync(t => t.Id == id);

            if (tarefaExcluir == null)
                throw new Exception("Tarefa não encontrada!");

            _appDbContext.Tarefas.Remove(tarefaExcluir);
            await _appDbContext.SaveChangesAsync();

            return tarefaExcluir;
        }

        public async Task<List<Tarefa>> Listar()
        {
            return await _appDbContext.Tarefas.ToListAsync();
        }

        public async Task<Tarefa> Salvar(Tarefa tarefa)
        {
            if (tarefa == null)
                throw new ArgumentNullException(nameof(tarefa));

            if (tarefa.Id > 0)
            {
                var tarefaEditar = await _appDbContext.Tarefas.FirstOrDefaultAsync(t => t.Id == tarefa.Id);

                if (tarefaEditar == null)
                    throw new Exception("Tarefa não encontrada!");

                tarefaEditar.Name = tarefa.Name;
                tarefaEditar.Description = tarefa.Description;
                tarefaEditar.Usuario = tarefa.Usuario;

                _appDbContext.Tarefas.Update(tarefaEditar);
            }
            else
            {
                await _appDbContext.Tarefas.AddAsync(tarefa);
            }

            await _appDbContext.SaveChangesAsync();

            return tarefa;
        }
    }
}


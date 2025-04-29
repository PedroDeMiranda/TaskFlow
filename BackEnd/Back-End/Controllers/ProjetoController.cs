using Microsoft.AspNetCore.Mvc;
using Back_End.Model;
using Back_End.Model.Repository.Interfaces;
using System.Threading.Tasks;

namespace Back_End.Controllers
{
    [ApiController]
    [Route("api/projetos")]
    public class ProjetoController : ControllerBase
    {
        private readonly IProjetoRepository _repository;

        public ProjetoController(IProjetoRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public async Task<IActionResult> GetProjetos()
        {
            try
            {
                var projetos = await _repository.GetAllAsync();
                return Ok(projetos);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Erro ao buscar projetos: {ex.Message}");
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> BuscarPorId(int id)
        {
            try
            {
                var projeto = await _repository.GetByIdAsync(id);
                if (projeto == null)
                    return NotFound($"Projeto com ID {id} não encontrado.");

                return Ok(projeto);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Erro ao buscar projeto: {ex.Message}");
            }
        }

        [HttpPost]
        public async Task<IActionResult> Salvar([FromBody] Projeto projeto)
        {
            try
            {
                if (!ModelState.IsValid)
                    return BadRequest(ModelState);

                await _repository.AddAsync(projeto);
                return CreatedAtAction(nameof(BuscarPorId), new { id = projeto.Id }, projeto);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Erro ao salvar projeto: {ex.Message}");
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Excluir(int id)
        {
            try
            {
                var existente = await _repository.GetByIdAsync(id);
                if (existente == null)
                    return NotFound($"Projeto com ID {id} não encontrado para exclusão.");

                await _repository.DeleteAsync(id);
                return NoContent();
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Erro ao excluir projeto: {ex.Message}");
            }
        }
    }
}

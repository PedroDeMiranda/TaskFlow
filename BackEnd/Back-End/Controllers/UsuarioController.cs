using Microsoft.AspNetCore.Mvc;
using Back_End.Model;
using Back_End.Model.Repository.Interfaces;
using System.Threading.Tasks;

namespace Back_End.Controllers
{
    [ApiController]
    [Route("api/usuarios")]
    public class UsuariosController : ControllerBase
    {
        private readonly IUsuarioRepository _repository;

        public UsuariosController(IUsuarioRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public async Task<IActionResult> GetUsuarios()
        {
            try
            {
                var usuarios = await _repository.Listar();
                return Ok(usuarios);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Erro ao buscar usuários: {ex.Message}");
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> BuscarPorId(int id)
        {
            try
            {
                var usuario = await _repository.BuscarPorId(id);
                if (usuario == null)
                    return NotFound($"Usuário com ID {id} não encontrado.");

                return Ok(usuario);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Erro ao buscar usuário: {ex.Message}");
            }
        }

        [HttpPost]
        public async Task<IActionResult> Salvar([FromBody] Usuario usuario)
        {
            try
            {
                if (!ModelState.IsValid)
                    return BadRequest(ModelState);

                var resultado = await _repository.Salvar(usuario);
                return CreatedAtAction(nameof(BuscarPorId), new { id = resultado.Id }, resultado);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Erro ao salvar usuário: {ex.Message}");
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Excluir(int id)
        {
            try
            {
                var sucesso = await _repository.Excluir(id);
                if (!sucesso)
                    return NotFound($"Usuário com ID {id} não encontrado para exclusão.");

                return NoContent();
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Erro ao excluir usuário: {ex.Message}");
            }
        }
    }
}

using Back_End.Model;
using Back_End.Model.Repository.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Back_End.Controllers
{

    [ApiController]
    public class TarefasController : Controller
    {
        private readonly ITarefaRepository _tarefaRepository;

        public TarefasController(ITarefaRepository repository)
        {
            _tarefaRepository = repository;
        }

        [HttpGet("api/tarefas")]
        public IActionResult GetTarefas()
        {
            try
            {
                var tarefas = _tarefaRepository.Listar();
                return Ok(tarefas);
            }
            catch (Exception e)
            {
                return Unauthorized(e);
            }
        }

        [HttpPost("api/tarefas")]
        public IActionResult Salvar(Tarefa tarefas)
        {
            try
            {

                var lRusltoSalvarusuario = _tarefaRepository.Salvar(tarefas).Result;
                return Ok(lRusltoSalvarusuario);

            }
            catch (Exception error)
            {
                return ValidationProblem(new ValidationProblemDetails() { Detail = error.Message });
            }
        }

        [HttpDelete("api/tarefas/{id}")]
        public IActionResult excluir(int id)
        {
            try
            {
                var retorno = _tarefaRepository.Excluir(id).Result;
                return Ok(retorno);
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }

        }

        [HttpGet("api/tarefas/{id}")]
        public IActionResult BuscarPorId(int id)
        {
            try
            {
                var retorno = _tarefaRepository.BuscarporId(id).Result;
                return Ok(retorno);
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }

        }
    }
}

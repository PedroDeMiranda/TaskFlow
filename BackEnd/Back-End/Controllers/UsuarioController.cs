using System.Text;
using Microsoft.AspNetCore.Mvc;
using Back_End.Model;
using Back_End.Model.Repository.Interfaces;

namespace Back_End.Controllers
{

    [ApiController]
    public class UsuariosController : ControllerBase
    {
        private readonly IUsuarioRepository _repository;

        public UsuariosController(IUsuarioRepository repository)
        {
            _repository = repository;
        }

        [HttpGet("api/usuarios")]
        public IActionResult GetUsuarios()
        {
            try
            {
                var carrinhos = _repository.Listar().Result;
                return Ok(carrinhos);

            }
            catch (Exception e)
            {
                return Unauthorized(e);
            }
        }

        [HttpPost("api/usuarios")]
        public IActionResult Salvar(Usuario usuario)
        {
            try
            {

                var lRusltoSalvarusuario = _repository.Salvar(usuario).Result;
                return Ok(lRusltoSalvarusuario);

            }
            catch (Exception error)
            {
                return ValidationProblem(new ValidationProblemDetails() { Detail = error.Message });
            }
        }

        [HttpDelete("api/usuarios/{id}")]
        public IActionResult excluir(int id)
        {
            try
            {
                var retorno = _repository.Excluir(id).Result;
                return Ok(retorno);
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }

        }


        [HttpGet("api/usuarios/{id}")]
        public IActionResult BuscarPorId(int id)
        {
            try
            {
                var retorno = _repository.BuscarPorId(id).Result;
                return Ok(retorno);
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }

        }


    }
}
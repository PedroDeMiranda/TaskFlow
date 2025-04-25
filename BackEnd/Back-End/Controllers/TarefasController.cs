using Microsoft.AspNetCore.Mvc;

namespace Back_End.Controllers
{
    public class TarefasController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}

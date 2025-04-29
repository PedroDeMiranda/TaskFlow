using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Back_End.Model
{
    public class Projeto
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)] //Gerar Sequence

        public int Id { get; set; }
        [Required(ErrorMessage = "O campo Nome é obrigatório")]
        public required string Nome { get; set; }
        
        public  string Status { get; set; }
        public required string Descrição { get; set; }

        public List<Tarefas> Tarefas { get; set; } = new List<Tarefas>();


    }
}

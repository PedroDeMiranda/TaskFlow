using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Back_End.Model
{
    public class Usuario
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)] //Gerar Sequence
        public int Id { get; set; }
        [Required(ErrorMessage = "O campo Nome é obrigatório")]
        public required string Nome { get; set; }
        [Required(ErrorMessage = "O campo Email é obrigatório")]
        public required string Email { get; set; }
        [Required(ErrorMessage = "O campo Senha é obrigatório")]
        public required string Senha { get; set; }

        public List<Tarefas> Tarefas { get; set; }

    }
}
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Back_End.Model
{
    public class Tarefas
    {

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)] //Gerar Sequence
        public Guid Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Descricao { get; set; }
        [Required]
        public string Tipo { get; set; }


    }
}

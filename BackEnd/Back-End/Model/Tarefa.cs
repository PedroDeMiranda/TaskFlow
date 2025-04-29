using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Back_End.Model
{
    public class Tarefa
    {

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)] //Gerar Sequence
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Descricao { get; set; }

        [Required]
        public string Tipo { get; set; }

        public Usuario Usuario { get; set; }
        public Projeto Projeto { get; set; }


    }
}

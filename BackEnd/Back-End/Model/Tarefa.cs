using System.ComponentModel.DataAnnotations;

namespace Back_End.Model
{
    public class Tarefa
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Description { get; set; }

        [Required]
        public Usuario Usuario { get; set; }
    }
}

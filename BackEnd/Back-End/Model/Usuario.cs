using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Security.Cryptography;
using System.Text.RegularExpressions;

namespace Back_End.Model
{
    public class Usuario
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)] //Gerar Sequence
        public Guid Id { get; set; }
        [Required]
        public required string Nome { get; set; }
        [Required]
        public required string Email { get; set; }
        [Required]
        public required string Senha { get; set; }

        public string SenhaHash { get; private set; } = string.Empty;

        public void ValidarDados()
        {
            ValidarEmail();
            ValidarSenha();
        }

        public void GerarHashSenha()
        {
            if (string.IsNullOrWhiteSpace(Senha))
            {
                throw new InvalidOperationException("Senha não pode ser vazia para gerar o hash.");
            }

            // Criação do Salt
            byte[] salt = RandomNumberGenerator.GetBytes(16); // 128 bits

            // Geração do Hash com PBKDF2
            var hash = new Rfc2898DeriveBytes(Senha, salt, 100000, HashAlgorithmName.SHA256);
            byte[] hashBytes = hash.GetBytes(32); // 256 bits

            // Combina o Salt + Hash para armazenar
            byte[] hashComSalt = new byte[48];
            Buffer.BlockCopy(salt, 0, hashComSalt, 0, 16);
            Buffer.BlockCopy(hashBytes, 0, hashComSalt, 16, 32);

            // Armazena como Base64 para salvar no banco
            SenhaHash = Convert.ToBase64String(hashComSalt);

            // Zera a senha original da memória
            Senha = string.Empty;
        }

        public void AtualizarSenha(string novaSenha)
        {
            if (string.IsNullOrWhiteSpace(novaSenha))
            {
                throw new ArgumentException("Senha inválida.");
            }

            Senha = novaSenha;
            GerarHashSenha();
        }

        private void ValidarEmail()
        {
            if (string.IsNullOrWhiteSpace(Email))
            {
                throw new ArgumentException("O campo Email não pode estar vazio.");
            }

            // Regex robusta para email baseada em padrões RFC 5322
            var emailRegex = new Regex(@"^(?!\.)(""([^""\r\\]|\\[""\r\\])*""|"
                + @"([-a-zA-Z0-9!#\$%&'\*\+/=\?\^_`\{\}\|~]|(?<!\.)\.)*)(?<=@)"
                + @"[a-zA-Z0-9]([\-]?[a-zA-Z0-9])*(\.[a-zA-Z0-9]([\-]?[a-zA-Z0-9])*)+$");

            if (!emailRegex.IsMatch(Email))
            {
                throw new ArgumentException("Email inválido.");
            }
        }

        private void ValidarSenha()
        {
            if (Senha.Length < 6)
            {
                throw new ArgumentException("A senha deve ter no mínimo 6 caracteres.");
            }
            if (Senha.Length > 20)
            {
                throw new ArgumentException("A senha deve ter no máximo 20 caracteres.");
            }
        }
    }
}
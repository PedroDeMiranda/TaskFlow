﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Security.Cryptography;
using System.Text.RegularExpressions;

namespace Back_End.Model
{
    public class Usuario
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public required int Id { get; set; }

        [Required]
        public required string Nome { get; set; }

        [Required]
        public required string Email { get; set; }

        [Required]
        public required string Senha { get; set; }

        public void ValidarDados()
        {
            ValidarEmail();
            ValidarSenha();
        }

        public void GerarHashSenha()
        {
            if (string.IsNullOrWhiteSpace(Senha))
                throw new InvalidOperationException("Senha não pode ser vazia para gerar o hash.");

            byte[] salt = RandomNumberGenerator.GetBytes(16);
            var hash = new Rfc2898DeriveBytes(Senha, salt, 100000, HashAlgorithmName.SHA256);
            byte[] hashBytes = hash.GetBytes(32);

            byte[] hashComSalt = new byte[48];
            Buffer.BlockCopy(salt, 0, hashComSalt, 0, 16);
            Buffer.BlockCopy(hashBytes, 0, hashComSalt, 16, 32);

            Senha = Convert.ToBase64String(hashComSalt); // Salva o hash diretamente na propriedade Senha
        }

        public void AtualizarSenha(string novaSenha)
        {
            if (string.IsNullOrWhiteSpace(novaSenha))
                throw new ArgumentException("Senha inválida.");

            Senha = novaSenha;
            GerarHashSenha();
        }

        private void ValidarEmail()
        {
            if (string.IsNullOrWhiteSpace(Email))
                throw new ArgumentException("O campo Email não pode estar vazio.");

            if (!IsEmail(Email))
                throw new ArgumentException("Email inválido.");
        }

        public static bool IsEmail(string strEmail)
        {
            string strModelo = @"^([0-9a-zA-Z]([-\.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$";
            return Regex.IsMatch(strEmail, strModelo);
        }

        private void ValidarSenha()
        {
            if (Senha.Length < 6)
                throw new ArgumentException("A senha deve ter no mínimo 6 caracteres.");
            if (Senha.Length > 20)
                throw new ArgumentException("A senha deve ter no máximo 20 caracteres.");
        }
    }
}

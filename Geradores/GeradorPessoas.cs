using ApiPessoas.Models;
using Bogus;

namespace ApiPessoas.Geradores
{
    public class GeradorPessoas
    {
        public List<Pessoa> GerarPessoas()
        {

            var faker = new Faker<Pessoa>("pt_BR")
                .RuleFor(p => p.Cpf, f => f.Random.ReplaceNumbers("###########"))
                .RuleFor(p => p.Nome, f => f.Name.FullName())
                .RuleFor(p => p.Genero, f => f.PickRandom(new[] { "M", "F" }))
                .RuleFor(p => p.Endereco, f => f.Address.StreetAddress())
                .RuleFor(p => p.Idade, f => f.Random.Int(18, 60))
                .RuleFor(p => p.Municipio, f => f.Address.City())
                .RuleFor(p => p.Estado, f => f.Address.StateAbbr());

            var lista = faker.Generate(30);
            return lista;
        }

    }
}

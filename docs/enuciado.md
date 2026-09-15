# Centro Universitário de Excelência — UNEX

## OAT 1 (Parte A) — Laboratório Prático de JavaScript

**Semestre:** 2026.2

---

## 📚 Informações da Atividade

| Informação        | Detalhes                     |
| ----------------- | ---------------------------- |
| **Curso**         | Sistemas de Informação       |
| **Turno**         | Noturno                      |
| **Disciplina**    | Desenvolvimento de APIs      |
| **Semestre**      | 2026.2                       |
| **Docente**       | Prof. Ramon da Paixão Muricy |
| **Atividade**     | OAT 1 — Parte A              |
| **Valor**         | 10,0 pontos                  |
| **Peso na média** | 1,0 ponto                    |
| **Prazo**         | 19 de setembro de 2026       |

---

# 📋 Instruções Gerais

1. Esta atividade compõe **50% da nota da OAT 1**, totalizando **10,0 pontos** e equivalendo a **1,0 ponto na média final da disciplina**.

2. Devem ser resolvidos os **10 desafios práticos de JavaScript** apresentados neste documento.

3. O código poderá ser executado diretamente no **Node.js**, utilizando:

```bash
node script.js
```

Também é possível executar os códigos diretamente no **Console do Navegador**.

4. Cada função deverá ser devidamente implementada e testada por meio de chamadas `console.log()`, demonstrando as entradas utilizadas e as respectivas saídas.

5. A entrega deverá ser realizada até **19 de setembro de 2026**, via **Blackboard**, podendo ser enviada como:

* Arquivo `.js`;
* Arquivo `.zip`;
* Link do repositório no GitHub.

---

# 🧩 Desafios Práticos

## Questão 1 — ⏱️ Contador Regressivo para Datas

**Valor:** 1,0 ponto

Desenvolva uma função:

```javascript
calcularContagemRegressiva(dataFutura)
```

A função recebe uma data futura, informada como uma **string no formato ISO** ou como um **objeto `Date`**, e deve retornar um objeto detalhando quantos **dias, horas, minutos e segundos** faltam até esse momento.

### Conceitos em foco

* Objeto `Date`;
* `getTime()`;
* Conversão matemática de milissegundos;
* `Math.floor()`;
* Operador de resto `%`;
* Conversão para dias, horas, minutos e segundos.

### Exemplo de chamada

```javascript
calcularContagemRegressiva("2027-01-01T00:00:00")
```

### Retorno esperado

```javascript
{
    dias: 122,
    horas: 5,
    minutos: 42,
    segundos: 18,
    texto: "Faltam 122 dias, 5h, 42m e 18s"
}
```

---

## Questão 2 — ⚖️ Calculadora de IMC com Classificação OMS

**Valor:** 1,0 ponto

Desenvolva uma função:

```javascript
calcularIMC(peso, altura)
```

A função recebe o **peso em quilogramas** e a **altura em metros**, calcula o Índice de Massa Corporal (IMC) utilizando a fórmula:

```text
IMC = peso / altura²
```

A função deve retornar um objeto contendo o valor numérico do IMC, arredondado para duas casas decimais, e sua respectiva classificação.

### Faixas de classificação

|           IMC | Classificação      |
| ------------: | ------------------ |
|      `< 18.5` | Abaixo do peso     |
| `18.5 — 24.9` | Peso normal        |
| `25.0 — 29.9` | Sobrepeso          |
| `30.0 — 34.9` | Obesidade Grau I   |
| `35.0 — 39.9` | Obesidade Grau II  |
|      `≥ 40.0` | Obesidade Grau III |

### Exemplo de chamada

```javascript
calcularIMC(78.5, 1.75)
```

### Retorno esperado

```javascript
{
    imc: 25.63,
    classificacao: "Sobrepeso"
}
```

---

## Questão 3 — ✖️ Tabuada Dinâmica e Formatada

**Valor:** 1,0 ponto

Crie uma função:

```javascript
gerarTabuada(numero, limite = 10)
```

A função recebe um número base e um limite opcional, cujo valor padrão deve ser `10`.

O retorno deverá ser um **array de strings formatadas**, contendo cada linha da multiplicação.

### Conceitos em foco

* Estrutura de repetição `for`;
* Parâmetros padrão do ES6;
* Template literals;
* Interpolação de strings;
* Arrays.

### Exemplo de chamada

```javascript
gerarTabuada(7, 5)
```

### Retorno esperado

```javascript
[
    "7 x 1 = 7",
    "7 x 2 = 14",
    "7 x 3 = 21",
    "7 x 4 = 28",
    "7 x 5 = 35"
]
```

---

## Questão 4 — 📝 Validador de Dados de Cadastro de Usuário

**Valor:** 1,0 ponto

Construa uma função:

```javascript
validarUsuario(usuario)
```

A função recebe um objeto no formato:

```javascript
{
    nome,
    email,
    senha
}
```

A função deverá validar as seguintes regras:

### Regras de validação

**Nome**

* Não pode ser vazio;
* Deve possuir no mínimo 3 caracteres.

**E-mail**

* Deve conter `@`;
* Deve possuir pelo menos um `.` após o `@`.

**Senha**

* Deve possuir no mínimo 6 caracteres;
* Deve conter pelo menos 1 dígito numérico.

### Retorno quando válido

```javascript
{
    valido: true
}
```

### Retorno quando inválido

```javascript
{
    valido: false,
    erros: [...]
}
```

O array `erros` deverá listar **todas as mensagens de erro encontradas**.

### Exemplo de chamada

```javascript
validarUsuario({
    nome: "Al",
    email: "teste",
    senha: "123"
})
```

### Retorno esperado

```javascript
{
    valido: false,
    erros: [
        "Nome deve ter pelo menos 3 caracteres",
        "E-mail inválido",
        "Senha deve ter pelo menos 6 caracteres"
    ]
}
```

---

## Questão 5 — 📊 Analisador Estatístico de Números em Array

**Valor:** 1,0 ponto

Crie uma função:

```javascript
analisarNumeros(arrayDeNumeros)
```

A função recebe uma lista de números e deve retornar um objeto consolidado contendo:

* Total de elementos;
* Maior valor;
* Menor valor;
* Média aritmética;
* Quantidade de números pares;
* Quantidade de números ímpares.

### Conceitos em foco

* `reduce()`;
* `filter()`;
* `for...of`;
* Operadores matemáticos;
* Validação defensiva;
* Arrays vazios.

### Exemplo de chamada

```javascript
analisarNumeros([12, 5, 8, 130, 44, 3])
```

### Retorno esperado

```javascript
{
    total: 6,
    maior: 130,
    menor: 3,
    media: 33.67,
    pares: 4,
    impares: 2
}
```

---

## Questão 6 — 🌡️ Conversor Universal de Temperaturas

**Valor:** 1,0 ponto

Escreva duas funções utilitárias:

```javascript
celsiusParaFahrenheit(celsius)

fahrenheitParaCelsius(fahrenheit)
```

Ambas deverão validar se a entrada é numérica utilizando `typeof` e retornar o valor convertido com **duas casas decimais**.

### Fórmulas

Conversão de Celsius para Fahrenheit:

```text
F = (C × 1.8) + 32
```

Conversão de Fahrenheit para Celsius:

```text
C = (F - 32) / 1.8
```

### Exemplos

```javascript
celsiusParaFahrenheit(30)
```

Resultado:

```text
86
```

```javascript
fahrenheitParaCelsius(86)
```

Resultado:

```text
30
```

---

## Questão 7 — 🔤 Contador de Vogais, Consoantes e Espaços

**Valor:** 1,0 ponto

Desenvolva uma função:

```javascript
contarCaracteres(texto)
```

A função recebe uma string e deve retornar um relatório quantitativo contendo:

* Quantidade de vogais;
* Quantidade de consoantes;
* Quantidade de espaços em branco;
* Quantidade de caracteres especiais e pontuações;
* Total de caracteres.

### Conceitos em foco

* `toLowerCase()`;
* `normalize("NFD")`;
* Remoção de acentos;
* Expressões Regulares (Regex);
* `includes()`;
* Laços de repetição;
* Objetos acumuladores.

### Exemplo de chamada

```javascript
contarCaracteres("Desenvolvimento de APIs REST!")
```

### Retorno esperado

```javascript
{
    vogais: 10,
    consoantes: 15,
    espacos: 3,
    especiais: 1,
    total: 29
}
```

---

## Questão 8 — 🔐 Gerador de Tokens e Códigos de Cupom

**Valor:** 1,0 ponto

Crie uma função:

```javascript
gerarTokenAleatorio(tamanho = 8, tipo = "alfanumerico")
```

A função deverá gerar uma chave aleatória com o comprimento especificado.

O parâmetro `tipo` poderá assumir os seguintes valores:

| Tipo           | Caracteres permitidos |
| -------------- | --------------------- |
| `numerico`     | `0-9`                 |
| `letras`       | `A-Z, a-z`            |
| `alfanumerico` | `A-Z, a-z, 0-9`       |

### Conceitos em foco

* `Math.random()`;
* `Math.floor()`;
* Indexação de strings;
* Seleção aleatória;
* Strings de caracteres predefinidos.

### Exemplos

```javascript
gerarTokenAleatorio(8, "alfanumerico")
```

Exemplo de saída:

```text
"X7B3K9P2"
```

```javascript
gerarTokenAleatorio(6, "numerico")
```

Exemplo de saída:

```text
"948201"
```

> **Observação:** os valores gerados são aleatórios, portanto as saídas podem ser diferentes a cada execução.

---

## Questão 9 — 🔎 Localizador da Maior Palavra em Frases

**Valor:** 1,0 ponto

Construa uma função:

```javascript
encontrarMaiorPalavra(frase)
```

A função recebe uma frase, remove eventuais pontuações e caracteres especiais, localiza a maior palavra da sentença e retorna um objeto contendo:

* A maior palavra;
* O número de letras da palavra.

### Conceitos em foco

* `split(" ")`;
* `replace()`;
* Expressões Regulares;
* Laços de comparação;
* Propriedade `length`;
* Manipulação de strings.

### Exemplo de chamada

```javascript
encontrarMaiorPalavra(
    "O desenvolvimento de microsserviços e APIs é essencial."
)
```

### Retorno esperado

```javascript
{
    palavra: "microsserviços",
    tamanho: 15
}
```

---

## Questão 10 — 👥 Sorteador e Distribuidor de Equipes / Times

**Valor:** 1,0 ponto

Crie uma função:

```javascript
distribuirTimes(listaDeNomes, quantidadeDeTimes)
```

A função recebe:

* Uma lista de nomes de alunos;
* Um número inteiro representando a quantidade de grupos.

A função deverá:

1. Embaralhar a lista de nomes aleatoriamente;
2. Criar a quantidade de times solicitada;
3. Distribuir os integrantes de maneira equilibrada;
4. Retornar uma matriz, ou seja, um array contendo os arrays dos times.

### Conceitos em foco

* Algoritmo de Fisher-Yates;
* `Math.random()`;
* Arrays;
* Matrizes;
* Estruturas de repetição;
* Operador de resto `%`;
* Lógica de distribuição circular.

### Exemplo de chamada

```javascript
distribuirTimes(
    ["Ana", "Bruno", "Carlos", "Diana", "Eduardo", "Fernanda"],
    2
)
```

### Retorno esperado

```javascript
[
    ["Carlos", "Fernanda", "Ana"],
    ["Bruno", "Eduardo", "Diana"]
]
```

> **Observação:** como o sorteio é aleatório, a ordem dos integrantes e a composição dos times poderá ser diferente a cada execução.

---

# 📌 Resumo dos Desafios

|   Questão | Desafio                           |           Valor |
| --------: | --------------------------------- | --------------: |
|        01 | ⏱️ Contador Regressivo para Datas |             1,0 |
|        02 | ⚖️ Calculadora de IMC             |             1,0 |
|        03 | ✖️ Tabuada Dinâmica e Formatada   |             1,0 |
|        04 | 📝 Validador de Usuário           |             1,0 |
|        05 | 📊 Analisador Estatístico         |             1,0 |
|        06 | 🌡️ Conversor de Temperaturas     |             1,0 |
|        07 | 🔤 Contador de Caracteres         |             1,0 |
|        08 | 🔐 Gerador de Tokens              |             1,0 |
|        09 | 🔎 Localizador da Maior Palavra   |             1,0 |
|        10 | 👥 Distribuidor de Equipes        |             1,0 |
| **Total** |                                   | **10,0 pontos** |



## 🎓 Identificação Acadêmica

**Instituição:** Centro Universitário de Excelência — UNEX
**Curso:** Sistemas de Informação
**Disciplina:** Desenvolvimento de APIs
**Atividade:** OAT 1 — Parte A
**Semestre:** 2026.2
**Turno:** Noturno
**Docente:** Prof. Ramon da Paixão Muricy

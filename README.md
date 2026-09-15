# 🧪 Laboratório Prático de JavaScript

> **OAT 1 — Parte A | Desenvolvimento de APIs | UNEX 2026.2**

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-22+-339933?style=for-the-badge\&logo=node.js\&logoColor=white)
![UNEX](https://img.shields.io/badge/UNEX-2026.2-1E88E5?style=for-the-badge)

---

## 📚 Sobre o projeto

Este repositório contém a implementação dos **10 desafios práticos de JavaScript** propostos na **OAT 1 — Parte A**, da disciplina de **Desenvolvimento de APIs**, do curso de **Sistemas de Informação** da UNEX.

O objetivo da atividade é aplicar conceitos fundamentais da linguagem JavaScript por meio da resolução de problemas envolvendo:

* Manipulação de datas;
* Objetos e funções;
* Estruturas de repetição;
* Arrays e seus métodos;
* Strings e expressões regulares;
* Validação de dados;
* Operadores matemáticos;
* Geração de valores aleatórios;
* Organização e processamento de informações.

---

## 🎯 Objetivos

* Praticar a sintaxe moderna do JavaScript;
* Desenvolver funções reutilizáveis;
* Trabalhar com diferentes tipos de dados;
* Aplicar métodos nativos de arrays e strings;
* Desenvolver soluções utilizando lógica de programação;
* Executar e testar aplicações utilizando Node.js;
* Organizar um projeto JavaScript utilizando boas práticas.

---

## 🛠️ Tecnologias utilizadas

| Tecnologia     | Utilização                           |
| -------------- | ------------------------------------ |
| **JavaScript** | Desenvolvimento das soluções         |
| **Node.js**    | Execução dos arquivos                |
| **Git**        | Controle de versão                   |
| **GitHub**     | Hospedagem e documentação do projeto |

---

## 📂 Estrutura do projeto

```text
laboratorio-javascript-oat1/
│
├── README.md
├── package.json
├── .gitignore
│
├── src/
│   ├── questao01-contagem-regressiva.js
│   ├── questao02-imc.js
│   ├── questao03-tabuada.js
│   ├── questao04-validacao-usuario.js
│   ├── questao05-estatistica.js
│   ├── questao06-temperaturas.js
│   ├── questao07-caracteres.js
│   ├── questao08-token.js
│   ├── questao09-maior-palavra.js
│   └── questao10-times.js
│
└── docs/
    └── enunciado.md
```

---

# 🧩 Desafios

## 01 — ⏱️ Contador Regressivo para Datas

Implementação da função:

```javascript
calcularContagemRegressiva(dataFutura)
```

**Conceitos aplicados:**

* `Date`;
* `getTime()`;
* Milissegundos;
* `Math.floor()`;
* Operador `%`;
* Conversão de unidades de tempo.

---

## 02 — ⚖️ Calculadora de IMC

Implementação da função:

```javascript
calcularIMC(peso, altura)
```

**Conceitos aplicados:**

* Operações matemáticas;
* Objetos;
* Condicionais;
* Arredondamento;
* Validação de dados.

---

## 03 — ✖️ Tabuada Dinâmica

Implementação da função:

```javascript
gerarTabuada(numero, limite)
```

**Conceitos aplicados:**

* Estrutura `for`;
* Parâmetros padrão;
* Template literals;
* Arrays;
* Interpolação de strings.

---

## 04 — 📝 Validador de Usuário

Implementação da função:

```javascript
validarUsuario(usuario)
```

**Conceitos aplicados:**

* Objetos;
* Condicionais;
* Arrays;
* Validação de strings;
* Expressões regulares.

---

## 05 — 📊 Analisador Estatístico

Implementação da função:

```javascript
analisarNumeros(arrayDeNumeros)
```

**Conceitos aplicados:**

* `reduce()`;
* `filter()`;
* `for...of`;
* Operadores matemáticos;
* Validação de arrays;
* Média aritmética.

---

## 06 — 🌡️ Conversor de Temperaturas

Implementação das funções:

```javascript
celsiusParaFahrenheit(celsius)

fahrenheitParaCelsius(fahrenheit)
```

**Conceitos aplicados:**

* Funções;
* `typeof`;
* Operações matemáticas;
* Conversão de unidades;
* Arredondamento.

---

## 07 — 🔤 Contador de Caracteres

Implementação da função:

```javascript
contarCaracteres(texto)
```

A função identifica:

* Vogais;
* Consoantes;
* Espaços;
* Caracteres especiais;
* Total de caracteres.

**Conceitos aplicados:**

* Strings;
* `toLowerCase()`;
* `normalize()`;
* Expressões regulares;
* Laços de repetição;
* Objetos acumuladores.

---

## 08 — 🔐 Gerador de Tokens

Implementação da função:

```javascript
gerarTokenAleatorio(tamanho, tipo)
```

Suporta os seguintes formatos:

```text
numerico
letras
alfanumerico
```

**Conceitos aplicados:**

* `Math.random()`;
* `Math.floor()`;
* Strings;
* Indexação;
* Geração aleatória.

> **Observação:** o gerador tem finalidade didática e não deve ser utilizado para gerar tokens de autenticação ou credenciais de segurança em aplicações reais.

---

## 09 — 🔎 Localizador da Maior Palavra

Implementação da função:

```javascript
encontrarMaiorPalavra(frase)
```

**Conceitos aplicados:**

* `split()`;
* `replace()`;
* Expressões regulares;
* Laços;
* `length`;
* Manipulação de strings.

---

## 10 — 👥 Distribuidor de Times

Implementação da função:

```javascript
distribuirTimes(listaDeNomes, quantidadeDeTimes)
```

A função realiza:

1. Embaralhamento dos nomes;
2. Criação dos grupos;
3. Distribuição equilibrada;
4. Retorno dos times em uma matriz.

**Conceitos aplicados:**

* Arrays;
* Matrizes;
* Fisher-Yates;
* `Math.random()`;
* Operador `%`;
* Estruturas de repetição.

---

# ▶️ Como executar

## Pré-requisitos

É necessário possuir o **Node.js** instalado.

Verifique a instalação:

```bash
node --version
```

---

## Executando uma questão

Entre na pasta do projeto:

```bash
cd laboratorio-javascript-oat1
```

Depois execute qualquer uma das questões:

```bash
node src/questao01-contagem-regressiva.js
```

Exemplo:

```bash
node src/questao03-tabuada.js
```

---

# 🧪 Testes

Cada arquivo contém chamadas de `console.log()` para demonstrar o funcionamento da função e comparar as entradas utilizadas com os resultados produzidos.

Exemplo:

```text
Entrada:
gerarTabuada(7, 5)

Saída:
7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
7 x 4 = 28
7 x 5 = 35
```

---

# 🎓 Informações acadêmicas

**Instituição:** Centro Universitário de Excelência — UNEX
**Curso:** Sistemas de Informação
**Disciplina:** Desenvolvimento de APIs
**Atividade:** OAT 1 — Parte A
**Semestre:** 2026.2
**Turno:** Noturno
**Docente:** Prof. Ramon da Paixão Muricy



<p align="center">
  Desenvolvido como atividade acadêmica da disciplina de Desenvolvimento de APIs — UNEX 2026.2.
</p>

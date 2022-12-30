<h1 align="center"> 💵 Multinational Financial 💵</h1>

<br>

## :dart: Sobre

Uma empresa multinacional está buscando criar um programa que poupe o tempo e substitua os cálculos manuais do coeficiente de trabalho, imposto, gratificação e etc dos funcionários. Neste cenário, foi criado um algoritmo que recebe algumas informações e utiliza elas para fazer os cáculos e retornar:

- **Salário Mínimo**; deve variar de acordo com o cargo:
  - <b>Operário:</b> Entre 750 até 2500
  - <b>Gerente:</b> Entre 1400 até 4600
    <br>
- **Coeficiente de Trabalho**, conforme a tabela abaixo:
  | Turno de Trabalho | Valor do Coeficiente |
  | ----------------- | --------------------- |
  | Matutino | 13% do salário mínimo |
  | Vespertino | 4% do salário mínimo |
  | Noturno | 8% do salário mínimo |
  <br>

- **Salário Bruto** (Cálculo: Número de Horas Trabalhadas X Valor do Coeficiente de Trabalho)
  <br>

- **Imposto**, conforme a tabela abaixo:

  | Categoria de Trabalho | Salário Bruto | Imposto sobre o Salário Bruto |
  | --------------------- | ------------- | ----------------------------- |
  | Operário              | ≥ R$ 945,00   | 13%                           |
  |                       | < R$ 945,00   | 7%                            |
  | Gerente               | ≥ R$ 1520,00  | 15%                           |
  |                       | < R$ 1520,00  | 10%                           |

    <br>

- **Gratificação**, conforme as regras abaixo:
  ✏️ Caso o funcionário preencha **todos** os requisitos abaixo, ele deve receber uma gratificação de R$1200,00, caso contrário deve ser de 465.00.

  <b>Requisitos:</b>
  - <b>Turno:</b> Matinal 
  - <b>Horas trabalhadas:</b> Superior à 80 horas.
  <br>

- **Auxílio alimentação**, conforme as regras abaixo:
  ✏️ Se o Operário preencher **todos** os requisitos abaixo, seu auxílio alimentação será de metade do seu salário bruto, caso contrário, será de um terço do seu salário bruto:

  <b>Requisitos:</b>

  - <b>Cargo:</b> Operário
  - <b>Coeficiente de Trabalho:</b> Maior ou igual a 25
  <br>

- **Salário líquido** (Cálculo: Salário Bruto - Imposto + Gratificação + Auxílio Alimentação)

<hr>

## 👾 Tecnologias

<b>Para o desenvolvimento do desafio foram utilizadas as seguintes tecnologias: </b>

- Typescript
- Jest

## :closed_book: Como usar?

Antes de iniciar, você precisa ter [Git](https://git-scm.com) e [Node](https://nodejs.org/en/) instalados.

```bash
# Clone this project
$ git clone https://github.com/VitorMantovani/Company-Calculus-Facilitator

# Access
$ cd CompanyCalculusFacilitator

# Install dependencies
$ yarn 

# Run the project
$ yarn dev


```

## 🤝 Colaboradores

Agradecemos às seguintes pessoas que contribuíram para este projeto:

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/93927096?v=4" width="160px;" alt="Foto do Vitor Mantovani no GitHub"/><br>
        <sub>
          <b>Vitor Mantovani</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

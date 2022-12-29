import { GetBonus } from "./use-cases/getBonus/GetBonus";
import { GetFoodAid } from "./use-cases/getFoodAid/GetFoodAid";
import { GetGrossSalary } from "./use-cases/getGrossSalary/GetGrossSalary";
import { GetMinSalary } from "./use-cases/getMinSalary/GetMinSalary";
import { GetNetSalary } from "./use-cases/getNetSalary/GetNetSalary";
import { GetSalaryTaxRate } from "./use-cases/getSalaryTaxRate/GetSalaryTaxRate";
import { GetWorkCoefficient } from "./use-cases/getWorkCoefficient/GetWorkCoefficient";

let employee = {
  role: "gerente",
  workShift: ["matutino", "vespertino"],
  workedHours: 80,
};

const { role, workShift, workedHours } = employee;

const minSalary = GetMinSalary.run(role);

const workCoefficient = GetWorkCoefficient.run(workShift);

const grossSalary = GetGrossSalary.run(workedHours, workCoefficient, minSalary);

const taxRate = GetSalaryTaxRate.run(grossSalary, role);

const bonus = GetBonus.run(workShift, workedHours);

const foodAid = GetFoodAid.run(role, workCoefficient, grossSalary);

const netSalary = GetNetSalary.run(grossSalary, taxRate, bonus, foodAid);

Object.assign(employee, {
  workCoefficient: Intl.NumberFormat("pt-BR", { style: "percent" }).format(
    workCoefficient
  ),
  minSalary: Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(minSalary),
  grossSalary: Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(grossSalary),
  foodAid: Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(foodAid),
  bonus: Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(bonus),
  taxRate: Intl.NumberFormat("pt-BR", { style: "percent" }).format(taxRate),
  netSalary: Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(netSalary),
});

console.log(employee);

import { GetBonus } from "./use-cases/getBonus/GetBonus";
import { GetFoodAid } from "./use-cases/getFoodAid/GetFoodAid";
import { GetGrossSalary } from "./use-cases/getGrossSalary/GetGrossSalary";
import { GetMinSalary } from "./use-cases/getMinSalary/GetMinSalary";
import { GetNetSalary } from "./use-cases/getNetSalary/GetNetSalary";
import { GetSalaryTaxRate } from "./use-cases/getSalaryTaxRate/GetSalaryTaxRate";
import { GetWorkCoefficient } from "./use-cases/getWorkCoefficient/GetWorkCoefficient";

const employeeRole = "operario";
const workShift = ["matutino", "vespertino", "noturno"];
const workedHours = 80;

const minSalary = GetMinSalary.run(employeeRole);

const workCoefficient = GetWorkCoefficient.run(workShift);

const grossSalary = GetGrossSalary.run(workedHours, workCoefficient, minSalary);

const taxRate = GetSalaryTaxRate.run(grossSalary, employeeRole);

const bonus = GetBonus.run(workShift, workedHours);

const foodAid = GetFoodAid.run(employeeRole, workCoefficient, grossSalary);

const netSalary = GetNetSalary.run(grossSalary, taxRate, bonus, foodAid);

const employee: Record<string, any> = {};

Object.assign(employee, {
  workShift,
  employeeRole,
  minSalary,
  workCoefficient,
  workedHours,
  grossSalary,
  taxRate,
  bonus,
  foodAid,
  netSalary,
});

Object.keys(employee).forEach((key) => {
  if (typeof employee[key] === "number" && key !== "workedHours") {
    key === "workCoefficient" || key === "tax"
      ? (employee[key] = Intl.NumberFormat("pt-BR", {
          style: "percent",
        }).format(employee[key]))
      : (employee[key] = Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(employee[key]));
  }
});

console.log(employee);

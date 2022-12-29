export class GetSalaryTaxRate {
  static run(grossSalary: number, employeeRole: string): number {
    const taxRate = {
      operario: grossSalary >= 945 ? 0.13 : 0.07,
      gerente: grossSalary >= 1520 ? 0.15 : 0.1,
    }[employeeRole];

    if (!taxRate) throw new Error("Employee role is invalid!");

    return taxRate;
  }
}

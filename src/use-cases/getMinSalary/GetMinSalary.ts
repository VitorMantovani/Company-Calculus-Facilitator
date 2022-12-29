export class GetMinSalary {
  static run(employeePosition: string): number {
    const minSalary = {
      operario: Math.floor(Math.random() * (2500 - 750 + 1)) + 750,
      gerente: Math.floor(Math.random() * (4600 - 1400 + 1)) + 1400,
    }[employeePosition];

    if (!minSalary) throw new Error("Employee position is invalid!");

    return minSalary;

  }
}

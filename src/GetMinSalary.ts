export class GetMinSalary {
  static run(employeePosition: string): number {
    const minSalary = {
      operario: Math.floor(Math.random() * (750 - 2500 + 1)) + 750,
      gerente: Math.floor(Math.random() * (1400 - 4600 + 1)) + 1400,
    }[employeePosition];

    if (!minSalary) throw new Error("Employee position is invalid!");

    return minSalary;

  }
}

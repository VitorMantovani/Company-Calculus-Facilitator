export class GetGrossSalary {
  static run(workedHours: number, workCoefficient: number, minSalary: number) {
    if (workedHours <= 0 || workedHours >= 721)
      throw new Error("Worked hours in invalid!");

    const grossSalary = workedHours * (workCoefficient * minSalary);
    return Number(grossSalary.toFixed(2));
  }
}

export class GetGrossSalary {
  static run(workedHours: number, workCoefficient: number, minSalary: number) {
    if (workedHours <= 0 || workedHours >= 721)
      throw new Error("Worked hours in invalid!");

      return workedHours * (workCoefficient * minSalary);
  }
}

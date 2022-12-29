import { GenerateRandomNumber } from "../../utils/GenerateRandomNumber";

export class GetMinSalary {
  static run(employeePosition: string): number {
    const minSalary = {
      operario: GenerateRandomNumber.run(750, 2500),
      gerente: GenerateRandomNumber.run(1400,4600)
    }[employeePosition];

    if (!minSalary) throw new Error("Employee position is invalid!");

    return minSalary;

  }
}

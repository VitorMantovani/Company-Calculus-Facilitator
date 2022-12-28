export class GetFoodAid {
  static run(role: string, workCoefficient: number, grossSalary: number): number {
    const isFactoryWorker = role === "operario";

    const fulfillRequirements = isFactoryWorker && workCoefficient >= 25;

    if (!fulfillRequirements) return grossSalary / 3;

    return grossSalary / 2;
  }
}

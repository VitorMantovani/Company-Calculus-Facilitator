export class GetFoodAid {
  static run(role: string, workCoefficient: number, grossSalary: number): number {
    const isFactoryWorker = (role === "operario");

    const fulfillRequirements = isFactoryWorker && workCoefficient >= 0.25;

    console.log(fulfillRequirements)

    if (!fulfillRequirements) return grossSalary / 3;

    return grossSalary / 2;
  }
}

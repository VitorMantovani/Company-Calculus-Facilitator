export class GetFoodAid {
  static run(role: string, workCoefficient: number, grossSalary: number): number {
    const isFactoryWorker = role === "operario";

    const fulfillRequirements = isFactoryWorker && workCoefficient >= 25;

    if (!fulfillRequirements) {
      const foodAid = grossSalary / 3;
      return Number(foodAid.toFixed(2));
    };

    const foodAid = grossSalary / 2;
    return Number(foodAid.toFixed(2));
  }
}

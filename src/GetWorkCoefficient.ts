type Coeficients = Record<string, number>;


export class GetWorkCoefficient {

  static run(workShift: string[]): number {
    const workCoefficients: Coeficients = {
      matutino: 0.13,
      vespertino: 0.04,
      noturno: 0.08,
    };

    const employeeWorkCoefficient = workShift.reduce((acc, shift) => acc += workCoefficients[shift], 0)

    if (!employeeWorkCoefficient) throw new Error("Invalid workShift(s)!");

    return employeeWorkCoefficient;
  }
}

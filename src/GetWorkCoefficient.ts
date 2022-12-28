export class GetWorkCoefficient {
  static run(workShift: string): number {
    const workCoefficient = {
      matutino: 0.13,
      vespertino: 0.04,
      noturno: 0.08,
    }[workShift];

    if (!workCoefficient) throw new Error("Enter a valid work shift");

    return workCoefficient;
  }
}

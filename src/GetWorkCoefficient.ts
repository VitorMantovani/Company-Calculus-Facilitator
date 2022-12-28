export class GetWorkCoefficient {
  constructor(private workShift: string) {}

  run(): number {
    const workCoefficient = {
      matutino: 0.13,
      vespertino: 0.04,
      noturno: 0.08,
    }[this.workShift];

    if (!workCoefficient) throw new Error("Enter a valid work shift");

    return workCoefficient;
  }
}

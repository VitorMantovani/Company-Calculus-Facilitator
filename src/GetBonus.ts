export class GetBonus {
  static run(workShift: string[], workedHours: number) {
    return workShift.includes("matutino") && workedHours > 80 ? 1200 : 465
  }
}

export class GetBonus {
  static run(workShift: string, workedHours: number) {
    return workShift === "matutino" && workedHours > 80 ? 1200 : 465
  }
}

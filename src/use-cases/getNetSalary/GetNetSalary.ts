export class GetNetSalary {
    static run(grossSalary: number, taxRate: number, bonus: number, foodAid: number) {
        return grossSalary - (grossSalary * taxRate) + bonus + foodAid;
    }
}
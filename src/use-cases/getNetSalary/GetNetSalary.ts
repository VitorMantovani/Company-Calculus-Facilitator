export class GetNetSalary {
    static run(grossSalary: number, taxRate: number, bonus: number, foodAid: number) {
        const netSalary = grossSalary - (grossSalary * taxRate) + bonus + foodAid;
        return Number(netSalary.toFixed(2));
    }
}
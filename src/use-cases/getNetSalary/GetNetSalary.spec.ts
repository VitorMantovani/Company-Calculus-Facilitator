import { GetNetSalary } from "./GetNetSalary"

describe("GetNetSalary", () => {
    it("should be able to calculate the net salary", () => {
        const grossSalary = 1500;
        const taxRate = 0.1
        const bonus = 1200
        const foodAid = 750
        const netSalary = GetNetSalary.run(grossSalary, taxRate, bonus, foodAid);

        expect(netSalary).toBe(grossSalary - (grossSalary * taxRate) + bonus + foodAid);
    })
})
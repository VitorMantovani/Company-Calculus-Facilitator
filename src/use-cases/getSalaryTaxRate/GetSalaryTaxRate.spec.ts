import { GetSalaryTaxRate } from "./GetSalaryTaxRate"

describe("GetSalaryTexRate", () => {
    it("should get 'operario' tax rate is salary is greater than or equal to 945", () => {
        const taxRate = GetSalaryTaxRate.run(1000, "operario");

        expect(taxRate).toBe(0.13)
    })

    it("should get 'operario' tax rate is salary is less than to 945", () => {
        const taxRate = GetSalaryTaxRate.run(900, "operario");

        expect(taxRate).toBe(0.07)
    })

    it("should get 'gerente' tax rate is salary is greater than or equal to 1520", () => {
        const taxRate = GetSalaryTaxRate.run(1520, "gerente");

        expect(taxRate).toBe(0.15)
    })

    it("should get 'gerente' tax rate is salary is less than to 1520", () => {
        const taxRate = GetSalaryTaxRate.run(1100, "gerente");

        expect(taxRate).toBe(0.10)
    })

    it("should thorw error if employee role is invalid", () => {
        expect(() => GetSalaryTaxRate.run(1000, "invalid")).toThrow("Employee role is invalid!");
    })

})
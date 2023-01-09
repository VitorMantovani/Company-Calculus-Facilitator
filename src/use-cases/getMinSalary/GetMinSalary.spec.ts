import { GetMinSalary } from "./GetMinSalary"

describe("GetMinSalary", () => {
    it("shoud be able to get 'operario' minimum salary", () => {
        const minSalary = GetMinSalary.run("operario");

        expect(minSalary).toBeGreaterThanOrEqual(750);
        expect(minSalary).toBeLessThanOrEqual(2500);
    });

    it("shoud be able to get 'gerente' minimum salary", () => {
        const minSalary = GetMinSalary.run("gerente");

        expect(minSalary).toBeGreaterThanOrEqual(1400);
        expect(minSalary).toBeLessThanOrEqual(4600);
    });

    it("should throw an error if employee role is invalid", () => {
        expect(() => GetMinSalary.run("invalid")).toThrow("Employee position is invalid!");
    })
})
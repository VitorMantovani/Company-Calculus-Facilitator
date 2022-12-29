import { GetGrossSalary } from "./GetGrossSalary";

describe("GetGrossSalary", () => {
  it("should be able to calculate gross salary", () => {
    const grossSalary = GetGrossSalary.run(80, 0.13, 1000);

    expect(grossSalary).toBe(10400);
  });

  it("should throw error if worked hours is less than or equal to 0", () => {

    expect(() => GetGrossSalary.run(0, 0.13, 1000)).toThrow("Worked hours in invalid!");
  });

  it("should throw error if worked hours is more than 720", () => {

    expect(() => GetGrossSalary.run(721, 0.13, 1000)).toThrow("Worked hours in invalid!");
  });
});

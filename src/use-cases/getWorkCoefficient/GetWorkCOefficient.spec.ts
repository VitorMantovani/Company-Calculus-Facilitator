import { GetWorkCoefficient } from "./GetWorkCoefficient";

describe("GetWorkCoefficient", () => {
  it("should return 0.13 if work shift is 'matutino'", () => {
    const workCoefficient = GetWorkCoefficient.run(["matutino"]);

    expect(workCoefficient).toBe(0.13);
  });

  it("should return 0.04 if work shift is 'vespertino'", () => {
    const workCoefficient = GetWorkCoefficient.run(["vespertino"]);

    expect(workCoefficient).toBe(0.04);
  });

  it("should return 0.08 if work shift is 'noturno'", () => {
    const workCoefficient = GetWorkCoefficient.run(["noturno"]);

    expect(workCoefficient).toBe(0.08);
  });

  it("should return the sum of work coefficients if more than one work shift is passed", () => {
    const workCoefficient = GetWorkCoefficient.run(["matutino", "vespertino"]);

    expect(workCoefficient).toBe(0.13 + 0.04);
  });

  it("should throw error if work shifit(s) is/are invalid", () => {
    expect(() => GetWorkCoefficient.run(["matutino", "invalid"])).toThrow("Invalid workShift(s)!")
  })
});

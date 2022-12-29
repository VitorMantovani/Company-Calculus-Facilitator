import { GetBonus } from "./GetBonus";

describe("GetBonus", () => {
  it("should be 1200 if employee fulfill all requirements", () => {
    const bonus = GetBonus.run(["matutino"], 85);
    expect(bonus).toBe(1200);
  });

  it("should be 465 if employee doesn't work at the morning shift", () => {
    const bonus = GetBonus.run(["vespertino"], 85);
    expect(bonus).toBe(465);
  });

  it("should be 465 if employee doesn't work more than 80 hours", () => {
    const bonus = GetBonus.run(["matutinoi"], 80);
    expect(bonus).toBe(465);
  });
});

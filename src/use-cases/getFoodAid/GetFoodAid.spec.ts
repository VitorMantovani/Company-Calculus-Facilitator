import { GetFoodAid } from "./GetFoodAid";

describe("GetFoodAid", () => {
  it("should be half of the gross salary if employee fulfill all requirements", () => {
    const foodAid = GetFoodAid.run("operario", 0.25, 2400);

    expect(foodAid).toEqual(1200);
  });

  it("should be one third of gross salary if employee is 'gerente'", () => {
    const foodAid = GetFoodAid.run("gerente", 0.25, 2400);

    expect(foodAid).toEqual(2400 / 3);
  });

  it("should be one third of gross salary if employee work coefficient is less than 0.25", () => {
    const foodAid = GetFoodAid.run("operario", 0.15, 2400);

    expect(foodAid).toEqual(2400 / 3);
  })
});

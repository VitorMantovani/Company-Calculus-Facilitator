import { GenerateRandomNumber } from "./GenerateRandomNumber"

describe("GenerateRandomNUmber", () => {
    it("should be able to generate a random number between minimum and maximum values passed", () => {
        const randomNumber = GenerateRandomNumber.run(50, 100);
        expect(randomNumber).toBeGreaterThanOrEqual(50);
        expect(randomNumber).toBeLessThanOrEqual(100);
    })
})
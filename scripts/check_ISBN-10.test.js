import ISBN_10 from "./check_ISBN-10";


describe("", () => {
    test("", () => {
        const res = ISBN_10("2-266-11156-6");
        expect(res).toBeTruthy;
    })
    test("", () => {
        const res = ISBN_10("2266111566");
        expect(res).toBe(true);
    })
})
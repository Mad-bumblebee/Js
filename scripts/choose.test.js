import choise from "./choose";

describe("", () => {
    test("", () => {
        const res = choise("978-3-16-148410-0");
        expect(res).toBe(true);
    })
    test("", () => {
        const res = choise("2-266-11156-6");
        expect(res).toBeTruthy;
    })
    test("", () => {
        const res = choise("2-266-11156-5");
        expect(res).toBeFalsy;
    })
    test("", () => {
        const res = choise("978-3-16-148410-9");
        expect(res).toBe(false);
    })
    test("", () => {
        const res = choise("978-3-16-148410-99");
        expect(res).toBe(false);
    })
})
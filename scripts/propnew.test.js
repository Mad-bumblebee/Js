import propnew from "./propnew";


describe("", () => {
    test("", () => {

        var man = {
            name: "Mike",
            gender: "male",
            age: 18
        }        

        const res = propnew(man);
        var str = String(Object.keys(man))
        expect(res).toBe(str);
    })
})
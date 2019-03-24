import index from "./index";


describe("", () => {
    test("", () => {
        var str = "JavaScript"
        const res = index(str).join('');
        console.log(res)
        expect(res.length).toBe(str.length);
        //expect(res).toBe(str);
    })
})
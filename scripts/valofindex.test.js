import valofindex from "./valofindex";


describe("", () => {
    test("", () => {
        var str = "JavaScript"
        const res = valofindex(str).join('');
        console.log(res)
        expect(res.length).toBe(str.length);
        //expect(res).toBe(str);
    })
})
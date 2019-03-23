import prop from "./prop.js";


describe("", () => {
    test("", () => {
        var name = "Mike", gender = "male", age = 18
        const res = prop(name,gender,age);       
        var str =  String(name) + ', ' + String(gender) + ', ' + String(age)
        expect(res).toBe(str);
    })
})
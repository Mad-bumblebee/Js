import low from "./Lowenstein";

describe("", () => {
    test("", () => {

        var str1 = "Копипастер"; 
        var str2 = "Копирайтер"; 
        const res = low(str1,str2);        
        expect(res).toBe(2);
    })
    test("", () => {

        var str1 = "Машка"; 
        var str2 = "Миша"; 
        const res = low(str1,str2);        
        expect(res).toBe(2);
    })
    test("", () => {

        var str1 = "Дагестан"; 
        var str2 = "Арестант"; 
        const res = low(str1,str2);        
        expect(res).toBe(4);
    })
    test("", () => {

        var str1 = "Москва"; 
        var str2 = "Москва"; 
        const res = low(str1,str2);        
        expect(res).toBe(0);
    })
    test("", () => {

        var str1 = "Москва"; 
        var str2 = ""; 
        const res = low(str1,str2);        
        expect(res).toBe(+str1.length);
    })
    test("", () => {

        var str1 = ""; 
        var str2 = "JavaScript"; 
        const res = low(str1,str2);        
        expect(res).toBe(+str2.length);
    })
})
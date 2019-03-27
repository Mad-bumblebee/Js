import low from "./Romastein";


describe("", () => {
    test("", () => {

        var str1 = "Копипастер"; 
        var str = "Копирайтер"; 
        const res = low(str,str1);        
        expect(res).toBe(2);
    })
    test("", () => {

        var str1 = "Машка"; 
        var str = "Миша"; 
        const res = low(str,str1);        
        expect(res).toBe(2);
    })
    
})
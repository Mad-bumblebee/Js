import isbnValidator from "./IsbnValidator";


describe(" ", () => {
    test(" ", () => {
        const res = new isbnValidator();
        expect(res.Validate("966-7343-29-4")).toBe(true);
    })
    test(" ", () => {
        const res = new isbnValidator();
        expect(res.Validate("978-3-16-148410-0")).toBe(true);
    })
    test(" ", () => {
        const res = new isbnValidator();
        expect(res.Validate("978-3-16-148410-1")).toBe(false);
    })
    test(" ", () => {
        const res = new isbnValidator();
        expect(res.Validate("966-7343-29-5")).toBe(false);
    })
    test(" ", () => {
        const res = new isbnValidator();
        expect(res.Validate("978-3-16-148410-12")).toBe(false);
    })
    test(" ", () => {
        var array = [];
        const res = new isbnValidator();
        array.forEach(element => {
            expect(res.Validate("5-93853-014-8")).toBeTruthy;
            expect(res.Validate("978-5-270-00101-8")).toBeTruthy;
            expect(res.Validate("978-5-699-12014-7")).toBeTruthy;
            expect(res.Validate("978-5-06-002611-5")).toBeTruthy;
            expect(res.Validate("978-5-93347-212-4")).toBeTruthy;
            expect(res.Validate("0-14026-690-9")).toBeTruthy;
            expect(res.Validate("5-05-000746-1")).toBeTruthy;
            expect(res.Validate("5-87818-228-9")).toBeTruthy;
        });
        
    })
    
})

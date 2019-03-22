
import isbnValidator from "./IsbnValidator";


describe(" ", () => {
    test(" ", () => {
        const res = new isbnValidator();
        expect(res.Validate("966-7343-29-4")).toBe(true);
    })
})
import ISBN_10 from "./check_ISBN-10";
import ISBN_13 from "./isbn13";

export default class isbnValidator {

    Validate(str) {

        var arr = [];
        var isbn = str;
        var j = 0, i = 0;

        while (j <= isbn.length) {
            if (isFinite(isbn[j]))
                arr[i++] = isbn[j];
            j++;
        }
        switch (arr.length) {
            case 10:
                console.log("Ваш формат  ISBN_10")
                return (ISBN_10(str))
            case 13:
                console.log("Ваш формат  ISBN_13")
                return (ISBN_13(str))
            default:
                return false;
        }
    }
}




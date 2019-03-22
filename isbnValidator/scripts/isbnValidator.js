//import ISBN_10 from "./C:/Projects/ISBN-10/scripts/check_ISBN-10";
//import ISBN_13 from "./C:/Projects/ISBN-13/scripts/isbn 13";
import ISBN_10 from "./check_ISBN-10";
import ISBN_13 from "./isbn13";

export default class isbnValidator{
   /* constructor (str){
        this.str = str
    }     */ 
    Validate (str){
        
        var arr = [];
        var isbn = str;
        var j = 0, i = 0 ;
        
        while (j <= isbn.length)
        {
         if(isFinite(isbn[j]))     
             arr[i++] = isbn[j];         
             j++;
        } 
        switch(arr.length){
            case 10:
            if(ISBN_10(str)==true){
                console.log("Ваш формат  ISBN_10")
                return true            
             } else return false;        
             case 13:
             if(ISBN_13(str)==true){
                 console.log("Ваш формат  ISBN_13")
                 return true
             }            
            else return false         
            default:
            return false;            
        }
             
       }        

    }        



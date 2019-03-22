var sum = 0;
var arr = [];
var j = 0, i = 0 ;

var isbn = "978-3-16-148410-0";

while (j <= isbn.length)
{
 if (isFinite(isbn[j]))     
     arr[i++] = isbn[j];         
     j++;        
}  

console.log(arr);

export default function choise()
{    
  switch(arr.length){
      case 10:
      ISBN_10();
      break;
      case 13:
      ISBN_13();
      break;
      default:
      return false;
  }

}
function ISBN_13()
{     
    for (let i = 0, k = 1; i <= arr.length - 1 ; k++, i++)
    {    
        if (k % 2 == 0)
        {
            sum += parseInt(arr[i] * 3);           
        }            
        else sum += parseInt(arr[i]);        
    } 
    console.log("Зашли в функцию  ISBN_13");
    console.log(typeof(sum));  
    console.log(sum)    
    if (sum % 10 == 0 && (arr.slice(0,3) == '9','7','8' || arr.slice(0,3) == '9','7','9')) return true;
    else return false;      
}

function ISBN_10()
{        
    for (let i = 0 , k=arr.length; i <=arr.length - 2 ;k--, i++)
    {    
        sum += arr[i] * k; 
               
    }   
    console.log("Зашли в функцию  ISBN_10"); 
    if ((sum += parseInt(arr[arr.length - 1])) % 11 == 0) return true;
    else return false;      
}

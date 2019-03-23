
export default function choise(str)
{        
    var arr = [];
    var j = 0, i = 0 ;

    var isbn = str;

while (j <= isbn.length)
{
 if (isFinite(isbn[j]))     
     arr[i++] = isbn[j];         
     j++;        
}  

console.log(arr);
  switch(arr.length){
      case 10:
      if (ISBN_10(arr)) return true;
      return false;
      case 13:
      if (ISBN_13(arr)) return true;
      return false;
      default:
      return false;
  }

}
function ISBN_13(arr)
{     
    var sum = 0;
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

function ISBN_10(arr)
{    
    var sum = 0;    
    for (let i = 0 , k=arr.length; i <=arr.length - 2 ;k--, i++)
    {    
        sum += arr[i] * k; 
               
    }   
    console.log("Зашли в функцию  ISBN_10"); 
    if ((sum += parseInt(arr[arr.length - 1])) % 11 == 0) return true;
    else return false;      
}

var sum = 0;
var arr = [];
var isbn = "978-2-266-11156-0";

export default function ISBN_13()
{ 
   var j = 0, i = 0 ;
   
   while (j <= isbn.length)
   {
    if (isFinite(isbn[j]))     
        arr[i++] = isbn[j];         
        j++;        
   }
   console.log(arr);   
    for (let i = 0, k = 1; i <= arr.length - 1 ; k++, i++)
    {    
        if (k % 2 == 0)
        {
            sum += parseInt(arr[i] * 3);           
        }            
        else sum += parseInt(arr[i]);
        console.log(sum);
    }         
    console.log(sum);
    console.log(arr.slice(0,3));
    if (sum % 10 == 0 && (arr.slice(0,3) == '9','7','8' || arr.slice(0,3) == '9','7','9')) return true;
    else return false;      
}
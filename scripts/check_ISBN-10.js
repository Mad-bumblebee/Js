export default function ISBN_10(str)
{ 
   var sum = 0;
   var arr = [];
   var isbn = str;
   var j = 0, i = 0 ;
   
   if (str.indexOf('-')){
    while (j <= isbn.length)
    {
     if(isFinite(isbn[j]))     
         arr[i++] = isbn[j];         
         j++;         
    }
    console.log(arr);
   }    
    for (let i = 0 , k=arr.length; i <=arr.length - 2 ;k--, i++)
    {    
        sum += arr[i] * k;      
    }
    console.log(sum);
    if ((sum += parseInt(arr[arr.length - 1])) % 11 == 0) return true;
    else return false;      
}
       
  








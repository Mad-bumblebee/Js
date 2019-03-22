var sum = 0;
//var num = [];
var arr = [];
var isbn = "2-266-11156-6";
//isbn += isbn.split('');
export default function ISBN_10()
{ 
   var j = 0, i = 0 ;
   
   while (j <= isbn.length)
   {
    if(isFinite(isbn[j]))     
        arr[i++] = isbn[j];         
        j++;
        
   }
   console.log(arr);
   
    for (let i = 0 , k=arr.length; i <=arr.length - 2 ;k--, i++)
    {    
        sum += arr[i] * k;        
       
        //console.log(k);
        //console.log(arr[i]);
    }
    console.log(sum);
    if ((sum += parseInt(arr[arr.length - 1])) % 11 == 0) return true;
    else return false;      
}









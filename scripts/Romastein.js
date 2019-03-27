export default function low(str,str1){
   
   var count = 0;
   var D = -1; // delete
   var I = 0; // insert
   var R = 1 // replace
   var M = 0; // match 
   var matrix = [];  

   str.toLowerCase()
   str1.toLowerCase()

for (let i = 0, j = 0; i <= str.length,j <= str1.length; j++, i++) {
  if(str[i]!==str1[j]){
  if (str[str.length-i]==str1[str1.length-j] && str.length != str1.length){
    if(str[str.length-i]==str1[str1.length-j]){
      count +=I;
    }
    count +=D;
  }  
  count +=R;
}
count +=M;     
}
//count += Math.abs(str.length - str1.length);
console.log(str);
console.log(str1);
console.log(count);
return count;

}
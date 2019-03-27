export default function valofindex (str) 
{
    var frst
    var scnd
    var temp
    
    str = String(str)

    str = str.split('')

    var frst = Math.floor(Math.random()*str.length);
    var scnd = Math.floor(Math.random()*str.length);
    

    temp = str[frst++]
    str[frst---1] = str[scnd]  
    str[scnd] = temp
   
    
    console.log(frst)
    console.log(scnd)    

    str.join('')
    console.log(str)

    return str; 
}
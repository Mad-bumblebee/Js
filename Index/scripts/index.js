
export default function index (str) 
{
    var frst
    var scnd
    var temp1, temp2
    
    str = String(str)

    str = str.split('')

    var frst = Math.floor(Math.random()*str.length);
    var scnd = Math.floor(Math.random()*str.length);
    // var s =  Math.floor(Math.random() * str.random)
    // str[Math.floor(Math.random()*str.length)]

    temp1 = str[frst]
    temp2 = str[scnd]
    str[scnd] = temp1
    str[frst] = temp2
    
    console.log(frst)
    console.log(scnd)
    

    str.join('')
    console.log(str)

    return str;

 
}
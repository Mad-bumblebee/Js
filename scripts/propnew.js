export default function propnew(man){

    var proplist = [] // список свойств
    var varlist = [] // список значений
    var list = [] // список свойств объекта со значениями
            

    for(let item in man){
            
      list[item] = man[item]  
      proplist += item + ','
      varlist += man[item] + ', '   
    
    }
    varlist = varlist.slice(0,varlist.length-2)
    proplist = proplist.slice(0,proplist.length-1)
    console.log(proplist)
    console.log(varlist)
    console.log(list)
    return  proplist
}
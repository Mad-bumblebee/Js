
export default function prop(name,gender,age){

    /*var man = {
        name: Mike,
        gender: male,
        age: 18
    };*/
    var proplist = [] // список свойств
    var varlist = [] // список значений
    var list = [] // список свойств объекта со значениями
    var man = {}
    
    man.name = name
    man.gender = gender
    man.age = age

    for(let item in man){
            
      list[item] = man[item]  
      proplist += item + ', '
      varlist += man[item] + ', '   
    
    }
    varlist = varlist.slice(0,varlist.length-2)
    proplist = proplist.slice(0,proplist.length-2)
    console.log(proplist)
    console.log(varlist)
    console.log(list)
    return  varlist
}
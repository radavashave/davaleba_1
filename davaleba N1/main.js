function some(a,b){
    if(a===b){
        return 'tolia'
    }
    else{
        return 'ar aris toli'
    }
}

console.log(some(10,"10"))
console.log(some(10,10))

function FtoC(F){
    if(typeof F === 'number'){
        return (F-32)*0.5556
    }else{
        return false
    }
}
console.log(FtoC(10))
console.log(FtoC('10'))

function calc(a,b,operation){
    if(typeof a,b === 'number', operation == '+'){
        return a + b
    }
    else if(typeof a,b === 'number', operation == '-'){
        return a - b
    }
    else if(typeof a,b === 'number', operation == '*'){
        return a * b
    }
    else if(typeof a,b === 'number', operation == '/'){
        return a / b
    }
    else{
        return false
    }
}
console.log(calc(10,2,'+'))
console.log(calc(10,2,'-'))
console.log(calc(10,2,'/'))
console.log(calc(10,2,'*'))
console.log(calc("10",2,'x'))

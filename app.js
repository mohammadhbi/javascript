function isprime(number){
    let result=true;
if (number < 2){
    result=false
}else{
    let i=2 ;
    while(i<= Math.sqrt(number)){
        if( number % i === 0){
            result=false
        } i++;
        
    }
    if (result = true){
        console.log(number + "is prime")
    }else{
        console.log(number +"is not prime")
    }
}
}
console.log( isprime(14))
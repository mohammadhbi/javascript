function isprime(number){
if (number < 2){
    console.log(number + "is not prime")
}else{
    let i=2 ;
    while(i<= Math.sqrt(number)){
        if( number % i === 0){
            
        
        
    
        console.log(number + "is not prime")
    }else{
        console.log(number +"is  prime")
    }
}
}
} console.log(isprime(14))
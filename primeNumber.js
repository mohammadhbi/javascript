function isprime(number){
    if(number <2 ){
     console.log(false)
    } else{
        let isprime = true;
        for (let i = 2; i < number ; i++){
            if(number % i ===0){
                isprime = false;
            }
        }
        if(isprime){console.log(true)}
        else{
            console.log(false)
        }
    }
}
console.log(isprime(8))
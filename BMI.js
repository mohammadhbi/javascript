function bmi(weight,height){
    if(!isNaN(height) &&  !isNaN(weight) ){
    let bmi= weight/(height**2)
    if(bmi <= 18.5){
        console.log("Underweight")
    }else if(bmi <=25.0){
        console.log("normal")
    } else if(bmi>30.0){
        console.log("over weight")
    }
}
}
console.log(bmi(79.5,183))
function is12hour(hour){
    if(hour===0){
        console.log('12')
    } else if( hour <=12){
        console.log( hour)
    }else if(hour >13 && hour<24){
        console.log((hour-12 ))
    }
}
console.log(is12hour(12))


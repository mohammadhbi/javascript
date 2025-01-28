function isLeapYear(year){
        if(year % 4 ===0 && year % 100 !==0){
            console.log(year +"is leapYear")
        }else{
            console.log(year + "is not leapyear" )
        }
    }

console.log(isLeapYear(2024))
console.log(isLeapYear(2025))
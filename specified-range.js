function isspecified(input, min , max){
if (!isNaN(input) && !isNaN(min) && !isNaN(max)){
if(input> min && input< max){
    console.log( 'your input is in the area')
}else{
    console.log('your input is not in the area')
}
}else{
    console.log('Just enter the number.')
}
}
//console.log( isspecified("mohammad", 15 , 20))
//console.log(isspecified(15,20,25))
console.log(isspecified(9999999,100,10000000))
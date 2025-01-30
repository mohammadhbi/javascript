function findMinimum(arr){
    if (arr.length===0){
        console.log('your array is empty')
    }
  let min =arr[0]
  for(let i =1 ; i < arr.length; i++){
    if(arr[i]< min ){
        min= arr[i];
    }
  }console.log( min +'is Minimum value.!!!!!')
}
console.log(findMinimum([0,1,2,3,-100]))
function findMaximum(arr0){
    if( arr0.length===0){
        console.log('your array is empty')
    }
    let max =arr0[0]
    for(let i =1 ; i<arr0.length; i++){
        if(arr0[i]>max ){
            max= arr0[i]
        }
    }
    console.log(max)
}
console.log(findMaximum([7,8,10,5,15]))


function minimum(arr1){
    if(arr1.length===0){
        console.log('your arry is empty')
    }
    let min =arr1[0]
    for(let i=1;i <arr1.length; i++){
        if(arr1[i]<min   ){
            min = arr1[i]
        }
    }
    console.log(min)
}
console.log(minimum([-1,-11,-111,-1111,-111111111]))
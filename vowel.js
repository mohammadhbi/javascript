function hasVowel(str){
 str= str.toLowerCase();
 if(str.includes('a') || str.includes('o') || str.includes('e') || str.includes('i')|| str.includes('u')){
    console.log(str + " has Vowel Sounds")
 }else{
    console.log(str + " doesnt have Vowel Sound")
 }
 }
 console.log(hasVowel("mohammad"))
 console.log(hasVowel("cmpr"))
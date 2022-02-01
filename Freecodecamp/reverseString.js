// Reverse the provided string.
// You may need to turn the string into an array before you can reverse it.
// Your result must be a string. 

function reverseString(str) {
  return str.split("").reverse().join("");
}

reverseString("hello");

//  ****** еще вариант

// function reverseString(str) {
//     let arr = [];
//     let j;
//     for (let i = str.length-1; i >= 0; i--) {    
//         j = (i - str.length + 1) * (-1);
//         arr[j] = str[i];   
//     }
    
//     return arr.join(''); 
// }

// reverseString("hello");
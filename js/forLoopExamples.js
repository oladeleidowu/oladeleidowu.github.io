

//
// for (let i = 10; i >= 0; i--){
//     console.log(i);
// }
//
    // for (let i = 0; i <= 10; i++){
//     console.log(i);
//     if(i==5) {
//         break;
//     }
// }

let jude = [2,4 ,5, 1, 3, 8, 9, 10, 7,6]
for (let i = 0; i < jude.length ; i++) {
    console.log(`The value in position ${i} is ${jude[i]}`)
}

let sum = 0;
for (let i = 0; i < jude.length; i++) {
    sum = sum + jude[i];
    console.log(sum);
    
}
 console.log("Finish looping");
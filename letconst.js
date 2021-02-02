//Use const if don't need to assign value again
const hubby = "Elias Kanchon";
console.log(hubby);



//possible changing element, push, pop but cannot change entire array
const numbers = [12, 45];
numbers[1] = 88;
numbers.push(12);
const nayok = {name:"sakib khan", phone:4578};
//console.log(numbers);



//value may change & leak proof (scope variable)
let patientName = "Rahim Chacha";
patientName = "Fatema Khala";
console.log(patientName);
let sum = 0; 
for(let i = 0; i < 10; i++){
    sum = sum + i;
}
console.log(i);
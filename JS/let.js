console.log('LET');
console.log('------');

let input = 5;
if (true){
    let input = 20;
    console.log(input + " " + "IF");
}
function test(){
    let input = 15;
    console.log(input);
}
test()
console.log(input);

let obj = {name: 'Anto'};
if(true){
    let obj = {name: 'Velan'};
    console.log(obj);
}
console.log(obj);
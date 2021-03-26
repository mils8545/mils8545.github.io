// let numbers = [10,20,30,40,50,60,70,80,90];
let combos = [];
// let emptycombo = [];
// let total = 27;

let sum = function(nums) {
    return nums.reduce((accumulator, currentValue) => accumulator + currentValue);
}

let combinations = function (combination, choices, target){
    let combinationSum = 0;
    if (combination.length > 0) {
        combinationSum = sum(combination);
    } 
    if (combinationSum == target) {
        combos.push(combination);
        return;
    }
    if (combinationSum > target) {
        return;
    }
    for (let i = 0; i < choices.length; i++) {
        let newCombination = [...combination];
        newCombination.push(choices[i]);
        let newChoices = [...choices];
        newChoices.splice(0, i+1);
        combinations(newCombination, newChoices, target);
    }
}

// combinations(emptycombo, numbers, 6);
// combinations([], numbers, 130);
// console.log(combos);


function Geeks() {
    let input = document.getElementById('inputarray').value;
    let targetnumber = document.getElementById('targetnumber').value;
    console.log(input);
    console.log(targetnumber);
    combos = [];
    let numbers = input.split(',').map(Number);
    let target = 0+targetnumber;
    combinations([], numbers, targetnumber);

    let textOutput = "";

    for (let i = 0; i < combos.length; i++) {
        textOutput += combos[i].toString().split(",");
        textOutput += "<br>"        
    }
    
    document.getElementById("par").innerHTML = textOutput;
}

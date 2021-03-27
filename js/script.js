let numbers = [1,2,3,4,5,6,7,8,9];
let combos = [];
let emptycombo = [];
let total = 27;

let sum = function(nums) {
    return nums.reduce((accumulator, currentValue) => accumulator + currentValue);
}

let combinations = function (combination, choices, n){
    if (combination.length == n) {
        if (total == sum(combination)) {
            combos.push(combination);
        }
        return;
    }
    for (let i = 0; i < choices.length; i++) {
        let newCombination = [...combination];
        newCombination.push(choices[i]);
        let newChoices = [...choices];
        newChoices.splice(0, i+1);
        combinations(newCombination, newChoices, n);
    }
}

// combinations(emptycombo, numbers, 6);
combinations([], numbers, 6);


console.log(combos);
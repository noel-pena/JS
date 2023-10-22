let output = [];
let bottles = 99;
let remainingBottles = bottles - 1;

function bottlesOfBeer() {
    while (bottles >= 0) {
        if (bottles === 0) {
            output.push("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
            break;
        } else {
            output.push(${bottles} bottles of beer on the wall, ${bottles} bottles of beer. Take 1 down, pass it around, ${remainingBottles} bottles of beer on the wall);
            bottles--
            remainingBottles--
        }
    }
    console.log(output);
}
    bottlesOfBeer();
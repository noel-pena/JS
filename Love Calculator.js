prompt("First Name?");
prompt("Second Name?");
var loveCalculator = Math.random() * 100;
loveCalculator = Math.floor(loveCalculator) + 1;

if(loveCalculator >= 70) {
    alert("Your love score is " + loveCalculator + "%." + " You love each other more than Kanye loves Kanye")
}

if (loveCalculator <= 30) {
    alert("Your love score is a sad " + loveCalculator + "%." + " Not all things are meant to be *small violin playing*")
}
else {
    alert("Your love score is " + loveCalculator + "%");
}

var guestName = prompt("What is your name?");
var guestList = ["noel", "pablo", "jose", "jim"];
if (guestList.includes(guestName)){
    alert("Welcome!");
} else {
    alert("Sorry! You are not on the list.")
}

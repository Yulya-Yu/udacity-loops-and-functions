function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}
 emotions("happy", function laugh(num) {
   var message = "";
   for (var x = 1; x <= num; x++) {
       message += "ha";
   }
   return message + "!";
});
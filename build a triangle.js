function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

function buildTriangle(numberOfLines){
    var line = ""
    for (var length = 1; length <= numberOfLines; length++) {
         line = line + makeLine(length);
    }
    return line;
}

console.log(buildTriangle(10));
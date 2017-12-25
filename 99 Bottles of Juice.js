var num = 99;
var bottles;
var bottlesTwo;

while (1 <= num) {
    var minusOne = num - 1;
    
    if (num === 1) bottles = 'bottle';
        else        bottles = 'bottles';
    if (minusOne === 1) bottlesTwo = 'bottle';
        else        bottlesTwo = 'bottles';

    console.log(num + ' ' + bottles + ' of juice on the wall! ' +num+ ' ' + bottles + ' of juice! Take one down, pass it around... ' +minusOne+ ' ' + bottlesTwo + ' of juice on the wall!');

      num = num - 1; 

}
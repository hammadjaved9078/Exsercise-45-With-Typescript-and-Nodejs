"use strict";
function makeSandwich(item) {
    console.log('Making your sandwich with:');
    item.forEach(element => console.log("-" + element));
    console.log('Enjoy your Sandwich !\n');
}
makeSandwich(['Ham', 'Cheese', 'lettuce']);
makeSandwich(['Turkey', 'Bacon']);
makeSandwich(['Peanut Butter', 'Jelly']);

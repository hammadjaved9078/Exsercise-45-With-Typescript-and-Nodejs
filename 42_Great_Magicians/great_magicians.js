"use strict";
const magicians = ["David CopperField", "Teller", "Harry Anderson", "Dynamo"];
function make_great(magicianArray) {
    for (let i = 0; i < magicianArray.length; i++) {
        magicians[i] = 'The Great ' + magicianArray[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
make_great(magicians);
show_magicians(magicians);

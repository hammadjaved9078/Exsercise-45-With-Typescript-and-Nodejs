"use strict";
function make_shirt(size = 'Large', text = 'I Love TYpescript.') {
    console.log(`Creating a ${size} shirt with the message:${text}`);
}
make_shirt();
make_shirt('Medium');
make_shirt('Small', 'I love Python');

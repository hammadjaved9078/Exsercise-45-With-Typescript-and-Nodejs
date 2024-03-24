// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// Write three versions of this program, making sure each message is printed for the appropriate color alien.

let aliensColors :String = "green";

//•If the alien is green, print a message that the player earned 5 points.
//•If the alien is yellow, print a message that the player earned 10 points.
//•If the alien is red, print a message that the player earned 15 points.

//Version 1 of the Program 
if(aliensColors === "green"){
console.log('Player earned 5 points.');
}
else if(aliensColors === "yellow"){
console.log('Player earned 10 points.');
}
else if(aliensColors ==="red"){
console.log('Player earned 15 points.');
}
else{
    console.log('Player Select Right Color ');
}

//Version 2 of the Program 
aliensColors = "yellow";

if(aliensColors === "green"){
console.log('Player earned 5 points.');
}
else if(aliensColors === "yellow"){
console.log('Player earned 10 points.');
}
else if(aliensColors ==="red"){
console.log('Player earned 15 points.');
}

//Version 3 of the Program 
aliensColors = "red";

if(aliensColors === "green"){
console.log('Player earned 5 points.');
}
else if(aliensColors === "yellow"){
console.log('Player earned 10 points.');
}
else if(aliensColors ==="red"){
console.log('Player earned 15 points.');
}
else{
    console.log('Player Select Right Color ');
}

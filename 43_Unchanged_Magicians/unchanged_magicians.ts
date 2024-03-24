const magicians: string[] = ["David CopperField","Teller","Harry Anderson","Dynamo"];

function copyArry(arr:string[]){

    return [...arr]
}

function make_great(magicianArray: string[]){
    for(let i =0; i<magicianArray.length; i++){
        magicianArray[i] = 'The Great ' + magicianArray[i]

    }

}

function show_magicians(magicians:string[]){

    magicians.forEach(magician => {
        console.log(magician);
    });

}

const copyMagicianArray = copyArry(magicians);

make_great(copyMagicianArray);

console.log('\n\nThis is my Orignal Array:');
show_magicians(magicians);

console.log('\n\nThis is my Modified Copy of the Array:');
show_magicians(copyMagicianArray);

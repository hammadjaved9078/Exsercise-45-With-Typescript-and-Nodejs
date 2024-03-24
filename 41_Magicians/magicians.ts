const magicians: string[] = ["David CopperField","Teller","Harry Anderson","Dynamo"];

function show_magicians(magicians:string[]){

    magicians.forEach(magician => {
        console.log(magician);
    });

}

show_magicians(magicians);
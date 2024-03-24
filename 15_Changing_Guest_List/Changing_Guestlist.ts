let Guest_list: string[] = ['Shahid Afridi', 'Shoaib Akhter', 'Muhammad Amir'];

for(let i=0; i<Guest_list.length; i++){

console.log(`Dear Mr.` + Guest_list[i] + `,\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n`)

}

let absent_Guest: string = 'Muhammad Amir';

let new_Guest: string = 'Babar Azam';

Guest_list[2] = new_Guest ;


for(let i=0; i<Guest_list.length; i++){

    console.log(`Dear Mr.` + Guest_list[i] + `,\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n`)
    
    }
    
    console.log(`Mr. ${absent_Guest} is not coming to the event.` )
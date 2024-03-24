let Guest_list: string[] = ['Shahid Afridi', 'Shoaib Akhter', 'Muhammad Amir'];

// for(let i=0; i<Guest_list.length; i++){

// console.log(`Dear Mr.` + Guest_list[i] + `,\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n`)

// }

let absent_Guest: string = 'Muhammad Amir';

let new_Guest: string = 'Babar Azam';

Guest_list[2] = new_Guest ;


for(let i=0; i<Guest_list.length; i++){

    console.log(`Dear Mr.` + Guest_list[i] + `,\n\n
    It is our pleasure to invite you in our party.\n\n
    Thank You!\n\n`)
    
    }
    
    console.log(`Mr. ${absent_Guest} is not coming to the event.` );

    console.log(`Good News! we find Big Table So we are inviting 3 more guests.`);

    Guest_list.unshift('Sir Zia Khan');

    Guest_list.splice(2,0, 'Imran Khan');
    
    Guest_list.push('Waseem AKhram');

    
for(let i=0; i<Guest_list.length; i++){
~
    console.log(`Dear Mr.` + Guest_list[i] + `,\n\n
    It is our pleasure to invite you in our party.\n\n
    Thank You!\n\n`)
    
    }
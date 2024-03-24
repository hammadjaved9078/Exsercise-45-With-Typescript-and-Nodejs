"use strict";
let Guest_list = ['Shahid Afridi', 'Shoaib Akhter', 'Muhammad Amir'];
// for(let i=0; i<Guest_list.length; i++){
// console.log(`Dear Mr.` + Guest_list[i] + `,\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n`)
// }
let absent_Guest = 'Muhammad Amir';
let new_Guest = 'Babar Azam';
Guest_list[2] = new_Guest;
// for(let i=0; i<Guest_list.length; i++){
//     console.log(`Dear Mr.` + Guest_list[i] + `,\n\n
//     It is our pleasure to invite you in our party.\n\n
//     Thank You!\n\n`) 
//     }
console.log(`Mr. ${absent_Guest} is not coming to the event.`);
console.log(`Good News! we find Big Table So we are inviting 3 more guests.`);
Guest_list.unshift('Sir Zia Khan');
Guest_list.splice(2, 0, 'Imran Khan');
Guest_list.push('Waseem AKhram');
for (let i = 0; i < Guest_list.length; i++) {
    console.log(`Dear Mr.` + Guest_list[i] + `,\n\n
    It is our pleasure to invite you in our party.\n\n
    Thank You!\n\n`);
}
console.log('\n\nSorry we can not arrange big table, Only Two peoples will be invited.');
while (Guest_list.length > 2) {
    let remove_Guest = Guest_list.pop();
    console.log(`Sorry Mr. ${remove_Guest}, You are not invited For Event.`);
}
for (let i = 0; i < Guest_list.length; i++) {
    console.log(`Dear Mr.` + Guest_list[i] + `,\n\n
    You are Still Invited.\n\n
    Thank You!\n\n`);
}
Guest_list.splice(0, 2);
console.log(Guest_list);

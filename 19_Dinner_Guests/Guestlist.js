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
// console.log(`Mr. ${absent_Guest} is not coming to the event.` );
//     console.log(`Good News! we find Big Table So we are inviting 3 more guests.`);
//yahan per mainy 3 guest add karwaye hai.
Guest_list.unshift('Sir Zia Khan');
Guest_list.splice(2, 0, 'Imran Khan');
Guest_list.push('Waseem AKhram');
//yahan per mainy 6 guest ke array print karwaye hain  
// for(let i=0; i<Guest_list.length; i++){
//     console.log(`Dear Mr.` + Guest_list[i] + `,\n\n
//     It is our pleasure to invite you in our party.\n\n
//     Thank You!\n\n`)
// }
//sorry message to guest for invited.
// console.log('\n\nSorry we can not arrange big table, Only Two peoples will be invited.');
//yahan par mainy guest remove kiye hain.
while (Guest_list.length > 2) {
    let remove_Guest = Guest_list.pop();
    // console.log(`Sorry Mr. ${remove_Guest}, You are not invited For Dinner.`);
}
//hamry 2 bachy huwy 2 invited guest.
// for(let i=0; i<Guest_list.length; i++){
//     console.log(`Dear Mr.` + Guest_list[i] + `,\n\n
//     You are Still Invited.\n\n
//     Thank You!\n\n`)
// }
//mainy sary guest array se remove kar diye hain.
Guest_list.splice(0, 2);
console.log(Guest_list);
//Exercise 19
//print a message indicating the number of people you are inviting to dinner.
console.log(`Total Number of Guest Are: ${Guest_list.length}`);

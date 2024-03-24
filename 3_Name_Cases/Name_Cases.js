"use strict";
let PersonName = '';
PersonName = prompt('What is your name?') || '';
let lowerCase = PersonName.toLowerCase();
let upperCase = PersonName.toUpperCase();
let titleCase = PersonName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).
    toLowerCase()).join('');
if (PersonName !== null && PersonName !== '') {
    alert(`Hello ${PersonName}, Here are your name in:
LowerCase : ${lowerCase}
UpperCase : ${upperCase}
TitileCase : ${titleCase}
`);
}
else {
    alert('Please fill your name !');
}

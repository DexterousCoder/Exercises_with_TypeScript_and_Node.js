"use strict";
let Guest = ['rafay Baloch', 'Ali Siddiqui', 'Jaff', 'Mueen Tayyab', 'Adeel Gujjar'];
// for(let i=0; i<Guest.length; i++)
// {console.log('Mr.' + Guest[i]+',\n\nIt is our pleasure to invite you in our party.\n\n Thank You!\n\n')}
let Guest1 = 'Adeel Gujjar';
let Guest2 = 'Akbar Khan';
Guest[4] = Guest2;
// for(let i=0; i<Guest.length; i++)
// {console.log('Mr.' + Guest[i]+',\n\nIt is our pleasure to invite you in our party.\n\n Thank You!\n\n')}
console.log(`Mr.${Guest1} is not coming in party.`);
console.log('\nGood News ! We have one more table so we are inviting three more Guest.\n ');
Guest.unshift('Altaf');
Guest.splice(0, 2, 'Daniyal');
Guest.push('Mohsin');
for (let i = 0; i < Guest.length; i++) {
    console.log('Mr.' + Guest[i] + '\nIt is our pleasure to invite you in our party.\n Thank You!\n');
}
console.log('\nSorry! We can\'t arrange a big table so only two person will be invited.\n');
while (Guest.length > 2) {
    let remove = Guest.pop();
    console.log(`Sorry Mr. ${remove} you are not invited for Dinner`);
}
for (let i = 0; i < Guest.length; i++) {
    console.log('\nMr.' + Guest[i] + ' you are still invited.\n Thank You!\n');
}
Guest.splice(0, 2);
console.log(Guest);
console.log(`Total number of Guest are ${Guest.length}`);

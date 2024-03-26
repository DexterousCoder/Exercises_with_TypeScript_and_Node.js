let Guest :string[]=[ 'rafay Baloch', 'Jaff', 'Ali Siddiqui', 'Mueen Tayyab', 'Adeel Gujjar'];
// for(let i=0; i<Guest.length; i++)
// {console.log('Mr.' + Guest[i]+',\n\nIt is our pleasure to invite you in our party.\n\n Thank You!\n\n')}

let Guest1 :string = 'Adeel Gujjar';

let Guest2 :string = 'Akbar Khan';

Guest [4] = Guest2 ;
for(let i=0; i<Guest.length; i++)

{console.log('\nMr.' + Guest[i]+'\nIt is our pleasure to invite you in our party.\n Thank You!\n')}

console.log(`Mr.${Guest1} is not coming in party.`)
console.log('\nGood News !  We have one more table so we are inviting three more Guest.\n ' )
Guest.unshift('Altaf');
Guest.splice(2 , 0 ,'Daniyal');
Guest.push('Mohsin');

for(let i=0; i<Guest.length; i++)

{console.log('\nMr.' + Guest[i]+'\nIt is our pleasure to invite you in our party.\n Thank You!\n')}

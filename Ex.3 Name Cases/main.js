"use strict";
let Name = '';
Name = prompt('What\'s your name?') || '';
let lowercase = Name.toLowerCase();
let uppercase = Name.toUpperCase();
let titlecase = Name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
if (Name !== null && Name !== '') {
    alert(`Hello ${Name}, This is your name cases:
     LowerCase : ${lowercase}
     UpperCase : ${uppercase}
     TitleCase : ${titlecase}`);
}
else {
    alert('Something Wrong!');
}

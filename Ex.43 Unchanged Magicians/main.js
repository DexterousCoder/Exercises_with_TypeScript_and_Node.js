"use strict";
let magicians = ['David Blaine', 'Derren Brown', 'Harry Houdini', 'Shin Lim', 'Lance Burton'];
function copy(array) {
    return [...array];
}
const copyMagicians = copy(magicians);
function make_great(greatMagicians) {
    for (let i = 0; i < greatMagicians.length; i++) {
        greatMagicians[i] = 'The Great ' + greatMagicians[i];
    }
}
make_great(copyMagicians);
function show_magicians(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
console.log('\nThis ia a Orignal Array.\n');
show_magicians(magicians);
console.log('\nThis ia a Modified Copy Array.\n');
show_magicians(copyMagicians);

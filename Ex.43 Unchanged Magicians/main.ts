let magicians : string []=['David Blaine','Derren Brown','Harry Houdini','Shin Lim','Lance Burton'];

function copy(array : string[])
{
    return[...array]
}
const copyMagicians = copy(magicians);


function make_great(greatMagicians : string[])
{
    for(let i=0; i<greatMagicians.length; i++)
    {
        greatMagicians[i] = 'The Great ' + greatMagicians[i]
    }
}
make_great(copyMagicians);


function show_magicians(magicians:string[])
{
    magicians.forEach(element => 
    {
       console.log(element);
    });
}
console.log('\nThis ia a Orignal Array.\n')
show_magicians(magicians);

console.log('\nThis ia a Modified Copy Array.\n')
show_magicians(copyMagicians);
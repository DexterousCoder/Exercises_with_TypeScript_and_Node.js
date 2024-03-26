let magicians : string []=['David Blaine','Derren Brown','Harry Houdini','Shin Lim','Lance Burton'];

function make_great(greatMagicians : string[])
{
    for(let i=0; i<greatMagicians.length; i++)
    {
        magicians[i] = 'The Great ' + greatMagicians[i]
    }
}
make_great(magicians);

function show_magicians(magicians:string[])
{
    magicians.forEach(element => 
    {
       console.log(element);
    });
}
show_magicians(magicians);
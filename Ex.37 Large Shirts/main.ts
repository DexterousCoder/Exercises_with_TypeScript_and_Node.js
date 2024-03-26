function make_shirt (size: string='Large', text:string ='I love TypeScript.')
{ 
   console.log(`Creating a ${size} shirt with this message: ${text} `);
}
make_shirt();
make_shirt(`Medium`);
make_shirt(`Small`,'I love programming.');
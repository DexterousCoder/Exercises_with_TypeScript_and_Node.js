let current_user :string[]=[ 'noman','sufyan','farhan','salman','furqan'];
let  new_user :string[]=[ 'kamran','noman','salman','farhan','zaman'];

new_user .forEach(username =>{
    let lowerCase : string = username.toLowerCase();
    if(current_user.map(c_user => c_user.toLowerCase()).includes(lowerCase))
    {
        console.log(`This username ${username}, isn't available. Please write a differnt username`);
    }
    else{
        console.log(`This username ${username}, is available.`);
    }
     })
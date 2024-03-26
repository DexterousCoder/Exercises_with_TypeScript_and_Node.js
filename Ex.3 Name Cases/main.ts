let Name :string = '';
Name = prompt('What\'s your name?') || '';

let lowercase  :string = Name.toLowerCase(); 
let uppercase  :string = Name.toUpperCase();
let titlecase  :string = Name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')

if(Name !== null && Name !== ''){
    alert(`Hello ${Name}, This is your name cases:
     LowerCase : ${lowercase}
     UpperCase : ${uppercase}
     TitleCase : ${titlecase}`)
}
else{
    alert('Something Wrong!')
}
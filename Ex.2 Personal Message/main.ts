let Name :string = '';

Name = prompt('What\'s your name?') || '';

if(Name !== null && Name !== '')

{alert(`Hello ${Name}, would you like to learn some Python today?`)}

else{ alert('Something Wrong!')}
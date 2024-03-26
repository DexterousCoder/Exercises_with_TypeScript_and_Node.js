"use strict";
let current_user = ['noman', 'sufyan', 'farhan', 'salman', 'furqan'];
let new_user = ['kamran', 'noman', 'salman', 'farhan', 'zaman'];
new_user.forEach(username => {
    let lowerCase = username.toLowerCase();
    if (current_user.map(c_user => c_user.toLowerCase()).includes(lowerCase)) {
        console.log(`This username ${username}, isn't available. Please write a differnt username`);
    }
    else {
        console.log(`This username ${username}, is available.`);
    }
});

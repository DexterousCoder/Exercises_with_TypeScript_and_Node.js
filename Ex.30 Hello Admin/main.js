"use strict";
const admin = ['admin', 'user', 'worker', 'maker', 'operator'];
/*admin.forEach(admin =>{
    if(admin === 'admin')
    {
        console.log('Hello admin, would you like to see a status report?');
    }
    else{
        console.log(`Hello ${admin}, than you for logging in again.`);
    }
     })*/ //First Method
for (let i = 0; i < admin.length; i++) {
    if (admin[i] === 'admin') {
        console.log('Hello admin, would you like to see a status report?');
    }
    else {
        console.log(`Hello ${admin[i]}, thank you for logging in again.`);
    }
} //Second Method

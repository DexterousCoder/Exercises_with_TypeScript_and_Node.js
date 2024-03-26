"use strict";
function describe_city(city, country = 'Defult Country') {
    console.log(` ${city} is in ${country}. `);
}
describe_city('Karachi', 'Pakistan');
describe_city('Nagpur', 'India');
describe_city('Baghdad');

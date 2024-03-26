function sandwiches (item : string[]){
    console.log('\nThis is your Sandwich with');
    item.forEach(element => console.log('#' + element));
    console.log(' Relish your Favourite Sandwichs.\n\n');
}
sandwiches(['Nutella ','Seafood ','Roast Beef ']);
sandwiches(['Grilled ','Egg ','Vegetable']);
sandwiches(['Salmon ','Tuna ','Cheese']);
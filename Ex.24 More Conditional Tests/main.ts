console.log('Graterthan , Equal to Result: ', 22 >= 22);
console.log('Equality Number Result: ',77 === 77);
console.log('Lessthan Result: ', 73 < 133);
console.log('Lessthan ,Equal to Result: ', 44 <= 111);
console.log('Uppercase Result: ','karachi'.toUpperCase() ==='KARACHI');
console.log('Equality String Result: ','Lion'==='Lion');
console.log('Inequality String Result: ',('Lion'as string)!='Tiger');

console.log("And Operator Result:", 99===99 && 10 > 99);
console.log("Or Operator Result:", 88===88 || false);

const Animal :string[] = ['Monkey','Fox','Rat'];
console.log('Result "Fox" In the Array:' , Animal.includes("Fox"));
console.log('Resulting "Cat" is not in Array' , !Animal.includes("Cat"));
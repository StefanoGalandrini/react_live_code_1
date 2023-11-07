console.log("Hello World!");

// lista della spesa. 
// Prendiamo gli elementi dall'indice 2 in poi
// perché all'indice 0 c'è il path di node
// e all'indice 1 c'è il path del file app.js
console.log(process.argv.slice(2));

console.log("Stai pagando la lista della spesa con la carta di credito");
console.log(`Il CVV è: ${process.env.CVV} mentre il PIN è: ${process.env.PIN}`);

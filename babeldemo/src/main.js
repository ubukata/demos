let message = 'Babel Demo';
console.log(`This is a: ${message}`);

// object spread operator
const objectA = {
    name: 'I\'m object A',
    propetyFromA: 'I\'m from A'
};

const spreadExample1 = { ...objectA };
console.log("spreadExample1: " + JSON.stringify(spreadExample1));

const objectB = {
    name: 'I\'m object B',
    propetyFromB: 'I\'m from B'
};

const spreadExample2 = { ...objectA, ...objectB };
console.log("spreadExample2: " + JSON.stringify(spreadExample2));

const spreadExample3 = { ...objectA, propetyFromA: 'Changed' };
console.log("spreadExample3: " + JSON.stringify(spreadExample3));
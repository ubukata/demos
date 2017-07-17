var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

let message = 'Babel Demo';
console.log(`This is a: ${message}`);

// object spread operator
const objectA = {
    name: 'I\'m object A',
    propetyFromA: 'I\'m from A'
};

const spreadExample1 = _extends({}, objectA);
console.log("spreadExample1: " + JSON.stringify(spreadExample1));

const objectB = {
    name: 'I\'m object B',
    propetyFromB: 'I\'m from B'
};

const spreadExample2 = _extends({}, objectA, objectB);
console.log("spreadExample2: " + JSON.stringify(spreadExample2));

const spreadExample3 = _extends({}, objectA, { propetyFromA: 'Changed' });
console.log("spreadExample3: " + JSON.stringify(spreadExample3));
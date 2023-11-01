// script.js
  function add(a, b) {
    return a + b;
}

function multiply(c) {
    return c;
}

function internal() {
    const added = this.add(this.internal.a, this.internal.b) * this.multiply(this.internal.c);
    return added;
}

const example1 = {
    internal: {
        a: 2,
        b: 4,
        c: 8,
    },
    add,
    multiply,
    calculate: internal,
};

const example2 = {
    internal: {
        a: 2,
        b: 2,
        c: 3,
    },
    add,
    multiply,
    calculate: internal,
};

console.log(example1.calculate()); 
console.log(example2.calculate()); 





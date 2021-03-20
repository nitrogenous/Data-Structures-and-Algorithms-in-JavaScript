//Arrays can be used as a stack
let myArrayStack = [];

myArrayStack.push(1);
myArrayStack.push(2);
console.log(myArrayStack.length);
console.log(myArrayStack.pop());
console.log(myArrayStack.length);

//Stack
const Stack = function() {
  this.count = 0;
  this.storage = {};

  this.push = (item) => {
    this.storage[this.count] = item;
    this.count++;
  };

  this.pop = () => {
    if (this.count === 0) return undefined;
  
    this.count--;
    const lastElement = this.storage[this.count];
    delete this.storage[this.count];
    return lastElement;
  };

  this.peek = () => {
    return this.storage[this.count - 1];
  }

  this.size = () => {
    return this.count;
  }
};

const myStack = new Stack;

myStack.push(1);
myStack.push('Araba');
console.log(myStack.peek());
console.log(myStack.size());
myStack.pop();
console.log(myStack.size());
console.log(myStack.peek());
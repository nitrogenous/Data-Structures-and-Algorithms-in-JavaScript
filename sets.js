/* 
  Set objects are collections of values. 
  You can iterate through the elements of a set in insertion order. 
  A value in the Set may only occur once; it is unique in the Set's collection.
*/

const customSet = function() {
  let collection = [];

  this.has = function(item) {
    return (collection.indexOf(item) !== -1);
  }

  this.values = function() {
    return collection;
  } 

  this.add = function(item) {
    if (!this.has(item)) {
      collection.push(item);
      return true;
    }

    return false;
  };

  this.remove = function(item) {
    if (this.has(item)) {
      const indexOfItem = collection.indexOf(item);
      collection.splice(item, 1);
      return true;
    }
    return false;
  }

  this.size = function() {
    return collection.length;
  };

  /* Default JS Set does not have these functions declared below */

  this.union = function(otherSet) {
    var unionSet = new customSet();
    var firstSet = this.values();
    var secondSet = otherSet.values();

    firstSet.forEach(function(item) {
      unionSet.add(item);
    });
    secondSet.forEach(function(item) {
      unionSet.add(item);
    });

    return unionSet;
  };

  this.intersection = function(otherSet) {
    var intersectionSet = new customSet();
    var firstSet = this.values();
    
    firstSet.forEach(function(item) {
      if(otherSet.has(item)) {
        intersectionSet.add(item);
      }
    });
    return intersectionSet;
  };

  this.difference = function(otherSet) {
    var differenceSet = new customSet();
    var firstSet = this.values();
    
    firstSet.forEach(function(item) {
      if(!otherSet.has(item)) {
        differenceSet.add(item);
      }
    });
    
    return differenceSet;
  }

  this.subset = function(otherSet) {
    var firstSet = this.values();

    return firstSet.every(function(item) {
      return otherSet.has(item);
    });
  };
};

var setA = new customSet();  
var setB = new customSet();  
setA.add("a");  
setB.add("b");  
setB.add("c");  
setB.add("a");  
setB.add("d");  
console.log(setA.subset(setB));
console.log(setA.intersection(setB).values());
console.log(setB.difference(setA).values());

console.log('\n');

var setC = new Set();  
var setD = new Set();  
setC.add("a");  
setD.add("b");  
setD.add("c");  
setD.add("a");  
setD.add("d");  
console.log(setD.values())
setD.delete("a");
console.log(setD.has("a"));
console.log(setD.add("d"));

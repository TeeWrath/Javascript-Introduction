// Javascript objects are containers for named values, called properties and methods.
x = {
  web: "js",
  wonders: "html",
  weekly: "css",
};
console.log(x["web"]);

// Difference between arrays and objects
// In JavaScript, arrays use numbered indexes.
// In JavaScript, objects use named indexes.

const car = { 
    type: "Fiat", 
    model: "500", 
    color: "white" 
};

// Accessing object properties
console.log(car.type)
console.log(car["model"])

// the for..in loop
for(let vehicle in car){
    console.log(car[vehicle])
}

// Adding new properties
car.tire = "MRF";

// Deleting a property
delete car.tire;
// The delete keyword deletes both the value of the property and the property itself.
// After deletion, the property cannot be used before it is added back again.

// Nested Objects
z = {
    x : 2,
    y : {
        m : navigator,
        n: length
    }
}


// Object methods
const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

console.log("differences between functions");

//Classic Inheritance Vs Composition

// Task:Creat
/**
 * 1. Charater Object having talk method as part of it
 * 2. Create Humban Object wing Character and 
 * add Properties: speed and name 
      Methods: walk, and eat
   3. Create Robot object using Character and add
    properties: speed and id
    methods: drive and wifi
 */
const Character = {
  talk: function(...msg) {
    console.log(msg.join(" "));
  }
};

const Human = Object.create(Character, {
  speed: { value: 3 },
  name: { value: "Victor" }
});

Human.walk = function() {
  this.talk(this.name, "walking");
};
Human.eat = function() {
  this.talk(this.name, "eating");
};

const Robot = Object.create(Character, {
  speed: { value: 8 },
  id: { value: "Hx435" }
});

Robot.drive = function() {
  this.talk(this.id, "driving");
};

Robot.wifi = function() {
  this.talk(this.id, "wifier");
};

const Sam = Object.create(Human, {
  name: { value: "Samuel" }
});
Sam.talk("hello message from Sam");
Sam.walk();

const x73 = Object.create(Robot, {
  id: { value: "x73" }
});

x73.drive();
x73.wifi();

// What if we want to have a Special Robot who can Talk i.e the feature of Human
// and also who can use wifi as part of it ?
// If we try to add talk and wifi to our Character object then
// we will end up having both Human and Robot methods that are not common
// to them like human having wifi connection doesn't make sense

// COMPOSITION

/**
 * Write a function expression for 
 * 1. talker
 * 2. walker
 * 3. eater
 * 4. driver
 * 5. wifier
 * Create a Person which returns Object with 
 *  talker, 
 *  walker, 
    eater
 */

const talker = state => ({
  talk: (...msg) => console.log(msg.join(" "))
});

const walker = state => ({
  walk: () => {
    let nm = state.name || state.id;
    console.log(nm, "walking");
  }
});

const eater = state => ({
  eat: () => {
    let nm = state.name || state.id;
    console.log(nm, "eating");
  }
});

const driver = state => ({
  drive: () => {
    let nm = state.name || state.id;
    console.log(nm, "driving");
  }
});

const wifier = state => ({
  wifi: () => {
    let nm = state.name || state.id;
    console.log(nm, "connecting", "\u26A1");
  }
});

const Person = (name, speed = 3) => {
  let state = {
    name,
    speed
  };
  return Object.create({}, talker(state), eater(state), driver(state));
};

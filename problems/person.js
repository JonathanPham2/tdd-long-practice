class Person {
  // Your code here 
  constructor(name, age){
    this.name = name;
    this.age = age;
  }

  sayHello(){
    return `Hello, ${this.name}.`;
  }

  visit(otherPerson){
    return `${this.name} visited ${otherPerson.name}`
  }

  switchVisit(otherPerson){
    return otherPerson.visit(this)
  }

  update(obj){
    if(typeof obj !== 'object') throw new TypeError();
    if(!obj.name || !obj.age) throw new TypeError();

    this.name = obj.name;
    this.age = obj.age;
    return this;
  }

  tryUpdate(obj){
    try{
        this.update(obj);
        if(this.name === obj.name && this.age === obj.age) return true;
    } catch {
      return false;
    }
  }

  static greetAll(people){
    let newArr = [];
    for(let person of people){
      newArr.push(person.sayHello(person))
    }
    return newArr;
  }
}

module.exports = Person;

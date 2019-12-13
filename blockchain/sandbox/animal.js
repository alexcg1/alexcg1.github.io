class Animal {
	constructor(name) {
		this.name = name;	
	}

	sayHi() {
		console.log(`Hi ${this.name}`);
	}

}

class Dog extends Animal {

}

let dog = new Dog('Billy');
dog.sayHi();

// Function example

// const createPassword = (name: string, age: number) => `${name}, ${age}`;
// createPassword('Jack', 31);

// Functional with optional argument 'age'
// const createPassword = (name: string, age?: number) => `${name}, ${age}`;
// createPassword('Jack');

// const createPassword = (name: string, age: number | string) => `${name}, ${age}`;
// createPassword('Jack', 31);
// createPassword('Jack', '31');

const createPassword = (name: string, age: number | string): string => `${name}, ${age}`;
createPassword('Jack', 31)

// return type number
const sum = (first: number, second: number): number => first + second;

// return type object
const createEmptyObject = (): object => ({});

// @ts-ignore
const greetUser: void = () => {
  alert("Hello World!");
};

let user: { name: string, age: number, surname: string } = {
  name: 'Oleg',
  age: 29,
  surname: 'Noskov'
};

let admin: { name: string, age: number, surname: string } = {
  name: 'Admin',
  age: 29,
  surname: 'Surname'
};

//Using Type for objects structure
type Person = { name: string, age: number, surname: string };

// Apply Person type for objects with the same structure
let user2: Person = {
  name: 'Oleg',
  age: 29,
  surname: 'Noskov'
};

let admin2: Person = {
  name: 'Admin',
  age: 29,
  surname: 'Surname'
};

//Using Type for objects with different structure
type Person2 = { name: string, age: number, surname?: string };

let user3: Person2 = {
  name: 'Oleg',
  age: 29,
  surname: 'Noskov'
};

let admin3: Person2 = {
  name: 'Admin',
  age: 29
};


class User {
  public name: string;
  private age: number;
  // protected
  // readonly

  // First way create constructor
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class User2 {
  // Second way create constructor
  constructor(
    public _name: string,
    public _age: number
  ) {
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    this._age = value;
  }
}

const testUser1 = new User('Oleg', 29);
const testUser2 = new User2('Oleg', 29);

class User3 {
  static secret = 2022;

  constructor(name: string, age: number) {
  }
}

const year: number = User3.secret;

interface User4 {
  readonly name: string;
  age?: number;
}

const testUserCreateViaInterface: User4 = {
  name: 'Test name',
  age: 30
}

// Error because field name is readonly
// testUserCreateViaInterface.name = 'New name';

//Base structure of Decorator (4 types)
const logClass = () => {
};

// Full realisation Decorator to Class User5

// Class Decorator
const logClass2 = (constructor: Function) => {
  console.log(constructor);
};

@logClass2 // Apply decorator for class User5
class User5 {
  constructor(public name: string, public age: number) {
  }

  public getPass(): string {
    return `${this.name}${this.age}`;
  }
}



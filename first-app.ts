let userName: string;
userName = "Max";

let userAge: number;
userAge = 23;

let isActive: boolean;
isActive = false;

let userID: string | number = "abc1";
userID = 123;

let user: {
  name: string;
  age: number;
  isAdmin: boolean;
  id: string | number;
};

type User = {
  name: string;
  age: number;
  isAdmin: boolean;
  id: string | number;
};
let person: User;

user = {
  name: "MAX",
  age: 34,
  isAdmin: true,
  id: "abc",
};

// let hobbies: Array<string>;
let hobbies: string[] | number[] | boolean[];
hobbies = ["Sports", "Cooking", "Reading"];
const API: string = "asgfhfjffkkfjrrirfrfrf";

function add(a: number, b: number) {
  const result = a + b;
  console.log(result);
}

function calculate(
  a: number,
  b: number,
  calFn: (a: number, b: number) => number
) {
  calFn(a, b);
}

// calculate(2,5,add())

type AddFn = (a: number, b: number) => number;

type StringOrNum = string | number;

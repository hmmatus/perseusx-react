import type { User } from "../../models/user.model";

let rockyObj: User = {
  name: "Rocky",
  favFood: "Sushi",
  favMovie: "Back to The Future",
  status: "Inactive",
};

let miroslavObj: User = {
  name: "Miroslav",
  favFood: "Sushi",
  favMovie: "American Psycho",
  status: "Active",
};

let donnyObj: User = {
  name: "Donny",
  favFood: "Singapore chow mei fun",
  favMovie: "The Princess Bride",
  status: "Inactive",
};

let mattObj: User = {
  name: "Matt",
  favFood: "Brisket Tacos",
  favMovie: "The Princess Bride",
  status: "Active",
};

let myObj: User = {
  name: "Hector Matus",
  favFood: "Pizza",
  favMovie: "Batman 2",
  status: "Active",
};

export const users = [rockyObj, miroslavObj, donnyObj, mattObj, myObj];

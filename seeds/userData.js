const { User } = require("../models");

const userdata = [
  {
    name: "Sal",
    email: "sal@hotmail.com",
    password: "password12345",
  },
  {
    name: "Lernantino",
    email: "lernantino@gmail.com",
    password: "password12345",
  },
  {
    name: "Amiko",
    email: "amiko2k20@aol.com",
    password: "password12345",
  },
  {
    name: "tutiiko",
    email: "tutimiko2k20@aol.com",
    password: "password12345",
  },
  {
    name: "bootyiko",
    email: "bootyiko2k20@aol.com",
    password: "password12345",
  },
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;

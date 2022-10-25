const { User } = require("../models");

const userdata = [
  {
    username: "Sal",
    email: "sal@hotmail.com",
    password: "password12345",
  },
  {
    username: "Lernantino",
    email: "lernantino@gmail.com",
    password: "password12345",
  },
  {
    username: "Amiko",
    email: "amiko2k20@aol.com",
    password: "password12345",
  },
  {
    username: "tutiiko",
    email: "tutimiko2k20@aol.com",
    password: "password12345",
  },
  {
    username: "bootyiko",
    email: "bootyiko2k20@aol.com",
    password: "password12345",
  },
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;

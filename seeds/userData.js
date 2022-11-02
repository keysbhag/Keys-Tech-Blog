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
    username: "AwesomeGuy",
    email: "amiko2k20@aol.com",
    password: "password12345",
  },
  {
    username: "FootballFan",
    email: "tutimiko2k20@aol.com",
    password: "password12345",
  },
  {
    username: "yoloSwagMaster",
    email: "bootyiko2k20@aol.com",
    password: "password12345",
  },
];

const seedUsers = () => User.bulkCreate(userdata, {
    individualHooks: true,
    returning: true,
});

module.exports = seedUsers;

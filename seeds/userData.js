const { User } = require('../models');

const userdata =
[
  {
    "username": "rangel",
    "password": "password"
  },
  {
    "username": "francisco",
    "password": "password"
  },
  {
    "username": "username",
    "password": "password"
  }
];

const seedUser = () => User.bulkCreate(userdata, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUser;


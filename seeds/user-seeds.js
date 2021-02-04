const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
 
  {
    username: 'briebe',
    email: 'brieb@last.fm',
    password: 'password123'
  },
  {
    username: 'brieb3',
    email: 'brie@google.ru',
    password: 'password123'
  },
  {
    username: 'mbriebencich3',
    email: 'elizabeth@hotmail.com',
    password: 'password123'
  },
  {
    username: 'jbriebencichelizbterh',
    email: 'bb@gmail.com',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;

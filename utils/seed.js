const connection = require('../config/connection');
const { User, Thought } = require('../models/index');

connection.on('error', (err) => err);
connection.once('open', async () => {
  console.log('...ready to seed...');

  await User.deleteMany();
  await Thought.deleteMany();

  const users = [];

  // add thoughts & reactions

  users.push({});

  await User.collection.insertMany(users);
});

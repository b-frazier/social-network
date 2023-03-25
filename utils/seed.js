const connection = require('../config/connection');
const { User, Thought } = require('../models/index');
const { finalEmail, usernames, thoughts } = require('./data');

connection.on('error', (err) => err);
connection.once('open', async () => {
  console.log('...ready to seed...');

  await User.deleteMany();
  await Thought.deleteMany();

  const email = finalEmail;
  const username = usernames;

  const users = [];
  const finalThoughts = [];

  for (let i = 0; i < email.length; i++) {
    users.push({
      username: username[i],
      email: email[i],
      thoughtText: thoughts[i],
    });
    finalThoughts.push({
      thoughtText: thoughts[i],
      username: username[i],
    });
  }

  await User.collection.insertMany(users);
  await Thought.collection.insertMany(finalThoughts);

  console.log('_________________');
  console.log('seeding is done');
  process.exit(0);
});

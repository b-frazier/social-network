// users need username, email

const usernames = [
  'ingerclank',
  'distanswaffle',
  'einasquelch',
  'rustikboing',
  'hermanscreech',
  'fartygbelch',
  'hemliswhimper',
  'koldbymiaow',
  'bernhardhoot',
  'liatorpcuckoo',
  'phewweekend',
  'buzzagency',
  'eekpoem',
  'stargazegirl',
  'runfastbill',
  'astroboy',
];

const emails = ['@hotmail.com', '@gmail.com', '@icloud.com', '@yahoo.com'];

const thoughts = [];

const randomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const createEmail = () => {
  `${randomItem(usernames)} ${randomItem(emails)}`;
};

const randomThoughts = (int) => {
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      thoughtText: randomItem(thoughts),
    });
  }
  return results;
};

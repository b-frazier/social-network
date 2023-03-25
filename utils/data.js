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

const thoughts = [
  'The first person who inhaled helium must have been so relieved when the effects wore off.',
  'Technically, it is impossible to skip breakfast. The first time you eat during a day is when you "break your fast.',
  'If two people on opposite sides of the world each drop a piece of bread, the earth briefly becomes a sandwich.',
  'When you "bite down" on something, you are actually "biting up" because you cannot move your top jaw.',
  'Fitbits are just like Tamagotchis, except the stupid little creature you have to keep alive is yourself.',
  'Your stomach thinks all potato is mashed.',
  "Once you have a phd, every meeting you go to becomes a doctor's appointment.",
  'My right elbow has never been touched by my right hand.',
  "It's always easy to fall asleep on a couch unless you're actually trying to fall asleep on a couch.",
  "It's crazy that something like a Walmart gift card is printed on plastic, but my social security card is printed on the flimsiest piece of paper I've ever handled.",
  'Pets are the one-percenters of animals.',
  'In order to fall asleep, you have to pretend to be asleep',
  'Everyone actually has 3 voices, the one in your head, the one you hear when you talk and the one that everyone else hears instead.',
  "You know you've reached adulthood when your bed is in the middle of the wall instead of in the corner.",
  'They should mark the last tissues in a box with red lines like they do with receipt paper.',
  'Making a typo in an online argument is the equivalent of voice cracking in a verbal argument.',
  'I have seen more of the surface of the Moon with my own eyes than I have of Earth.',
  "If I throw around large amounts of shredded bread on public property, my proximity to ducks determines whether or not I'm littering.",
  'Nothing is on fire, fire is on things.',
  "Dragons would think it's cool that we create water in our mouths.",
  "Accidentally liking someone's post while snooping through their profile is the digital equivalent of stepping on a twig while sneaking through the forest.",
];

const randomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const createEmail = usernames.map((usernames) => {
  return `${usernames}${randomItem(emails)}`;
});

const randomThoughts = (int) => {
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      thoughtText: randomItem(thoughts),
    });
  }
  return results;
};

module.exports = { createEmail, randomThoughts };

let movies = `[{
  "id": 1,
  "name": "Jesse Stone: Thin Ice",
  "price": 663,
  "inStock": true
}, {
  "id": 2,
  "name": "Beach Red",
  "price": 719,
  "inStock": false
}, {
  "id": 3,
  "name": "Knock Off",
  "price": 286,
  "inStock": false
}, {
  "id": 4,
  "name": "Dogs",
  "price": 574,
  "inStock": true
}, {
  "id": 5,
  "name": "Heaven & Earth",
  "price": 975,
  "inStock": false
}, {
  "id": 6,
  "name": "Spaced Invaders",
  "price": 391,
  "inStock": true
}, {
  "id": 7,
  "name": "Happy Tears",
  "price": 415,
  "inStock": true
}, {
  "id": 8,
  "name": "The New Centurions",
  "price": 157,
  "inStock": false
}, {
  "id": 9,
  "name": "Romeo and Juliet",
  "price": 171,
  "inStock": true
}, {
  "id": 10,
  "name": "Time Without Pity",
  "price": 589,
  "inStock": false
}, {
  "id": 11,
  "name": "Zindagi Na Milegi Dobara",
  "price": 230,
  "inStock": true
}, {
  "id": 12,
  "name": "Spare Parts",
  "price": 844,
  "inStock": false
}, {
  "id": 13,
  "name": "Dragon ball Z 04: Lord Slug",
  "price": 122,
  "inStock": true
}, {
  "id": 14,
  "name": "Por un puñado de besos",
  "price": 520,
  "inStock": false
}, {
  "id": 15,
  "name": "Persuasion",
  "price": 191,
  "inStock": true
}, {
  "id": 16,
  "name": "Goodbye, Mr. Chips",
  "price": 799,
  "inStock": true
}, {
  "id": 17,
  "name": "Misérables, Les",
  "price": 452,
  "inStock": false
}, {
  "id": 18,
  "name": "Queen of the Amazons",
  "price": 283,
  "inStock": false
}, {
  "id": 19,
  "name": "Philadelphia Experiment II",
  "price": 818,
  "inStock": true
}, {
  "id": 20,
  "name": "Wreckers",
  "price": 475,
  "inStock": false
}, {
  "id": 21,
  "name": "Alone in the Dark",
  "price": 546,
  "inStock": true
}, {
  "id": 22,
  "name": "In the Folds of the Flesh",
  "price": 748,
  "inStock": false
}, {
  "id": 23,
  "name": "Dark Prince: The True Story of Dracula",
  "price": 856,
  "inStock": true
}, {
  "id": 24,
  "name": "They Call Him Bulldozer (Lo chiamavano Bulldozer)",
  "price": 984,
  "inStock": true
}, {
  "id": 25,
  "name": "Human Condition III, The (Ningen no joken III)",
  "price": 769,
  "inStock": false
}, {
  "id": 26,
  "name": "Last Tycoon, The",
  "price": 331,
  "inStock": false
}, {
  "id": 27,
  "name": "The Infinite Man",
  "price": 581,
  "inStock": false
}, {
  "id": 28,
  "name": "Yellow",
  "price": 276,
  "inStock": true
}, {
  "id": 29,
  "name": "One Tough Cop",
  "price": 606,
  "inStock": true
}, {
  "id": 30,
  "name": "Three Ages",
  "price": 800,
  "inStock": true
}, {
  "id": 31,
  "name": "Sidewalls (Medianeras)",
  "price": 405,
  "inStock": true
}, {
  "id": 32,
  "name": "License to Drive",
  "price": 357,
  "inStock": true
}, {
  "id": 33,
  "name": "Family Guy Presents: Blue Harvest",
  "price": 690,
  "inStock": true
}, {
  "id": 34,
  "name": "Tex",
  "price": 573,
  "inStock": true
}, {
  "id": 35,
  "name": "Smoke Signals",
  "price": 599,
  "inStock": false
}, {
  "id": 36,
  "name": "Topralli",
  "price": 202,
  "inStock": true
}, {
  "id": 37,
  "name": "Look",
  "price": 104,
  "inStock": true
}, {
  "id": 38,
  "name": "Vessel of Wrath",
  "price": 617,
  "inStock": false
}, {
  "id": 39,
  "name": "Las Vegas Story, The",
  "price": 683,
  "inStock": true
}, {
  "id": 40,
  "name": "Angela's Ashes",
  "price": 140,
  "inStock": true
}, {
  "id": 41,
  "name": "I Want Candy",
  "price": 187,
  "inStock": false
}, {
  "id": 42,
  "name": "Patriotism (Yûkoku)",
  "price": 791,
  "inStock": false
}, {
  "id": 43,
  "name": "Were the World Mine",
  "price": 923,
  "inStock": true
}, {
  "id": 44,
  "name": "Man Called Peter, A",
  "price": 660,
  "inStock": true
}, {
  "id": 45,
  "name": "Superdad",
  "price": 915,
  "inStock": true
}, {
  "id": 46,
  "name": "Siete minutos (Seven Minutes)",
  "price": 628,
  "inStock": false
}, {
  "id": 47,
  "name": "Freaky Friday",
  "price": 666,
  "inStock": true
}, {
  "id": 48,
  "name": "Mon Oncle Antoine",
  "price": 142,
  "inStock": true
}, {
  "id": 49,
  "name": "Malone",
  "price": 977,
  "inStock": false
}, {
  "id": 50,
  "name": "Penn & Teller Get Killed",
  "price": 878,
  "inStock": true
}, {
  "id": 51,
  "name": "Zizek!",
  "price": 746,
  "inStock": false
}, {
  "id": 52,
  "name": "Arise, My Love",
  "price": 509,
  "inStock": true
}, {
  "id": 53,
  "name": "Proof of Life",
  "price": 652,
  "inStock": true
}, {
  "id": 54,
  "name": "Orders Signed in White",
  "price": 723,
  "inStock": true
}, {
  "id": 55,
  "name": "Balloonatic, The",
  "price": 954,
  "inStock": true
}, {
  "id": 56,
  "name": "Juarez",
  "price": 137,
  "inStock": true
}, {
  "id": 57,
  "name": "Falcon Rising",
  "price": 583,
  "inStock": true
}, {
  "id": 58,
  "name": "Neon Bible, The",
  "price": 474,
  "inStock": false
}, {
  "id": 59,
  "name": "Late Marriage (Hatuna Meuheret)",
  "price": 383,
  "inStock": false
}, {
  "id": 60,
  "name": "Phantom Stagecoach, The",
  "price": 515,
  "inStock": false
}, {
  "id": 61,
  "name": "Lords of Flatbush, The",
  "price": 456,
  "inStock": false
}, {
  "id": 62,
  "name": "Tribute to a Bad Man",
  "price": 587,
  "inStock": false
}, {
  "id": 63,
  "name": "Burglar",
  "price": 280,
  "inStock": true
}, {
  "id": 64,
  "name": "Burn Up!",
  "price": 421,
  "inStock": false
}, {
  "id": 65,
  "name": "Ffolkes",
  "price": 112,
  "inStock": true
}, {
  "id": 66,
  "name": "Stealth",
  "price": 790,
  "inStock": false
}, {
  "id": 67,
  "name": "Gidget",
  "price": 885,
  "inStock": false
}, {
  "id": 68,
  "name": "Eureka (Yurîka)",
  "price": 138,
  "inStock": false
}, {
  "id": 69,
  "name": "The Mountain of the Cannibal God",
  "price": 803,
  "inStock": false
}, {
  "id": 70,
  "name": "Blonde Ambition",
  "price": 966,
  "inStock": true
}, {
  "id": 71,
  "name": "Shockproof",
  "price": 321,
  "inStock": false
}, {
  "id": 72,
  "name": "Bad Family (Paha Perhe)",
  "price": 522,
  "inStock": false
}, {
  "id": 73,
  "name": "Full Tilt Boogie",
  "price": 914,
  "inStock": true
}, {
  "id": 74,
  "name": "Octopussy",
  "price": 544,
  "inStock": false
}, {
  "id": 75,
  "name": "This Man Must Die (Que la bête meure)",
  "price": 695,
  "inStock": false
}, {
  "id": 76,
  "name": "Girl from the Naked Eye, The",
  "price": 560,
  "inStock": true
}, {
  "id": 77,
  "name": "Dave Attell: Captain Miserable",
  "price": 506,
  "inStock": false
}, {
  "id": 78,
  "name": "Something Borrowed",
  "price": 577,
  "inStock": true
}, {
  "id": 79,
  "name": "Shunning, The",
  "price": 357,
  "inStock": true
}, {
  "id": 80,
  "name": "Under the Tuscan Sun",
  "price": 797,
  "inStock": false
}, {
  "id": 81,
  "name": "Daughter from Danang",
  "price": 689,
  "inStock": true
}, {
  "id": 82,
  "name": "Knock Off",
  "price": 932,
  "inStock": true
}, {
  "id": 83,
  "name": "Strangeland",
  "price": 361,
  "inStock": true
}, {
  "id": 84,
  "name": "Sunless (Sans Soleil)",
  "price": 768,
  "inStock": true
}, {
  "id": 85,
  "name": "Man, The",
  "price": 256,
  "inStock": true
}, {
  "id": 86,
  "name": "Daddy and Them",
  "price": 932,
  "inStock": true
}, {
  "id": 87,
  "name": "Two Men in Manhattan (Deux hommes dans Manhattan)",
  "price": 140,
  "inStock": true
}, {
  "id": 88,
  "name": "Castle, The",
  "price": 275,
  "inStock": true
}, {
  "id": 89,
  "name": "Mortified Nation",
  "price": 119,
  "inStock": true
}, {
  "id": 90,
  "name": "Escape from Suburbia: Beyond the American Dream",
  "price": 853,
  "inStock": false
}, {
  "id": 91,
  "name": "Last Remake of Beau Geste, The",
  "price": 371,
  "inStock": false
}, {
  "id": 92,
  "name": "Giant Mechanical Man, The",
  "price": 639,
  "inStock": false
}, {
  "id": 93,
  "name": "Another Cinderella Story",
  "price": 896,
  "inStock": true
}, {
  "id": 94,
  "name": "Mayor of Hell, The",
  "price": 323,
  "inStock": true
}, {
  "id": 95,
  "name": "Nighthawks",
  "price": 534,
  "inStock": true
}, {
  "id": 96,
  "name": "Great Passage, The (Fune wo amu)",
  "price": 338,
  "inStock": true
}, {
  "id": 97,
  "name": "Dogs",
  "price": 700,
  "inStock": false
}, {
  "id": 98,
  "name": "Runaway",
  "price": 843,
  "inStock": true
}, {
  "id": 99,
  "name": "Captain Horatio Hornblower R.N.",
  "price": 914,
  "inStock": true
}, {
  "id": 100,
  "name": "Torn Curtain",
  "price": 220,
  "inStock": true
}]
`;

movies = JSON.parse(movies);

export default movies;

export interface TriviaQuestion {
  id: number;
  question: string;
  answer: string;
  options: string[]; // 4 options including the correct answer
}

export const triviaQuestions: TriviaQuestion[] = [
  // Questions 1-25 (Pages 81-83)
  {
    id: 1,
    question: 'Who is often credited as the "Godfather of Hip-Hop"?',
    answer: "DJ Kool Herc",
    options: [
      "DJ Kool Herc",
      "Grandmaster Flash",
      "Afrika Bambaataa",
      "Run-DMC",
    ],
  },
  {
    id: 2,
    question:
      "What year did DJ Kool Herc host his first block party in the Bronx, considered the birth of hip-hop?",
    answer: "1973",
    options: ["1973", "1979", "1975", "1980"],
  },
  {
    id: 3,
    question:
      'Which iconic Hip-Hop group released the album "Straight Outta Compton" in 1988?',
    answer: "N.W.A",
    options: ["N.W.A", "Public Enemy", "Run-DMC", "Wu-Tang Clan"],
  },
  {
    id: 4,
    question:
      'What is the birthplace of Hip-Hop, often referred to as the "Mecca" of the genre?',
    answer: "The Bronx, New York",
    options: [
      "The Bronx, New York",
      "Harlem, New York",
      "Brooklyn, New York",
      "Los Angeles, California",
    ],
  },
  {
    id: 5,
    question: 'Who is known as the "Queen of Hip-Hop Soul"?',
    answer: "Mary J. Blige",
    options: ["Mary J. Blige", "Lauryn Hill", "Missy Elliott", "Queen Latifah"],
  },
  {
    id: 6,
    question: 'Which rapper released the album "Illmatic" in 1994?',
    answer: "Nas",
    options: ["Nas", "Jay-Z", "Biggie", "Tupac"],
  },
  {
    id: 7,
    question:
      'What is the name of the fictional character Eminem portrayed in the movie "8 Mile"?',
    answer: "B-Rabbit",
    options: ["B-Rabbit", "Slim Shady", "Marshall", "D-12"],
  },
  {
    id: 8,
    question: "What was the title of Tupac Shakur's debut album?",
    answer: "2Pacalypse Now",
    options: [
      "2Pacalypse Now",
      "All Eyez on Me",
      "Me Against the World",
      "Strictly 4 My N.I.G.G.A.Z.",
    ],
  },
  {
    id: 9,
    question: 'Who is known for his alter ego, "Slim Shady"?',
    answer: "Eminem",
    options: ["Eminem", "50 Cent", "Dr. Dre", "Snoop Dogg"],
  },
  {
    id: 10,
    question: "Which female rapper won the Grammy Award for Best Rap in 2019?",
    answer: "Cardi B",
    options: ["Cardi B", "Nicki Minaj", "Megan Thee Stallion", "Lizzo"],
  },
  {
    id: 11,
    question:
      'What group released the hit single "Fight the Power" for the film "Do the Right Thing"?',
    answer: "Public Enemy",
    options: ["Public Enemy", "N.W.A", "Run-DMC", "A Tribe Called Quest"],
  },
  {
    id: 12,
    question: "Which Hip-Hop duo consisted of Andre 3000 and Big Boi?",
    answer: "OutKast",
    options: ["OutKast", "Mobb Deep", "Gang Starr", "Eric B. & Rakim"],
  },
  {
    id: 13,
    question:
      "What was the first Hip-Hop song to reach No. 1 on the Billboard Hot 100 chart?",
    answer: "Ice Ice Baby",
    options: [
      "Ice Ice Baby",
      "Rapper's Delight",
      "Walk This Way",
      "Parents Just Don't Understand",
    ],
  },
  {
    id: 14,
    question: "What was the debut studio album of Snoop Dogg?",
    answer: "Doggystyle",
    options: [
      "Doggystyle",
      "Tha Doggfather",
      "Da Game Is to Be Sold",
      "Paid tha Cost to Be da Bo$$",
    ],
  },
  {
    id: 15,
    question: "Who is the founder of the record label Death Row Records?",
    answer: "Dr. Dre and Suge Knight",
    options: ["Dr. Dre and Suge Knight", "Ice Cube", "Snoop Dogg", "Tupac"],
  },
  {
    id: 16,
    question:
      "What is the real name of the rapper commonly known as Snoop Dogg?",
    answer: "Calvin Cordozar Broadus Jr.",
    options: [
      "Calvin Cordozar Broadus Jr.",
      "Andre Young",
      "Curtis Jackson",
      "Shawn Carter",
    ],
  },
  {
    id: 17,
    question:
      'What rap group\'s album "The Score" is considered one of the greatest Hip-Hop albums of all time?',
    answer: "The Fugees",
    options: [
      "The Fugees",
      "A Tribe Called Quest",
      "Wu-Tang Clan",
      "De La Soul",
    ],
  },
  {
    id: 18,
    question:
      'Which Hip-Hop artist starred in the TV show "Fresh Prince of Bel-Air"?',
    answer: "Will Smith",
    options: ["Will Smith", "LL Cool J", "Ice-T", "Ice Cube"],
  },
  {
    id: 19,
    question:
      "What's the title of Dr. Dre's debut solo album released in 1992?",
    answer: "The Chronic",
    options: ["The Chronic", "2001", "Compton", "Straight Outta Compton"],
  },
  {
    id: 20,
    question: 'What does "MC" stand for in Hip-Hop culture?',
    answer: "Master of Ceremonies",
    options: [
      "Master of Ceremonies",
      "Microphone Controller",
      "Music Creator",
      "Main Character",
    ],
  },
  {
    id: 21,
    question:
      "Who won the first-ever Grammy Award for Best Rap Performance in 1989?",
    answer: "DJ Jazzy Jeff & The Fresh Prince",
    options: [
      "DJ Jazzy Jeff & The Fresh Prince",
      "Run-DMC",
      "LL Cool J",
      "Public Enemy",
    ],
  },
  {
    id: 22,
    question:
      "What legendary Hip-Hop producer is known for his work with Nas, Jay-Z and Alicia Keys?",
    answer: "DJ Premier",
    options: ["DJ Premier", "Dr. Dre", "Pharrell Williams", "Timbaland"],
  },
  {
    id: 23,
    question:
      'What is the name of the dance associated with the song "Crank That" by Soulja Boy?',
    answer: "The Superman",
    options: ["The Superman", "The Dougie", "The Stanky Legg", "The Lean Back"],
  },
  {
    id: 24,
    question: 'Who famously sang "I Like Big Butts" in the early \'90s?',
    answer: "Sir Mix-a-Lot",
    options: ["Sir Mix-a-Lot", "2 Live Crew", "MC Hammer", "Vanilla Ice"],
  },
  {
    id: 25,
    question: "What's the significance of August 11, 1973, in Hip-Hop history?",
    answer: "DJ Kool Herc's first party",
    options: [
      "DJ Kool Herc's first party",
      "Grandmaster Flash was born",
      "First rap single released",
      "MTV launched",
    ],
  },

  // Questions 26-50 (Pages 86-88)
  {
    id: 26,
    question: "Which rapper's real name is Curtis Jackson?",
    answer: "50 Cent",
    options: ["50 Cent", "Jay-Z", "Kanye West", "Lil Wayne"],
  },
  {
    id: 27,
    question: "What was the title of Notorious B.I.G.'s debut album?",
    answer: "Ready to Die",
    options: [
      "Ready to Die",
      "Life After Death",
      "Born Again",
      "Duets: The Final Chapter",
    ],
  },
  {
    id: 28,
    question: "What is the actual name of the rapper Common?",
    answer: "Lonnie Rashid Lynn Jr.",
    options: [
      "Lonnie Rashid Lynn Jr.",
      "Shawn Carter",
      "Nasir Jones",
      "Marshall Mathers",
    ],
  },
  {
    id: 29,
    question:
      'Which female rapper released the album "The Miseducation of Lauryn Hill" in 1998?',
    answer: "Lauryn Hill",
    options: ["Lauryn Hill", "Mary J. Blige", "Missy Elliott", "Lil Kim"],
  },
  {
    id: 30,
    question: "What record label was founded by Jay-Z?",
    answer: "Roc-A-Fella Records",
    options: [
      "Roc-A-Fella Records",
      "Bad Boy Records",
      "Death Row Records",
      "Def Jam",
    ],
  },
  {
    id: 31,
    question:
      "What is the name of the Hip-Hop group featuring Q-Tip, Phife Dawg, and Ali Shaheed Muhammad?",
    answer: "A Tribe Called Quest",
    options: [
      "A Tribe Called Quest",
      "De La Soul",
      "The Roots",
      "Jungle Brothers",
    ],
  },
  {
    id: 32,
    question: 'Who is often referred to as the "Rap God"?',
    answer: "Eminem",
    options: ["Eminem", "Jay-Z", "Lil Wayne", "Kendrick Lamar"],
  },
  {
    id: 33,
    question:
      'Which rap group released the album "The Low End Theory" in 1991?',
    answer: "A Tribe Called Quest",
    options: [
      "A Tribe Called Quest",
      "De La Soul",
      "Gang Starr",
      "The Pharcyde",
    ],
  },
  {
    id: 34,
    question:
      "What is the title of Kendrick Lamar's 2015 album that won the Pulitzer Prize for Music?",
    answer: "To Pimp a Butterfly",
    options: [
      "To Pimp a Butterfly",
      "DAMN.",
      "good kid, m.A.A.d city",
      "Section.80",
    ],
  },
  {
    id: 35,
    question: `Who sampled the famous line "Don't push me 'cause I'm close to the edge" in their hit song "Crazy"?`,
    answer: "Gnarls Barkley",
    options: ["Gnarls Barkley", "OutKast", "The Black Eyed Peas", "Gorillaz"],
  },
  {
    id: 36,
    question: 'Which rapper released the album "To Pimp a Butterfly" in 2015?',
    answer: "Kendrick Lamar",
    options: ["Kendrick Lamar", "J. Cole", "Drake", "Chance the Rapper"],
  },
  {
    id: 37,
    question: "What's the name of Jay-Z's debut album?",
    answer: "Reasonable Doubt",
    options: ["Reasonable Doubt", "The Blueprint", "Vol. 1", "In My Lifetime"],
  },
  {
    id: 38,
    question: 'Who is known for the hit song "Gin and Juice"?',
    answer: "Snoop Dogg",
    options: ["Snoop Dogg", "Dr. Dre", "Warren G", "Nate Dogg"],
  },
  {
    id: 39,
    question:
      'Which Hip-Hop artist had a hit with "Empire State of Mind" featuring Alicia Keys?',
    answer: "Jay-Z",
    options: ["Jay-Z", "Nas", "50 Cent", "Kanye West"],
  },
  {
    id: 40,
    question: "What is the actual name of the rapper Macklemore?",
    answer: "Benjamin Haggerty",
    options: [
      "Benjamin Haggerty",
      "Ben Hammond",
      "Brandon Harris",
      "Brian Henderson",
    ],
  },
  {
    id: 41,
    question: 'Who released the album "All Eyez on Me" in 1996?',
    answer: "2Pac",
    options: ["2Pac", "Biggie", "Nas", "Snoop Dogg"],
  },
  {
    id: 42,
    question: "What is the title of Missy Elliott's debut album?",
    answer: "Supa Dupa Fly",
    options: [
      "Supa Dupa Fly",
      "Da Real World",
      "Miss E... So Addictive",
      "Under Construction",
    ],
  },
  {
    id: 43,
    question:
      'Who is often credited with popularizing the "bling bling" style in Hip-Hop?',
    answer: "Lil Wayne",
    options: ["Lil Wayne", "Birdman", "Jay-Z", "Diddy"],
  },
  {
    id: 44,
    question: "What's the name of Kanye West's debut album?",
    answer: "The College Dropout",
    options: [
      "The College Dropout",
      "Late Registration",
      "Graduation",
      "808s & Heartbreak",
    ],
  },
  {
    id: 45,
    question: "Which Hip-Hop artist founded the clothing line Rocawear?",
    answer: "Jay-Z",
    options: ["Jay-Z", "Diddy", "50 Cent", "Kanye West"],
  },
  {
    id: 46,
    question:
      'What is the significance of the "36 Chambers" in Wu-Tang Clan\'s history?',
    answer: "Their debut album",
    options: [
      "Their debut album",
      "Number of members",
      "Recording studio name",
      "Record label",
    ],
  },
  {
    id: 47,
    question: 'Who is known for the hit single "Hotline Bling"?',
    answer: "Drake",
    options: ["Drake", "The Weeknd", "Future", "Travis Scott"],
  },
  {
    id: 48,
    question: "What's the title of the Beastie Boys' debut album?",
    answer: "Licensed to Ill",
    options: [
      "Licensed to Ill",
      "Paul's Boutique",
      "Check Your Head",
      "Ill Communication",
    ],
  },
  {
    id: 49,
    question:
      'Which rapper is famous for his "No Limit Soldiers" and "Make \'Em Say Uhh!"?',
    answer: "Master P",
    options: ["Master P", "Birdman", "Cash Money", "Lil Wayne"],
  },
  {
    id: 50,
    question:
      'What Hip-Hop artist is often referred to as the "Golden State Warrior"?',
    answer: "MC Hammer",
    options: ["MC Hammer", "Too Short", "E-40", "Mac Dre"],
  },
];

// Get random questions for a quiz (default 10)
export function getRandomQuestions(count: number = 10): TriviaQuestion[] {
  const shuffled = [...triviaQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

// Check if answer is correct (case-insensitive, flexible matching)
export function checkAnswer(
  userAnswer: string,
  correctAnswer: string,
): boolean {
  const normalize = (str: string) =>
    str
      .toLowerCase()
      .trim()
      .replace(/['"]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^the\s+/i, "");

  const userNorm = normalize(userAnswer);
  const correctNorm = normalize(correctAnswer);

  // Exact match
  if (userNorm === correctNorm) return true;

  // Contains match (for partial answers)
  if (correctNorm.includes(userNorm) && userNorm.length > 3) return true;
  if (userNorm.includes(correctNorm)) return true;

  // Handle common variations
  const correctParts = correctAnswer.split(/[(),]/);
  for (const part of correctParts) {
    if (normalize(part) === userNorm) return true;
  }

  return false;
}

export interface QRCodeEntry {
  url: string;
  caption: string;
}

export interface AnswerBlock {
  questionNumber: number;
  questionText: string;
  answerText: string;
  qrCodes?: QRCodeEntry[];
  ripNote?: string; // renders with dove icon (e.g. "RIP Angie Stone")
}

export interface DJScipioPageData {
  pageNumber: number;
  answers: AnswerBlock[];
}

export const djScipioPages: DJScipioPageData[] = [
  {
    pageNumber: 93,
    answers: [
      {
        questionNumber: 1,
        questionText: "When did you first discover Hip-Hop music?",
        answerText: "I first discovered Hip-Hop in 1976.",
      },
      {
        questionNumber: 2,
        questionText: "Do you remember where you were?",
        answerText: "The first time I discovered Hip-Hop, I was in school. I traded a cassette tape with one of my classmates.",
      },
    ],
  },
  {
    pageNumber: 94,
    answers: [
      {
        questionNumber: 3,
        questionText: "What was the first song that caught your attention?",
        answerText: "The dopest track on the cassette tape we exchanged was \u2018Apache\u2019 by The Incredible Bongo Band.",
        qrCodes: [
          { url: "https://www.youtube.com/results?search_query=Apache+Incredible+Bongo+Band", caption: "'Apache'" },
        ],
      },
      {
        questionNumber: 4,
        questionText: "What were the emotions you felt hearing Hip-Hop for the first time?",
        answerText: "I felt that it was a soulful experience.",
      },
    ],
  },
  {
    pageNumber: 95,
    answers: [
      {
        questionNumber: 5,
        questionText: "Who were (or are) your hottest (or as we used to say \u201cillest\u201d) MCs?",
        answerText: "The illiest MCs were Kool Moe Dee, Melle Mel, GrandMaster Caz, Nas, Jay Z, and Jada Kiss.",
        qrCodes: [
          { url: "https://www.youtube.com/results?search_query=NY+State+of+Mind+Nas", caption: "'NY State of Mind' by Nas" },
          { url: "https://www.youtube.com/results?search_query=Hard+Knock+Life+Jay-Z", caption: "'It's A Hard Knock Life' by Jay-Z" },
        ],
      },
      {
        questionNumber: 6,
        questionText: "Did Hip-Hop inspire you to become, or want to become, a lyricist, rapper, dancer, or DJ? If so, was there anyone in particular who inspired you?",
        answerText: "Hip-Hop did not inspire me to become a DJ. I was already a DJ - playing Soul, Disco, and Funk music. The style of cuttin' and scratchin' by GrandMaster Flash and GrandWizard Theodore inspired me to become a Hip-Hop DJ.",
      },
    ],
  },
  {
    pageNumber: 96,
    answers: [
      {
        questionNumber: 7,
        questionText: "Did Hip-Hop play a role in your friendship or social circles?",
        answerText: "Yes, Hip-Hop played a role in my social circles. I teamed up with Greg Simpkins p.k.a. DJ Jazzy G. We combined our mixing styles of Disco and Funk with Hip-Hop. Every day, we practiced our skills for hours. One of our goals was to become the fastest and most accurate Hip-Hop mixer.",
      },
      {
        questionNumber: 8,
        questionText: "What were the top three or more songs that gave you the confidence to overcome a personal challenge in your life?",
        answerText: "The top three or more songs that gave me the confidence to overcome a personal challenge in my life are \u2018The Message\u2019 by GrandMaster Flash and the Furious Five, \u2018Self Destruction\u2019 by KRS-1 (and several artists of the day) and \u2018Yes We Can Can\u2019 by The Treacherous Three.",
        qrCodes: [
          { url: "https://www.youtube.com/results?search_query=Self+Destruction+KRS-One+Stop+The+Violence", caption: "'Self Destruction'\n*Original artist upload: not available" },
        ],
      },
    ],
  },
  {
    pageNumber: 97,
    answers: [
      {
        questionNumber: 9,
        questionText: "What are (or were) your top five hottest jams or concerts? Where did you attend them?",
        answerText: "The top five hottest jams or concerts were The Valley, Boston Secor, Olinville Park, Edenwald Projects, and Crotona Park. They were in the Boogie Down Bronx.",
      },
      {
        questionNumber: 10,
        questionText: "Who are (or were) the top DJs who had the biggest impact on Hip-Hop?",
        answerText: "The top DJs, ranked in order that had the biggest impact on Hip-Hop, were Disco King Mario, DJ Kool Herc, GrandMaster Flash, Grand Wizzard Theodore, DJ Whiz Kid, DJ Breakout, DJ Baron, DJ Hollywood, DJ Clark Kent, DJ Clue, DJ Marley Marl, DJ Red Alert, DJ Chuck Chillout, Mr. Magic, DJ Jazzy Jeff, DJ D-Nice, DJ Kayslay, Kid Capri, DJ Sonny Cheeba and Frankie Crocker. They significantly contributed to the foundation of Hip-Hop music. Frankie Crocker, aka The Chief Rocker, was not a Hip-Hop DJ in the traditional sense, but as the program director and radio personality on WBLS 107.5 FM in New York City, he played a significant role in the genre. He expanded the reach of Black music on mainstream radio, which included R&B, Disco, Funk, and emerging Hip-Hop sounds, which helped to legitimize the genre.",
        qrCodes: [
          { url: "https://www.youtube.com/results?search_query=52+Beats+Kid+Capri", caption: "'52 Beats'\nby Kid Capri" },
          { url: "https://www.youtube.com/results?search_query=DJ+Kayslay+hip+hop+mix", caption: "DJ Kayslay\n@DJ SCIPIO" },
          { url: "https://www.youtube.com/results?search_query=Old+School+Flava+DJ+Hollywood", caption: "'Old School Flava'\nby DJ Hollywood" },
        ],
      },
    ],
  },
  {
    pageNumber: 98,
    answers: [
      {
        questionNumber: 11,
        questionText: "Who, from your crew, were your favorite people to party with?",
        answerText: "My favorite crew members to party with were Greg Simpkins aka G Money, Dave Brown aka Kool Dave, Dwayne Murray Greene aka Dee Money, Billy Robinson, and Curvas Moore aka Q.",
      },
      {
        questionNumber: 12,
        questionText: "What were your top three old-school dances back in the day, and what are they today?",
        answerText: "My top three old-school dances back in the day were The Hustle, The Freak Dance and The Bump. Other than that, as a DJ, I did not dance much. Today, I like the Electric Slide.",
      },
    ],
  },
  {
    pageNumber: 99,
    answers: [
      {
        questionNumber: 13,
        questionText: "What are (or were) your top five Hip-Hop clubs?",
        answerText: "My top five Hip-Hop clubs were Disco Fever, T-Connection, The Stardust Ballroom, Club 371, and The Sparkle. All were located in the Boogie Down Bronx.",
      },
      {
        questionNumber: 14,
        questionText: "What are your top five or more party songs that really turned it up (or as we used to say), rocked the house?",
        answerText: "My top five or more party songs that rocked the house were \u2018Wild Wild West\u2019 by Kool Moe Dee, \u2018Planet Rock\u2019 by Afrika Bambaataa and Soulsonic Force, \u2018It Takes Two\u2019 by Rob Base & DJ E-Z Rock, \u2018Set It Off\u2019 by Strafe and \u2018Jam On It\u2019 by Newcleus.",
        qrCodes: [
          { url: "https://www.youtube.com/results?search_query=Wild+Wild+West+Kool+Moe+Dee", caption: "'Wild Wild West'" },
          { url: "https://www.youtube.com/results?search_query=Planet+Rock+Afrika+Bambaataa+Soulsonic+Force", caption: "'Planet Rock'" },
          { url: "https://www.youtube.com/results?search_query=Jam+On+It+Newcleus", caption: "'Jam On It'" },
        ],
      },
    ],
  },
  {
    pageNumber: 100,
    answers: [
      {
        questionNumber: 15,
        questionText: "What was the first song that you could fully recite?",
        answerText: "The first song that I could fully recite was \u2018The Message\u2019 by Grandmaster Flash.",
        qrCodes: [
          { url: "https://www.youtube.com/results?search_query=The+Message+Grandmaster+Flash+Furious+Five", caption: "'The Message'" },
        ],
      },
      {
        questionNumber: 16,
        questionText: "In your day, who were the hottest (or as we used to say \u201cillest\u201d) top five male artists or groups?",
        answerText: "The \u201cillest\u201d top five male artists or groups are The Treacherous Three, The L Brothers, The Cold Crush Brothers, Grandmaster Flash and The Furious Five, and Crash Crew.",
        qrCodes: [
          { url: "https://www.youtube.com/results?search_query=White+Lines+Grandmaster+Flash+Melle+Mel", caption: "'White Lines' by Grandmaster\nFlash and Melle Mel" },
          { url: "https://www.youtube.com/results?search_query=High+Power+Rap+Crash+Crew", caption: "'High Power Rap' by\nThe Crash Crew" },
        ],
      },
    ],
  },
  {
    pageNumber: 101,
    answers: [
      {
        questionNumber: 17,
        questionText: "What is the one concert or event that you regret missing?",
        answerText: "I regret missing the first ever event where two established MCs openly battled each other. The event took place in December 1981 at Harlem World on 116th St. and Lenox Avenue. The two rappers were Busy Bee Starsky, known for his humorous and energetic style, and Kool Moe Dee, known for his lyrical prowess. Every year Busy Bee won the \u201cMC Battle of The Year\u201d Award but that night Kool Moe Dee challenged him and won. It was a historic moment in early rap history that forever changed the way MCs battled.",
        qrCodes: [
          { url: "https://www.youtube.com/results?search_query=Busy+Bee+vs+Kool+Moe+Dee+first+battle+hip+hop+1981", caption: "Busy Bee vs Kool Moe Dee -\nThe First Battle in Hip-Hop" },
          { url: "https://www.youtube.com/results?search_query=Busy+Bee+vs+Kool+Moe+Dee+beef", caption: "Beef 1-Busy Bee\nvs Kool Moe Dee" },
          { url: "https://www.youtube.com/results?search_query=Kool+Moe+Dee+dissing+Busy+Bee+1981", caption: "Kool Moe Dee Dissing\nBusy Bee 1981" },
        ],
      },
      {
        questionNumber: 18,
        questionText: "What are some old school lines that you still recite today?",
        answerText: "I can't name a line or a verse that I still recite today.",
      },
    ],
  },
  {
    pageNumber: 102,
    answers: [
      {
        questionNumber: 19,
        questionText: "What were your favorite songs to be played at a club?",
        answerText: "My favorite songs to be played at a club were \u2018Apache\u2019 by The Incredible Bongo Band, \u2018The Mexican\u2019 by Babe Ruth, \u2018Groove To Get Down\u2019 by T-Connection, \u2018Catch a Groove\u2019 by Juice, \u2018Take Me To The Mardi Gras\u2019 by Bob James, \u2018I Just Wanna Do My Thing\u2019 by Edwin Starr, Shangri La by La Pregunta, Planetary Citizen by John McLaughlin, Scratchin\u2019 by The Magic Disco Machine, \u2018T Plays It Cool\u2019 by Marvin Gaye and Willie Dynamite by Willy Chase.",
      },
      {
        questionNumber: 20,
        questionText: "What were your top five favorite Break Dance tracks for B-Boys?",
        answerText: "My top five favorite Break Dance tracks for B-Boys are \u2018The Mexican\u2019 by Babe Ruth, \u2018Ride Sally Ride\u2019 by Dennis Coffey, \u2018Just Begun\u2019 by Jimmy Castor Bunch, \u2018Rock Creek Park\u2019 by The Blackbryds and \u2018Give It Up Turn It Loose\u2019 by James Brown.",
      },
    ],
  },
  {
    pageNumber: 103,
    answers: [
      {
        questionNumber: 21,
        questionText: "Did you own any DJ equipment, and if so, what kind?",
        answerText: "The equipment that I owned was a pair of Technic Turntables, a Gemini Mixer, and a Kenwood Amp.",
      },
      {
        questionNumber: 22,
        questionText: "Have you ever been at a club or jam where shots were fired or some type of violence took place?",
        answerText: "Yes, I was at a jam where shots were fired. It was at The Valley in The Bronx. I was with DJ Jazzy G and DJ Whiz Kid was on the 1\u2019s and 2\u2019s.",
      },
    ],
  },
  {
    pageNumber: 104,
    answers: [
      {
        questionNumber: 23,
        questionText: "Have you ever been affected by the loss of an artist that you were a big fan of?",
        answerText: "Yes, I have been affected by the loss of a Hip-Hop artist.",
      },
      {
        questionNumber: 24,
        questionText: "If so, how were you specifically affected?",
        answerText: "I was saddened by the loss of my friend, DJ Whiz Kid. Also, DJ Silverback and DJ Robert Randolph of Orangeburg, SC.",
      },
    ],
  },
  {
    pageNumber: 105,
    answers: [
      {
        questionNumber: 25,
        questionText: "Have you ever had the opportunity to do something kind or important for your favorite artist?",
        answerText: "I never had the opportunity to do something kind or important for my favorite artist.",
      },
      {
        questionNumber: 26,
        questionText: "If the lyrics in one of your favorite songs could come true for a day, which lyrics would you choose?",
        answerText: "\u2018If I Ruled The World\u2019 by Kurtis Blow.",
        qrCodes: [
          { url: "https://www.youtube.com/results?search_query=If+I+Ruled+The+World+Kurtis+Blow", caption: "'If I Ruled The World'\nby Kurtis Blow" },
        ],
      },
    ],
  },
  {
    pageNumber: 106,
    answers: [
      {
        questionNumber: 27,
        questionText: "What Hip-Hop song do you hear and instantly remember exactly where you were and what you were doing?",
        answerText: "The song that I hear and it instantly takes me back to where I was and what I was doing is \u2018The Mexican\u2019 by Babe Ruth.",
        qrCodes: [
          { url: "https://www.youtube.com/results?search_query=The+Mexican+Babe+Ruth+hip+hop", caption: "'The Mexican'" },
        ],
      },
      {
        questionNumber: 28,
        questionText: "Were there any Hip-Hop artists you had a crush on back in your day? If so, who? How about today?",
        answerText: "The Hip-Hop artist that I had a crush on back in the day was Queen Latifah.",
        qrCodes: [
          { url: "https://www.youtube.com/results?search_query=Ladies+First+Queen+Latifah+Monie+Love", caption: "'Ladies First' by Queen\nLatifah ft. Monie Love" },
        ],
      },
    ],
  },
  {
    pageNumber: 107,
    answers: [
      {
        questionNumber: 29,
        questionText: "Who are some of your favorite New York mixtape DJs?",
        answerText: "Some of my favorite New York mixtape DJ\u2019s are DJ Clue, DJ Kayslay, DJ Ron G., DJ Envy, DJ Doowop, DJ SCIPIO, DJ KFD aka Stanley Scipio, DJ Kool Kev., DJ Action Pac, DJ Lazy K, DJ Kid Capri, DJ Dirty Harry, Tony Touch a DJ S&S, and DJ Juice (RIP)",
      },
      {
        questionNumber: 30,
        questionText: "Who were your favorite B-Boys, and why?",
        answerText: "My favorite B-Boy was Cholly Rock, Trixi, Salsa and The Legendary Twins",
      },
    ],
  },
  {
    pageNumber: 108,
    answers: [
      {
        questionNumber: 31,
        questionText: "What record pool, if any, did you belong to?",
        answerText: "The Record Pools that I belonged to were Columbia Record Pool Paul Davis and Joe Rugby; Franchise Record Pool; Mr. Excitement; Digi Waxx Media and The Boogie Report Hit Music Dispatch.",
      },
      {
        questionNumber: 32,
        questionText: "When you were on your way to a club; looking clean (or as we used to say) looking fresh, what were your favorite colognes, perfumes, or body oils to wear?",
        answerText: "My favorite cologne was Eygptian Musk.",
      },
    ],
  },
  {
    pageNumber: 109,
    answers: [
      {
        questionNumber: 33,
        questionText: "Fashion is an integral part of Hip-Hop. Back in your day, what was your favorite Hip-Hop drip (or as we used to say) gear?",
        answerText: "My favorite Hip-Hop gear was a mock neck shirt and creased Lee Jeans.",
      },
      {
        questionNumber: 34,
        questionText: "What was your sneaker or shoe game like? And now?",
        answerText: "My shoe game included British Walkers, Marshmallows, Grips, Ballys, and Adidas Sneakers. I don\u2019t have a shoe or sneaker game.",
      },
    ],
  },
  {
    pageNumber: 110,
    answers: [
      {
        questionNumber: 35,
        questionText: "What were your favorite drinks to get your party started? And now?",
        answerText: "My favorite drink was Budweiser. Nothing. I don\u2019t drink any longer... not that there\u2019s anything wrong with it. :)",
      },
      {
        questionNumber: 36,
        questionText: "What three or more artists or groups have influenced your view of social issues and activism?",
        answerText: "The top three or more artists or groups that influenced my view of social issues and activism are Public Enemy, KRS-One, U.N.I.T.Y by Queen Latifah, and DMX.",
        qrCodes: [
          { url: "https://www.youtube.com/results?search_query=UNITY+Queen+Latifah+hip+hop", caption: "U.N.I.T.Y\nby Queen Latifah" },
          { url: "https://www.youtube.com/results?search_query=Fight+The+Power+Public+Enemy", caption: "'Fight The Power' by\nPublic Enemy" },
        ],
      },
    ],
  },
  {
    pageNumber: 111,
    answers: [
      {
        questionNumber: 37,
        questionText: "Are there any particular artists or groups whose life stories have inspired you?",
        answerText: "Yes, there is a particular artist whose life story inspired me. The artist is DMX and the name of the track was \u2018Slippin\u2019.",
        qrCodes: [
          { url: "https://www.youtube.com/results?search_query=Slippin+DMX", caption: "'Slippin'" },
        ],
      },
      {
        questionNumber: 38,
        questionText: "Has Hip-Hop contributed to your personal growth, and if so, which song or artist do you credit with your development?",
        answerText: "Yes, Hip-Hop helped my personal growth. Mobb Deep was the group and \u2018Shook Ones\u2019 was the song. Lyrically, they were very inspiring to me.",
        qrCodes: [
          { url: "https://www.youtube.com/results?search_query=Shook+Ones+Mobb+Deep", caption: "'Shook Ones'" },
        ],
      },
    ],
  },
  {
    pageNumber: 112,
    answers: [
      {
        questionNumber: 39,
        questionText: "When was the first time (if ever) that you tried to write your own rap?",
        answerText: "Does not apply. I never tried to write my own raps.",
      },
      {
        questionNumber: 40,
        questionText: "Who or what inspired you to try, and how would you rate your skills?",
        answerText: "Does not apply. No one inspired me to write a rap.",
      },
    ],
  },
  {
    pageNumber: 113,
    answers: [
      {
        questionNumber: 41,
        questionText: "Have you ever met or worked with any of your favorite artists or legends in Hip-Hop?",
        answerText: "Yes, I have met and worked with some of my favorite artists. Kool Moe Dee and I were sixth grade classmates. We both attended P.S. 129 in Harlem. I also met Queen Latifah, Prodigy of Mobb Deep, Run-DMC and Grandmaster Jay, Raekwon, T.I., Lil\u2019 Jon, Rasheeda, Scrappy, Scarface, Pastor Troy, Master P and many more.",
        qrCodes: [
          { url: "https://www.youtube.com/results?search_query=Shook+Ones+Mobb+Deep", caption: "'Shook Ones'\nby Mobb Deep" },
        ],
      },
      {
        questionNumber: 42,
        questionText: "Who was the better lyricist: Biggie or Tupac?",
        answerText: "No comment...",
      },
    ],
  },
  {
    pageNumber: 114,
    answers: [
      {
        questionNumber: 43,
        questionText: "What were your thoughts on the infamous East Coast vs. West Coast War? Did you choose a side?",
        answerText: "No comment.",
      },
      {
        questionNumber: 44,
        questionText: "If you could have fifteen minutes with your favorite Hip-Hop legend or artist, who would it be and what would you say?",
        answerText: "If I had fifteen minutes with my favorite Hip-Hop Legend, it would be Mary J. Blige. I would commend her on all of her accomplishments and ask her, \u201cWhat are your plans for the evening?\u201d LOL!",
      },
    ],
  },
  {
    pageNumber: 115,
    answers: [
      {
        questionNumber: 45,
        questionText: "If you could spend the whole day with your favorite Hip-Hop legend or artist, who would it be and what plans would you make?",
        answerText: "If I could spend the whole day with my favorite Hip-Hop legend/artist, I would choose Queen Latifah. We would go to the studio together and produce a track.",
      },
      {
        questionNumber: 46,
        questionText: "If you could have a rap battle with any of your favorite artists, who would you choose?",
        answerText: "I would have a rap battle with Jay Z.",
      },
    ],
  },
  {
    pageNumber: 116,
    answers: [
      {
        questionNumber: 47,
        questionText: "What clever lines would you use to diss them?",
        answerText: "Uhhh... on second thought, never mind.",
      },
      {
        questionNumber: 48,
        questionText: "Can you recall a funny or embarrassing story from back in your day that you still laugh about?",
        answerText: "A funny or embarrassing story from back in the day that I still laugh about is when my friend Jazzy G and I were attending a park jam in The Valley located in The Bronx. DJ Whiz Kid was one the 1\u2019s and 2\u2019s. Someone fired a gun, and everyone ran for cover. That day, we were both wearing our fly Hip-Hop gear. Jazzy G was wearing a brand-new nylon Puma short set. He made a path through the tall hedges, and I followed behind him. When we came out the other side of the hedges, his new outfit was ripped to shreds. LOL!",
      },
    ],
  },
  {
    pageNumber: 117,
    answers: [
      {
        questionNumber: 49,
        questionText: "If you could challenge any artist to a dance off, who would it be?",
        answerText: "The artist I would challenge to a dance-off is Fred Sanford of Sanford and Son. LOL!",
      },
      {
        questionNumber: 50,
        questionText: "What is the nicest thing a Hip-Hop legend or artist has ever done for you?",
        answerText: "The nicest thing done for me happened in 2003. T.I. was at the Manifest Record Store in Columbia, S.C. He was there to promote his new album called Trap Music. I purchased several of his CDs, told him I was a DJ, and got a drop for my mixtape. T.I. said, \u201cIf there is anything that I can do to help, let me know.\u201d",
      },
    ],
  },
  {
    pageNumber: 118,
    answers: [
      {
        questionNumber: 51,
        questionText: "What, if any, is the best advice that a Hip-Hop legend or artist has ever given you?",
        answerText: "The best advice that a Hip-Hop Legend, or artist, etc., has ever given to me was when Master P gave me a drop. He advised me to keep \u201cmoving forward\u201d in the mixtape game.",
      },
      {
        questionNumber: 52,
        questionText: "Do you have any humorous stories that you heard about or personally know about your favorite artists?",
        answerText: "No, not that I can recall.",
      },
    ],
  },
  {
    pageNumber: 119,
    answers: [
      {
        questionNumber: 53,
        questionText: "In the early years, women in Hip-Hop played a crucial and invaluable role in shaping the genre. What do you believe is the most significant contribution they made? Additionally, who are your favorites?",
        answerText: "The most important contribution women made back in the day, was bringing a new flava to Hip-Hop. They were dynamic and dedicated, and their artistry is undeniable. My favorites were The Sequence, Queen Latifah, Roxanne Shante, ShaRock, Debbie D., and Missy Elliott.",
        qrCodes: [
          { url: "https://www.youtube.com/results?search_query=Lose+Control+Missy+Elliott+Ciara", caption: "'Lose Control'\nby Missy Elliot ft. Ciara" },
        ],
      },
      {
        questionNumber: 54,
        questionText: "After the eighties, who were your top five (or more) woman artists or groups? Who are they today?",
        answerText: "After the eighties, my top five or more women artists or groups were Salt-n-Pepa, Lil\u2019 Kim, MC Lyte, Remy Ma and Lady of Rage. They are the same artists.",
      },
    ],
  },
  {
    pageNumber: 120,
    answers: [
      {
        questionNumber: 55,
        questionText: "Who do you consider the top five (or more) \u201cbaddest\u201d women artists in Hip-Hop and R&B?",
        answerText: "In my opinion, the baddest top five or more women artists in Hip-Hop and R&B were/are Mary J. Blige, Lauren Hill, Aaliyah, Whitney Houston, Beyonc\u00e9, Faith Evans, Erykah Badu, Lil\u2019 Mo, Mariah Carey, Stephanie Mills and Remy Ma",
        qrCodes: [
          { url: "https://www.youtube.com/results?search_query=You+Remind+Me+Mary+J+Blige", caption: "'You Remind Me'\nby Mary J. Blige" },
          { url: "https://www.youtube.com/results?search_query=Single+Ladies+Beyonce", caption: "'Single Ladies'\nby Beyonc\u00e9" },
          { url: "https://www.youtube.com/results?search_query=Rock+the+Boat+Aaliyah", caption: "'Rock the Boat'\nby Aaliyah" },
        ],
      },
      {
        questionNumber: 56,
        questionText: "Who are your favorite male Hip-Hop or Hip-Hop and R&B artists today?",
        answerText: "Today my favorite male Hip-Hop or Hip-Hop and R&B artists are Keith Sweat, Usher, Ginuwine, Tank, Jaheim, Nate Dogg, Tyrese, Big Bub, Prince, Michael Jackson, George Clinton and Frankie Beverly.",
        qrCodes: [
          { url: "https://www.youtube.com/results?search_query=Right+and+a+Wrong+Way+Keith+Sweat", caption: "'Right and a Wrong Way'\nby Keith Sweat" },
        ],
      },
    ],
  },
  {
    pageNumber: 121,
    answers: [
      {
        questionNumber: 57,
        questionText: "Did you choose a career in Rap or Hip-Hop? If so, how are you contributing to the genre? If not, what are you doing today instead?",
        answerText: "Yes, I did. If I had not, I would be working at a boring 9-to-5 job.",
      },
      {
        questionNumber: 58,
        questionText: "If you chose a career in Rap or Hip-Hop, what were some of the challenges you faced?",
        answerText: "Back in the day, some of the biggest challenges I experienced were facing criticism from the older generation. They did not understand or care for this new style of cuttin\u2019 and scratchin\u2019 a record.",
      },
    ],
  },
  {
    pageNumber: 122,
    answers: [
      {
        questionNumber: 59,
        questionText: "Were there any particular family members or friends who encouraged and believed in you during those challenges?",
        answerText: "Yes, my brother Stanley Scipio, my friend Greg Simpkins and my nephew Kevin Bush encouraged me and believed in me. They were also DJs, so they understood the challenges I was facing.",
      },
      {
        questionNumber: 60,
        questionText: "How did you overcome those challenges?",
        answerText: "I overcame those challenges by not letting them deter me. I realized that this new style of DJ\u2019ing was something special and I refused to give up.",
      },
    ],
  },
  {
    pageNumber: 123,
    answers: [
      {
        questionNumber: 61,
        questionText: "Who are your favorite Hip-Hop producers?",
        answerText: "My favorite Hip-Hop producers are Swizz Beatz, Timbaland, DJ Marley Marl, Ski Beatz, Dr. Dre, Jazzy Pha, Dark Child and Rodney Jenkins, D-Rock, The One Hand Producer, C-Minor, Uncle Marvelous and Skitzo.",
      },
      {
        questionNumber: 62,
        questionText: "Has Hip-Hop influenced your view on diversity and inclusion? If so, how?",
        answerText: "Yes, Hip-Hop influenced my view on diversity and inclusion. I realized that everyone, no matter who you are or where you come from, has a story to tell.",
      },
    ],
  },
  {
    pageNumber: 124,
    answers: [
      {
        questionNumber: 63,
        questionText: "Have there been any songs or specific artists that aided you in finding your voice and shaping your identity? If so, which ones?",
        answerText: "Yes. The particular artists that helped me find my voice and my own identity was the group Public Enemy.",
      },
      {
        questionNumber: 64,
        questionText: "How do you feel about the storytelling aspect of Hip-Hop? Have you ever written your own stories?",
        answerText: "The storytelling aspect of Hip-Hop was a great contribution. No, I have not written my story yet, but it may be coming soon.",
      },
    ],
  },
  {
    pageNumber: 125,
    answers: [
      {
        questionNumber: 65,
        questionText: "Do you remember a time when Hip-Hop brought the people in your community together?",
        answerText: "Yes, when someone in the community passed away, we would celebrate their life with a block party. We would get together, have some food and play their favorite songs.",
      },
      {
        questionNumber: 66,
        questionText: "Did Hip-Hop make you more active in your community? If so, what changes did you make and how did you improve things for the better?",
        answerText: "Yes, as a DJ, I contributed to the community by organizing fundraisers and \u2018Back-to-School\u2019 drives. Many adults and children needed financial help and it made a difference for them.",
      },
    ],
  },
  {
    pageNumber: 126,
    answers: [
      {
        questionNumber: 67,
        questionText: "What do (or did) you like the most about your generation of Hip-Hop?",
        answerText: "What I like the most about my generation of Hip-Hop is that the music was fun. For the most part, it did not promote negativity. It also kept a lot of people out of trouble because music kept them focused.",
      },
      {
        questionNumber: 68,
        questionText: "What is your go-to favorite Hip-Hop karaoke song?",
        answerText: "My favorite song is Rapper\u2019s Delight by Sugar Hill Gang.",
        qrCodes: [
          { url: "https://www.youtube.com/results?search_query=Rapper+Delight+Sugar+Hill+Gang", caption: "'Rapper's Delight'" },
        ],
      },
    ],
  },
  {
    pageNumber: 127,
    answers: [
      {
        questionNumber: 69,
        questionText: "Has Hip-Hop led you to explore other genres of music? If so, which ones?",
        answerText: "Yes, Hip-Hop led me to explore other types of music. It led me to listen to West Coast, Dirty South Music and Southern Soul Music.",
      },
      {
        questionNumber: 70,
        questionText: "Which Dirty South artists, if any, do you feel contributed to Hip-Hop music?",
        answerText: "The Dirty South artists that I feel contributed to Hip-Hop were OutKast, Goodie Mob, T.I., UGK, The Geto Boys, Lil\u2019 Flip, Lil Jon, Master P and Scarface.",
        qrCodes: [
          { url: "https://www.youtube.com/results?search_query=My+Mind+Playing+Tricks+Geto+Boys", caption: "'My Mind is Playing Tricks'\non me by the Geto Boys" },
          { url: "https://www.youtube.com/results?search_query=They+Dont+Dance+No+More+Goodie+Mob", caption: "'They Don't Dance No More'\nby Goodie Mob" },
          { url: "https://www.youtube.com/results?search_query=ATLiens+OutKast", caption: "'ATliens'\nby OutKast" },
        ],
      },
    ],
  },
  {
    pageNumber: 128,
    answers: [
      {
        questionNumber: 71,
        questionText: "Who are (or were) your favorite West Coast artists?",
        answerText: "My favorite West Coast artists are Tupac, Snoop Dogg, Ice Cube, Ice-T, Easy-E, Too Short, E-40, Mack 10, Nate Dogg, MC Hammer, The D.O.C. and Xzibit.",
        qrCodes: [
          { url: "https://www.youtube.com/results?search_query=Me+Against+The+World+Tupac", caption: "'Me Against The World'\nby Tupac" },
          { url: "https://www.youtube.com/results?search_query=Today+Was+A+Good+Day+Ice+Cube", caption: "'Today Was A Good Day'\nby Ice Cube" },
          { url: "https://www.youtube.com/results?search_query=Gin+and+Juice+Snoop+Dogg", caption: "'Gin and Juice'\nby Snoop Dogg" },
        ],
      },
      {
        questionNumber: 72,
        questionText: "Do you believe that Hip-Hop has promoted positive change in the world? If so, how?",
        answerText: "Yes, I believe that Hip-Hop has promoted positive change in the world because it has bought all different races and cultures together.",
      },
    ],
  },
  {
    pageNumber: 129,
    answers: [
      {
        questionNumber: 73,
        questionText: "As classic Hip-Hop has evolved, what artists or groups do you feel have positively impacted the music? How?",
        answerText: "The new artists that I feel have made a positive impact on the music are J. Cole, Kendrick Lamar, and Nipsey Hussle. I think they are more lyrical than some of the other new artists.",
      },
      {
        questionNumber: 74,
        questionText: "What artist or group, if any, do you believe is over-hyped or has negatively impacted the music? If so, who and how?",
        answerText: "No comment.",
      },
    ],
  },
  {
    pageNumber: 130,
    answers: [
      {
        questionNumber: 75,
        questionText: "Back in your day, when you were frustrated or facing hardships, what Hip-Hop songs matched your energy? How about today?",
        answerText: "When I am frustrated or facing some hardship in my life, the Hip-Hop songs that match my energy are Party Up (Up In Here) by DMX; Thug Luv, by Bone, Thugs-N-Harmony featuring Tupac; I Don\u2019t Give A F*ck by Lil Jon; Wild Out by The Lox; and Throw Ya Gunz (In The Air) by Onyx. I like the same songs!",
        qrCodes: [
          { url: "https://www.youtube.com/results?search_query=Wild+Out+The+Lox", caption: "'Wild Out'\nby The Lox" },
          { url: "https://www.youtube.com/results?search_query=Thug+Luv+Bone+Thugs+Harmony+Tupac", caption: "Thug Luv by Bone\nThugs-N-Harmony ft. Tupac" },
          { url: "https://www.youtube.com/results?search_query=Party+Up+Up+In+Here+DMX", caption: "'Party Up'\nby DMX" },
        ],
      },
      {
        questionNumber: 76,
        questionText: "In your borough or state, which artists or DJs are you most proud of for their contribution to Rap or Hip-Hop?",
        answerText: "I am most proud of DJ Whiz Kid. He lived in my neighborhood in the Bronx and we became friends. He lived in Parkside Housing and I lived on Arnow Ave. On Saturdays, we used to play basketball together. In my opinion, he became one of the top Hip-Hop DJs in the game.",
        qrCodes: [
          { url: "https://www.youtube.com/results?search_query=DJ+Whiz+Kid+hip+hop+original", caption: "'The Original Whiz Kid'" },
        ],
      },
    ],
  },
  {
    pageNumber: 131,
    answers: [
      {
        questionNumber: 77,
        questionText: "Who are your favorite beatbox artists? Please name one or more.",
        answerText: "My favorite beatbox artist is Doug E. Fresh, The Fat Boys, and Biz Markie.",
        qrCodes: [
          { url: "https://www.youtube.com/results?search_query=The+Show+Doug+E+Fresh+Slick+Rick", caption: "'Doug E. Fresh & Slick Rick'\n- The Show" },
        ],
      },
      {
        questionNumber: 78,
        questionText: "Regarding sampling, which artist of your generation was sampled the most?",
        answerText: "James Brown was the most sampled artist of my generation. Sampling is taking a portion of an existing record and inserting it into a new record. Grandmaster Flash invented human sampling and DJ Marley Marl was the first to re-create sampling on wax.",
        qrCodes: [
          { url: "https://www.youtube.com/results?search_query=Funky+Drummer+James+Brown", caption: "'Funky Drummer'\n- James Brown" },
        ],
      },
    ],
  },
  {
    pageNumber: 132,
    answers: [
      {
        questionNumber: 79,
        questionText: "What rapper, if any, influenced you to become, or want to become, a rapper? How?",
        answerText: "There is no rapper that influenced me to become a rapper.",
      },
      {
        questionNumber: 80,
        questionText: "Like Mt. Rushmore, if there were a Mt. EASTmore of Hip-Hop, who would you choose?",
        answerText: "If there were a Mt. EASTmore of Hip-Hop, I would choose Melle Mel, Kool Moe Dee, Grandmaster Caz, and DMX.",
      },
    ],
  },
  {
    pageNumber: 133,
    answers: [
      {
        questionNumber: 81,
        questionText: "Who would you choose for Mt. WESTmore of Hip-Hop?",
        answerText: "I would choose Snoop Dogg, Tupac, Ice Cube, and Ice-T.",
      },
      {
        questionNumber: 82,
        questionText: "Who would you choose for a Mt. Ladies-Onlymore of Hip-Hop?",
        answerText: "I would choose Queen Latifah, MC Lyte, Roxanne Shand\u00e9 and MC Sha-Rock.",
      },
    ],
  },
  {
    pageNumber: 134,
    answers: [
      {
        questionNumber: 83,
        questionText: "In your generation, which local DJs made the biggest impact on Hip-Hop?",
        answerText: "The local DJ\u2019s that made an impact on Hip-Hop are DJ Shakim, DJ Prince Ice, DJ Al Sumter, DJ Effect, DJ Dirty Baby, DJ Cleve, DJ B Lord, DJ D Tec, DJ Silverback, DJ Gitio, and DJ Chuck T.",
      },
      {
        questionNumber: 84,
        questionText: "As a DJ, what were/are your favorite songs to play at a club?",
        answerText: "My favorite songs to play at a club were Good Times by Chic; Last Night Changed It All by Esther Williams; Different Strokes by SYL Johnson; Feel the Heartbeat by Treacherous Three; Freedom by GrandMaster Flash and the Furious Five; Play That Beat Mr. DJ by G.L.O.B.E. and Whiz Kid; Here Comes That Beat by Pumpkin and The Profile All-Stars; Funk You Up by The Sequence; Roxanne\u2019s Revenge by Roxanne Shand\u00e9; and That\u2019s The Joint by The Funky Four Plus One, featuring Sha-Rock. ***Sha-Rock is the first female Hip-Hop MC.",
        qrCodes: [
          { url: "https://www.youtube.com/results?search_query=Play+That+Beat+Mr+DJ+GLOBE+Whiz+Kid", caption: "'Play That Beat Mr. DJ'" },
          { url: "https://www.youtube.com/results?search_query=Funk+You+Up+The+Sequence", caption: "'Funk You Up'" },
          { url: "https://www.youtube.com/results?search_query=Thats+The+Joint+Funky+Four+Plus+One", caption: "'That's The Joint'" },
        ],
      },
    ],
  },
  {
    pageNumber: 135,
    answers: [
      {
        questionNumber: 85,
        questionText: "What was the first official Hip-Hop love song? Who was the artist?",
        answerText: "The first official Hip-Hop love song was \u201cI Need Love by LL Cool J.\u201d It came out in 1987 and was a huge hit.",
        qrCodes: [
          { url: "https://www.youtube.com/results?search_query=I+Need+Love+LL+Cool+J", caption: "\u201cI Need Love\u201d" },
        ],
      },
      {
        questionNumber: 86,
        questionText: "What are your favorite Hip-Hop love songs today?",
        answerText: "I don\u2019t have any.",
      },
    ],
  },
  {
    pageNumber: 136,
    answers: [
      {
        questionNumber: 87,
        questionText: "Who are your favorite women artists in Hip-Hop today?",
        answerText: "Beyonce, Sexy Red, Nicki Minaj, Angie Stone, Cardi B, Megan Thee Stallion, Saweetie and Latto.",
        ripNote: "RIP Angie Stone",
      },
      {
        questionNumber: 88,
        questionText: "What\u2019s on your playlist today?",
        answerText: "My personal favorites are; Not Like Us by Kendrick Lamar, I Can Do Magic by Cambatta and Black Magik 363; My Type by Saweetie; FNF (Let\u2019s Go) by GloRilla.",
        qrCodes: [
          { url: "https://www.youtube.com/results?search_query=Not+Like+Us+Kendrick+Lamar", caption: "\u201cNot Like Us\u201d Kendrick Lamar" },
        ],
      },
    ],
  },
  {
    pageNumber: 137,
    answers: [
      {
        questionNumber: 89,
        questionText: "In your generation, who was your favorite graffiti artist? Do you have a favorite today?",
        answerText: "The Crazy Five, Blade, Seen, and BS119 were my favorite graffiti artists. No, I don\u2019t.",
      },
      {
        questionNumber: 90,
        questionText: "In your opinion, what ignited the legendary beef between Drake and Kendrick Lamar?",
        answerText: "Some of the issues started when Kendrick Lamar took a dig at Drake on Big Sean\u2019s song, \u201cControl.\u201d It evolved into a real dislike of each other.",
      },
    ],
  },
  {
    pageNumber: 138,
    answers: [
      {
        questionNumber: 91,
        questionText: "How did it impact your perception of them?",
        answerText: "No comment...",
      },
      {
        questionNumber: 92,
        questionText: "What specific lyrics from their diss tracks stood out the most to you?",
        answerText: "A lyric that stood out the most to me was on Kendrick Lamar\u2019s track called, \u201cThey Not Like Us.\u201d The lyric is: \u201cTryna strike a cord and it\u2019s prolly A-MINOR!\u201d",
      },
    ],
  },
  {
    pageNumber: 139,
    answers: [
      {
        questionNumber: 93,
        questionText: "Who have you determined the winner, and which song led you to that conclusion?",
        answerText: "No comment.",
      },
      {
        questionNumber: 94,
        questionText: "Did the opinion of those in your inner-circle match yours, or were there drastic differences?",
        answerText: "Most people in my inner-circle agreed with my opinion, but others did not!",
      },
    ],
  },
  {
    pageNumber: 140,
    answers: [
      {
        questionNumber: 95,
        questionText: "Do rivalries benefit or negatively impact Hip-Hop and the overall culture?",
        answerText: "Yes, I believe rap rivalries benefit the Hip-Hop culture because it is an opportunity for the artist to showcase their lyrical skills and differences of opinion on a different level. It is beneficial to Hip-Hop culture as long as it stays on wax.",
      },
      {
        questionNumber: 96,
        questionText: "What would you say are some of the most iconic beefs in Hip-Hop?",
        answerText: "Kool Moe Dee and Busy Bee Starski; Kool Moe Dee and LL Cool J; Jay-Z and Nas; 50 Cent and Ja Rule; and Tupac and Biggie.",
        qrCodes: [
          { url: "https://www.youtube.com/results?search_query=Busy+Bee+vs+Kool+Moe+Dee+first+battle+hip+hop", caption: "The First battle in Hip-Hop\nby Busy Bee vs Kool Moe Dee" },
          { url: "https://www.youtube.com/results?search_query=Beef+Busy+Bee+Kool+Moe+Dee", caption: "Beef 1\nBusy Bee vs Kool Moe Dee" },
          { url: "https://www.youtube.com/results?search_query=Kool+Moe+Dee+Dissing+Busy+Bee+1981", caption: "Kool Moe Dee:\nDissing Busy Bee 1981" },
        ],
      },
    ],
  },
  {
    pageNumber: 141,
    answers: [
      {
        questionNumber: 97,
        questionText: "Considering this year as the year of enlightenment, what breaking news about an artist you admired changed your perception of them?",
        answerText: "No comment...",
      },
      {
        questionNumber: 98,
        questionText: "Presently, which artists represent the best of both old-school and new-school Hip-Hop?",
        answerText: "Snoop Dogg, LL Cool J, 50 Cent, Eminem and Keith Sweat represent the best of old and new school Hip-Hop.",
      },
    ],
  },
  {
    pageNumber: 142,
    answers: [
      {
        questionNumber: 99,
        questionText: "As a Hip-Hop fan - whether it\u2019s buying CDs, attending concerts, and/or interacting with the community - how does your role contribute to the culture?",
        answerText: "As a fan, and a DJ, I broke records for both major and local artists.",
      },
      {
        questionNumber: 100,
        questionText: "And finally, when did you realize that you ARE Hip-Hop?",
        answerText: "I realized I was Hip-Hop when I went to my first jam at The Boston Secor Center. I had on all of my freshest Hip-Hop gear. I had a Ceasar haircut, my mock neck shirt, the creased Lee Jeans, British Walkers and a 007 tucked away. All the elements of Hip-Hop came together in one place that night. There was graffiti on the walls, the DJ\u2019s were cuttin\u2019 and scratchin\u2019, the MCS were rapping, and the B-Boys, were breakdancing. It was that night, above all nights, that I knew I was Hip-Hop!",
        qrCodes: [
          { url: "https://www.youtube.com/results?search_query=Apache+Incredible+Bongo+Band", caption: "'Apache'\nby Incredible Bongo Band" },
          { url: "https://www.youtube.com/results?search_query=I+Just+Want+To+Do+My+Thing+Edwin+Starr", caption: "'I Just Want To Do My Thing'\nby Edwin Starr" },
          { url: "https://www.youtube.com/results?search_query=Give+It+Up+Turn+It+Loose+James+Brown", caption: "'Give It Up or Turn It Loose'\nby James Brown" },
        ],
      },
    ],
  },
];

export function getDJScipioPage(pageNumber: number): DJScipioPageData | undefined {
  return djScipioPages.find((p) => p.pageNumber === pageNumber);
}

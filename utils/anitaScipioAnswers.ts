export interface QRCodeEntry {
  url: string;
  caption: string;
}

export interface AnitaAnswerBlock {
  questionNumber: number;
  questionText: string;
  answerText: string;
  qrCodes?: QRCodeEntry[];
  ripNote?: string;
}

export type AnitaPageType = 'answers' | 'continued';

export interface AnitaPageData {
  pageNumber: number;
  pageType: AnitaPageType;
  answers?: AnitaAnswerBlock[];
  continuedText?: string;
  continuedQRCodes?: QRCodeEntry[];
}

export const anitaScipioPages: AnitaPageData[] = [
  // ── Page 145 ────────────────────────────────────────────────────────────────
  {
    pageNumber: 145,
    pageType: 'answers',
    answers: [
      {
        questionNumber: 1,
        questionText: 'When did you first discover Hip-Hop music?',
        answerText: 'I first discovered Hip-Hop music in 1977.',
        qrCodes: [
          {
            url: 'https://www.youtube.com/results?search_query=Rap+and+Hip+Hop+Crash+Course+Black+American+History+47',
            caption: 'Rap and Hip Hop: Crash Course\nBlack American History #47\n\n***This is one of a few different theories',
          },
        ],
      },
      {
        questionNumber: 2,
        questionText: 'Do you remember where you were?',
        answerText:
          "Yes, I remember. My brother Hilton had just purchased his first professional DJ equipment. I was in my bedroom, watching my nightly TV (i.e., Happy Days, Three's Company, Sanford and Son and Good Times) shows. He started playing a record that I loved, in a new style that I had never heard before!",
      },
    ],
  },

  // ── Page 146 ────────────────────────────────────────────────────────────────
  {
    pageNumber: 146,
    pageType: 'answers',
    answers: [
      {
        questionNumber: 3,
        questionText: 'What was the first song that caught your attention?',
        answerText:
          "It was Good Times by Chic. What caught my attention was the new way he was playing it. He explained to me that it was called cuttin' and scratchin'. What the...???",
      },
      {
        questionNumber: 4,
        questionText: 'What were the emotions you felt hearing Hip-Hop for the first time?',
        answerText:
          "The emotions that I felt were pure annoyance. LOL! My brother's bedroom was right next to my bedroom, and he just kept repeating... Good Times, Good, Good Good...Good Times, Good, Good Good, Good Good Times! I just couldn't understand for the life of me, why he wouldn't just let the song play so I could watch 'Happy Days' in peace.",
        qrCodes: [
          {
            url: 'https://www.youtube.com/results?search_query=Good+Times+Chic',
            caption: "'Good Times'\nby Chic",
          },
          {
            url: 'https://www.youtube.com/results?search_query=Good+Times+Breakbeat+Mix+DJing+scratching',
            caption: "'Good Times' Breakbeat Mix, DJing,\nscratchin ; simular to DJ SCIPIO\nmixing in 1977",
          },
        ],
      },
    ],
  },

  // ── Page 147 ────────────────────────────────────────────────────────────────
  {
    pageNumber: 147,
    pageType: 'answers',
    answers: [
      {
        questionNumber: 5,
        questionText: "Who are (or were) your hottest (or as we used to say \"illest\") MCs?",
        answerText:
          'In my opinion, the illest MCs were pioneers, Coke La Rock, Disco King Mario, DJ Hollywood, DJ Kool Herc (who is known for, among other things) throwing the famous Hip-Hop Party at Sedgwick Ave in the Bronx and the merry-go-round technique), Grandmaster Flash, Melle Mel, LL Cool J, Kool Moe Dee, MC Lyte, and Doug E. Fresh.',
        qrCodes: [
          {
            url: 'https://www.youtube.com/results?search_query=Kool+Herc+Merry+Go+Round+technique',
            caption: "Kool Herc's\n\"Merry-Go-Round\"\ntechnique",
          },
        ],
      },
      {
        questionNumber: 6,
        questionText:
          'Did Hip-Hop inspire you to become, or want to become, a lyricist, rapper, dancer, or DJ? If so, was there anyone in particular who inspired you?',
        answerText: 'No, it did not.',
      },
    ],
  },

  // ── Page 148 ────────────────────────────────────────────────────────────────
  {
    pageNumber: 148,
    pageType: 'answers',
    answers: [
      {
        questionNumber: 7,
        questionText: 'Did Hip-Hop play a role in your friendship or social circles?',
        answerText: 'No. Hip-Hop did not play a major role in my friendship or social circles.',
      },
      {
        questionNumber: 8,
        questionText:
          'What were the top three or more songs that gave you the confidence to overcome a personal challenge in your life?',
        answerText:
          "The top three or more songs are 'Keep Ya Head Up by Tupac', 'The Breaks' by Curtis Blow, and 'The Choice Is Yours' by Black Sheep and any song by Kid-n-Play. Their music and signature dance always brightened my day.",
        qrCodes: [
          {
            url: 'https://www.youtube.com/results?search_query=Keep+Ya+Head+Up+Tupac',
            caption: "'Keep Ya Head\nUp'",
          },
          {
            url: 'https://www.youtube.com/results?search_query=The+Choice+Is+Yours+Black+Sheep',
            caption: "'The Choice is\nYours'",
          },
          {
            url: 'https://www.youtube.com/results?search_query=Rollin+Kid+n+Play',
            caption: "'Rollin' by Kid 'n\nPlay",
          },
          {
            url: 'https://www.youtube.com/results?search_query=These+Are+The+Breaks+Curtis+Blow',
            caption: "'These Are The\nBreaks'",
          },
        ],
      },
    ],
  },

  // ── Page 149 ────────────────────────────────────────────────────────────────
  {
    pageNumber: 149,
    pageType: 'answers',
    answers: [
      {
        questionNumber: 9,
        questionText: 'What are (or were) your top five hottest jams or concerts? Where did you attend them?',
        answerText:
          "Back in my day, I didn't have any Hip-Hop jams or concerts to name because I usually stayed home with my family to party or went to house parties.",
      },
      {
        questionNumber: 10,
        questionText: 'Who are (or were) the top DJs who made the biggest impact on Hip-Hop?',
        answerText:
          "In my opinion, the top DJs/MCs that made the biggest impact on Hip-Hop are GrandMaster Flash, Eric B., DJ Jazzy Jeff, DJ Scott LaRock, DJ Marley Marl, DJ Red Alert, DJ Clue, Big Jeff Zulu, Jam Master Jay, D-Nice, DJ Chuck Chillout, and DJ Spinderella and more.\n\nEven though I proudly worked for iHeartMedia, I can't write an authentic \"Hip-Hop Time Capsule\" without giving flowers to Hot 97. For decades, Hot 97 has been one of the most potent voices in hip-hop radio, breaking records, premiering freestyles, and keeping the streets and the clubs buzzing. The top DJs are Funk Master Flex, DJ Kay Slay, DJ Enuff, Mister Cee, Nessa, DJ Cocoa Chanelle, DJ Jazzy Joyce, Miss Info, *DJ Cipha Sounds, *Ed Lover, and *Lisa G. *Love them!\n\nI may have been on the iHeartMedia side, but I always respected what Hot 97 brought to the culture. They were our rivals on the dial, but in reality, they were partners in carrying the torch for Hip-Hop. From battles to breakthroughs, they've played a huge role in keeping the culture alive and poppin' in New York City. Flowers for Hot 97.",
      },
    ],
  },

  // ── Page 150 ────────────────────────────────────────────────────────────────
  {
    pageNumber: 150,
    pageType: 'answers',
    answers: [
      {
        questionNumber: 11,
        questionText: 'Who, from your crew, are (or were) your favorite people to party with?',
        answerText:
          'My favorite crew to party with was my family, my precious Mama Earlene Scipio included! We all loved music and celebrating together. Sadly, so many have passed on but they were some of the best times of my life! I would give anything to have those good times again.',
      },
      {
        questionNumber: 12,
        questionText: 'What were your top three old-school dances back in the day, and what are they today?',
        answerText:
          "My top three old-school dances were The Wop, The Bump, and The Hustle. Today, it is still The Wop but my head and arms don't cooperate or coordinate quite like they used too. LOL.",
        qrCodes: [
          {
            url: 'https://www.youtube.com/results?search_query=Woppit+Dance+B-Fats',
            caption: "The song was called 'The\nWoppit Dance by B-Fats'\n(BELOW) and this is an\nexample of 'The Wop\nDance'",
          },
        ],
      },
    ],
  },

  // ── Page 151 ────────────────────────────────────────────────────────────────
  {
    pageNumber: 151,
    pageType: 'answers',
    answers: [
      {
        questionNumber: 13,
        questionText: 'What are (or were) your top five Hip-Hop clubs?',
        answerText:
          "I don't have five Hip-Hop clubs to name. The only two clubs that I went to were the Boston Road Ballroom and The Stardust Ballroom, both in The Boogie Down Bronx.",
      },
      {
        questionNumber: 14,
        questionText:
          'What are your top five or more party songs that really turned it up (or as we used to say) rocked the house?',
        answerText:
          "These are the songs that rocked and still rock the house:\n\n'Here We Go' by Run-D.M.C.\n'King of Rock' by Run-D.M.C.\n'South Bronx' by Boogie Down Production\n'The Woppit Dance' by B-Fats\n'Whoa' by Black Rob\n'It Takes Two' by Rob Base",
        qrCodes: [
          {
            url: 'https://www.youtube.com/results?search_query=South+Bronx+Boogie+Down+Productions',
            caption: "'South Bronx'",
          },
          {
            url: 'https://www.youtube.com/results?search_query=Woppit+B-Fats',
            caption: "'The Woppit'",
          },
          {
            url: 'https://www.youtube.com/results?search_query=Whoa+Black+Rob',
            caption: "'Whoa'",
          },
          {
            url: 'https://www.youtube.com/results?search_query=Here+We+Go+Run+DMC',
            caption: "'Here We Go'",
          },
        ],
      },
    ],
  },

  // ── Page 152 ────────────────────────────────────────────────────────────────
  {
    pageNumber: 152,
    pageType: 'answers',
    answers: [
      {
        questionNumber: 15,
        questionText: 'What was the first song that you could fully recite?',
        answerText:
          "The first song that I could fully recite was Rapper's Delight by Sugar Hill Gang.\n\n*Released in 1979, it became the first mainstream rap single, produced and released by Sugar Hill Records, a label founded by Sylvia Robinson.",
        qrCodes: [
          {
            url: 'https://www.youtube.com/results?search_query=Rapper+Delight+Sugarhill+Gang',
            caption: "'Rapper's Delight'",
          },
          {
            url: 'https://www.youtube.com/results?search_query=Rapper+Delight+Sugarhill+Gang+lyrics',
            caption: "'Rapper's Delight' with\nlyrics",
          },
        ],
      },
      {
        questionNumber: 16,
        questionText: "In your day, who were the hottest (we used to say \"illest\") top five male artists or groups?",
        answerText: "The \"illest\" top five male artists were Tupac, Snoop Dogg, Run-DMC, LL Cool J and Eric B. & Rakim",
      },
    ],
  },

  // ── Page 153 ────────────────────────────────────────────────────────────────
  {
    pageNumber: 153,
    pageType: 'answers',
    answers: [
      {
        questionNumber: 17,
        questionText: 'What is the one concert or event that you regret missing?',
        answerText:
          "I do not have any regrets for shows that I did not get to see. Working in radio for over thirty-five years allowed me to be involved and participate in almost any event that I wanted to experience. I'm so grateful for that.",
      },
      {
        questionNumber: 18,
        questionText: 'What are some old-school lines or quotes that you still quote today?',
        answerText:
          'The old-school line that I still quote today is, "Thought I was a donut, ya tried to glaze me!" by Eric B. and Rakim. LOL!',
        qrCodes: [
          {
            url: 'https://www.youtube.com/results?search_query=Eric+B+Is+President+Rakim',
            caption: "'Eric B. Is President'",
          },
        ],
      },
    ],
  },

  // ── Page 154 ────────────────────────────────────────────────────────────────
  {
    pageNumber: 154,
    pageType: 'answers',
    answers: [
      {
        questionNumber: 19,
        questionText: 'What are (or were) your favorite songs to be played at a club?',
        answerText:
          "Back in the day, I rarely went to a club but two favorite clubs were The Stardust Ballroom and The Boston Road Ball Room. At the latter, Arthur Bowens, (my nephew DJ Cool Kev's father) was the bouncer there and he used to let the \"fam\" in for free. Boy, we had some good times there! My favorite songs were anything by LL Cool J, Run-DMC, Eric B. and Rakim, Salt-N-Pepa and MC Lyte.",
        qrCodes: [
          {
            url: 'https://www.youtube.com/results?search_query=I+m+Bad+LL+Cool+J',
            caption: "'I'm Bad'\nby LLCJ",
          },
          {
            url: 'https://www.youtube.com/results?search_query=I+Know+You+Got+Soul+Eric+B+Rakim',
            caption: "'I Know You\nGot Soul'\nby Eric B. &\nRakim",
          },
          {
            url: 'https://www.youtube.com/results?search_query=My+Melody+Eric+B+Rakim',
            caption: "'My Melody'\nby Eric B. &\nRakim",
          },
          {
            url: 'https://www.youtube.com/results?search_query=Ruffneck+MC+Lyte',
            caption: "'Ruffneck'\nby MC Lyte",
          },
          {
            url: 'https://www.youtube.com/results?search_query=Shoop+Salt+N+Pepa',
            caption: "'Shoop'\nby Salt-N-\nPepa",
          },
        ],
      },
      {
        questionNumber: 20,
        questionText: 'What were your top five favorite Break Dance tracks for B-Boys?',
        answerText:
          'My top favorite breakdance track for B-Boys was Bongo Rock by The Incredible Bongo Band. Bongo Rock is one of the most important tracks in Hip-Hop history.',
        qrCodes: [
          {
            url: 'https://www.youtube.com/results?search_query=Bongo+Rock+Incredible+Bongo+Band',
            caption: "'Bongo Rock'",
          },
        ],
      },
    ],
  },

  // ── Page 155 ────────────────────────────────────────────────────────────────
  {
    pageNumber: 155,
    pageType: 'answers',
    answers: [
      {
        questionNumber: 21,
        questionText: 'Did you own any DJ equipment, and if so, what kind?',
        answerText: 'No, I did not own any DJ equipment.',
      },
      {
        questionNumber: 22,
        questionText:
          'Have you ever been at a club or jam where shots were fired or some type of violence took place?',
        answerText:
          'No, fortunately, I have never experienced any shots fired at a club or deadly violence. However, I attended a Hip-Hop concert in Brooklyn, where there was a near-riot caused by people who did not have tickets. They were pushing and shoving, and it was a hazardous situation. Thankfully, I was not harmed.',
      },
    ],
  },

  // ── Page 156 ────────────────────────────────────────────────────────────────
  {
    pageNumber: 156,
    pageType: 'answers',
    answers: [
      {
        questionNumber: 23,
        questionText: 'Have you ever been affected by the loss of an artist that you were a big fan of?',
        answerText: 'Yes, I have been affected by the loss of several artists.',
      },
      {
        questionNumber: 24,
        questionText: 'If so, how were you specifically affected?',
        answerText:
          'I had a great sense of sadness and loss that lasted, in some cases, for months at a time. I will name a few...\n\nThe first significant loss that affected me was the iconic DJ Scott La Rock. He was the DJ for KRS-One/Boogie Down Productions, and unfortunately he was shot and killed in 1987. His passing was the first major death in Hip-Hop history. ***See below. The other significant losses for me were Tupac, DMX, Nipsey Hussle, Young Dolph, King Von, Pop Smoke, and, last but not least, FBG Duck. I met DMX, Young Dolph, and Pop Smoke. I was despondent because they all worked hard to make their dreams a reality, only to be taken away by an early and tragic end.',
        qrCodes: [
          {
            url: 'https://www.youtube.com/results?search_query=DJ+Scott+La+Rock+BDP',
            caption: "'DJ Scott La Rock'",
          },
        ],
      },
    ],
  },

  // ── Page 157 — Q24 continued (Pop Smoke) ────────────────────────────────────
  {
    pageNumber: 157,
    pageType: 'continued',
    continuedText:
      'I was introduced to Pop Smoke by the phenomenal DJ Prostyle; he seemed like such a cool person. He smiled, then pulled me into him for a big hug. It was at the end of the day, and unfortunately, I had just applied some fresh red lipstick that smeared his rare (over ten grand) gray Louis Vuitton jacket. This was the same jacket (below) he had just finished discussing in his interview with DJ Prostyle! It left a perfect red lip print. He looked at DJ Prostyle and said with a slight smile, "I will send you the bill." Yikes! DJ Prostyle and I looked at each other with horror on our faces. We both knew it wasn\'t my fault but felt terrible about it. This bothered me off and on for a few months, and I always wondered if the jacket could be cleaned.\n\nSadly, soon afterward, he was tragically shot and killed in a Beverly Hills Airbnb. I was truly devastated! What a tremendous loss to his family, loved ones, and the Hip-Hop community. He was most definitely a superstar in the making. Long Live Pop Smoke! You are greatly missed. I am so happy that justice was served for him, his family and fans.',
    continuedQRCodes: [
      {
        url: 'https://www.youtube.com/results?search_query=Welcome+To+The+Party+Pop+Smoke',
        caption: "'Welcome To the\nParty'",
      },
      {
        url: 'https://www.youtube.com/results?search_query=Dior+Pop+Smoke',
        caption: "'Dior'",
      },
    ],
  },

  // ── Page 158 — Q24 continued (Young Dolph) ──────────────────────────────────
  {
    pageNumber: 158,
    pageType: 'continued',
    continuedText:
      "I had the chance to meet Young Dolph twice, once before and again after he was shot. The first time I met him, he was genuinely cool, and I remember noticing the most beautiful Jesus-piece chain I had ever seen. He was very laid back and in spite of not being familiar with his music, I really liked him. In 2017, when I heard that he had been shot I was devastated. I was so happy that he pulled through and on his second visit, I told him how I had prayed for his recovery and his family. He said, \"Thank you,\" and was very gracious. My nephew, Kevin Bush, aka DJ Cool Kev, was visiting with me at the time, and Dolph was kind enough to take a picture with him.\n\nBecause I did not want to hold him up any longer, I did not ask for a picture for myself and after everything that happened... I really wish I had. Unfortunately, a few years later, he was shot and killed by rival \"street beef\" members. I was crushed; my heart was broken. I admired him for all he did for his community, and I am so sorry that he is no longer here to be with his beautiful family. I am glad that justice was served for him, his family and fans. He will never be forgotten!",
    continuedQRCodes: [
      {
        url: 'https://www.youtube.com/results?search_query=Nothin+Young+Dolph',
        caption: "'Nothin'",
      },
      {
        url: 'https://www.youtube.com/results?search_query=Real+Life+Young+Dolph',
        caption: "'Real Life'",
      },
    ],
  },

  // ── Page 159 — Q24 continued (DMX) ──────────────────────────────────────────
  {
    pageNumber: 159,
    pageType: 'continued',
    continuedText:
      "When DMX passed, I was sick for months. I don't have the words to say how much I admire and respect him, so believe me when I tell you I felt like I had lost a dear friend. There are times that I still feel heartbroken, and I still can't see his face without shedding a tear. He was so real, and so was his struggle. He loved God so much, and now he is free.\n\nWhen the news broke that each of these legends had passed away, I could feel the sadness throughout most of the station. The energy was low like a palpable dark cloud hung over us. Most of us were sullen and looking lost. During those times, many of my coworkers and 'work children' would come to spend some time with me at the front desk, and we would console each other. They are all truly missed.\n\nLong Live All of Our Hip-Hop Legends!\n\nRIP Craig Mack, Black Rob, DJ Kay Slay, Fatman Scoop, Rich Homie Quan and DJ Clark Kent.",
    continuedQRCodes: [
      {
        url: 'https://www.youtube.com/results?search_query=Lord+Give+Me+A+Sign+DMX',
        caption: 'Lord Give Me A\nSign',
      },
      {
        url: 'https://www.youtube.com/results?search_query=DMX+praying+Breakfast+Club',
        caption: 'Praying for The\nBreakfast Club',
      },
      {
        url: 'https://www.youtube.com/results?search_query=Jay+Z+on+DMX',
        caption: 'Jay Z on DMX',
      },
      {
        url: 'https://www.youtube.com/results?search_query=Juvenile+DMX+tribute',
        caption: 'Juvenile and\nothers on\nDMX',
      },
    ],
  },

  // ── Page 160 ────────────────────────────────────────────────────────────────
  {
    pageNumber: 160,
    pageType: 'answers',
    answers: [
      {
        questionNumber: 25,
        questionText: 'Have you ever had the opportunity to do something kind or important for your favorite artist?',
        answerText:
          "Yes, DMX came to Power 105.1 for an interview with The Breakfast Club. Because DMX would occasionally have asthma attacks, and they wanted to be prepared just in case, I received a request to find an EpiPen for him and after making several phone calls, finally, my awesome co-worker, Jill Shelhorse, came through for me! She bought one upstairs and I was so grateful. I was beaming with pride and so honored that I got a chance to do something for the legendary DMX. Thank God, he didn't need it that day but regardless, we had his back!",
      },
      {
        questionNumber: 26,
        questionText: 'If the lyrics in one of your favorite songs could come true for a day, which lyrics would you choose?',
        answerText:
          "I am sure there have been a few favorite lyrics I wish could come true for a day. Unfortunately, today, I can't think of any.",
      },
    ],
  },

  // ── Page 161 ────────────────────────────────────────────────────────────────
  {
    pageNumber: 161,
    pageType: 'answers',
    answers: [
      {
        questionNumber: 27,
        questionText: 'What Hip-Hop song do you hear and instantly remember exactly where you were and what you were doing?',
        answerText:
          'Yesss! That song is Bailando!\nAt the front desk, I almost danced myself off my chair! :) I had a chance to tell Sean(a) Paul how much my family and I love this song; he was so gracious! He was always so humble and kind! Shout out to Enrique Iglesias, Descemer Bueno, and Gente De Zono. Awesome! ***Love you Sean Paul. I miss seeing you. Your serene personality always made my day! Anita',
        qrCodes: [
          {
            url: 'https://www.youtube.com/results?search_query=Bailando+Enrique+Iglesias+Sean+Paul',
            caption: "'Bailando'\nEnrique Iglesias - ft. Sean(a) Paul,\nDescemer Bueno, Gente De Zona.",
          },
        ],
      },
      {
        questionNumber: 28,
        questionText:
          'Were there any Hip-Hop artists you had a crush on back in your day? If so, who? How about today?',
        answerText:
          'I never had a crush on a Hip-Hop legend, but I definitely loved seeing Big Daddy Kane perform. He was an iconic rapper... cool, smooth, handsome and well-dressed. He had a very dynamic personality and was also a great dancer. As we used to say back in the day... he was fly!',
        qrCodes: [
          {
            url: 'https://www.youtube.com/results?search_query=I+Get+The+Job+Done+Big+Daddy+Kane',
            caption: "'I Get The Job Done'",
          },
        ],
      },
    ],
  },

  // ── Page 162 ────────────────────────────────────────────────────────────────
  {
    pageNumber: 162,
    pageType: 'answers',
    answers: [
      {
        questionNumber: 29,
        questionText: 'Who are some of your favorite New York mixtape DJs?',
        answerText:
          'Some of my favorite DJs, who started their careers as Mixtape DJs, are DJ Prostyle, DJ Clue, DJ Envy, DJ Drama, DJ Ty Boogie, DJ Curt Flirt, DJ Will, DJ Jazzy J, DJ SCIPIO, DJ KFD aka Stanley Scipio, DJ Cool Kev, DJ Whutever, DJ Norie, and many more.',
      },
      {
        questionNumber: 30,
        questionText: 'Who were your favorite B-Boys, and why?',
        answerText:
          'Back in the day, I did not have a favorite B-Boy but over the years I learned about (among others) the legendary New York City Breakers and The Rock Steady Crew. My favorite B-Boys are Mr. Wave, Action and the iconic Lil Lep (RIP) from the NYC Breakers and the legendary Crazy Legs from the Rock Steady Crew.',
        qrCodes: [
          {
            url: 'https://www.youtube.com/results?search_query=New+York+City+Breakers',
            caption: "'The New York\nCity Breakers'",
          },
          {
            url: 'https://www.youtube.com/results?search_query=Crazy+Legs+Rock+Steady+Crew',
            caption: "'The Legendary\nCrazy Legs from\nThe Rock Steady\nCrew'",
          },
          {
            url: 'https://www.youtube.com/results?search_query=Beat+Street+Roxy+NYC+Breakers+Rock+Steady+Crew',
            caption: "'Beat Street (movie) at\nThe Roxy (club)\nThe New York City\nBreakers' vs Rock\nSteady Crew'",
          },
        ],
      },
    ],
  },

  // ── Page 163 ────────────────────────────────────────────────────────────────
  {
    pageNumber: 163,
    pageType: 'answers',
    answers: [
      {
        questionNumber: 31,
        questionText: 'What record pool, if any, did you belong to?',
        answerText: 'No, I never belonged to a Record Pool.',
      },
      {
        questionNumber: 32,
        questionText:
          'When you were on your way to a club, looking clean (or as we used to say) looking fresh, what were your favorite colognes, perfumes, or body oils to wear?',
        answerText:
          "When I got fresh (back in the 80's) and ready to go out, my favorite old school perfume was Sunflowers by Elizabeth Arden, Oscar de la Renta and Chanel No. 5.",
      },
    ],
  },

  // ── Page 164 ────────────────────────────────────────────────────────────────
  {
    pageNumber: 164,
    pageType: 'answers',
    answers: [
      {
        questionNumber: 33,
        questionText:
          'Fashion is an integral part of Hip-Hop. What is (or was) your favorite Hip-Hop drip (or as we used to say) gear?',
        answerText:
          'Other than turtle neck sweaters, I did not have any favorite Hip-Hop gear back in the day. It was not my style, but I loved seeing younger people in their best Hip-Hop gear. Hip-Hop was, and still is, a fashion trendsetter all over the world!',
      },
      {
        questionNumber: 34,
        questionText: 'What was your sneaker and shoe game like? And now?',
        answerText:
          'I used to wear marshmallow shoes because they made me just a tad taller. Other than that, I just liked to wear nice high heels that were unique and of good quality. Now I wear comfortable flats for old mature ladies. :)',
      },
    ],
  },

  // ── Page 165 ────────────────────────────────────────────────────────────────
  {
    pageNumber: 165,
    pageType: 'answers',
    answers: [
      {
        questionNumber: 35,
        questionText: 'What were your favorite drinks to get your party started? And now?',
        answerText:
          "My favorite drinks were Rum and Coke with a lemon twist, Harvey's Bristol Creme, Lancers Rosé, and Piña Coladas. We used to party; however, I don't drink any longer... not that (in moderation) there's anything wrong with it!",
      },
      {
        questionNumber: 36,
        questionText: 'What three or more artists or groups have influenced your view of social issues and activism?',
        answerText:
          'The top three or more artists that influenced my view on social issues were Tupac, DMX, KRS-One, Common, N.W.A, and Grandmaster Flash and the Furious Five and Lil Baby.',
        qrCodes: [
          {
            url: 'https://www.youtube.com/results?search_query=Changes+Tupac',
            caption: "'Changes'\nby Tupac",
          },
          {
            url: 'https://www.youtube.com/results?search_query=Dear+Mama+Tupac',
            caption: "'Dear Mama'\nby Tupac",
          },
          {
            url: 'https://www.youtube.com/results?search_query=The+Bigger+Picture+Lil+Baby',
            caption: "'The Bigger\nPicture'\nby Lil Baby 2020",
          },
        ],
      },
    ],
  },

  // ── Page 166 ────────────────────────────────────────────────────────────────
  {
    pageNumber: 166,
    pageType: 'answers',
    answers: [
      {
        questionNumber: 37,
        questionText: 'Are there any particular artists or groups whose life stories have inspired you?',
        answerText:
          'The artist whose life story inspired me was Tupac Shakur. Growing up, he had a very challenging life and had to overcome constant obstacles that may have broken a lesser person. I could relate to having a very difficult life, filled with constant challenges, so I felt a very special connection to him.',
      },
      {
        questionNumber: 38,
        questionText:
          'Has Hip-Hop contributed to your personal growth, and if so, which song or artist do you credit with your development?',
        answerText:
          "Yes, it has. Those songs are, 'U.N.I.T.Y' by Queen Latifah, My 'Philosophy' by Boogie Down Production aka BDP. After his DJ Scott LaRock was killed and later a fan was killed at one of his shows with Public Enemy, KRS-One wrote 'Self Destruction' and brought together some of the biggest stars in East Coast Hip-Hop for the 'Stop The Violence Movement' that he founded. *Exception: Can't find an upload by Boogie Down Production. Lastly, 'I Ain't Mad At Cha' by Tupac. They encouraged and inspired my growth during turbulent times in my life.",
        qrCodes: [
          {
            url: 'https://www.youtube.com/results?search_query=UNITY+Queen+Latifah',
            caption: "'U.N.I.T.Y'",
          },
          {
            url: 'https://www.youtube.com/results?search_query=My+Philosophy+Boogie+Down+Productions',
            caption: "'My Philosophy'",
          },
          {
            url: 'https://www.youtube.com/results?search_query=Self+Destruction+BDP+Stop+The+Violence',
            caption: "'Self Destruction'",
          },
          {
            url: 'https://www.youtube.com/results?search_query=I+Ain+t+Mad+At+Cha+Tupac',
            caption: "'I Ain't Mad At Ya'",
          },
        ],
      },
    ],
  },

  // ── Page 167 — Q39 ──────────────────────────────────────────────────────────
  {
    pageNumber: 167,
    pageType: 'answers',
    answers: [
      {
        questionNumber: 39,
        questionText: 'When was the first time (if ever) you tried to write your own rap?',
        answerText:
          "I never tried to write my own rap. In a family where everyone is talented, the competition was too great!\n\nHere is why...\nBack in the 80s and 90s, I had a lot of really young \"wanna-be\" rappers in my family. LOL! They included almost all my nieces, nephews, great-nieces and great-nephews. My nephew Kevin Bush, known at the time as Cool K, started under the tutelage of his uncle DJ SCIPIO. My nephew Melvin Hayes, Jr., aka MCM, and his sister Denise Scipio Hayes, aka Nice Niece, were students as well. Following them were great-nephews, Eddie Valentine aka Eddie Ed, and later PKA as Face; LJ Johnson aka Lucky, as a young boy, and then PKA Lucky Leon Luchi. In addition, we had my niece LaToya Moore aka Lala, later PKA Love Moore. Last but not least, we had Dontay Boneparte aka D Mac, and later PKA Mac Da Boss. These were my young and ambitious rappers... seeking fame and great fortune. :)",
      },
    ],
  },

  // ── Page 168 — Q39 continued ────────────────────────────────────────────────
  {
    pageNumber: 168,
    pageType: 'continued',
    continuedText:
      "Those who lived in the Bronx practiced on my brother's (DJ Scipio) old DJ equipment that he had given them. They would practice blending a capella with the instrumentals. My young southern rappers held it down for Orangeburg, SC. They all kept me thoroughly entertained. Eddie, LJ, and LaToya evolved to become very good rappers and used to perform onstage to large and enthusiastic crowds. LaToya is now a NASM-certified fitness Professional.\n\nUltimately, other than DJ Cool Kev and Mac Da Boss, they did not continue with a career in Hip-Hop. They went on to pursue other successful careers. DJ Cool Kev has been in the game for over thirty years. DJ Cool Kev is a well-established Mixtape DJ. He has been DJ'ing since 1989. He has worked with numerous acclaimed artists and has produced over 100 volumes of R&B CDs and 50 volumes of Party CDs. His complete bio is included in this book, in the 'Sharin' The Love' section.\n\nDontay Bonaparte is an up-and-coming professional rapper who is dedicated to his craft and pursuing his goal of becoming an established rapper. He records and performs in Orangeburg, SC.\n\n*Shout out to all my non-rapping nieces & nephews. Non-Rappers Matter! :) Love, Aunt Anita",
    continuedQRCodes: [
      {
        url: 'https://www.youtube.com/results?search_query=Drug+Addict+Mac+Da+Boss',
        caption: "'Drug Addict'\nby Monii Montil X Mac Da\nBoss",
      },
    ],
  },

  // ── Page 169 — Q39 continued (QR codes) ────────────────────────────────────
  {
    pageNumber: 169,
    pageType: 'continued',
    continuedQRCodes: [
      {
        url: 'https://www.instagram.com/',
        caption: 'DJ Cool Kev\nInstagram',
      },
      {
        url: 'https://www.instagram.com/',
        caption: 'Eddie Valentin\nInstagram',
      },
      {
        url: 'https://www.instagram.com/',
        caption: 'LaToya Shanice\nInstagram',
      },
      {
        url: 'https://www.youtube.com/results?search_query=Blood+Brothers+Stay+Scheming+CZA+LINO+Lucky+Leon+Luchi',
        caption: "'Blood Brothers Stay\nScheming' ft. CZA LINO,\nLucky Leon Luchi,\nEddie Valentin (last verse)",
      },
      {
        url: 'https://www.youtube.com/results?search_query=All+I+Got+Lucky+Leon+Luchi',
        caption: "'All I Got'\nby Lucky Leon Luchi",
      },
      {
        url: 'https://www.youtube.com/results?search_query=Same+Shoes+Lucky+Leon+Luchi',
        caption: "'Same Shoes'\nby Lucky Leon Luchi",
      },
      {
        url: 'https://www.youtube.com/results?search_query=Way+That+I+Move+Lucky+Leon+Luchi',
        caption: "'Way That I Move'\nby Lucky Leon Luchi",
      },
      {
        url: 'https://www.youtube.com/results?search_query=They+Hate+B4+They+Love+Lucky+Leon+Luchi',
        caption: "'They Hate B4 They\nLove'\nby Lucky Leon Luchi",
      },
      {
        url: 'https://www.youtube.com/results?search_query=Lyric+Lucky+Leon+Luchi',
        caption: 'Lyric by\nLucky Leon Luchi',
      },
    ],
  },

  // ── Page 170 ────────────────────────────────────────────────────────────────
  {
    pageNumber: 170,
    pageType: 'answers',
    answers: [
      {
        questionNumber: 40,
        questionText: 'Who or what inspired you to try, and how would you rate your skills?',
        answerText: 'No one inspired me to write my own rap.',
      },
      {
        questionNumber: 41,
        questionText: 'Have you ever met or worked with any of your favorite artists or legends in Hip-Hop?',
        answerText:
          "I have been very fortunate to have met many of my favorite Hip-Hop legends. Working at iHeartMedia, the parent company of Power 105.1, was an absolute dream job. It doesn't get any better than working with The Breakfast Club and the best of the best DJs/On-Air Personalities in the game. However, I would like to single out ***Lisa Glasberg, aka Lisa G. She was my co-worker at iHeartMedia, and she is a good friend of mine. She is one of the kindest and most generous people I know. She is also a Hip-Hop legend.\n\nShe was a prominent radio personality and co-host on Hot 97's morning show with Ed Lover and Dr. Dre in the 1990s. It was one of the first Hip-Hop Morning Shows on an all Hip-Hop format. She played an essential role in the early days of mainstream Hip-Hop radio, helping to bring rap music and culture to a wider audience. This show helped shape Hip-Hop radio, blending humor, music, and interviews with some of the biggest rap stars of the time. Many listeners assumed she was black because her voice and style fit seamlessly with the culture. She was well respected for her work and authenticity. Her time on Hot 97, solidified her place in Hip-Hop history. ***Love you Lisa G. Proud to know you! Anita",
      },
    ],
  },

  // ── Page 171 ────────────────────────────────────────────────────────────────
  {
    pageNumber: 171,
    pageType: 'answers',
    answers: [
      {
        questionNumber: 42,
        questionText: 'Who was the better lyricist: Biggie or Tupac?',
        answerText:
          'In my opinion, Tupac was a great and iconic rapper and I am a diehard Tupac fan from the beginning. I love his style and there is no one else like him. However, today, I can finally admit to myself that Biggie was "technically" a better lyricist. When I learned the difference, I came to appreciate Biggie\'s lyricism later in the game. They were both great and both legends.',
      },
      {
        questionNumber: 43,
        questionText: 'What were your thoughts on the infamous East Coast vs. West Coast war? Did you choose a side?',
        answerText:
          "The beef was between the two powerful and iconic rappers, Tupac and Biggie, and their prospective record labels, Death Row and Bad Boy Records. However, a lot of it was egged on by the media for financial gain and status. Yes, I chose a side... I was with Pac. He was originally (like me) from Harlem and I felt a deep connection to him. I deeply regret that it ever happened because we lost two Rap/Hip-Hop icons, who were once friends... for no valid reason. What a shame and a great loss to the world!!!",
      },
    ],
  },

  // ── Page 172 ────────────────────────────────────────────────────────────────
  {
    pageNumber: 172,
    pageType: 'answers',
    answers: [
      {
        questionNumber: 44,
        questionText: 'If you could have fifteen minutes with your favorite Hip-Hop legend or artist, who would it be and what would you say?',
        answerText:
          "DMX. While working at iHeartMedia, I was fortunate enough to meet him twice. I didn't have 15 minutes with him on either occasion, but if I could, I would have asked him to pray for me. However, the few minutes that I did have with DMX... were unforgettable.\n\nHe used to call me Aunty. I told him that I was an ordained Minister and he immediately asked me to pray for him. He was so kind, humble, and down to earth. He loved God so much and he would pray either before or after every interview. As they say... when God made him, He broke the mold. I will never forget him as long as I live and I am honored to have spent some time with him. Long Live DMX!!!",
      },
      {
        questionNumber: 45,
        questionText: 'If you could spend the whole day with your favorite Hip-Hop legend or artist, who would it be and what plans would you make?',
        answerText:
          "If I could spend the whole day with one of my favorite Hip-Hop artists, I would choose Snoop Dogg. I am fascinated with the Death Row era in the 90s. I would like to know everything about him, Tupac, Dr. Dre, and the behind-the-scenes stories when Suge Knight was the owner. Then I would like to know all the goals for Death Row now that Snoop is the new owner.",
      },
    ],
  },

  // ── Page 173 — Q45 continued, Q46 ──────────────────────────────────────────
  {
    pageNumber: 173,
    pageType: 'answers',
    answers: [
      {
        questionNumber: 46,
        questionText: 'If you could have a rap battle with any of your favorite artists, who would you choose?',
        answerText:
          "I would not want to have a rap battle with any of my favorite artists. They don't want this smoke. LOL! However, if I absolutely had to...it would be Snoop D-O-Double G!! Bring It Snoop! Yikes!! Just kiddin'...LOL!",
        qrCodes: [
          {
            url: 'https://www.youtube.com/results?search_query=Drop+It+Like+It+s+Hot+Snoop+Dogg',
            caption: "'Drop It's Like It's\nHot'",
          },
          {
            url: 'https://www.youtube.com/results?search_query=Nuthin+But+A+G+Thang+Dr+Dre+Snoop+Dogg',
            caption: "'Nuthin' But a G\nThang'\nby Dr Dre ft.\nSnoop Dogg",
          },
          {
            url: 'https://www.youtube.com/results?search_query=Gin+and+Juice+Snoop+Dogg',
            caption: "'Gin and Juice'",
          },
          {
            url: 'https://www.youtube.com/results?search_query=Can+t+Stay+Too+Long+King+George+Southern+Soul',
            caption: "'Can't Stay\nToo Long'",
          },
        ],
      },
    ],
  },

  // ── Page 174 ────────────────────────────────────────────────────────────────
  {
    pageNumber: 174,
    pageType: 'answers',
    answers: [
      {
        questionNumber: 47,
        questionText: 'What clever lines would you use to diss them?',
        answerText: "Hmmm. I'll have to think about that... please, don't hold your breath. :)",
      },
      {
        questionNumber: 48,
        questionText: 'Can you recall a funny or embarrassing story from back in your day that you still laugh about?',
        answerText:
          "Yes, I can recall an equally funny and embarrassing story from back in the day, that I still laugh about. It was the time both me and my best friend (from kindergarten) Sunni Burke Hayes, slid in unison down a whole flight of stairs. It was classic! This happened in the 90s, when my family and I lived at 729 Arnow Ave., in The Bronx. Our thrifty landlord or shall I say cheap landlord, to avoid paying for a professional, asked my brothers Stanley and Hilton to build the stairs. Yikes! Big trouble! They knew nothing about taking proper measurements, calculating the stair slope, etc., so almost every other stair was uneven. Anyone who came to our house had taken at least one trip down those stairs. This particular afternoon,",
      },
    ],
  },

  // ── Page 175 — Q48 continued ────────────────────────────────────────────────
  {
    pageNumber: 175,
    pageType: 'continued',
    continuedText:
      "Sunni came to pick me up. We planned to go back to her house to hang out, listen to the latest Hip-Hop jams, and sip on some Lancers Rosé. To our great relief, it reached the bottom of the stairs, safe and sound. The cab driver was practically crying and hysterically beating on the steering wheel. He couldn't even look at us, much less help us up! :) By the way, he laughed almost the entire time that we were in the cab. :)\n\nWhen I looked back to see if anyone else had seen what happened, to my dismay, I saw my brother Hilton peeking out the glass window of the door and there he was, laughing as hard as the cab driver. By the time we reached the bottom of the stairs, he had finally recovered enough to offer us help. Thanks a lot, Lil' Bro! LOL!!!\n\nWe called a cab, and as we were leaving, I warned her about how uneven the steps were and that she should be very careful. I could barely finish my sentence before she started sliding down the stairs in a seated position. I tried to grab her, but I wound up sliding down behind her in the same position. We didn't miss a step! LOL! We were both still seated when we reached the bottom, and she was between my legs. My fancy high-heeled shoes flew off in both directions and landed on the sidewalk. Her fly, tan brimmed hat flew off her head and was layin' on the side, in the middle of the sidewalk. :)",
  },

  // ── Page 176 — Q48 continued ────────────────────────────────────────────────
  {
    pageNumber: 176,
    pageType: 'continued',
    continuedText:
      "Fun Facts: Sana and I grew up in Harlem, NY. Shout-Out to Harlem!!! We both attended John H. Finley, aka PS 129. She lived on 129th and Convent Avenue, and I lived on 126th Street and Old Broadway, which is right across the street from Manhattanville Projects. Together, we have been through it all: the good, the bad, and the very ugly! In the world we live in, there aren't many things that I can be certain of, but one thing I know for sure is that our bond is everlasting! To know her... is to love her!\n\nNote: Just for the record... not that there's anything wrong with it, the Lancers Rosé days are long over. This happened over forty years ago and Sunni Burke Hayes is now known as Sana Shabazz. She is now a Chaplain, and I am an ordained minister, but it sure was fun while it lasted! LOL!!!\n\nMe and Sana Shabazz, my best, and lifelong friend of sixty years!",
  },

  // ── Page 177 ────────────────────────────────────────────────────────────────
  {
    pageNumber: 177,
    pageType: 'answers',
    answers: [
      {
        questionNumber: 49,
        questionText: 'If you could challenge any artist to a dance-off, who would it be?',
        answerText:
          "Chris Brown. Besides, this would be a great opportunity to finally teach him how to Dougie. LOL! All the way back in 2011, even Kevin Hart gave his all to prepare him for 'The BET Awards.' He advised him that \"You ain't got no legs boy.\" :) LOL! Check out these three videos and tell me what you think. :) Just kidding Chris Brown! :) It's all love!!",
        qrCodes: [
          {
            url: 'https://www.youtube.com/results?search_query=Kevin+Hart+gives+Chris+Brown+dance+lessons',
            caption: "Kevin Hart:\nGives Chris Brown\nDance Lessons",
          },
          {
            url: 'https://www.youtube.com/results?search_query=Chris+Brown+Teach+Me+How+To+Dougie',
            caption: "Chris Brown 'Teach\nMe How To Dougie'",
          },
          {
            url: 'https://www.youtube.com/results?search_query=Chris+Brown+Dougie',
            caption: "Chris Brown\n'Dougie'",
          },
        ],
      },
      {
        questionNumber: 50,
        questionText: 'What is the nicest thing a Hip-Hop legend or artist has ever done for you?',
        answerText:
          'My goodness, there are too many things to name, but here are a few. Many more to come in Hip-Hop Time Capsule: The Next Chapter.',
      },
    ],
  },

  // ── Page 178 — Q50 continued (Common) ───────────────────────────────────────
  {
    pageNumber: 178,
    pageType: 'continued',
    continuedText:
      "Common\n\nWhenever Common arrived for an interview, I would be so happy. One day, Common did an adorable thing for me on what I believe was Secretary or Receptionist Day. He had an interview with Angie Martinez, 'The Voice of New York'. He came to my desk with a huge bouquet of beautiful flowers, and he humbly said something to the effect that he was grateful for me always treating him with kindness, no matter where his career was at the time. I was thinking to myself, \"My goodness, you are Common. You've already solidified your place in this game, period!\" He has won an Oscar and a Grammy and is both an activist and an author. There is nothing common about Common! Besides, I strive to treat everyone with the respect they deserve. Common is one of the nicest people I've ever met!\n\nHe has a palpable spirit of serenity and peacefulness. I feel that only a few other artists have that same rare type of gentle spirituality. His music is timeless, and he still rocks the house, i.e., his performance at the 2024 DNC. Last summer, my good buddy and favorite comedian Donnell Rawlings \"flewed\" me out to Yellow Springs, Ohio, and I had an amazing opportunity to spend some time with Common at Dave Chappelle's private 4th of July party and he was as wonderful as ever! ***Miss you Common.",
    continuedQRCodes: [
      {
        url: 'https://www.youtube.com/results?search_query=When+The+Sun+Shines+Again+Common+Pete+Rock',
        caption: "'When The Sun\nShines Again'",
      },
      {
        url: 'https://www.youtube.com/results?search_query=Be+Common',
        caption: "'Be'",
      },
    ],
  },

  // ── Page 179 — Q50 continued (Ne-Yo, Jay Z) ─────────────────────────────────
  {
    pageNumber: 179,
    pageType: 'continued',
    continuedText:
      "Ne-Yo\n\nNe-Yo has been so awesome to me! ***Yeah yeah, I know... Ne-Yo is not a rapper/Hip-Hop artist, but I love him so much that I made him one so I could include him in my book :) Besides, Neyo has written some Hip-Hop and R&B hits for a few notable artists. I remember when he walked into the station with a small, beautiful bouquet of long-stemmed red roses. I was (as always) happy to see him, and I thought, \"Wow, those roses are beautiful!\" Then, to my surprise and delight, he walked right over to my desk and presented me with one. It was Valentine's Day, and that made it extra special. He gave me one of those big Ne-Yo hugs and a kiss on the cheek, and then he went on to his interview. It was such a charming and thoughtful thing of him to bring flowers for his favorite ladies at iHeartMedia. I was so touched and so grateful. *Miss you Ne-Yo! Please DM me for old time's sake. I miss that! :)\n\nJay Z\n\nOne day, while returning from a break, Hip-Hop legend, Jay Z aka Hov, and his entourage were in the lobby surrounded by a mob of frenzied fans. His entourage consisted of a HUGE bodyguard who started assertively motioning people away, but Jay Z gave the signal that it was all good. I watched in disbelief as he greeted everyone that had waited to see him because I knew he didn't have to do that. I have met some reality TV stars that wouldn't do that. That's some superstar work right there! I rushed upstairs after the interview so that I could greet him, and he was so cool with everyone. He kindly gave me his autograph. Wow! That was an exciting day for so many people! All the best to you Jay Z, Beyonce \"Queen Bey, Blue Ivy, Rumi and Sir Carter\"",
  },

  // ── Page 180 — Q50 continued (Snoop, Rick Ross) + Q51 ───────────────────────
  {
    pageNumber: 180,
    pageType: 'answers',
    answers: [
      {
        questionNumber: 51,
        questionText: 'What, if any, is the best advice that a Hip-Hop legend or artist has ever given you?',
        answerText:
          'The best advice that a Hip-Hop legend or artist has ever given me was, "Never change and always be the person that I am!"',
      },
    ],
  },

  // ── Page 181 ────────────────────────────────────────────────────────────────
  {
    pageNumber: 181,
    pageType: 'answers',
    answers: [
      {
        questionNumber: 52,
        questionText: 'Do you have any humorous stories that you heard about or personally know about your favorite artists?',
        answerText:
          "The funniest story I know about one of my favorite artists is the time DMX came in for an interview on his birthday. He was celebrating heavily and feeling good with some Henny! He \"celebrated\" more as the interview went on, and he was toasted when he returned to the front desk. LOL.\n\nHe gave me the biggest hug and said, \"Aunty, whenever you see me, whenever you hear my name, please always say a prayer for me.\" I promised him I would, we exchanged hugs, and he left. About 15 minutes or so after he left, I went downstairs to go to lunch. Well, now, who do I see? None other than DMX in front of the building by our neighborhood hotdog stand.\n\nIn that loud, raspy DMX/Ruff-Ryder voice, he asked everyone who passed by, \"You wanna HOTdog? You wanna HOTdog!\" I was dying laughing! People were standing around in shock when they found out that DMX was buying people hotdogs! LOL! Sadly, that was the last time I ever saw DMX. I will never forget his amazing and generous spirit!",
      },
      {
        questionNumber: 53,
        questionText:
          "In the early years, women in Hip-Hop played a crucial and invaluable role in shaping the genre. What do you believe is the most significant contribution they made? Additionally, who are your favorites?",
        answerText:
          'In the early years, women in Hip-Hop contributed to the game through their diversity in themes and storytelling. They addressed issues like feminism, gender equality, and social justice. Their role was and is immeasurable.',
      },
    ],
  },

  // ── Page 182 — Q53 continued, Q54, Q55 starts ───────────────────────────────
  {
    pageNumber: 182,
    pageType: 'answers',
    answers: [
      {
        questionNumber: 54,
        questionText: 'After the eighties, who were your top five (or more) favorite women artists or groups? Who are they today?',
        answerText:
          "After the 80s, my favorites were Queen Latifah, Salt-N-Pepa, MC Lyte, Sha-Rock, Roxanne Shante, Lauryn Hill, Missy Elliott, Eve, TLC and Remy Ma. Same artists.\n\n***Fun Fact: Two sisters created the iconic phrase \"Somebody Say Ho.\" I first heard of them when Fat Joe mentioned that they were once his babysitters and that they created that iconic catchphrase. They became the \"hype girls\" (and so much more) for Grandmaster Flash and The Furious Five. I was introduced to one of the sisters, Lil Debbie, by Van Silk, the legendary Hip-Hop Promoter and we are good friends. She is awesome, and many good things are yet to come from Lil Debbie. Stay tuned. Love you Lil Debbie!",
      },
      {
        questionNumber: 55,
        questionText: 'Who do you consider the top five (or more) "baddest" women artists in Hip-Hop and R&B?',
        answerText:
          'I only have four and they are Mary J. Blige, Beyonce aka Queen Bey, Lauryn Hill and Faith Evans.',
        qrCodes: [
          {
            url: 'https://www.youtube.com/results?search_query=Family+Affair+Mary+J+Blige',
            caption: "'Family Affair' by\nMary J. Blige",
          },
          {
            url: 'https://www.youtube.com/results?search_query=Diva+Beyonce',
            caption: "'Diva'\nby Beyonce",
          },
          {
            url: 'https://www.youtube.com/results?search_query=Doo+Wop+That+Thing+Lauryn+Hill',
            caption: "'Doo Wop' (That Thing)\nby Lauryn Hill",
          },
          {
            url: 'https://www.youtube.com/results?search_query=Mesmerized+Faith+Evans',
            caption: "'Mesmerized'\nby Faith Evans",
          },
        ],
      },
    ],
  },

  // ── Page 183 — Q56 ──────────────────────────────────────────────────────────
  {
    pageNumber: 183,
    pageType: 'answers',
    answers: [
      {
        questionNumber: 56,
        questionText: 'Who are your favorite male Hip-Hop or Hip-Hop and R&B artists today?',
        answerText:
          'My favorite male Hip-Hop artists today continue to be; Will Smith, Snoop Dogg, Tupac, LL Cool J, 50 Cent, Rick Ross, Fat Joe, Biggie, DaBaby, 2 Chainz, Nelly, Nipsey Hussle, A Boogie Wit Da Hoodie, N.O.R.E, Bell Biv Devoe, Common, Redman, Method Man, Heavy D, Treach/Naughty By Nature, Fabolous, Pharrell, Eminem, Future, Gucci Mane, Lil Boosie, Bow Wow, 3rd Bass, Vanilla Ice and one of the best dancers in Hip-Hop history, M.C. Hammer, Naz, Grandmaster Flash and The Furious Five (Melle Mel, Keith Cowboy, Kidd Creole, and last but not least, Rahiem. Long live the legends who are no longer here. They are gone but never forgotten.',
        qrCodes: [
          {
            url: 'https://www.youtube.com/results?search_query=You+Can+Make+It+Will+Smith',
            caption: "'You Can\nMake It'\nby Will Smith",
          },
          {
            url: 'https://www.youtube.com/results?search_query=Facts+French+Montana',
            caption: "'Facts'\nby French\nMontana",
          },
          {
            url: 'https://www.youtube.com/results?search_query=Poison+Bell+Biv+Devoe',
            caption: "'Poison'\nby Bell Biv\nDevoe",
          },
          {
            url: 'https://www.youtube.com/results?search_query=OPP+Naughty+By+Nature',
            caption: "'OPP'\nby Naughty By\nNature",
          },
          {
            url: 'https://www.youtube.com/results?search_query=Can+t+Touch+This+MC+Hammer',
            caption: "'Can't Touch\nThis by M.C.\nHammer",
          },
        ],
      },
    ],
  },

  // ── Page 184 — Q56 continued QRs + Q57 ──────────────────────────────────────
  {
    pageNumber: 184,
    pageType: 'answers',
    answers: [
      {
        questionNumber: 57,
        questionText:
          'Did you choose a career in Rap or Hip-Hop? If so, how are you contributing to the genre? If not, what are you doing today instead?',
        answerText:
          "I did not choose a career in Hip-Hop. As the Receptionist for all six, NYC-based, syndicated stations at iHeartMedia, Power 105.1 happened to be one of them. I had a front-row seat to all of the greatest Hip-Hop, classic rock, contemporary pop, dance artists and legends in the world! I met (a few times over) everyone from Ms. Patti Labelle, Mr. Smokey Robinson, Mariah Carey (whom I have known since the nineties), Miley Cyrus, David Archuleta (I miss you, David!) Justin Bieber, Robert Plant, Jon Bon Jovi, Steven Tyler, Taylor Swift, Cher, and many more!!! Just so you know, in my thirty-five years in radio, I also worked at the now-defunct country music station WYNY-FM (in the eighties), with my beloved friend of thirty-five years, the legendary Jim Kerr; my dear Shelli Sonstein, and many others.",
        qrCodes: [
          {
            url: 'https://www.youtube.com/results?search_query=Ice+Ice+Baby+Vanilla+Ice',
            caption: "'Ice Ice Baby'\nVanilla Ice",
          },
          {
            url: 'https://www.youtube.com/results?search_query=Doo+Wop+DaBaby+freestyle',
            caption: "'Doo Wop'\nby DaBaby\n(Freestyle)",
          },
          {
            url: 'https://www.youtube.com/results?search_query=Jump+Around+House+of+Pain',
            caption: "'Jump Around'\nby House of\nPain",
          },
          {
            url: 'https://www.youtube.com/results?search_query=Look+Back+At+It+A+Boogie+Wit+Da+Hoodie',
            caption: "'Look Back At It'\nA Boogie Wit\nThe Hoodie",
          },
          {
            url: 'https://www.youtube.com/results?search_query=3rd+Bass+Brooklyn+Queens',
            caption: "'3rd Bass-\nBrooklyn-\nQueens'",
          },
        ],
      },
    ],
  },

  // ── Page 185 — Q57 continued, Q58, Q59 starts ───────────────────────────────
  {
    pageNumber: 185,
    pageType: 'answers',
    answers: [
      {
        questionNumber: 58,
        questionText: 'If you chose a career in Hip-Hop, what were some of the challenges you faced?',
        answerText:
          "The only real challenge I faced in my career was staying calm when Hip Hop Legends walked through the door. Working at iHeartMedia for nearly twenty years, I often found myself, at times, so caught up in the moment that it was difficult to actually hear the words coming out of their mouths. Again, I realize that they are only human, and in some cases, 2024 has made that abundantly clear, but in that moment... I was in the presence of Hip-Hop royalty. Now that I am retired, sometimes, I still have moments when I wonder if it was all a dream but as they say... I got receipts! :)",
      },
      {
        questionNumber: 59,
        questionText: 'Were there any particular family members or friends who encouraged and believed in you during those challenges?',
        answerText:
          "Yes, my entire family and all of my friends did. They were very grateful for the support that I received at iHeartMedia. In addition to Power 105.1, I was the receptionist for six other iHeartMedia stations and worked with some of the best people on the planet! No cap. :) When I retired, a committee was created, which was comprised of some real heavy hitters: *Thea Mitchem, *Tom Cuddy, *Scott Hopeck, the legendary *Jim Kerr, and the legendary *Elvis Duran.",
      },
    ],
  },

  // ── Page 186 — Q59 continued, Q60 starts ────────────────────────────────────
  {
    pageNumber: 186,
    pageType: 'continued',
    continuedText:
      "They along with my dear \"dawwwtaaa\" Danielle Delillo, Nicole Wendel, Jamie Megargee, Bartel, my \"son\" Nick Ciofalo, Andrew Festo, Joe DeAngelis (sorry I don't recall everyone's title so I won't add any, but I love you ALL just the same) and others, planned the retirement party of the year! Please forgive me if I left anyone's name out. Everyone, from my co-workers, celebrity co-workers, office \"children,\" legendary Hip-Hop artists, upper management, and people throughout 35 years of my life, including Scott Shannon, showered me with their love. I had the time of my life!\n\nMy Granddaughter Gayla saw that her Grandma was loved by many and I am very proud of that. No expense was spared; it was an unforgettable event that many people still talk about. In 'Hip-Hop Time Capsule: The Next Chapter', I will share many beautiful pictures of that amazing and memorable night.\n\n60. How did you overcome those challenges?",
  },

  // ── Page 187 — Q60, Q61 ─────────────────────────────────────────────────────
  {
    pageNumber: 187,
    pageType: 'answers',
    answers: [
      {
        questionNumber: 60,
        questionText: 'How did you overcome those challenges?',
        answerText:
          "I never entirely overcame my \"challenges.\" I was star-struck, and I loved every minute. Yes, again, they are only human, but in the moments, we shared, I gave them my best, and they gave me the same.",
      },
      {
        questionNumber: 61,
        questionText: 'Who are your favorite Hip-Hop producers?',
        answerText:
          "My awesome former Power 105.1 co-worker, DJ Marley Marl aka DJ Legend, is my favorite producer. He hails from Queensbridge housing projects in Queens, NY, and became one of the first producers to re-create sampling on a record. Marley Marl and fellow DJ Mr. Magic, were the first to put Hip-Hop on a commercial radio station and invented the historic first Hip-Hop mix show, 'Rap Attack.' He was also one of the pioneers of cuttin' and scratchin'. *Check him out below. He produced some of the most iconic songs in Hip-Hop such as 'The Bridge' by MC Shan, and 'Mama Said Knock You Out.' by LL Cool J. Every day, after his shift, we hugged and discussed everything Hip-Hop and everyday life. I was honored! Congratulations to DJ Marley Marl for receiving the 2023 Award, \"I Am Hip-Hop!\" No one deserves it more! ***I miss you DJ Marley Marl. All the best to you and yours!",
        qrCodes: [
          {
            url: 'https://www.youtube.com/results?search_query=Marley+Marl+Scratch',
            caption: "'Marley Marl Scratch'\nby Marley Marl feat.\nMC Shan",
          },
          {
            url: 'https://www.youtube.com/results?search_query=The+Bridge+MC+Shan+Marley+Marl',
            caption: "'The Bridge'",
          },
          {
            url: 'https://www.youtube.com/results?search_query=Mama+Said+Knock+You+Out+LL+Cool+J',
            caption: '"Mama Said\nGonna Knock You\nOut"',
          },
          {
            url: 'https://www.youtube.com/results?search_query=I+Am+Hip+Hop+Award+2023+DJ+Marley+Marl',
            caption: '2023 "I am Hip-\nHop Award"\nDJ Marley Marl',
          },
        ],
      },
    ],
  },

  // ── Page 188 ────────────────────────────────────────────────────────────────
  {
    pageNumber: 188,
    pageType: 'answers',
    answers: [
      {
        questionNumber: 62,
        questionText: 'Has Hip-Hop influenced your view on diversity and inclusion? If so, how?',
        answerText:
          'Yes, it has. I love the variety, unique stories, and perspectives of all ethnicities in Hip-Hop. The culture has influenced people all over the world. Below are some examples.',
        qrCodes: [
          {
            url: 'https://www.youtube.com/results?search_query=Big+Dawgs+Hanumankind+Indian+rapper',
            caption: "'Big Dawgs'\nHanumankind\n(Indian)",
          },
          {
            url: 'https://www.youtube.com/results?search_query=Palestinian+rapper+hip+hop',
            caption: '(Palestinian)\nRapper\nName unknown',
          },
          {
            url: 'https://www.youtube.com/results?search_query=Baby+Pow+Grid+Japanese+rapper',
            caption: 'Baby #Pow\n#Grid\n(Japanese) ?',
          },
          {
            url: 'https://www.youtube.com/results?search_query=Realligator+Grid+Japanese+rapper',
            caption: 'Realligator\n#Grid\n(Japanese) ?',
          },
          {
            url: 'https://www.youtube.com/results?search_query=Crip+Walk+JD+Dance+Tutorial+Pakistani',
            caption: 'Crip Walk JD\nDance\nTutorial\n(Pakistani) ?',
          },
        ],
      },
      {
        questionNumber: 63,
        questionText:
          'Have there been any songs or specific artists that aided you in finding your voice and shaping your identity. If so, which one?',
        answerText:
          'I rarely get angry, and when I do, it is a very uncomfortable feeling. The raw energy and power of these songs and others help me find my voice, connect with my feelings, and ultimately return to a better place.',
        qrCodes: [
          {
            url: 'https://www.youtube.com/results?search_query=Ruff+Ryders+Anthem+DMX',
            caption: "'Ruff Ryders\nAnthem'\nby DMX",
          },
          {
            url: 'https://www.youtube.com/results?search_query=Party+Up+DMX',
            caption: "'Party Up'\nby DMX",
          },
          {
            url: 'https://www.youtube.com/results?search_query=The+Message+Grandmaster+Flash+Furious+Five',
            caption: "'The Message'\nby Grandmaster\nFlash and The\nFurious Five",
          },
          {
            url: 'https://www.youtube.com/results?search_query=Move+Bitch+Ludacris',
            caption: "'Move B****' by\nLudacris",
          },
        ],
      },
    ],
  },

  // ── Page 189 — Q64, Q65 ─────────────────────────────────────────────────────
  {
    pageNumber: 189,
    pageType: 'answers',
    answers: [
      {
        questionNumber: 64,
        questionText: 'How do you feel about the storytelling aspect of Hip-Hop? Have you ever written your own stories?',
        answerText:
          'Storytelling is an integral part of Hip-Hop; it often expresses what we struggle to put into words. When these stories are relatable, they build a bond and a deep connection with the artist.',
      },
      {
        questionNumber: 65,
        questionText: 'Do you remember a time when Hip-Hop brought the people in your community together?',
        answerText:
          'Yes, when people in the neighborhood (Allerton Ave and White Plains Rd. in the Bronx) passed away, it became almost tradition for the neighborhood DJs to throw a "home-going" party for them. Everyone came together to show love and appreciation for the deceased. I also loved seeing our many Hispanic friends in the neighborhood parks breakdancing, rapping, and DJing. It was an exciting time for all of us.',
      },
    ],
  },

  // ── Page 190 ────────────────────────────────────────────────────────────────
  {
    pageNumber: 190,
    pageType: 'answers',
    answers: [
      {
        questionNumber: 66,
        questionText: 'Did Hip-Hop make you more active in your community? If so, what changes did you make and how did you improve things for the better?',
        answerText:
          'No. I was spiritually motivated to help others and naturally inclined to improve things for myself and others.',
      },
      {
        questionNumber: 67,
        questionText: 'What do (or did) you like the most about your generation of Hip-Hop?',
        answerText:
          "They are the pioneers of Hip-Hop. I am very proud of that! I am especially proud of a record producer by the name of ***Bobby Robinson. He is a Hip-Hop legend back in the 60's, and he became a beloved family friend. Fun Fact: He loved my mother's fried chicken and often had dinner with us!\n\nBobby Robinson (1917–2011) was an influential figure in the music industry, particularly known for his contributions to early Hip-Hop, rhythm and blues, and soul music. He was a record producer, entrepreneur, and owner of several iconic record labels. Robinson's career began in the 1940s when he opened 'Bobby's Happy House', (and later, Rainbow Records) a Harlem record shop that became a hub for music lovers and artists. In the 1970s and 1980s, Bobby Robinson played a crucial role in the rise of Hip-Hop. His label, *Enjoy Records*, released \"Rapper's Delight\" by the Sugarhill Gang (initially released under a rival label) and \"Super Rappin'\" by Grandmaster Flash and the Furious Five. Robinson is often celebrated for his ability to spot talent and his willingness to support the burgeoning Hip-Hop scene during its infancy. RIP to our friend, the legendary Bobby Robinson.",
      },
    ],
  },

  // ── Page 191 ────────────────────────────────────────────────────────────────
  {
    pageNumber: 191,
    pageType: 'answers',
    answers: [
      {
        questionNumber: 68,
        questionText: 'What is your go-to favorite Hip-Hop karaoke song?',
        answerText: 'It Takes Two by Rob Base and DJ EZ Rock',
        qrCodes: [
          {
            url: 'https://www.youtube.com/results?search_query=It+Takes+Two+Rob+Base+DJ+EZ+Rock+lyrics',
            caption: "'Lyrics'",
          },
          {
            url: 'https://www.youtube.com/results?search_query=It+Takes+Two+Rob+Base+DJ+EZ+Rock+video',
            caption: "'Video'",
          },
        ],
      },
      {
        questionNumber: 69,
        questionText: 'Has Hip-Hop led you to explore other genres of music? If so, which ones?',
        answerText:
          "In my spiritual quest to understand the devastating challenges faced by the underprivileged in Chicago, Hip-Hop became a gateway that led me to explore their perspective through Drill music and its gang culture. I gained a deep understanding of the socio-economic struggles, etc. and I now know more about Drill music than any grandma will ever need to know. Among many others, in search of their humanity, I studied rivals FBG Duck and King Von and found plenty! Sadly, due to gun violence, they are now both deceased. I've learned that not all Drill Music or Drill artists are the same. Shout-Out to the ex-members now \"under the pushing peace act\" in Chicago, such as J Mane, \"Hey J Mane, let's start dere,\" and Tay Savage. Shout-out to drill rapper Tay Capone, one of the best vloggers for authentic Chicago stories. He and Polo G are a \"different breed.\" Shout-out to King Yella for being one of the pioneers of the \"Pushing Peace Act.\" Unfortunately, he almost lost his life while doing it, and I believe he deserves a lot of credit for his efforts. Lastly, shout-out to Chicago journalist Drea O for all the great interviews about the artists, the culture and for advocating for her beautiful city. ***Hi Drea O. Keep up the good work. Anita",
      },
    ],
  },

  // ── Page 192 — Q70 ──────────────────────────────────────────────────────────
  {
    pageNumber: 192,
    pageType: 'answers',
    answers: [
      {
        questionNumber: 70,
        questionText: 'Which Dirty South artists, if any, do you feel contributed to Hip-Hop music?',
        answerText:
          "To name a few: T.I., Rick Ross, Lil' Wayne, 2 Chainz, Jeezy, Waka Flocka, Pharrell, Ludacris, Lil' Jon, Scarface, Gucci Mane, Young Dolph, etc.",
        qrCodes: [
          {
            url: 'https://www.youtube.com/results?search_query=BMF+Rick+Ross+Styles+P',
            caption: "'B.M.F.' by Rick\nRoss\nft. Styles P",
          },
          {
            url: 'https://www.youtube.com/results?search_query=I+m+Different+2+Chainz',
            caption: "'I'm Different'\nby 2 Chainz",
          },
          {
            url: 'https://www.youtube.com/results?search_query=Swing+Ya+Rag+TI',
            caption: "'Swing Ya Rag'\n- T.I.",
          },
          {
            url: 'https://www.youtube.com/results?search_query=Get+Low+Lil+Jon+Ying+Yang+Twins',
            caption: 'Lil Jon & The\nEast Side Boyz -\nGet Low (feat.\nYing Yang\nTwins)',
          },
        ],
      },
    ],
  },

  // ── Page 193 — Q68/Q69 revised ──────────────────────────────────────────────
  {
    pageNumber: 193,
    pageType: 'answers',
    answers: [
      {
        questionNumber: 68,
        questionText: 'What is your go-to favorite Hip-Hop karaoke song?',
        answerText: 'It Takes Two by Rob Base and DJ EZ Rock',
        qrCodes: [
          {
            url: 'https://www.youtube.com/results?search_query=It+Takes+Two+Rob+Base+DJ+EZ+Rock+lyrics',
            caption: "'It Takes Two' with\nLyrics",
          },
        ],
      },
      {
        questionNumber: 69,
        questionText: 'Has Hip-Hop led you to explore other genres of music? If so, which ones?',
        answerText:
          "In my spiritual quest to understand the devastating challenges faced by the underprivileged in Chicago, Hip-Hop became a gateway that led me to explore their perspective through Drill music and its gang culture. I gained a deep understanding of the socio-economic struggles, etc. and I now know more about Drill music than any grandma will ever need to know. Among many others, in search of their humanity, I studied rivals FBG Duck and King Von and found plenty! Sadly, due to gun violence, they are now both deceased. I've learned that not all Drill Music or Drill artists are the same. Shout-Out to the ex-members now \"under the pushing peace act\" in Chicago, such as J Mane, \"Hey J Mane, let's start dere,\" and Tay Savage. Shout-out to drill rapper Tay Capone, one of the best vloggers for authentic Chicago stories. He and Polo G are a \"different breed.\" Also, shout-out to Chicago journalist, Drea O, for all the great interviews about the artists, the culture and for advocating for her beautiful city.\n\nThursday Oct. 24, 2024 Update:\n*Lil Durk arrested and charged in murder for hire plot.",
        qrCodes: [
          {
            url: 'https://www.youtube.com/results?search_query=Lil+Durk+hip+hop',
            caption: 'Lil Durk\nupdate',
          },
        ],
      },
    ],
  },

  // ── Page 194 ────────────────────────────────────────────────────────────────
  {
    pageNumber: 194,
    pageType: 'answers',
    answers: [
      {
        questionNumber: 71,
        questionText: 'Who are (or were) your favorite West Coast artists?',
        answerText:
          "Tupac, Snoop Dogg, Ice Cube, artist/producer Dr. Dre, Ice-T, Eazy-E, Kendrick Lamar, Ice Cube/N.W.A and G-Easy and House of Pain for their 1992 platinum hit 'Jump Around.'",
        qrCodes: [
          {
            url: 'https://www.youtube.com/results?search_query=No+Limit+G-Eazy+ASAP+Rocky+Cardi+B',
            caption: "'No Limit' by G-Eazy\n(ft. A$AP Rocky,\nCardi B)",
          },
          {
            url: 'https://www.youtube.com/results?search_query=Colors+Ice+Tea',
            caption: "'Colors'\nby Ice Tea",
          },
          {
            url: 'https://www.youtube.com/results?search_query=The+Next+Episode+Dr+Dre+Snoop+Dogg',
            caption: "'The Next Episode' by\nDr. Dre ft. Snoop Dogg",
          },
          {
            url: 'https://www.youtube.com/results?search_query=Straight+Outta+Compton+NWA',
            caption: "'Straight Outta\nCompton'\nby N.W.A.",
          },
        ],
      },
      {
        questionNumber: 72,
        questionText: 'Do you believe that Hip-Hop has promoted positive change in the world? If so, how?',
        answerText:
          'Yes, I do. It has changed the world through cultural expression, social commentary, community empowerment, fashion and economic impact, just to name a few.',
      },
    ],
  },

  // ── Page 195 ────────────────────────────────────────────────────────────────
  {
    pageNumber: 195,
    pageType: 'answers',
    answers: [
      {
        questionNumber: 73,
        questionText: 'As classic Hip-Hop has evolved, what artists or groups do you feel have positively impacted the music?',
        answerText:
          'Common, Kendrick Lamar, J. Cole, Drake, and Big Sean. I believe they have contributed some positive and uplifting songs to the culture.',
        qrCodes: [
          {
            url: 'https://www.youtube.com/results?search_query=Alright+Kendrick+Lamar',
            caption: "'Alright'\nby Kendrick\nLamar",
          },
          {
            url: 'https://www.youtube.com/results?search_query=God+s+Plan+Drake',
            caption: "'God's Plan'\nby Drake",
          },
          {
            url: 'https://www.youtube.com/results?search_query=Blessings+Big+Sean+Drake+Kanye',
            caption: "'Blessings' by Big\nSean ft. Drake,\nKanye West",
          },
          {
            url: 'https://www.youtube.com/results?search_query=One+Man+Can+Change+The+World+Big+Sean',
            caption: "'One Man Can\nChange\nThe World' by Big\nSean",
          },
        ],
      },
      {
        questionNumber: 74,
        questionText: 'What artist or group, if any, do you believe is over-hyped or has negatively impacted the music? If so, who and how?',
        answerText:
          "With a few exceptions... Drill Music. I don't like songs that diss the dead. I like Chicago story tellers like hood poet Polo G, G Herbo, Tay Capone, and a few songs by King Von, (RIP) Lil Durk, and FBG Duck (RIP) that are not your typical drill songs.",
        qrCodes: [
          {
            url: 'https://www.youtube.com/results?search_query=Crazy+Story+King+Von',
            caption: "'Crazy Story'\nby King Von",
          },
          {
            url: 'https://www.youtube.com/results?search_query=Pop+Out+Polo+G+Lil+Tjay',
            caption: "'Pop Out' by\nPolo G ft. Lil Tay",
          },
          {
            url: 'https://www.youtube.com/results?search_query=Epidemic+Polo+G',
            caption: "'Epidemic'\nby Polo G",
          },
          {
            url: 'https://www.youtube.com/results?search_query=Chicago+Legends+FBG+Duck',
            caption: "'Chicago\nLegends' by\nFBG Duck'",
          },
          {
            url: 'https://www.youtube.com/results?search_query=OK+FBG+Duck',
            caption: "'OK by FBG\nDuck'",
          },
        ],
      },
    ],
  },

  // ── Page 196 — Q74 continued + Q75 ─────────────────────────────────────────
  {
    pageNumber: 196,
    pageType: 'answers',
    answers: [
      {
        questionNumber: 75,
        questionText:
          'Back in your day, when you are frustrated or facing hardships in your life, what Hip-Hop songs match your energy? How about today?',
        answerText:
          "When I am frustrated or facing some hardships in my life, depending on the situation, the songs I like to play are Everything Tonight by Pitbull ft. Ne-Yo, Afro Jack and Nayer, 'How Ya like Me Now' by Kool Moe Dee, the timeless They Don't Give A F*** About Us' by Tupac and Now That We Found Love by Heavy D & The Boyz ft. Aaron Hall. I like the same songs today.",
        qrCodes: [
          {
            url: 'https://www.youtube.com/results?search_query=Everything+Tonight+Pitbull+Ne-Yo',
            caption: "'Everything\nTonight'",
          },
          {
            url: 'https://www.youtube.com/results?search_query=How+Ya+Like+Me+Now+Kool+Moe+Dee',
            caption: "'How Ya Like Me\nNow'",
          },
          {
            url: 'https://www.youtube.com/results?search_query=They+Don+t+Give+A+F+About+Us+Tupac',
            caption: "'They Don't Give A\nF*** About Us'",
          },
          {
            url: 'https://www.youtube.com/results?search_query=Now+That+We+Found+Love+Heavy+D+Boyz',
            caption: "'Now That We\nFound Love'",
          },
        ],
      },
    ],
  },

  // ── Page 197 — Q76 (Ed Lover) ────────────────────────────────────────────────
  {
    pageNumber: 197,
    pageType: 'answers',
    answers: [
      {
        questionNumber: 76,
        questionText: 'In your borough or state, which artists or DJs are you most proud of for their contribution to Rap or Hip-Hop?',
        answerText:
          "In my state, I am most proud of the contributions of The Legendary Ed Lover, DJ Marley Marl, DMX, GrandMaster Flash and Run-D.M.C. and Jam Master Jay, Juice Crew, Fat Joe, Busta Rhymes, Cardi B, Young MA, Missy Elliot, Salt-N-Pepa, LL Cool J, Fat Joe, Jay-Z, DJ Clue, Rakim, Wu-Tang Clan, Notorious B.I.G., DJ Cassidy, 3rd Bass, A$AP Rocky, Flava Flav, Funk Master Flex, KRS-One, A Boogie Wit da Hoodie, D-Nice, all Power 105.1 on-air personalities/DJ's and Em-Ez formally of Power 105.1.\n\n***Ed Lover - Source: Wikipedia***\n\n\"Ed Lover is a prominent figure in Hip-Hop culture. He gained fame as the co-host of the popular MTV show \"Yo! MTV Raps,\" during the late '80s and early '90s. Ed Lover, along with his partner Dr. Dre (not to be confused with the rapper/producer), played a crucial role in bringing Hip-Hop to mainstream television, contributing to the genre's widespread recognition. Ed Lover even had his own signature dance. Beyond his MTV stint, Ed Lover has been involved in various radio and television projects, solidifying his impact in Hip-Hop entertainment.\"",
        qrCodes: [
          {
            url: 'https://www.youtube.com/results?search_query=Ed+Lover+Dance',
            caption: "'The Ed Lover\nDance'",
          },
          {
            url: 'https://www.youtube.com/results?search_query=Ed+Lover+Breakfast+Club+Interview',
            caption: "Ed Lover 'Breakfast\nClub' Interview",
          },
          {
            url: 'https://www.youtube.com/results?search_query=My+Expert+Opinion+Ed+Lover',
            caption: "'My Expert\nOpinion' with Ed\nLover",
          },
        ],
      },
    ],
  },

  // ── Page 198 — Q76 continued (Ed Lover personal story) ──────────────────────
  {
    pageNumber: 198,
    pageType: 'continued',
    continuedText:
      "***Ed Lover - Source: Anita Scipio***\n\nI had the privilege and honor to work with the legendary Ed 'C'mon Son' Lover many years ago at Power 105.1. I was starstruck! He was kind, personable, and very down-to-earth for someone of his stature. I watched him on TV for many years and once in a movie called Who's The Man, which I loved. Meeting him and eventually considering myself a friend was an awesome experience. Every day, after his shift, before he left for the day... he hugged me and talked with me about the hottest issues of the day. He is also a superb comedian... I'm talkin' hilarious! Every week on Wednesdays, I helped to recruit my co-workers to attend his comedy show at the now-defunct Carolines Comedy Club. We had VIP seats, and the events showcased upcoming and established top comedians. Ed was the host, and he did his own routine as well, and I would almost die laughing! I met his beautiful wife, Vanessa, there, and Ed always shared wonderful stories about her, his children, and old school Hip-Hop! Recently, after fourteen years, I had the pleasure of reconnecting with Ed Lover (and his beautiful wife, Vanessa and our mutual friend, Belle Aire) at Rodney's Comedy Club. It was as if I had just seen him yesterday. He was as kind and funny as always and it was a night to remember! I will always have a special place in my heart for Ed Lover. Shout-out to Ed's right-hand man, Dano Brown, below. Love, Anita\n\n*Ed is currently hosting The Ed Lover Experience on 94.7 The Block (WXBK-FM) in New York M-F 7pm-10 pm",
  },

  // ── Page 199 ────────────────────────────────────────────────────────────────
  {
    pageNumber: 199,
    pageType: 'answers',
    answers: [
      {
        questionNumber: 77,
        questionText: 'Who are your favorite beatbox artists? Please name one or more.',
        answerText:
          "My favorite beatbox artists are the legendary Doug E. Fresh, Biz Markie, and The Fat Boys.\n***Beatboxing is a form of vocal percussion in which a rapper imitates drums or other percussion instruments with their voice.",
        qrCodes: [
          {
            url: 'https://www.youtube.com/results?search_query=The+Show+Doug+E+Fresh+Slick+Rick',
            caption: "'The Show'\nby Doug E Fresh & Slick\nRick'",
          },
          {
            url: 'https://www.youtube.com/results?search_query=Biz+Markie+beatbox',
            caption: 'Biz Markie',
          },
          {
            url: 'https://www.youtube.com/results?search_query=Fat+Boys+beatbox',
            caption: 'The Fat Boys',
          },
        ],
      },
      {
        questionNumber: 78,
        questionText: 'Regarding sampling, which artist of your generation was sampled the most?',
        answerText:
          'James Brown was the most sampled artist of my generation. *Sampling is taking a portion of an existing record and inserting it into a new record. Grandmaster Flash invented human sampling and DJ Marley Marl was the first to re-create sampling on wax.',
      },
    ],
  },

  // ── Page 200 ────────────────────────────────────────────────────────────────
  {
    pageNumber: 200,
    pageType: 'answers',
    answers: [
      {
        questionNumber: 79,
        questionText: 'What rapper, if any, influenced you to become, or want to become, a rapper? How?',
        answerText: 'No rapper influenced me to become or want to become a rapper.',
      },
      {
        questionNumber: 80,
        questionText: 'Like Mt. Rushmore, if there were a Mt. EASTmore of Hip-Hop, who would you choose?',
        answerText:
          "I would choose LL Cool J, DMX, Jay Z and Biggie.\n\n*LL Cool J and DMX selections are included elsewhere.",
        qrCodes: [
          {
            url: 'https://www.youtube.com/results?search_query=Public+Service+Announcement+Jay-Z',
            caption: "'Public Service\nAnnouncement'\nby Jay-Z",
          },
          {
            url: 'https://www.youtube.com/results?search_query=Hard+Knock+Life+Jay+Z',
            caption: "'Hard Knock Life'\nby Jay Z",
          },
          {
            url: 'https://www.youtube.com/results?search_query=Big+Poppa+Notorious+BIG',
            caption: "'Big Poppa'\nby The Notorious\nB.I.G.",
          },
          {
            url: 'https://www.youtube.com/results?search_query=Juicy+Notorious+BIG',
            caption: "'Juicy'\nby The Notorious\nB.I.G.",
          },
        ],
      },
    ],
  },

  // ── Page 201 ────────────────────────────────────────────────────────────────
  {
    pageNumber: 201,
    pageType: 'answers',
    answers: [
      {
        questionNumber: 81,
        questionText: 'Who would you choose for Mt. WESTmore of Hip-Hop?',
        answerText: 'I would choose Tupac, Snoop Dogg, Ice Cube, and Dr. Dre.',
        qrCodes: [
          {
            url: 'https://www.youtube.com/results?search_query=Keep+It+Gangsta+Ice+Cube+DJ+Mozzia',
            caption: "'Keep It Gangsta'\nby Ice Cube\n*DJ Mozzia",
          },
          {
            url: 'https://www.youtube.com/results?search_query=Hail+Mary+Tupac',
            caption: "'Hail Mary'\nby Tupac",
          },
          {
            url: 'https://www.youtube.com/results?search_query=2+of+Amerikaz+Most+Wanted+Tupac+Snoop+Dogg',
            caption: "'2 of Amerikaz Most\nWanted'\nby Tupac ft. Snoop\nDogg",
          },
          {
            url: 'https://www.youtube.com/results?search_query=California+Love+2Pac+Dr+Dre',
            caption: "'California Love'\nby 2Pac ft. Dr. Dre",
          },
        ],
      },
      {
        questionNumber: 82,
        questionText: 'Who would you choose for a Mt. Ladies-Onlymore of Hip-Hop?',
        answerText: 'I would choose Queen Latifah, Salt-N-Pepa, and Missy Elliott',
        qrCodes: [
          {
            url: 'https://www.youtube.com/results?search_query=Push+It+Salt+N+Pepa',
            caption: "'Push It'\nby Salt-N-Pepa",
          },
          {
            url: 'https://www.youtube.com/results?search_query=Get+Ur+Freak+On+Missy+Elliott',
            caption: "'Get Ur Freak On'\nby Missy Elliott",
          },
          {
            url: 'https://www.youtube.com/results?search_query=Work+It+Missy+Elliott',
            caption: "'Work It'\nby Missy Elliott",
          },
        ],
      },
    ],
  },

  // ── Page 202 — Q83 ──────────────────────────────────────────────────────────
  {
    pageNumber: 202,
    pageType: 'answers',
    answers: [
      {
        questionNumber: 83,
        questionText: 'In your generation, which local DJs made the biggest impact on Hip-Hop?',
        answerText:
          "Some of the New York-based DJs/On-Air Personalities who have made the most significant impact on Hip-Hop are Grandmaster Flash, Ed Lover, DJ Marley Marl, DJ Clark Kent (RIP), DJ Clue, DJ Suss One, Angie Martinez, \"The Voice Of The Streets.\" DJ Envy, DJ Prostyle, DJ Will, DJ Norie, and many more.\n\nJust for the record...\n\nOne of the best DJs I have ever seen on the Ones-and-Twos is my former Power 105.1 co-worker and forever friend, DJ Kut. Every day, after his shift, he would stop by the desk, give me a hug, and we would talk about Rap music, Hip-Hop, and the topic of the day. It was one of my favorite times of the day!\n\nAt the time, he was Ed Lover's DJ, and every Wednesday, once a week at the now-defunct Caroline's Comedy Club, I got to experience his phenomenal and mind-blowing showmanship. It was unlike anything I had ever seen before. Almost twenty years later, in my book... he is still unmatched. He is a great guy, a great family man, and he has an awesome sense of humor. He eventually moved back to his hometown of St. Louis to continue doing what he does best. I miss the music, the laughter, and the friendship. All the best for DJ Kut and his family: love, good health, and happiness.\n\nAlso, I recently reconnected with my old friend DJ Kut! It has been great laughing and reminiscing with him again. I wish him happiness, good health (Amen!), and continued success!\n\n\"Health is Wealth.\" -DJ Kut\nLove ya Buddy! - Anita",
      },
    ],
  },

  // ── Page 203 ────────────────────────────────────────────────────────────────
  {
    pageNumber: 203,
    pageType: 'answers',
    answers: [
      {
        questionNumber: 84,
        questionText: 'As a DJ, what were/are your favorite songs to play at a club?',
        answerText: 'I was never a DJ.',
      },
      {
        questionNumber: 85,
        questionText: 'What was the first official Hip-Hop love song? Who was the artist?',
        answerText:
          '"I Need Love" by LL Cool J.\n\nFun Fact Research: The legendary LL Cool J flipped the script with "I Need Love" (1987), showing the world that Hip-Hop could be hard and still have heart. It had a smooth beat and honest lyrics. "I Need Love" is widely recognized as the first official Hip-Hop love song, marking a groundbreaking moment in the genre. At a time when battle rhymes and party anthems dominated rap, LL Cool J took a bold step by expressing vulnerability and romance. It was history in the making, and in my opinion, he was the first Hip-Hop "playa" and he lived up to his moniker, "LL Cool J," as in Ladies Love Cool James.',
        qrCodes: [
          {
            url: 'https://www.youtube.com/results?search_query=I+Need+Love+LL+Cool+J',
            caption: "'I Need Love'",
          },
        ],
      },
    ],
  },

  // ── Page 204 ────────────────────────────────────────────────────────────────
  {
    pageNumber: 204,
    pageType: 'answers',
    answers: [
      {
        questionNumber: 86,
        questionText: 'What are your favorite Hip-Hop love songs today?',
        answerText:
          "I don't have any. Then again, I don't think there are any. I hope I am wrong... but I don't think so.",
      },
      {
        questionNumber: 87,
        questionText: 'Who are your favorite women artists in Hip-Hop today?',
        answerText:
          'The legendary three... Sha-Rock, Roxanne Shante, and Angie Stone. Also, Cardi B, Young MA, GloRilla. ***Angie Stone\'s contribution to Hip-Hop is deeply rooted in her early work as a member of The Sequence*, one of the first female rap groups in history. Signed to Sugar Hill Records in the late 1970s, the trio—composed of Stone (then known as Angie B), Cheryl "The Pearl" Cook, and Gwendolyn "Blondy" Chisolm—made history with their 1979 hit Funk You Up, which became the second-ever rap record released and the first by an all-female group. Their smooth yet powerful delivery helped pave the way for future female MCs, proving that women had a rightful place in the male-dominated Hip-Hop scene. RIP Angie Stone. She will be greatly missed.',
        ripNote: 'RIP Angie Stone',
        qrCodes: [
          {
            url: 'https://www.youtube.com/results?search_query=Enough+Cardi+B',
            caption: "'Enough'\nby Cardi B",
          },
          {
            url: 'https://www.youtube.com/results?search_query=OOOUUU+Young+MA',
            caption: "'OOOUUU'\nby Young MA",
          },
          {
            url: 'https://www.youtube.com/results?search_query=Open+Scars+Young+MA',
            caption: "'Open Scars'\nby Young MA",
          },
          {
            url: 'https://www.youtube.com/results?search_query=Hollon+Glorilla',
            caption: "'Hollon'\nby Glorilla",
          },
        ],
      },
    ],
  },

  // ── Page 205 ────────────────────────────────────────────────────────────────
  {
    pageNumber: 205,
    pageType: 'answers',
    answers: [
      {
        questionNumber: 88,
        questionText: "What's on your playlist right now?",
        answerText:
          "Redman-SHIZNIT [J@q Boi Be@z Freestyle], Murdergram Deux' by LL Cool J ft. Eminem, 'Doo-Wop (That Thing) by DaBaby and Houdini by Eminem\n\nFun Fact: Power 105.1 introduced me to a song ('I Am Blessed') that I never understood how it made their playlist but I was so happy it did. Now it stays on my playlist. It's the only song I don't breakdance to. :)",
        qrCodes: [
          {
            url: 'https://www.youtube.com/results?search_query=Redman+SHIZNIT+freestyle',
            caption: 'Redman',
          },
          {
            url: 'https://www.youtube.com/results?search_query=Murder+Gram+Deux+LL+Cool+J+Eminem',
            caption: "'Murder Gram Deux'",
          },
          {
            url: 'https://www.youtube.com/results?search_query=Doo-Wop+That+Thing+DaBaby',
            caption: 'Doo-Wop',
          },
          {
            url: 'https://www.youtube.com/results?search_query=Houdini+Eminem',
            caption: 'Houdini',
          },
          {
            url: 'https://www.youtube.com/results?search_query=I+Am+Blessed+Mr+Vega',
            caption: '"I Am Blessed"\nby Mr. Vega',
          },
        ],
      },
      {
        questionNumber: 89,
        questionText: 'In your generation, was your favorite graffiti artist? Do you have a favorite today?',
        answerText:
          "***Blade was a name I saw written all over the trains in the Bronx, especially the #2 train. He was my favorite back in the day. Today, I don't have one.\n*Graffiti is a form of visual art that involves creating images or text on surfaces, typically in public spaces. It is often done using spray paint, markers, or other materials. It gained significant recognition as part of the Hip-Hop movement in the 1970's and 1980's and is historically associated with self-expression, political messages, or cultural movements, particularly in urban environments.",
      },
    ],
  },

  // ── Page 206 ────────────────────────────────────────────────────────────────
  {
    pageNumber: 206,
    pageType: 'answers',
    answers: [
      {
        questionNumber: 90,
        questionText: 'In your opinion, what ignited the legendary beef between Drake and Kendrick Lamar?',
        answerText:
          "Although I am a fan of both Drake and Kendrick Lamar, I'm not up on what started this beef. I only became engaged when it made major headlines.",
      },
      {
        questionNumber: 91,
        questionText: 'How did it impact your perception of them?',
        answerText:
          "Honestly, Kendrick's song, 'Not Like Us,' changed my perception of Drake. Several things were mentioned that caused me to see Drake in a different light. However, I still enjoy his amazing body of work especially 'Started From The Bottom' and 'O To 100/The Catch Up.'",
        qrCodes: [
          {
            url: 'https://www.youtube.com/results?search_query=0+to+100+The+Catch+Up+Drake',
            caption: "'0 to 100/The Catch Up'",
          },
          {
            url: 'https://www.youtube.com/results?search_query=Started+From+The+Bottom+Drake',
            caption: "'Started From The Bottom'",
          },
        ],
      },
    ],
  },

  // ── Page 207 ────────────────────────────────────────────────────────────────
  {
    pageNumber: 207,
    pageType: 'answers',
    answers: [
      {
        questionNumber: 92,
        questionText: 'What specific lyrics from their diss tracks stood out the most to you?',
        answerText:
          "Unlike... some of Kendrick's lyrics in 'Not Like Us,' despite having some good bars, none of Drake's diss tracks were memorable, in my opinion. The lyrics that stood out to me involved Future, 21 Savage, Quavo, the Atlanta history lesson, etc.",
        qrCodes: [
          {
            url: 'https://www.youtube.com/results?search_query=Family+Matters+Drake',
            caption: "'Family Matters'\nby Drake",
          },
        ],
      },
      {
        questionNumber: 93,
        questionText: 'Who have you determined the winner, and which song led you to that conclusion?',
        answerText:
          "Kendrick Lamar's 'Not Like Us,' is the song that led me to declare him as the winner.",
        qrCodes: [
          {
            url: 'https://www.youtube.com/results?search_query=Not+Like+Us+Kendrick+Lamar',
            caption: "'Not Like Us'\nby Kendrick\nLamar",
          },
        ],
      },
    ],
  },

  // ── Page 208 ────────────────────────────────────────────────────────────────
  {
    pageNumber: 208,
    pageType: 'answers',
    answers: [
      {
        questionNumber: 94,
        questionText: 'Did the opinion of those in your inner-circle match yours, or were there drastic differences?',
        answerText: 'Yes, it did!',
      },
      {
        questionNumber: 95,
        questionText: 'Do rivalries benefit or negatively impact Hip-Hop and the overall culture?',
        answerText:
          "In most cases, they're beneficial; however, with the Drake and Kendrick beef, I felt as though they each were trying to end the other's career, and I wasn't so sure about this one. The hatred displayed on both sides was palpable, and it was low-down and dirty, but I might add... very entertaining! Now, there is even a lawsuit that has come from this beef. I never thought that would happen in Hip-Hop but here we are... Yikes!",
      },
    ],
  },

  // ── Page 209 ────────────────────────────────────────────────────────────────
  {
    pageNumber: 209,
    pageType: 'answers',
    answers: [
      {
        questionNumber: 96,
        questionText: 'What would you say are some of the most iconic beefs in Hip-Hop?',
        answerText:
          "The first iconic beef was between Kool Moe Dee and Busy B. Starski. Kool Moe Dee is credited with being the first MC that dissed another MC and made it personal! Today, they are friends and have mutual respect. Other notable rivalries existed between Kool Moe Dee and LL Cool J, and today, they are also friends. Also, Jay-Z and Nas; Jeezy and Gucci Mane; 50 Cent and Ja Rule; Fat Joe and 50 Cent, who are now friends; and Tupac and Biggie. Sadly, we know how that ended. There is also the Rick Ross and Drake beef and, finally, the Drake and Kendrick Lamar beef that truly upped the bar to a frightening new level. The hate is real, and both went in for blood.",
      },
      {
        questionNumber: 97,
        questionText: 'Considering this year as the year of enlightenment, what breaking news about an artist you admired changed your perception of them?',
        answerText:
          "The breaking news on Diddy. I have met Diddy, aka Brotha \"Love,\" a few times. We did not have a bond; there was no hugging or barely any eye contact, but he was always cordial to everyone he encountered. After a few visits to the Breakfast Club, I finally asked him if I could get a picture. He said, \"I don't usually do this, but now that I am 'Brotha Love'\"... I will do it. I have heard many things about him in the past, about his relationship with his artists, etc., but I was not prepared for that hotel video. Needless to say... I was horrified!",
      },
    ],
  },

  // ── Page 210 ────────────────────────────────────────────────────────────────
  {
    pageNumber: 210,
    pageType: 'answers',
    answers: [
      {
        questionNumber: 98,
        questionText: 'Presently, which artists represent the best of both old-school and new-school Hip-Hop?',
        answerText:
          "I would say Snoop Dogg, LL Cool J, 50 Cent, Fat Joe, Method Man, Lil Wayne, Maino, Sean Paul, Eminem, Common, Jeezy, Two Chains, Jadakiss, Nas and Fabolous, Nelly, Chuck D and Flava Flav. I'm sure I've missed a few others.",
        qrCodes: [
          {
            url: 'https://www.youtube.com/results?search_query=Paradise+Freestyle+Fabolous',
            caption: "'Paradise\n(Freestyle) by\nFabolous",
          },
          {
            url: 'https://www.youtube.com/results?search_query=Forgive+Me+Maino',
            caption: "'Forgive Me'\nby Maino",
          },
          {
            url: 'https://www.youtube.com/results?search_query=Paradise+Fat+Joe+Anito+DJ+Khaled',
            caption: "'Paradise'\nby Fat Joe,\nAnitto,\nDJ Khaled",
          },
          {
            url: 'https://www.youtube.com/results?search_query=I+Might+Forgive+But+I+Don+t+Forget+Jeezy',
            caption: "'I Might Forgive...\nBut I Don't\nForgive'\nby Jeezy",
          },
          {
            url: 'https://www.youtube.com/results?search_query=Hot+In+Herre+Nelly',
            caption: "'Hot in\nHerre' by\nNelly",
          },
        ],
      },
      {
        questionNumber: 99,
        questionText: 'As a Hip-Hop fan - whether it\'s buying CDs, attending concerts, and/or interacting with the community - how does your role contribute to the culture?',
        answerText:
          'As a fan, I believe I contributed by attending concerts, buying CDs, and showing nothing but love to some of the biggest Hip-Hop artists/legends in the world. That was a privilege and an honor.',
      },
    ],
  },

  // ── Page 211 ────────────────────────────────────────────────────────────────
  {
    pageNumber: 211,
    pageType: 'answers',
    answers: [
      {
        questionNumber: 100,
        questionText: 'And finally, when did you realize that you ARE Hip-Hop?',
        answerText:
          'On August 11, 2023, I realized I was Hip-Hop when I attended The Hip-Hop 50 Live at Yankee Stadium in the Boogie Down Bronx. It was a warm, beautiful night, and tens of thousands of people waited in long, exhausting lines to be there. As I looked around the crowd, most people wore throwback Hip-Hop gear, and others wore new-generation Hip-Hop gear.\n\nThat was the day I witnessed the true power of Hip-Hop. The lineup was like nothing I had ever seen before. As I gazed across Yankee Stadium, I saw abundant joy, excitement, and unity, creating a feeling I didn\'t ever remember experiencing before. The crowd was there to have a good time, and for nine whole hours, we did just that! I looked around as far as I could see... observing people\'s reactions to every song and every artist. People of all ethnicities were there for one reason: to celebrate their love of Hip-Hop!\n\nAs far as I could see, some people were jumping up and screaming at the top of their lungs, while others were sitting down, just chillin\' and boppin\', and then the reverse would happen. It was truly magical!',
      },
    ],
  },
];

export function getAnitaScipioPage(pageNumber: number): AnitaPageData | undefined {
  return anitaScipioPages.find((p) => p.pageNumber === pageNumber);
}


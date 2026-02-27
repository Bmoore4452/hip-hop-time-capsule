import { QuestionPageConfig } from "../components/QuestionPageTemplate";

// Icon imports - customize these as needed
const CROWN_ICON = require("../assets/crown.png");
const B_BOY_ICON = require("../assets/b_boy1.png");
const INK_BLOT_ICON = require("../assets/ink_blot.png");
const HIP_HOP_CHAIN_ICON = require("../assets/hip_hop_chain.png");

// Color palette for icons
export const IconColors = {
  purple: "#8B4CD8",
  pink: "#FF1493",
  gold: "#FFD700",
  blue: "#4169E1",
  green: "#32CD32",
  orange: "#FF8C00",
};

// Define all question page configurations here
// Each key corresponds to a page number
export const questionPageConfigs: Record<number, QuestionPageConfig> = {
  // Page 25 - Questions 1 & 2
  25: {
    questions: [
      { number: 1, text: "When did you first discover Hip-Hop music?" },
      { number: 2, text: "Do you remember where you were?" },
    ],
    topIcon: CROWN_ICON,
    topIconTint: IconColors.purple,
    bottomIcon: B_BOY_ICON,
    bottomIconTint: IconColors.pink,
  },

  // Page 26 - Questions 3 & 4
  26: {
    questions: [
      {
        number: 3,
        text: "What was the first song that caught your attention?",
      },
      {
        number: 4,
        text: "What were the emotions you felt hearing Hip-Hop for the first time?",
      },
    ],
    topIcon: INK_BLOT_ICON,
    topIconTint: IconColors.purple,
    bottomIcon: HIP_HOP_CHAIN_ICON,
    bottomIconTint: IconColors.pink,
  },

  // Page 27 - Questions 5 & 6
  27: {
    questions: [
      {
        number: 5,
        text: 'Who are (or were) your hottest (or as we used to say "illest") MCs?',
      },
      {
        number: 6,
        text: "Did Hip-Hop inspire you to become, or want to become, a lyricist, rapper, dancer, or DJ? If so, was there anyone in particular who inspired you?",
        isLongQuestion: true,
      },
    ],
    topIcon: CROWN_ICON,
    topIconTint: IconColors.purple,
    bottomIcon: B_BOY_ICON,
    bottomIconTint: IconColors.pink,
  },

  // Page 28 - Questions 7 & 8
  28: {
    questions: [
      {
        number: 7,
        text: "Did Hip-Hop play a role in your friendship or social circles?",
      },
      {
        number: 8,
        text: "What were the top three or more songs that gave you the confidence to overcome a personal challenge in your life?",
        isLongQuestion: true,
      },
    ],
    topIcon: INK_BLOT_ICON,
    topIconTint: IconColors.purple,
    bottomIcon: HIP_HOP_CHAIN_ICON,
    bottomIconTint: IconColors.pink,
  },

  // Page 29 - Questions 9 & 10
  29: {
    questions: [
      {
        number: 9,
        text: "What are (or were) your top five hottest jams or concerts? Where did you attend them?",
        isLongQuestion: true,
      },
      {
        number: 10,
        text: "Who are (or were) the top DJs who made the biggest impact on Hip-Hop?",
      },
    ],
    topIcon: CROWN_ICON,
    topIconTint: IconColors.purple,
    bottomIcon: B_BOY_ICON,
    bottomIconTint: IconColors.pink,
  },

  // Page 30 - Questions 11 & 12
  30: {
    questions: [
      {
        number: 11,
        text: "Who, from your crew, are (or were) your favorite people to party with?",
      },
      {
        number: 12,
        text: "What were your top three old-school dances back in the day, and what are they today?",
        isLongQuestion: true,
      },
    ],
    topIcon: INK_BLOT_ICON,
    topIconTint: IconColors.purple,
    bottomIcon: HIP_HOP_CHAIN_ICON,
    bottomIconTint: IconColors.pink,
  },

  // Page 31 - Questions 13 & 14
  31: {
    questions: [
      { number: 13, text: "What are (or were) your top five Hip-Hop clubs?" },
      {
        number: 14,
        text: "What are your top five or more party songs that really turned it up (or as we used to say) rocked the house?",
        isLongQuestion: true,
      },
    ],
    topIcon: CROWN_ICON,
    topIconTint: IconColors.purple,
    bottomIcon: B_BOY_ICON,
    bottomIconTint: IconColors.pink,
  },

  // Page 32 - Questions 15 & 16
  32: {
    questions: [
      {
        number: 15,
        text: "What was the first song that you could fully recite?",
      },
      {
        number: 16,
        text: 'In your day, who were the hottest or (as we used to say "illest") top five male artists or groups?',
        isLongQuestion: true,
      },
    ],
    topIcon: INK_BLOT_ICON,
    topIconTint: IconColors.purple,
    bottomIcon: HIP_HOP_CHAIN_ICON,
    bottomIconTint: IconColors.pink,
  },

  // Page 33 - Questions 17 & 18
  33: {
    questions: [
      {
        number: 17,
        text: "What is the one concert or event that you regret missing?",
      },
      {
        number: 18,
        text: "What are some old-school lines or quotes that you still recite today?",
      },
    ],
    topIcon: CROWN_ICON,
    topIconTint: IconColors.purple,
    bottomIcon: B_BOY_ICON,
    bottomIconTint: IconColors.pink,
  },

  // Page 34 - Questions 19 & 20
  34: {
    questions: [
      {
        number: 19,
        text: "What were (or are) your favorite songs to be played at a club?",
      },
      {
        number: 20,
        text: "What were your top five favorite Break Dance tracks for B-Boys?",
      },
    ],
    topIcon: INK_BLOT_ICON,
    topIconTint: IconColors.purple,
    bottomIcon: HIP_HOP_CHAIN_ICON,
    bottomIconTint: IconColors.pink,
  },

  // Page 35 - Questions 21 & 22
  35: {
    questions: [
      {
        number: 21,
        text: "Did you own any DJ equipment, and if so, what kind?",
      },
      {
        number: 22,
        text: "Have you ever been at a club or jam where shots were fired or some type of violence took place?",
        isLongQuestion: true,
      },
    ],
    topIcon: CROWN_ICON,
    topIconTint: IconColors.purple,
    bottomIcon: B_BOY_ICON,
    bottomIconTint: IconColors.pink,
  },

  // Page 36 - Questions 23 & 24
  36: {
    questions: [
      {
        number: 23,
        text: "Have you ever been affected by the loss of an artist that you were a big fan of?",
        isLongQuestion: true,
      },
      { number: 24, text: "If so, how were you specifically affected?" },
    ],
    topIcon: INK_BLOT_ICON,
    topIconTint: IconColors.purple,
    bottomIcon: HIP_HOP_CHAIN_ICON,
    bottomIconTint: IconColors.pink,
  },

  // Page 37 - Questions 25 & 26
  37: {
    questions: [
      {
        number: 25,
        text: "Have you ever had the opportunity to do something kind or important for your favorite artist?",
        isLongQuestion: true,
      },
      {
        number: 26,
        text: "If the lyrics in one of your favorite songs could come true for a day, which lyrics would you choose?",
        isLongQuestion: true,
      },
    ],
    topIcon: CROWN_ICON,
    topIconTint: IconColors.purple,
    bottomIcon: B_BOY_ICON,
    bottomIconTint: IconColors.pink,
  },

  // Page 38 - Questions 27 & 28
  38: {
    questions: [
      {
        number: 27,
        text: "What Hip-Hop song do you hear and instantly remember exactly where you were and what you were doing?",
        isLongQuestion: true,
      },
      {
        number: 28,
        text: "Were there any Hip-Hop artists you had a crush on back in your day? If so, who? How about today?",
        isLongQuestion: true,
      },
    ],
    topIcon: INK_BLOT_ICON,
    topIconTint: IconColors.purple,
    bottomIcon: HIP_HOP_CHAIN_ICON,
    bottomIconTint: IconColors.pink,
  },

  // Page 39 - Questions 29 & 30
  39: {
    questions: [
      {
        number: 29,
        text: "Who are some of your favorite New York mixtape DJs?",
      },
      { number: 30, text: "Who were your favorite B-Boys, and why?" },
    ],
    topIcon: CROWN_ICON,
    topIconTint: IconColors.purple,
    bottomIcon: B_BOY_ICON,
    bottomIconTint: IconColors.pink,
  },

  // Page 40 - Questions 31 & 32
  40: {
    questions: [
      { number: 31, text: "What record pool, if any, did you belong to?" },
      {
        number: 32,
        text: "When you were on your way to a club; looking clean (or as we used to say) looking fresh, what were your favorite colognes, perfumes, or body oils to wear?",
        isLongQuestion: true,
      },
    ],
    topIcon: INK_BLOT_ICON,
    topIconTint: IconColors.purple,
    bottomIcon: HIP_HOP_CHAIN_ICON,
    bottomIconTint: IconColors.pink,
  },

  // Page 41 - Questions 33 & 34
  41: {
    questions: [
      {
        number: 33,
        text: "Fashion is an integral part of Hip-Hop. Back in your day, what was your favorite Hip-Hop drip (or as we used to say) gear? And now?",
        isLongQuestion: true,
      },
      {
        number: 34,
        text: "What was your sneaker and shoe game like? And now?",
      },
    ],
    topIcon: CROWN_ICON,
    topIconTint: IconColors.purple,
    bottomIcon: B_BOY_ICON,
    bottomIconTint: IconColors.pink,
  },

  // Page 42 - Questions 35 & 36
  42: {
    questions: [
      {
        number: 35,
        text: "What were your favorite drinks to get your party started? And now?",
      },
      {
        number: 36,
        text: "What three or more artists or groups have influenced your view of social issues and activism?",
        isLongQuestion: true,
      },
    ],
    topIcon: INK_BLOT_ICON,
    topIconTint: IconColors.purple,
    bottomIcon: HIP_HOP_CHAIN_ICON,
    bottomIconTint: IconColors.pink,
  },

  // Page 43 - Questions 37 & 38
  43: {
    questions: [
      {
        number: 37,
        text: "Are there any particular artists or groups whose life stories have inspired you?",
      },
      {
        number: 38,
        text: "Has Hip-Hop contributed to your personal growth, and if so, which song or artist do you credit with your development?",
        isLongQuestion: true,
      },
    ],
    topIcon: CROWN_ICON,
    topIconTint: IconColors.purple,
    bottomIcon: B_BOY_ICON,
    bottomIconTint: IconColors.pink,
  },

  // Page 44 - Questions 39 & 40
  44: {
    questions: [
      {
        number: 39,
        text: "When was the first time (if ever) that you tried to write your own rap?",
      },
      {
        number: 40,
        text: "Who or what inspired you to try, and how would you rate your skills?",
      },
    ],
    topIcon: INK_BLOT_ICON,
    topIconTint: IconColors.purple,
    bottomIcon: HIP_HOP_CHAIN_ICON,
    bottomIconTint: IconColors.pink,
  },

  // Page 45 - Questions 41 & 42
  45: {
    questions: [
      {
        number: 41,
        text: "Have you ever met or worked with any of your favorite artists or legends in Hip-Hop?",
        isLongQuestion: true,
      },
      { number: 42, text: "Who was the better lyricist: Biggie or Tupac?" },
    ],
    topIcon: CROWN_ICON,
    topIconTint: IconColors.purple,
    bottomIcon: B_BOY_ICON,
    bottomIconTint: IconColors.pink,
  },

  // Page 46 - Questions 43 & 44
  46: {
    questions: [
      {
        number: 43,
        text: "What were your thoughts on the infamous East Coast vs. West Coast war? Did you choose a side?",
        isLongQuestion: true,
      },
      {
        number: 44,
        text: "If you could have fifteen minutes with your favorite Hip-Hop legend or artist, who would it be and what would you say?",
        isLongQuestion: true,
      },
    ],
    topIcon: INK_BLOT_ICON,
    topIconTint: IconColors.purple,
    bottomIcon: HIP_HOP_CHAIN_ICON,
    bottomIconTint: IconColors.pink,
  },

  // Page 47 - Questions 45 & 46
  47: {
    questions: [
      {
        number: 45,
        text: "If you could spend the whole day with your favorite Hip-Hop legend or artist, who would it be and what plans would you make?",
        isLongQuestion: true,
      },
      {
        number: 46,
        text: "If you could have a rap battle with any of your favorite artists, who would you choose?",
        isLongQuestion: true,
      },
    ],
    topIcon: CROWN_ICON,
    topIconTint: IconColors.purple,
    bottomIcon: B_BOY_ICON,
    bottomIconTint: IconColors.pink,
  },

  // Page 48 - Questions 47 & 48
  48: {
    questions: [
      { number: 47, text: "What clever lines would you use to diss them?" },
      {
        number: 48,
        text: "Can you recall a funny or embarrassing story from back in your day that you still laugh about?",
        isLongQuestion: true,
      },
    ],
    topIcon: INK_BLOT_ICON,
    topIconTint: IconColors.purple,
    bottomIcon: HIP_HOP_CHAIN_ICON,
    bottomIconTint: IconColors.pink,
  },

  // Page 49 - Questions 49 & 50
  49: {
    questions: [
      {
        number: 49,
        text: "If you could challenge any artist to a dance off, who would it be?",
      },
      {
        number: 50,
        text: "What is the nicest thing a Hip-Hop legend or artist has ever done for you?",
      },
    ],
    topIcon: CROWN_ICON,
    topIconTint: IconColors.purple,
    bottomIcon: B_BOY_ICON,
    bottomIconTint: IconColors.pink,
  },

  // Page 50 - Questions 51 & 52
  50: {
    questions: [
      {
        number: 51,
        text: "What, if any, is the best advice that a Hip-Hop legend or artist has ever given you?",
      },
      {
        number: 52,
        text: "Do you have any humorous stories that you heard about or personally know about your favorite artists?",
        isLongQuestion: true,
      },
    ],
    topIcon: INK_BLOT_ICON,
    topIconTint: IconColors.purple,
    bottomIcon: HIP_HOP_CHAIN_ICON,
    bottomIconTint: IconColors.pink,
  },

  // Page 51 - Question 52 (continued) & 53
  51: {
    questions: [
      { number: 52, text: "(Continued from previous page)" },
      {
        number: 53,
        text: "In the early years, women in Hip-Hop played a crucial and invaluable role in shaping the genre. What do you believe is the most significant contribution they made? Additionally, who are your favorites?",
        isLongQuestion: true,
      },
    ],
    topIcon: CROWN_ICON,
    topIconTint: IconColors.purple,
    bottomIcon: B_BOY_ICON,
    bottomIconTint: IconColors.pink,
  },

  // Page 52 - Questions 54 & 55
  52: {
    questions: [
      {
        number: 54,
        text: "After the eighties, who were your top five (or more) women artists or groups? Who are they now?",
        isLongQuestion: true,
      },
      {
        number: 55,
        text: 'Who do you consider the top five (or more) "baddest" women artists in Hip-Hop and R&B?',
        isLongQuestion: true,
      },
    ],
    topIcon: INK_BLOT_ICON,
    topIconTint: IconColors.purple,
    bottomIcon: HIP_HOP_CHAIN_ICON,
    bottomIconTint: IconColors.pink,
  },

  // Page 53 - Questions 56 & 57
  53: {
    questions: [
      {
        number: 56,
        text: "Who are your favorite male Hip-Hop and R&B artists today?",
      },
      {
        number: 57,
        text: "Did you choose a career in Rap or Hip-Hop? If so, how are you contributing to the genre? If not, what are you doing today instead?",
        isLongQuestion: true,
      },
    ],
    topIcon: CROWN_ICON,
    topIconTint: IconColors.purple,
    bottomIcon: B_BOY_ICON,
    bottomIconTint: IconColors.pink,
  },

  // Page 54 - Questions 58 & 59
  54: {
    questions: [
      {
        number: 58,
        text: "If you chose a career in Rap or Hip-Hop, what were some of the challenges you faced?",
        isLongQuestion: true,
      },
      {
        number: 59,
        text: "Were there any particular family members or friends who encouraged and believed in you during those challenges?",
        isLongQuestion: true,
      },
    ],
    topIcon: INK_BLOT_ICON,
    topIconTint: IconColors.purple,
    bottomIcon: HIP_HOP_CHAIN_ICON,
    bottomIconTint: IconColors.pink,
  },

  // Page 55 - Questions 60 & 61
  55: {
    questions: [
      { number: 60, text: "How did you overcome those challenges?" },
      { number: 61, text: "Who are your favorite Hip-Hop producers?" },
    ],
    topIcon: CROWN_ICON,
    topIconTint: IconColors.purple,
    bottomIcon: B_BOY_ICON,
    bottomIconTint: IconColors.pink,
  },

  // Page 56 - Questions 62 & 63
  56: {
    questions: [
      {
        number: 62,
        text: "Has Hip-Hop influenced your view on diversity and inclusion? If so, how?",
      },
      {
        number: 63,
        text: "Have there been any songs or specific artists that aided you in finding your voice and shaping your identity? If so, which ones?",
        isLongQuestion: true,
      },
    ],
    topIcon: INK_BLOT_ICON,
    topIconTint: IconColors.purple,
    bottomIcon: HIP_HOP_CHAIN_ICON,
    bottomIconTint: IconColors.pink,
  },

  // Page 57 - Questions 64 & 65
  57: {
    questions: [
      {
        number: 64,
        text: "How do you feel about the storytelling aspect of Hip-Hop? Have you ever written your own stories?",
        isLongQuestion: true,
      },
      {
        number: 65,
        text: "Do you remember a time when Hip-Hop brought the people in your community together?",
      },
    ],
    topIcon: CROWN_ICON,
    topIconTint: IconColors.purple,
    bottomIcon: B_BOY_ICON,
    bottomIconTint: IconColors.pink,
  },

  // Page 58 - Questions 66 & 67
  58: {
    questions: [
      {
        number: 66,
        text: "Did Hip-Hop make you more active in your community? If so, what changes did you make and how did you improve things for the better?",
        isLongQuestion: true,
      },
      {
        number: 67,
        text: "What do (or did) you like the most about your generation of Hip-Hop?",
      },
    ],
    topIcon: INK_BLOT_ICON,
    topIconTint: IconColors.purple,
    bottomIcon: HIP_HOP_CHAIN_ICON,
    bottomIconTint: IconColors.pink,
  },

  // Page 59 - Questions 68 & 69
  59: {
    questions: [
      { number: 68, text: "What is your go-to favorite Hip-Hop karaoke song?" },
      {
        number: 69,
        text: "Has Hip-Hop lead you to explore other genres of music? If so, which ones?",
      },
    ],
    topIcon: CROWN_ICON,
    topIconTint: IconColors.purple,
    bottomIcon: B_BOY_ICON,
    bottomIconTint: IconColors.pink,
  },

  // Page 60 - Questions 70 & 71
  60: {
    questions: [
      {
        number: 70,
        text: "What Dirty South artists, if any, do you feel contributed to Hip-Hop music?",
      },
      {
        number: 71,
        text: "Who are (or were) your favorite West Coast artists?",
      },
    ],
    topIcon: INK_BLOT_ICON,
    topIconTint: IconColors.purple,
    bottomIcon: HIP_HOP_CHAIN_ICON,
    bottomIconTint: IconColors.pink,
  },

  // Page 61 - Questions 72 & 73
  61: {
    questions: [
      {
        number: 72,
        text: "Do you believe that Hip-Hop has promoted positive change in the world? If so, how?",
      },
      {
        number: 73,
        text: "As classic Hip-Hop has evolved, what artists or groups do you feel have positively impacted the music? How?",
        isLongQuestion: true,
      },
    ],
    topIcon: CROWN_ICON,
    topIconTint: IconColors.purple,
    bottomIcon: B_BOY_ICON,
    bottomIconTint: IconColors.pink,
  },

  // Page 62 - Questions 74 & 75
  62: {
    questions: [
      {
        number: 74,
        text: "What artist or group, if any, do you believe is over-hyped or has negatively impacted the music? If so, who and how?",
        isLongQuestion: true,
      },
      {
        number: 75,
        text: "Back in your day, when you were frustrated or facing hardships what Hip-Hop songs matched your energy? How about today?",
        isLongQuestion: true,
      },
    ],
    topIcon: INK_BLOT_ICON,
    topIconTint: IconColors.purple,
    bottomIcon: HIP_HOP_CHAIN_ICON,
    bottomIconTint: IconColors.pink,
  },

  // Page 63 - Questions 76 & 77
  63: {
    questions: [
      {
        number: 76,
        text: "In your borough or state, which artists or DJs are you most proud of for their contribution to Rap or Hip-Hop?",
        isLongQuestion: true,
      },
      {
        number: 77,
        text: "Who are your favorite beatbox artists? Please name one or more.",
      },
    ],
    topIcon: CROWN_ICON,
    topIconTint: IconColors.purple,
    bottomIcon: B_BOY_ICON,
    bottomIconTint: IconColors.pink,
  },

  // Page 64 - Questions 78 & 79
  64: {
    questions: [
      {
        number: 78,
        text: "Regarding sampling, which artist of your generation was sampled the most?",
      },
      {
        number: 79,
        text: "What rapper, if any, influenced you to become, or want to become, a rapper? How?",
        isLongQuestion: true,
      },
    ],
    topIcon: INK_BLOT_ICON,
    topIconTint: IconColors.purple,
    bottomIcon: HIP_HOP_CHAIN_ICON,
    bottomIconTint: IconColors.pink,
  },

  // Page 65 - Questions 80 & 81
  65: {
    questions: [
      {
        number: 80,
        text: "Like Mt. Rushmore, if there were a Mt. EASTmore of Hip-Hop, who would you choose?",
      },
      { number: 81, text: "Who would you choose for Mt. WESTmore of Hip-Hop?" },
    ],
    topIcon: CROWN_ICON,
    topIconTint: IconColors.purple,
    bottomIcon: B_BOY_ICON,
    bottomIconTint: IconColors.pink,
  },

  // Page 66 - Questions 82 & 83
  66: {
    questions: [
      {
        number: 82,
        text: "Who would you choose for a Mt. LADIES-ONLYmore of Hip-Hop?",
      },
      {
        number: 83,
        text: "In your generation, which local DJs made the biggest impact on Hip-Hop?",
      },
    ],
    topIcon: INK_BLOT_ICON,
    topIconTint: IconColors.purple,
    bottomIcon: HIP_HOP_CHAIN_ICON,
    bottomIconTint: IconColors.pink,
  },

  // Page 67 - Questions 84 & 85
  67: {
    questions: [
      {
        number: 84,
        text: "As a DJ, what were/are your favorite songs to play at a club?",
      },
      {
        number: 85,
        text: "Ha-haaa!!! We threw in a trivia question here... What was the first official Hip-Hop love song? (Hint: It came out in the late eighties.) Who was the artist?",
        isLongQuestion: true,
      },
    ],
    topIcon: CROWN_ICON,
    topIconTint: IconColors.purple,
    bottomIcon: B_BOY_ICON,
    bottomIconTint: IconColors.pink,
  },

  // Page 68 - Questions 86 & 87
  68: {
    questions: [
      { number: 86, text: "What are your favorite Hip-Hop love songs today?" },
      {
        number: 87,
        text: "Who are your favorite women artists in Hip-Hop today?",
      },
    ],
    topIcon: INK_BLOT_ICON,
    topIconTint: IconColors.purple,
    bottomIcon: HIP_HOP_CHAIN_ICON,
    bottomIconTint: IconColors.pink,
  },

  // Page 69 - Questions 88 & 89
  69: {
    questions: [
      { number: 88, text: "What's on your playlist today?" },
      {
        number: 89,
        text: "Who was your favorite graffiti artist? Do you have a favorite today?",
      },
    ],
    topIcon: CROWN_ICON,
    topIconTint: IconColors.purple,
    bottomIcon: B_BOY_ICON,
    bottomIconTint: IconColors.pink,
  },

  // Page 70 - Questions 90 & 91
  70: {
    questions: [
      {
        number: 90,
        text: "In your opinion, what ignited the legendary beef between Drake and Kendrick Lamar?",
        isLongQuestion: true,
      },
      { number: 91, text: "How did it impact your perception of them?" },
    ],
    topIcon: INK_BLOT_ICON,
    topIconTint: IconColors.purple,
    bottomIcon: HIP_HOP_CHAIN_ICON,
    bottomIconTint: IconColors.pink,
  },

  // Page 71 - Questions 92 & 93
  71: {
    questions: [
      {
        number: 92,
        text: "What specific lyrics from their diss tracks stood out the most to you?",
      },
      {
        number: 93,
        text: "Who have you determined the winner, and which song led you to that conclusion?",
      },
    ],
    topIcon: CROWN_ICON,
    topIconTint: IconColors.purple,
    bottomIcon: B_BOY_ICON,
    bottomIconTint: IconColors.pink,
  },

  // Page 72 - Questions 94 & 95
  72: {
    questions: [
      {
        number: 94,
        text: "Did the opinion of those in your inner-circle match yours, or were there drastic differences?",
        isLongQuestion: true,
      },
      {
        number: 95,
        text: "Do rivalries benefit or negatively impact Hip-Hop and the overall culture?",
      },
    ],
    topIcon: INK_BLOT_ICON,
    topIconTint: IconColors.purple,
    bottomIcon: HIP_HOP_CHAIN_ICON,
    bottomIconTint: IconColors.pink,
  },

  // Page 73 - Questions 96 & 97
  73: {
    questions: [
      {
        number: 96,
        text: "What would you say are some of the most iconic beefs in Hip-Hop?",
      },
      {
        number: 97,
        text: "Considering this year as the year of enlightenment, what breaking news about an artist you admired changed your perception of them?",
        isLongQuestion: true,
      },
    ],
    topIcon: CROWN_ICON,
    topIconTint: IconColors.purple,
    bottomIcon: B_BOY_ICON,
    bottomIconTint: IconColors.pink,
  },

  // Page 74 - Questions 98 & 99
  74: {
    questions: [
      {
        number: 98,
        text: "Presently, which artists represent the best of both old-school and new-school Hip-Hop?",
      },
      {
        number: 99,
        text: "As a Hip-Hop fan - whether it's buying CDs, attending concerts, and/or interacting with the community - how does your role contribute to the culture?",
        isLongQuestion: true,
      },
    ],
    topIcon: INK_BLOT_ICON,
    topIconTint: IconColors.purple,
    bottomIcon: HIP_HOP_CHAIN_ICON,
    bottomIconTint: IconColors.pink,
  },

  // Page 75 - Question 100
  75: {
    questions: [
      {
        number: 100,
        text: "And finally, when did you realize that you ARE Hip-Hop?",
      },
    ],
    topIcon: CROWN_ICON,
    topIconTint: IconColors.purple,
    bottomIcon: B_BOY_ICON,
    bottomIconTint: IconColors.pink,
  },
};

// Helper function to get config for a page
export function getQuestionPageConfig(
  pageNumber: number,
): QuestionPageConfig | undefined {
  return questionPageConfigs[pageNumber];
}

// Helper to check if a page is a question page
export function isQuestionPage(pageNumber: number): boolean {
  return pageNumber in questionPageConfigs;
}

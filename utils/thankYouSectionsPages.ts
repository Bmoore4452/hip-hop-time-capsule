export interface ThankYouSection {
  heading: string;
  body: string;
}

export interface ThankYouSectionsPageData {
  pageNumber: number;
  sections: ThankYouSection[];
}

export const thankYouSectionsPages: ThankYouSectionsPageData[] = [
  // ── Page 217 ────────────────────────────────────────────────────────────────
  {
    pageNumber: 217,
    sections: [
      {
        heading: 'My Dear Hubby',
        body:
          'Rodney, thank you for your love, kindness, generosity, and unwavering support. You helped to make this journal/book possible. Despite all the emotional challenges I faced, as always you have been my rock. Whenever the process became difficult, no matter what - anything I wanted or needed - you provided for me. Thank you for being the most caring and encouraging person, who always uplifts me in all of my endeavors.  I love you dearly!',
      },
      {
        heading: 'My Blessed Family',
        body:
          'Thank you, each and every one of you, for the love, joy, and support throughout my life’s many triumphs and challenges. I pray that this project will succeed; the more blessings I have, the more blessings I will gladly share. I cannot name you all (I would hate to miss someone), so if you are a family member reading this - I am talking to you and I love you. I thank God for having you in my life. Special shout-out to my dear sister Debbie and my brother-in-law and my favorite pain in the neck, Isaac Daniels, aka Foxx. LOL!! I love you, Buddy! You are a true warrior and an inspiration to us all.  You are my champion! ** I love you too, Ray. You are a wonderful brother-in-law. Special shout-out to my Goddaughter and niece, Paula Hampton, and her family. Also, shout-out to our beloved Scipio family: Ceola, Carolyn here in the States, and Foster, Liz, Josh, and Zia “across the pond” in England. May God continue to bless and keep us all.',
      },
    ],
  },
];

export function getThankYouSectionsPage(
  pageNumber: number,
): ThankYouSectionsPageData | undefined {
  return thankYouSectionsPages.find((p) => p.pageNumber === pageNumber);
}

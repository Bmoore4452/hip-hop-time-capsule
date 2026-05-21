// A run of text within a paragraph; supports inline bold / italic emphasis.
export interface TextSegment {
  text: string;
  italic?: boolean;
  bold?: boolean;
}

// Each paragraph is a list of segments (plain paragraphs are a single segment).
export type LetterParagraph = TextSegment[];

export interface LetterTributePageData {
  pageNumber: number;
  title: string;
  subtitle?: string;
  paragraphs: LetterParagraph[];
  signature: string;
}

export const letterTributePages: LetterTributePageData[] = [
  // ── Page 218 ────────────────────────────────────────────────────────────────
  {
    pageNumber: 218,
    title: 'THEA MITCHEM',
    subtitle:
      'iHeartMedia’s E.V.P. of Programming for the Northeast Division, and Program Director of Power 105.1 NYC',
    paragraphs: [
      [
        { text: 'Thea', bold: true },
        {
          text: ', I sincerely thank you for your unwavering kindness and support. Your generosity has been immeasurable. I really appreciate you for ensuring that I was provided with every perk and “next-level access” that ',
        },
        { text: 'iHeartMedia', italic: true },
        {
          text: ' could offer. This includes gifting me a suite, with everything included, at every ',
        },
        { text: 'Power 105.1 Powerhouse', italic: true },
        { text: ' event I attended, and so much more.' },
      ],
      [
        {
          text: 'Thank you again for spearheading the Retirement Party of the Century, among other things! To this day, people still tell me they have never seen anything like it! I had the time of my life; it was a night that I will never forget, and I am so happy that my Granddaughter Gayla had an opportunity to see that her Grandma is loved by many. It meant the world to me.',
        },
      ],
      [
        { text: 'In addition to the above, even ' },
        { text: 'after', italic: true },
        {
          text: ' my retirement, you have continued to be a presence in my life. I am so grateful for the invitation to return to ',
        },
        {
          text: 'iHeartMedia for another exciting and awesome six months',
          italic: true,
        },
        { text: ' post-retirement. It was a dream come true to be back with my ' },
        { text: 'iHeart', italic: true },
        { text: ' family.' },
      ],
      [
        {
          text: 'Lastly, your support and advice with this book have been a true blessing!',
        },
      ],
    ],
    signature: 'Love always, Anita',
  },
];

export function getLetterTributePage(
  pageNumber: number,
): LetterTributePageData | undefined {
  return letterTributePages.find((p) => p.pageNumber === pageNumber);
}

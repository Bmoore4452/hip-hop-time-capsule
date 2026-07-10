export interface YankeePhoto {
  source: any;
  caption?: string;
}

export interface YankeeQR {
  url: string;
  caption: string;
  // Exact payload printed in the book when it isn't a bare URL (the rendered
  // QR encodes this so it scans identically to the printed one); taps still
  // open `url`.
  qrValue?: string;
}

export interface YankeeConcertPageData {
  pageNumber: number;
  title: string;
  // width / height of the cropped source photos; used to size the grid cells
  photoAspectRatio: number;
  photos: YankeePhoto[];
  qrCodes?: YankeeQR[];
}

export const yankeeConcertPages: YankeeConcertPageData[] = [
  // ── Page 213 ────────────────────────────────────────────────────────────────
  {
    pageNumber: 213,
    title: 'Hip-Hop 50 Live Concert at Yankee Stadium',
    photoAspectRatio: 530 / 590,
    photos: [
      {
        source: require('../assets/yankee-arlene-denise-kev.png'),
        caption: 'Daughter Arlene (with braids) Niece\nDenise and Nephew Kevin Bush\naka DJ Cool Kev',
      },
      {
        source: require('../assets/yankee-melvin.png'),
        caption: 'Nephew Melvin\nHayes',
      },
      {
        source: require('../assets/yankee-arlene-denise.png'),
        caption: 'Arlene and Denise',
      },
      {
        source: require('../assets/yankee-boogie-crew.png'),
        caption: 'The “Boogie Down”\nBronx Crew',
      },
    ],
  },

  // ── Page 214 ────────────────────────────────────────────────────────────────
  {
    pageNumber: 214,
    title: 'Hip-Hop 50 Live Concert at Yankee Stadium',
    photoAspectRatio: 560 / 530,
    photos: [
      { source: require('../assets/yankee214-crowd-stage.png') },
      { source: require('../assets/yankee214-crowd-red.png') },
      {
        source: require('../assets/yankee214-arlene-denise.png'),
        caption: 'Daughter Arlene and\nNiece Denise',
      },
      {
        source: require('../assets/yankee214-kev-melvin.png'),
        caption: 'Cool Kev and\nMelvin',
      },
    ],
    qrCodes: [
      {
        url: 'https://youtu.be/J7C6CfwzYf4',
        caption: 'Most Unique Performance:\n‘Doug E. Fresh’',
      },
      {
        url: 'https://www.youtube.com/results?search_query=hip+hop+50th+anniversary+yankee+stadium',
        qrValue:
          'hip hop 50th anniversary yankee stadium - YouTube https://www.youtube.com/results?search_query=hip+hop+50th+anniversary+yankee+stadium',
        caption: '‘Hip-Hop 50 Live at\nYankee Stadium’',
      },
    ],
  },
];

export function getYankeeConcertPage(
  pageNumber: number,
): YankeeConcertPageData | undefined {
  return yankeeConcertPages.find((p) => p.pageNumber === pageNumber);
}

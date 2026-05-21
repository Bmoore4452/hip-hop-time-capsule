export interface TributePageData {
  pageNumber: number;
  title: string;
  photo: any;
  // width / height of the cropped photo, used to size the image box
  photoAspectRatio: number;
  body: string;
  signature: string;
}

export const tributePages: TributePageData[] = [
  // ── Page 216 ────────────────────────────────────────────────────────────────
  {
    pageNumber: 216,
    title: 'A TRIBUTE TO MY “SON” MISAEL A. NUNEZ',
    photo: require('../assets/tribute-misael.png'),
    photoAspectRatio: 645 / 625,
    body:
      'My dearest son Misa, your belief in our dreams has been a guiding light, and your unwavering support has truly elevated this work. Your creative insights and feedback turned what was often a challenging and, at times, frustrating project into one of the main reasons I kept pushing forward and never gave up. Your patience, dedication, and steadfast commitment to our friendship have made all the difference. Every step of this journey has been smoother because of your presence and your faith in us. You have been a rock, a cheerleader, and an invaluable collaborator throughout this process. DJ Scipio and I are profoundly grateful for everything you have done to help us achieve this goal.',
    signature: 'With all of my love and our deepest gratitude,\n“Mama” and DJ SCIPIO',
  },
];

export function getTributePage(pageNumber: number): TributePageData | undefined {
  return tributePages.find((p) => p.pageNumber === pageNumber);
}

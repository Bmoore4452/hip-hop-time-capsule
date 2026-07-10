import { colors } from './colors';

// ─────────────────────────────────────────────────────────────────────────────
// Back-matter pages (223-284): thank-yous, shout-outs, sharin' the love,
// DJ Scipio section, About the Author, and the celebrity photo albums.
// Rendered by components/BackMatterPage.tsx as a vertical list of blocks.
// ─────────────────────────────────────────────────────────────────────────────

export interface Seg {
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  color?: string;
  size?: number;
}

export type BackMatterBlock =
  | { type: 'title'; text: string; color?: string; size?: number; italic?: boolean; underline?: boolean; serif?: boolean; letterSpacing?: number }
  | { type: 'heading'; text: string; color?: string; size?: number; italic?: boolean }
  | { type: 'divider'; variant?: 'diamond' | 'pink' }
  | { type: 'script'; text: string; color?: string; size?: number; align?: 'left' | 'center' }
  | { type: 'body'; segs: Seg[]; align?: 'left' | 'center' | 'justify'; size?: number }
  | { type: 'image'; source: any; aspectRatio: number; widthPct?: number; caption?: string; captionColor?: string; captionItalic?: boolean }
  | { type: 'imageRow'; height: number; items: { source: any; aspectRatio: number; caption?: string; captionColor?: string; url?: string }[]; captionItalic?: boolean }
  | { type: 'photoGrid'; columns?: 2 | 3; aspectRatio: number; photos: { source: any; caption?: string }[] }
  | { type: 'nameList'; names: string[]; columns?: 1 | 2; color?: string; italic?: boolean; size?: number }
  | { type: 'spacer'; height?: number };

export interface BackMatterPageData {
  pageNumber: number;
  blocks: BackMatterBlock[];
}

const P = colors.primary;
const A = colors.accent;

const ribbon = require('../assets/bm245-ribbon.png');
const graffiti = require('../assets/bm269-graffiti.png');
const banner = require('../assets/bm269-banner.png');
const balloons = require('../assets/bm225-balloons.png');

export const backMatterPages: BackMatterPageData[] = [
  // ── 223 · Breakfast Club photos ─────────────────────────────────────────────
  {
    pageNumber: 223,
    blocks: [
      { type: 'image', source: require('../assets/bm223-charlamagne-envy.png'), aspectRatio: 1033 / 660, caption: 'Charlamagne Tha God and DJ Envy' },
      {
        type: 'photoGrid', columns: 2, aspectRatio: 493 / 601,
        photos: [
          { source: require('../assets/bm223-envy.png'), caption: 'DJ Envy' },
          { source: require('../assets/bm223-queen-mama.png'), caption: '“Queen Mama” :)' },
        ],
      },
      { type: 'body', align: 'center', segs: [{ text: '***In Hip-Hop Time Capsule: The Next Chapter, I give detailed stories of my Breakfast Club/Power 105.1 family and my love for them. Stay tuned for more...', bold: true, italic: true, color: P }] },
    ],
  },

  // ── 224 · Letter to DJ Envy and Charlamagne ────────────────────────────────
  {
    pageNumber: 224,
    blocks: [
      { type: 'title', text: 'DJ Envy and Charlamagne Tha God', serif: true, size: 21 },
      { type: 'divider' },
      { type: 'body', segs: [{ text: 'DJ Envy and Charlamagne Tha God, ', bold: true }, { text: 'I want to take a moment to express my heartfelt gratitude to both of you. Your kindness and generosity throughout the years have been such a blessing in my life. The inspiration and support you’ve given me mean more than words can convey.' }] },
      { type: 'body', segs: [{ text: 'While I’ve shared so much about our relationship and your impact on me regarding Hip-Hop Time Capsule: The Next Chapter, I want you to know how deeply I respect and love you both.' }] },
      { type: 'body', segs: [{ text: 'Thank you for always encouraging me and being an essential part of my journey. I’m genuinely grateful for everything you have done and continue to do for me.' }] },
      { type: 'body', segs: [{ text: 'DJ Envy, one day, many years ago, I asked for advice to help an up-and-coming artist named Mark Borino. You took the time out of your busy day to give me guidance and direction to share with him. One line stood out the most; you said, ' }, { text: '“Be Fearless.”', bold: true }, { text: ' Since that day, I have shared those two simple words with so many people, and they have become a source of encouragement and growth in my life. Thank you.' }] },
      { type: 'body', segs: [{ text: 'Charla, after reading your recent book ' }, { text: '‘Get Honest Or Die Lying: Why Small Talk Sucks,’', bold: true, italic: true }, { text: ' I became bolder, more open, and I even revised some of my answers. Then I went straight-up gangsta :) with some of my opinions, and it was so liberating! Thank you DJ Envy. Thank you Charlamagne.' }] },
      { type: 'script', text: 'Love, “Mama”' },
    ],
  },

  // ── 225 · Jess Hilarious / Loren LoRosa / Morgan ───────────────────────────
  {
    pageNumber: 225,
    blocks: [
      {
        type: 'imageRow', height: 66,
        items: Array.from({ length: 5 }, () => ({ source: balloons, aspectRatio: 205 / 270 })),
      },
      { type: 'heading', text: 'Jess Hilarious', size: 17 },
      { type: 'divider', variant: 'pink' },
      { type: 'image', source: require('../assets/bm225-jess-mama.png'), aspectRatio: 522 / 565, widthPct: 62 },
      { type: 'body', segs: [{ text: 'Jess, I love that you are an integral, beloved, and hilarious team member of The Breakfast Club, and I am proud to know you. Congratulations on the birth of your precious daughter. I missed you when you were gone. I know she is so big now! I am glad that I got to meet your dear son, Ashton) who is huge now! Thanks for the love. I love you too, Mama', bold: true }] },
      { type: 'heading', text: 'Loren LoRosa', size: 17 },
      { type: 'divider', variant: 'pink' },
      { type: 'body', segs: [{ text: 'Congratulations, Loren, on being an integral and beloved team member and an excellent addition to The Breakfast Club! I met you only twice, but you were very warm and welcoming. I love what you bring to the table, and I love watching you and Jess grow from co-workers to friends and now sisters. You both gave a master class on how to resolve issues in a healthy and honest way. You are awesome.', bold: true }] },
      { type: 'heading', text: 'Morgan', size: 17 },
      { type: 'divider', variant: 'pink' },
      { type: 'body', segs: [{ text: 'Hi Morgan, I look forward to meeting you one day. I love your Front Page News Segments. They are very informative and entertaining. All the best to you.', bold: true }] },
    ],
  },

  // ── 226 · Hip-Hop "Children" ────────────────────────────────────────────────
  {
    pageNumber: 226,
    blocks: [
      { type: 'heading', text: 'Thank-You To My Hip-Hop “Children” and other Celebrity Co-Workers :)', size: 17 },
      { type: 'image', source: require('../assets/bm226-taylor.png'), aspectRatio: 884 / 626, caption: 'My “Ride or Die Daughter” Taylor Hayes aka “Little One”\n@Taylor.made_it' },
      {
        type: 'photoGrid', columns: 2, aspectRatio: 560 / 661,
        photos: [
          { source: require('../assets/bm226-stacie.png'), caption: 'My “daughter” DJ STACiE SPiNS' },
          { source: require('../assets/bm226-sym.png'), caption: 'My dearest “daughter” Sym Symma' },
        ],
      },
    ],
  },

  // ── 227-230 · Photo grids ───────────────────────────────────────────────────
  {
    pageNumber: 227,
    blocks: [
      {
        type: 'photoGrid', columns: 2, aspectRatio: 558 / 659,
        photos: [
          { source: require('../assets/bm227-david.png'), caption: 'My “Ride or Die son” David' },
          { source: require('../assets/bm227-kaitlyn-maria.png'), caption: 'My dear sweet “daughters” Kaitlyn and Maria' },
          { source: require('../assets/bm227-emez.png'), caption: 'My Dear “Son” EmEz' },
          { source: require('../assets/bm227-nyla.png'), caption: 'My Dear “Daughter” Nyla Symone' },
        ],
      },
    ],
  },
  {
    pageNumber: 228,
    blocks: [
      {
        type: 'photoGrid', columns: 2, aspectRatio: 550 / 660,
        photos: [
          { source: require('../assets/bm228-nick.png'), caption: 'My Dear “Son” Nick' },
          { source: require('../assets/bm228-brandon-eddie.png'), caption: 'My dear “sons” Brandon and Eddie F.' },
          { source: require('../assets/bm228-bigmac.png'), caption: 'Radio Big Mac...“Heeey Bay-Bae!” #YERRRP!!!' },
          { source: require('../assets/bm228-redde.png'), caption: 'My Dear “Son” DJ REDDE' },
        ],
      },
    ],
  },
  {
    pageNumber: 229,
    blocks: [
      {
        type: 'photoGrid', columns: 2, aspectRatio: 530 / 740,
        photos: [
          { source: require('../assets/bm229-ty.png'), caption: 'My Dear “Son” Ty Brazzell' },
          { source: require('../assets/bm229-moe.png'), caption: 'My Dear “Son” Maurice Mitchell aka Moe' },
          { source: require('../assets/bm229-suss.png'), caption: 'My Dear Friend DJ Suss One' },
          { source: require('../assets/bm229-sydney.png'), caption: 'My Dear “Daughter” Sydney Brown' },
        ],
      },
    ],
  },
  {
    pageNumber: 230,
    blocks: [
      {
        type: 'photoGrid', columns: 2, aspectRatio: 535 / 715,
        photos: [
          { source: require('../assets/bm230-aj.png'), caption: 'My Dear “Son” AJ' },
          { source: require('../assets/bm230-eddie.png'), caption: 'My Dear “Son” Eddie F.' },
          { source: require('../assets/bm230-back-home.png'), caption: 'Back Home At iHeartMedia' },
          { source: require('../assets/bm230-love-iheart.png'), caption: 'I love iHeartMedia' },
        ],
      },
    ],
  },

  // ── 231-243 · Tribute letters to the "children" ────────────────────────────
  {
    pageNumber: 231,
    blocks: [
      { type: 'body', segs: [{ text: 'Taylor, aka Little One. ', bold: true, color: P }, { text: 'Oh my goodness, what can I say about my love for her? It didn’t take me long to figure out that underneath that tough Philly-born-and-raised exterior was an even tougher Philly-born-and-raised interior. (Just kidding, Little One) just kidding. :) OK, I’m just going to have to blow up her spot and let everybody know how wonderful, kind, and loving she is when she lets someone into her heart. Her love, trust, and devotion to me are more than I could ever ask for, and I am equally devoted to her.' }] },
      { type: 'body', segs: [{ text: 'One of my fondest memories of her, and I have plenty, is if I were not at the front desk when her shift ended, she would track me down and find me; it didn’t matter if I was at lunch or wherever. She was going to see “Mama” before she left. I remember sitting in the cafeteria many a day, and out of the blue, she would pop up and say, “I’m leaving now, Mama.” Also, I had three favorite places about a block from the job that I liked to go to for lunch. She would search for me until she found me, and when I looked up... there she was with that big, beautiful smile. “I’m leaving Mama,” and we would share the biggest hugs. I think that pretty much says it all about my dear Little One. I’m so blessed to have her in my life. I will always love her, and she can count on that. ' }, { text: '***“Love you, Little One. Forever, Mama”', bold: true, color: P }] },
      { type: 'body', segs: [{ text: 'DJ STACiE SPiNS AKA Daughterspins: ', bold: true, color: P }, { text: 'She is my “wild unpredictable child” and my oldest. She is the “child” that, over some Chipotle (with a squeeze of lemon), likes to put up a good emotional and intellectual challenge in every single conversation, I mean every single conversation, and I love' }] },
    ],
  },
  {
    pageNumber: 232,
    blocks: [
      { type: 'body', segs: [{ text: 'every minute of it. Whenever I see her name come up on my phone screen and I hear the words, “Hello, Mother”, I know I am in for a treat, as in buckle up... it’s going to be a bumpy ride! :) I used to love it when she would come to work and walk in swinging a long, thick ponytail or braid, hanging down to the back of her knees. :) Extra trouble! I am so happy I saw her dreams of being a DJ come true. ' }, { text: '*** Daughterspins, I love her with all my heart. Forever, “Mama”', bold: true, color: P }] },
      { type: 'body', segs: [{ text: 'Sym Symma: ', bold: true, color: P }, { text: 'My daughter Sym is beautiful inside and out, and on top of that, she is one of the most assertive, courageous, and spiritual people I know. She is so special to me, and I cherish all the great memories we have shared and look forward to making many more. Watching her “come up” has been incredible. I am so proud of all she brings to iHeart, and she does it with joy and lots of class. ' }, { text: '***Love you dearly! Forever, “Mama”', bold: true, color: P }] },
      { type: 'body', segs: [{ text: 'David: ', bold: true, color: P }, { text: 'My “son” David is amazing and one of the hardest-working people I know. He came into my life when I returned to iHeart after the pandemic. From the first day I met him, I felt like I had known him for years, and by the end of the week, his thoughtfulness, generosity, and mischievous humor were evident, and just like I had another “son.” To this day, he continues to check in on me to make sure that I am well and to make me laugh with all his hysterical antics and memes! I want him to know that I love him with all my heart. He has recently been promoted to oversee Promotions At iHeartMedia New York’s WWPR/WAXQ/WOR. Amazing!!!' }] },
    ],
  },
  {
    pageNumber: 233,
    blocks: [
      { type: 'body', segs: [{ text: '***David My ‘Son’, I am so proud of you and I love you with all my heart. No cap!! :) Your love and support are more than I could ever imagine. “Forever Mama”', bold: true, color: P }] },
      {
        type: 'imageRow', height: 110, captionItalic: true,
        items: [
          { source: require('../assets/bm233-qr-insider.png'), aspectRatio: 200 / 199, caption: 'Insider Radio.com', url: 'https://www.insideradio.com/free/david-montague-to-oversee-promotions-at-iheartmedia-new-york-s-wwpr-waxq-wor/article_9437593c-f85a-11ef-aed8-1b06adcc8806.html?utm_medium=social&utm_source=email&utm_campaign=user-share' },
          { source: require('../assets/bm233-david.png'), aspectRatio: 279 / 346 },
        ],
      },
      { type: 'body', segs: [{ text: 'Maria: ', bold: true, color: P }, { text: 'My dear “daughter,” Maria, is a wonderful young lady, and I miss her low-key sweetness and all our fun at the front desk. I hope she is still happy at her new job, and I want her to know I love her and thank her for all the teamwork we did to ensure that our ticket and prize contest winners were taken care of in a timely manner. Teamwork makes the dream work! ' }, { text: '***Hope to see you soon. Love you. Forever, “Mama”', bold: true, color: P }] },
      { type: 'body', segs: [{ text: 'Kaitlyn: ', bold: true, color: P }, { text: 'She is my sweetheart “daughter,” whom I met when I returned to iHeart after the pandemic. Kaitlyn, Maria, and David would visit my desk almost daily. They all worked in the promotions and prize department, and I used to call them the Three Musketeers. I loved how she smiled at me the first time she met me, and I could tell that she was someone special. I was honored when she started calling me “Mama.” I think it’s a pretty big deal to have someone call you “Mama,” and I’m grateful that she thought enough of me in that regard! I never take that for granted. We worked well together, ensuring the prize winners got their tickets and all the pertinent information. Playing off of my “celebrity status” that they had' }] },
    ],
  },
  {
    pageNumber: 234,
    blocks: [
      { type: 'body', segs: [{ text: 'heard so much about, they made “plans” for all the inter-national events and parties that I would be attending with my fellow celebrities. David was the obvious ringleader, and they planned countless concerts and food festivals that somehow just never materialized. Heck, and don’t get me started on my birthday parade that I am still waiting for. Now, I am almost certain that I have been bamboozled. LOL. ' }, { text: '***I love you, Kaitlyn. I hope to see you soon. Forever “Mama”', bold: true, color: P }] },
      { type: 'body', segs: [{ text: 'EmEz: ', bold: true, color: P }, { text: 'Wow! My “son,” EmEz, is one of the most extraordinary people I know. Because I was with iHeart for eighteen years, I enjoyed seeing young, fresh-faced interns become confident and successful young bosses, some of whom got their own show and many other incredible opportunities. It was a pleasure watching him grow personally and professionally and to see him become the great person and family man he is today. I wish him well in all his future endeavors. ' }, { text: '*** “Son,” your big blessings are on the way... big time!! Please hang in there. I love you and miss you. Forever, “Mama”', bold: true, color: P }] },
      { type: 'body', segs: [{ text: 'Nyla Symone: ', bold: true, color: P }, { text: 'She is one of my beautiful and talented “daughters,” and she is awesome. I am so proud of her and all of her excellent achievements! In my eighteen years at iHeart, she had the fastest ‘glow-up’ I have ever seen and earned every bit of it. She now has her own show, and she is a great DJ as well. Occasionally, you will also likely see her with “Uncle Charla” on Brilliant Idiots and other events. One of the many things I like and respect about Charlamagne is that if he sees your potential and commitment as outstanding, he will open doors and help to put you in position to attain your goals.' }] },
    ],
  },
  {
    pageNumber: 235,
    blocks: [
      { type: 'body', segs: [{ text: 'Then the work really begins! Nyla was the first person I ever heard use the expression, “It’s all love.” Now, I say it all the time, and I always think of her. :) ' }, { text: 'Love you Nyla. ‘Mama’', bold: true, color: P }] },
      { type: 'body', segs: [{ text: 'Eddie F: ', bold: true, color: P }, { text: 'I thank Eddie a million times for all the love, kindness, and friendship. As the Executive Producer, his emotional support, pertinent information, and personal advice during challenging times at reception were everything to me!! His calm demeanor and great sense of humor could always get me back on track again. Things were going crazy, and I would finish the day with a sense of peace and accomplishment.' }] },
      { type: 'body', segs: [{ text: 'Lastly, I thank him for all the late afternoon pretzels and snacks we would share. ' }, { text: '***Love you, Eddie. Forever, “Mama!” ', bold: true, color: P }, { text: 'Hi Marchelle, I miss you. I hope you are living life to the fullest and continuing to express your creative talents. I thank you both for all the support for my book! ' }, { text: '***Love you, Miss Anita', bold: true, color: P }] },
      { type: 'body', segs: [{ text: 'Brandon: ', bold: true, color: P }, { text: 'My “son” Brandon is amazing. I miss our great conversations at reception and the big hugs he would give me every day when he started his shift and when he was ending his shift. We would only have a few minutes together, but I always looked forward to seeing him and and I am so happy for his success. I wish him continued love, happiness and success. ' }, { text: '***Love you Brandon. Forever ‘Mama’', bold: true, color: P }] },
      { type: 'body', segs: [{ text: 'Nick: ', bold: true, color: P }, { text: 'My ‘son” Nick is one of the kindest people I know. I miss our great soul-searching conversations at the front desk and the time we shared Zertec during allergy season.' }] },
    ],
  },
  {
    pageNumber: 236,
    blocks: [
      { type: 'body', segs: [{ text: 'My favorite memories are our daily discussions about every day life and trying to navigate through all the many challenges that come with it while pursuing the things that are truly important to us. FYI... while it may have seemed like I always had all the right answers... and I did :) I always gained as much as I gave. I remember when he was an intern, now he is the head of his department. ' }, { text: '***I am so proud of you, Nick. Love you. Forever, ‘Mama’', bold: true, color: P }] },
      { type: 'body', segs: [{ text: 'Radio Big Mac: ', bold: true, color: P }, { text: 'I will never forget the day I met him. He arrived two hours before his internship appointment, and we spent all that time getting to know and appreciate each other. He shared all his hopes and dreams with me, and I believed in him. I am ecstatic to see how his hard work and determination have paid off and that, more importantly, he is still the same gentle giant and amazing person that I met all those years ago. I love to see him at all the iHeart events and on Wild N’ Out with Nick Cannon. Hard work, determination and a charming personality will open doors all the time. ' }, { text: '***Corey, I love you and I think the world of you! Miss Anita', bold: true, color: P }] },
      { type: 'body', segs: [{ text: 'Maurice Mitchell: ', bold: true, color: P }, { text: 'My Dear ‘Son’ Maurice aka Moe Mitchell. I am so incredibly proud of him and I miss him like crazy!! He is incredibly special to me. We shared so many fun times up at Reception, and during those moments, he would open up about his hopes and dreams. One dream stood out the most—he always told me he wanted to be a comedian. He is one of the funniest people I know. I will never forget the day he' }] },
    ],
  },
  {
    pageNumber: 237,
    blocks: [
      { type: 'body', segs: [{ text: 'walked up to my desk with that big smile and said, "Mama, I’m a comedian." In that moment, he manifested his dream into reality. But it wasn’t just words—he worked tirelessly to polish his craft, putting in the time, the effort, and the heart to make it happen. He never gave up, and his dedication paid off. Now, he’s a well-known comedian, living out the very dream he once spoke into existence. He is currently a member of The Bert Show cast in the morning at Q99.7 in Atlanta. I couldn’t be prouder of him, and I love him dearly. Watching him shine is a joy that fills my heart, and I know this is just the beginning of his incredible journey. ' }, { text: '***Son, I love you so much and you will always have a special place in my heart. ‘Mama’', bold: true, color: P }] },
      { type: 'body', segs: [{ text: 'Ty: ', bold: true, color: P }, { text: '‘Son’, I don’t even know where to begin when I think about all the love, laughter, prayers, and even the occasional tears we shared at Reception. The memories are so deep and meaningful that sometimes I have to remind myself—yes, that was our life every single day. It almost feels surreal. Thank you Son, for giving me the honor of officiating your marriage to my beautiful “daughter”, Amanda, and bringing you both together in holy matrimony. Now, ten years and an adorable son (Rahmie) later, it only confirms what I always knew; you two were meant for each other. Your journey together and the way you hold your family down is a testament to the incredible young man I met all those years ago, full of hopes and dreams. Watching your love grow has been a true blessing. I love you all (all tree of yall) :) and I am so blessed to have you all in my life. ' }, { text: 'God bless you always ‘Mama’', bold: true, color: P }] },
    ],
  },
  {
    pageNumber: 238,
    blocks: [
      { type: 'body', segs: [{ text: 'DJ Redde: ', bold: true, color: P }, { text: 'My “son” DJ Redde is an awesome young man, and I thank him for all the love and kindness that he has shown me. I smile every time I see him sitting right there in the Breakfast Club studio because I know how hard he worked to get there. I am so happy to see his success and to know that he is doing what he loves every day. He is a hard-working and dependable person, and I think the world of him. I wish him and his family the very best of life. ' }, { text: '***Love you “son.” Forever love, “Mama”', bold: true, color: P }] },
      { type: 'body', segs: [{ text: 'DJ Prostyle: ', bold: true, color: P }, { text: 'I thank him for always showin’ love to me, all the great tickets to his fabulous birthday celebrations. In the early years, he had some of the best parties ever and always ensured I was there! I was so honored and would have the time of my life. He would also treat me to our traditional summertime Caramel Frappuccinos. Good times! Most importantly, I thank him for sharing his beautiful family with me. ' }, { text: '***DJ Prostyle, please give them my love. I miss you all so much! Love always, Miss Anita', bold: true, color: P }] },
      { type: 'body', segs: [{ text: 'P.S. Prostyle, I know that you are currently on iHeartMedia’s 103.5 KTU, (Shout-Out WKTU) and you are doing your thing over there, but I have to shout-out our many wonderful Power 105.1 days! Let’s Go!', italic: true }] },
      { type: 'body', segs: [{ text: 'Angie Martinez, “The Voice of New York”: ', bold: true, color: P }, { text: 'I thank Angie Martinez for all of her support throughout the years. She once gave me some of the most beautiful flowers ever for Receptionist Day. I was surprised, happy, and honored. Angie Martinez is a true Hip-Hop legend, and her celebrity' }] },
    ],
  },
  {
    pageNumber: 239,
    blocks: [
      { type: 'body', segs: [{ text: 'interviews are epic. I loved that she would periodically shout me out on air to show me some love. That would always make my day!! ' }, { text: '***Angie, all the best to you, Niko, and your family. Love, Anita.', bold: true, color: P }] },
      { type: 'body', segs: [{ text: 'Honey German: ', bold: true, color: P }, { text: 'She is one of the strongest and most determined people I know. Sometimes, we face challenges in life that can either break or shape us. It is up to us to decide which. Obviously, she chose the latter. Her strength and commitment are admirable and inspire so many, myself included. Fun Fact: She was the first person I ever saw with green hair that actually looked good on them. I love seeing her adventures on Instagram because she always looks happy and excited. ' }, { text: '***“Daughter,” I wish you, your husband, and your family all the very best in life. Love you, “Mama”', bold: true, color: P }] },
      { type: 'body', segs: [{ text: 'DJ Clue: ', bold: true, color: P }, { text: 'It wasn’t until I came to iHeartMedia that I learned of his significant role in Hip-Hop history. Ironically, back in the day and unbeknownst to me, I saw him in a few online pictures with Hip-Hop icons. I never imagined that one day, I would work with him. He was always warm and cordial, but a man of few words. So maybe you can imagine my shock and excitement when he showed up at my retirement party. I was truly honored. ' }, { text: '***Thank you, DJ Clue. All the best to you and your beautiful (inside and out) daughter Bryana. Please give her my love and tell her I miss her smiling face, big hugs, and kindness. Anita, with love', bold: true, color: P }] },
    ],
  },
  {
    pageNumber: 240,
    blocks: [
      { type: 'body', segs: [{ text: 'DJ Scenario: ', bold: true, color: P }, { text: 'I miss seeing him every day. He was a man of few words, but he always showed me love, kindness, and respect. I am so happy to see him doing well and living out his goal of having a career in Hip-Hop. ' }, { text: '***All the best to you and yours. Love, “Mama”', bold: true, color: P }] },
      { type: 'body', segs: [{ text: 'DJ Whutever: ', bold: true, color: P }, { text: 'He is an amazing young man. I always loved our conversations at the front desk about all his plans to make a good life for himself and his dear son. One thing I clearly remember is that he never wanted to put himself in a box with regard to his career. He wanted to be able to go anywhere and DJ anywhere he was invited. That way of thinking got him just where he wanted to be, and now he is playing at stadiums! I always think back to the many days he stood at the front desk while sharing his dreams with me. Thanks for all of the love and support for my book! ' }, { text: '***DJ Whutever, I wish you, your son and loved ones, all the best in life! Love, Anita', bold: true, color: P }] },
      { type: 'body', segs: [{ text: 'DJ Norie: ', bold: true, color: P }, { text: 'It was always nice to see him walk through the big glass doors. His warmth and kindness have not been forgotten. ' }, { text: '***I miss you DJ Norie. All the best to you and yours. Love, Anita', bold: true, color: P }] },
      { type: 'body', segs: [{ text: 'DJ Will: ', bold: true, color: P }, { text: 'OMG, he is a great guy. He is my friend, and he looked out for me and supported me by purchasing two T-shirts when I was helping my Granddaughter Gayla get her business off the ground. I was so grateful! He always had' }] },
    ],
  },
  {
    pageNumber: 241,
    blocks: [
      { type: 'body', segs: [{ text: 'a kind word and always looked out for me when he would cook and bring in his delicious food for company events. ' }, { text: '***Thanks for everything, DJ Will! I miss you, and I miss your delicious food. This is not a subliminal message. I repeat... this is not a subliminal message. LOL! All the best to you and your family. ***Love, Anita', bold: true, color: P }] },
      { type: 'body', segs: [{ text: 'Eli: ', bold: true, color: P }, { text: 'My “son,” Eli, is a great young man. He always showed me so much love and went out of his way to make me feel extra special. His kindness touches my heart, and I thank him for being such an awesome “son.” ' }, { text: '***All the best to you, ‘Son.’ Keep up the good work and thank you for your interest and support for my book. Love you, “Mama”', bold: true, color: P }] },
      { type: 'body', segs: [{ text: 'DJ Suss One: ', bold: true, color: P }, { text: '“Swag is in the building!” That was my signature line for you. No one who knows you can argue with that. I was always happy to see you walk through the door with your playful ‘hold all my calls’ antics and tongue-in-cheek humor. I always knew I would have a good laugh, and you never let me down! Thanks for going above and beyond to help me with my book. I loved seeing you on the Sherri Shepard show and you bringing me backstage. I was thrilled that Sherri was so kind and that she remembered me from the front desk. She was amazing and her show is awesome! Thanks for the shout out and all the support you have given and continue to give me! You have been a true friend to me. ' }, { text: '***Love, Anita', bold: true, color: P }] },
    ],
  },
  {
    pageNumber: 242,
    blocks: [
      { type: 'body', segs: [{ text: 'DJ Self: ', bold: true, color: P }, { text: 'It was nice working with him. Because of our different shifts, I didn’t see him often, but he was always cool, and it was always a pleasure to see him come through the door. ' }, { text: '***All the best to you and yours, DJ Self. Love, Anita', bold: true, color: P }] },
      { type: 'body', segs: [{ text: 'Sydney: ', bold: true, color: P }, { text: 'My beautiful “daughter”, you are very special to me, and I always loved seeing your beautiful smile and getting one of those big, loving hugs. Thank you, Sweetheart for always giving me those big, loving hugs and for showing me so much love. I wish you all the love and happiness in the world! ' }, { text: '***Love you, ‘Mama’', bold: true, color: P }] },
      { type: 'body', segs: [{ text: 'AJ: ', bold: true, color: P }, { text: 'I didn’t get to spend a lot of time with you but I am always so grateful and happy about all the love you show me. Your kind heart is everything and I love how you make sure that I have everything I need to be comfortable and that everything I need is provided. ' }, { text: '***Love you, “Mama”', bold: true, color: P }] },
      { type: 'body', segs: [{ text: 'Art: ', bold: true, color: P }, { text: 'To my “son” Art, thanks for always being kind and for the big smile you gave me every day. I met you on my return to iHeart, so I didn’t spend much time with you. However, you always had a big smile for me every time I saw you. I look forward to seeing you soon! ' }, { text: '***I wish you and yours all the best, my dear. ***Love you, “Mama”', bold: true, color: P }] },
      { type: 'heading', text: 'And last but not least...', size: 16 },
      { type: 'body', segs: [{ text: 'I want to take a moment to acknowledge my “son” former iHeartMedia coworker, ' }, { text: 'Gabe P', bold: true, color: P }, { text: ', and the incredible success of his platform, On The Radar Radio. Watching him grow beyond the front desk days and build something that highlights so' }] },
    ],
  },
  {
    pageNumber: 243,
    blocks: [
      { type: 'body', segs: [{ text: 'Many voices in Hip-Hop fill me with pride. I particularly enjoyed your interview with my dear friend Prince Dre from The O. Gabe, I still hold you dear to my heart and will always cheer you on. ' }, { text: 'Love always, “Mama”', bold: true, color: P }] },
      { type: 'body', segs: [{ text: '***Whenever you list people by name, you always run the risk of forgetting someone. If I missed someone, I apologize. Please charge it to my weary brain and not my heart and rest assured that you will be mentioned in ‘The Next Chapter!’', bold: true, color: P }] },
      { type: 'body', segs: [{ text: '58. If you chose a career in Rap or Hip-Hop, what were some of the challenges you faced?', bold: true, italic: true }] },
      { type: 'body', segs: [{ text: 'When I chose the question above, I was thinking of how many young people I have met over the years who came to iHeart with big dreams of making it on-air or, in some capacity, in the music and entertainment field. Every person mentioned above chose a career in Hip-Hop, and I can tell you firsthand that the challenges are enormous. I have seen the winners... and many people who didn’t make it. Having the right attitude will get you far, and having the wrong attitude will get you the door. For some, the pressure to be your best at all times can be overwhelming, and only your level of commitment and dedication will determine your outcome. That is, of course... unless you know someone... who knows someone. Other than that, be prepared to work hard, pay your dues, be a team player, and surround yourself with people who want to see you win! Good luck to you. ' }, { text: '***I hope your hopes and dreams will be fufilled. Love Anita aka Miss Anita aka “Mama”', bold: true, color: P }] },
    ],
  },

  // ── 245 · Shout-outs: Banker.ock / Ash Cash ────────────────────────────────
  {
    pageNumber: 245,
    blocks: [
      { type: 'image', source: ribbon, aspectRatio: 555 / 118, widthPct: 55 },
      { type: 'heading', text: 'Illustrations By: Banker.ock@dhamarseno', size: 17 },
      { type: 'body', segs: [{ text: 'Banker.ock, ', bold: true }, { text: 'I thank you for all of your hard work, patience and dedication to this project. Thanks for creating the amazing cover for our book. You are awesome and I can’t thank you enough! I look forward to working with you again! *** I highly recommend Banker.ock for graffiti illustrations, album cover, logos, etc.' }] },
      {
        type: 'imageRow', height: 90, captionItalic: true,
        items: [{ source: require('../assets/bm245-qr-bankerock.png'), aspectRatio: 165 / 160, caption: 'Banker.ock', url: 'https://fiverr.com/s/yabRpA' }],
      },
      { type: 'image', source: ribbon, aspectRatio: 555 / 118, widthPct: 55 },
      { type: 'heading', text: 'Ash Cash Exantus', size: 17 },
      { type: 'heading', text: 'Author of BOOK RICH:\nHow to Create a Fortune as a Self-Published Author', color: P, size: 15, italic: true },
      { type: 'body', segs: [{ text: 'I met Ash Cash years ago, after his encouraging and insightful interview on ' }, { text: 'The Breakfast Club', italic: true }, { text: '. He truly awesome. His newest project, ' }, { text: 'Book Rich: How to Create a Fortune as a Self-Published Author', italic: true }, { text: ', and his interview(s) on ' }, { text: 'Earn Your Leisure', italic: true }, { text: ' with the awesome, informative and enlightening hosts, ' }, { text: 'Rashad Bilal & Troy Millings', italic: true }, { text: ', were a constant companion throughout my entire book writing process. His insightful perspective and guidance were invaluable and made my journey smoother and more rewarding. I honestly can’t thank him enough! If you are planning or inspired to write a book, I highly recommend checking out Ash’s work, and don’t worry - you can thank me later. :)' }] },
      {
        type: 'imageRow', height: 90,
        items: [{ source: require('../assets/bm245-qr-ashcash.png'), aspectRatio: 165 / 165, caption: 'Ash Cash on:\n‘Earn Your Leisure’', url: 'https://youtu.be/yprtU9HweS4?si=1iFep1ryTT9tPTyy' }],
      },
    ],
  },

  // ── 246 · Shout-outs: Ralph McDaniels / Van Silk ───────────────────────────
  {
    pageNumber: 246,
    blocks: [
      { type: 'image', source: ribbon, aspectRatio: 555 / 118, widthPct: 55 },
      { type: 'heading', text: 'Ralph McDaniels', size: 18 },
      {
        type: 'imageRow', height: 95,
        items: [
          { source: require('../assets/bm246-qr-sway.png'), aspectRatio: 195 / 195, caption: 'Ralph McDaniel’s on\nSway’s Universe', url: 'https://youtu.be/q1LAHziBVYU?si=FVI2onrfy7jG6WaC' },
          { source: require('../assets/bm246-qr-vmb.png'), aspectRatio: 230 / 255, url: 'https://www.instagram.com/videomusicbox?utm_source=qr' },
        ],
      },
      { type: 'body', segs: [{ text: 'Ralph McDaniels is a pioneering figure in Hip-Hop culture, best known as the creator and host of ' }, { text: '*Video Music Box', bold: true }, { text: ', one of the first television programs dedicated to Hip-Hop music and culture. Launched in 1983, *Video Music Box* provided a crucial platform for emerging Hip-Hop artists, airing music videos, interviews, and behind-the-scenes footage that helped shape the genre’s visual identity. McDaniels, also known as "Uncle Ralph," played a significant role in documenting the rise of Hip-Hop, showcasing artists like Run-D.M.C., LL Cool J, Nas, and many others before they became mainstream. He is true Hip-Hop royalty!' }] },
      { type: 'image', source: ribbon, aspectRatio: 555 / 118, widthPct: 55 },
      { type: 'heading', text: 'Van Silk', size: 18 },
      {
        type: 'imageRow', height: 95,
        items: [{ source: require('../assets/bm246-qr-rapamania.png'), aspectRatio: 225 / 235, url: 'https://www.instagram.com/rapamania_vansilk?utm_source=qr' }],
      },
      { type: 'body', segs: [{ text: 'Cool Kev and DJ SCIPIO introduced me to Van Silk, a legendary Hip-Hop pioneer and the first promoter (1978-1984). He discovered Dougie Fresh & The Force MCs, now known as the Force MDs managed and promoted Grandmaster Flash & the Furious 5 and other early acts. He promoted over 100 shows throughout the 5 Boroughs of NYC in all clubs and venues associated with Hip Hop, i.e., Harlem World, Broadway International, Celebrity Club, T-Connection, Savoy Manor, and The Roxy... to mention a few. ' }, { text: '1989-1991 RAPMANIA ENT.', bold: true }, { text: ' He is the producer and creator of ' }, { text: '‘Rapmania’', bold: true }, { text: ' & ' }, { text: '‘Sisters in The Name of Rap’', bold: true }, { text: ' which were the first two Hip-Hop pay-per-view Special Concert Series. There was a total of seventy-five acts for both shows.' }] },
      { type: 'body', segs: [{ text: 'Incredible! For more on Van Silk, check out his Instagram page above. ' }, { text: '*** Van Silk, we thank you for your generous support!!! You are a true friend. LOVE!', bold: true }] },
    ],
  },

  // ── 247-248 · Next Level Shout-Outs ────────────────────────────────────────
  {
    pageNumber: 247,
    blocks: [
      { type: 'title', text: '💛 NEXT LEVEL SHOUT-OUTS 💛', color: A, size: 20 },
      { type: 'spacer', height: 8 },
      {
        type: 'nameList', columns: 2,
        names: [
          'Philip Johnson & Family', 'Jeaneane Brennan',
          'Colette Keeffe & Family', 'Mike Correia',
          'Sana Shabbaz B.F.O.L', 'Arelis & Alyssa Perez',
          'Norris Lykes', 'Jill Oliva and Gianna Marie Rose',
          'Sarah Scott', 'Christine Nagy',
          'Brotha Greg Simpkins', 'Cubby',
          'Jim Kerr', 'Shelli Sonstein',
          'Elvis Duran', 'Diamond Cooper',
          'Tom Cuddy', 'Latoya and Brian Moore',
          'Debra & Myisha Hamilton', 'Skerry Jones',
          'Amari Austin', 'Trevor Marden',
          'Maria Gonzalves & Family', 'Spruce Henry',
          'Marie Malluk', 'Andrew Puglise',
          'Jamie Zavransky & Family', 'Porcia Gardner',
          'Ian Samuel & Family', 'Jennifer & Matthew Luzio',
          'Danielle Dellilo', 'Scotty B.',
          'Jamie Megargee', 'Jason Roy',
          'Maria Milito', 'Paul Costabile & Family',
          'Zamani Davis', 'Bakari Sellers',
          'Ty, Amanda & Arahm Brazzell', 'Van Jones',
          'Luis Mocete', 'Tony Molaee',
          'Julia Meyers-Bartley', 'Joey Geballa',
          'Kamal King & Family', 'DJ Drama',
          'Kelly Rowland', 'Nate Marino',
          'Michelle Williams', 'Paddy Rascona',
          'Windy Wilde', 'David Savino',
          'Hala Mohamed', 'Krazy Obilla',
          'Angela Rye', 'Tracy Rahn',
          'Jack Kratoville', 'Carol Miller',
          'Lauren and Yelena Cherry', 'Debra Nahum-Landsberg',
          'Adrenna Espie',
        ],
      },
    ],
  },
  {
    pageNumber: 248,
    blocks: [
      { type: 'title', text: '💛 NEXT LEVEL SHOUT-OUTS 💛', color: A, size: 20 },
      { type: 'spacer', height: 8 },
      {
        type: 'nameList', columns: 2,
        names: [
          'Dave Anderson', 'Donnell Rawlings & Family',
          'Greg Charles', 'Team Rawlings: Forty and Ali, King Washington',
          'Helen Little', 'Dave & Elaine Chappelle',
          'Jlani Dabney', 'Gary Owen',
          'Crystal Rosas', 'Stephanie and Zach Alprin',
          'My Dear Ivanka', 'Chenelle Bogle',
          'Harry Barker', 'Gerald Kelly and Family',
          'Angelo Scarfone', 'Claire Perkins Renfrow',
          'Mr. Benjamin Crump', 'Marc & Elizabeth Coppola',
          'Sherri Shepard', 'Skip & Diane Bishop',
          'Michelle Pearson', 'Rikki Hughes',
          'Jen Norwood', 'Sam Rosalie',
          'Astra', 'Danielle Monaro',
          'Jason Lee', 'Scott Lakefield',
          'Hollywood Hamilton', 'Medha Gandhi',
          'Goumba Johnny', 'Tony Atwood',
          'Jody Berger Winig', 'MAKAELA',
          'Joe DeAngelis', 'Danny Buch',
          'Izzy Richardson', 'Eric Wellman',
          'Angela Rye', 'Steve Bartel',
          'Rick Gangi', 'Vinnie and Amanda Ganci',
          'Ken Dashow', 'Kelly Kramer',
          'Raj Patel', 'Mark Rabinowitz',
          'Natalie Vacca', 'Scott Berliner',
          'Adrenna Espie', 'Rupert Chiarella',
          'Wes Koval', 'Miriam and Stephanie Jerez',
          'Mike Baril', 'Servando Rosario',
          'Craig Davis', 'Sherri Warren',
          'Tracy Kruetzer', 'Shirley Williams',
          'Officer Chris Letiza', 'Del and Sharon Scott',
          'Officer Steve Alonzo', 'Yanet Hernandez',
          'Krazy Obilla',
        ],
      },
      { type: 'spacer', height: 10 },
      { type: 'body', align: 'center', segs: [{ text: 'SHOUT-OUT TO MY POWER 105.1 MUSIC DAY FAMILY! I MISS YOU AND LOVE YOU AlWAYS! -ANITA', bold: true, color: P }] },
    ],
  },

  // ── 249 · Business Shout-Outs ──────────────────────────────────────────────
  {
    pageNumber: 249,
    blocks: [
      { type: 'body', align: 'center', size: 19, segs: [{ text: 'BUSINESS SHOUT-OUTS ', bold: true }, { text: '*NOT SPONSORED*', bold: true, color: P, size: 15 }] },
      { type: 'divider', variant: 'pink' },
      { type: 'script', text: 'Thanks for all the love! Anita', size: 24 },
      { type: 'body', segs: [{ text: 'Thank you ' }, { text: 'Doc and team', bold: true }, { text: ' for all the delectable cakes and pies over the years! You are the best! *Best Red Velvet I ever had! Thank you!' }] },
      {
        type: 'imageRow', height: 105,
        items: [
          { source: require('../assets/bm249-qr-docs.png'), aspectRatio: 262 / 300, url: 'https://www.instagram.com/docs_cake_shop?igsh=MWMxaTJ0aGdsZ2hrbA%3D%3D&utm_source=qr' },
          { source: require('../assets/bm249-logo-docs.png'), aspectRatio: 290 / 270 },
        ],
      },
      { type: 'body', segs: [{ text: 'Dear Marcie', bold: true }, { text: ', every time you stopped by with a bag full of beautiful candles for celebrity staff and celebrities, you never once walked past my desk, without something for me as well! Thank you! Love you.' }] },
      {
        type: 'imageRow', height: 105,
        items: [
          { source: require('../assets/bm249-logo-candle.png'), aspectRatio: 275 / 298 },
          { source: require('../assets/bm249-qr-candle.png'), aspectRatio: 250 / 268, url: 'https://www.instagram.com/customcandlecoinc?igsh=MWU5NGFmeWtvOXR1ZA%3D%3D&utm_source=qr' },
        ],
      },
      { type: 'body', segs: [{ text: 'Big Steve,', bold: true }, { text: ' every time I visit you treat me like a queen. The service is great, and the food is delicious!! Best chicken parm ever! Thank you!' }] },
      {
        type: 'imageRow', height: 95,
        items: [
          { source: require('../assets/bm249-qr-lex.png'), aspectRatio: 255 / 265, url: 'https://lexrestaurant.com/' },
          { source: require('../assets/bm249-logo-lex.png'), aspectRatio: 335 / 215 },
        ],
      },
      { type: 'body', segs: [{ text: 'Brian', bold: true }, { text: ', it was a pleasure doing business with you. The service and attention to detail was spot on! Thank you! ' }, { text: '* Highly recommended', bold: true }] },
      {
        type: 'imageRow', height: 95,
        items: [
          { source: require('../assets/bm249-card-coleman.png'), aspectRatio: 330 / 255 },
          { source: require('../assets/bm249-qr-coleman.png'), aspectRatio: 255 / 250, url: 'https://blinq.me/1m8RoY03pW0c?u=TXhmqY7T' },
        ],
      },
    ],
  },

  // ── 250-253 · 52nd Precinct / Amari / Supreme ──────────────────────────────
  {
    pageNumber: 250,
    blocks: [
      { type: 'title', text: 'Shout-Out to The 52nd Precinct!', size: 21 },
      { type: 'divider', variant: 'pink' },
      {
        type: 'photoGrid', columns: 2, aspectRatio: 515 / 604,
        photos: [
          { source: require('../assets/bm250-jeremy.png') },
          { source: require('../assets/bm250-gonzales.png') },
        ],
      },
      {
        type: 'photoGrid', columns: 2, aspectRatio: 505 / 696,
        photos: [
          { source: require('../assets/bm250-party.png') },
          { source: require('../assets/bm250-boland.png') },
        ],
      },
      { type: 'body', align: 'center', segs: [{ text: 'Inspector Jeremy (top left), Officer Gonzales (top right), Myisha Hamilton (mother), Officer Easter, Officer DeLeon (with beard), Officer Gonzales (lower left), and Officer Boland (lower right)', bold: true, italic: true }] },
    ],
  },
  {
    pageNumber: 251,
    blocks: [
      {
        type: 'photoGrid', columns: 3, aspectRatio: 350 / 524,
        photos: [
          { source: require('../assets/bm251-arias1.png'), caption: 'Officer Arias' },
          { source: require('../assets/bm251-arias2.png'), caption: 'Officer Arias' },
          { source: require('../assets/bm251-group.png'), caption: 'Officers; Arias, Gonzales and Boland' },
        ],
      },
      { type: 'body', segs: [{ text: 'Amari Austin, my “niece,” is a sweet, bright, and enthusiastic little girl with a heart full of admiration for police officers. Through her eyes, she sees law enforcers as heroes in uniform. With so much negativity in this world, Amari’s innocent outlook reminds me of the many noble qualities that define ' }, { text: 'some', italic: true }, { text: ' of these heroes who genuinely honor their mission to protect and serve.' }] },
      { type: 'body', segs: [{ text: 'Amari’s Grandmother, Debra Hamilton, her mother, Myisha Hamilton (pictured with Amari), and I are the “chosen family.” Debra asked me to let you know how much they both appreciate your kindness and hospitality. On several occasions, you have taken time from your busy schedules, to make a special little girl feel extra special! Thank you, Officer Arias for getting the ball rolling! You all mean so much to her and it is obvious by the way her eyes light up in your presence. We are so grateful for the wonderful role you have and continue to play in Amari’s life. You ' }, { text: 'are indeed', italic: true }, { text: ' New York’s finest!!!' }] },
    ],
  },
  {
    pageNumber: 252,
    blocks: [
      { type: 'heading', text: 'Amari, YOU MAKE LIFE MORE BEAUTIFUL JUST BY BEING YOU! - LOVE AUNTY', color: A, size: 16 },
      { type: 'body', align: 'center', segs: [{ text: '⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐' }] },
      { type: 'image', source: require('../assets/bm252-collage.png'), aspectRatio: 1168 / 1499 },
    ],
  },
  {
    pageNumber: 253,
    blocks: [
      { type: 'title', text: 'SUPREME', color: '#E3242B', size: 26, italic: true, underline: true },
      { type: 'body', align: 'center', segs: [{ text: 'Shout-out to my nephew, Stevin Bush aka Supreme.\nThanks for all your love and encouragement.\nStay out the way and keep God first!\n-With Love and honesty, Aunt Anita', bold: true }] },
      {
        type: 'imageRow', height: 240,
        items: [
          { source: require('../assets/bm253-iheart.png'), aspectRatio: 516 / 618 },
          { source: require('../assets/bm253-court.png'), aspectRatio: 503 / 1195 },
        ],
      },
      { type: 'image', source: require('../assets/bm253-guaran.png'), aspectRatio: 515 / 560, widthPct: 55 },
      { type: 'body', align: 'center', segs: [{ text: '“Spongy Rolla ‘What’s Up My Heart”  -Supreme', bold: true }] },
    ],
  },

  // ── 255-256 · It's All Love: viewing suggestions ───────────────────────────
  {
    pageNumber: 255,
    blocks: [
      { type: 'title', text: 'IT’S ALL LOVE', color: '#000', size: 22, letterSpacing: 2 },
      { type: 'image', source: require('../assets/bm255-youtube.png'), aspectRatio: 250 / 95, widthPct: 32 },
      { type: 'heading', text: 'Suggestions for Hip-Hop Artists Interviews and The History/Origin of Rap/Hip-Hop\n*Not Sponsored*', color: P, size: 15 },
      { type: 'body', align: 'center', segs: [{ text: 'Your experiences and memories are important. We have a unique opportunity to ensure that the true origins and evolution of Hip-Hop are documented for generations to come.', italic: true }] },
      { type: 'body', align: 'center', segs: [{ text: 'Please help preserve Hip-Hop’s essence and authenticity by learning about the legends’ origins and history. DJ SCIPIO and I want to help prevent the distortion of historical facts and promote an honest record of Hip-Hop’s deep-rooted impact on society and the music industry. If you are interested, here are some suggestions that may be helpful or purely entertaining. Enjoy!', italic: true }] },
      {
        type: 'nameList', italic: true,
        names: [
          'The Breakfast Club/\nAll Power 105.1 FM Content',
          'HOT 97',
          'On the Radar Radio',
          'C’mon Son! The Podcast: Ed Lover',
          'The Joe Budden Podcast',
          'Million Dollaz Worth of Game: Gillie and Wallo',
        ],
      },
    ],
  },
  {
    pageNumber: 256,
    blocks: [
      { type: 'spacer', height: 8 },
      {
        type: 'nameList', italic: true, size: 13.5,
        names: [
          'Drink Champs: N.O.R.E & DJ EFN',
          'Halo and Me: Hosted by 2 Chainz and his son Halo',
          'Sway Universe',
          'Nas: The Bridge',
          'On The Radar Radio ( Gabe P)',
          'The Joe Budden Podcast',
          'People’s Party with Talib Kweli',
          'Hip-Hop 50th Live Birthday Jam Bx, New York',
          '50 Years of Hip-Hop Podcast Series with Fab 5 Freddy on iHeart Radio',
          'Jay Quan: Hip-Hop Historian',
          'Founding Fathers: The Untold Story of Hip-Hop',
          'The Art of Dialogue',
          'Doggy Diamond TV',
          'Hip-Hop Universe',
          'Hip-Hop Crash Course',
        ],
      },
    ],
  },

  // ── 258-264 · Sharin' the Love ─────────────────────────────────────────────
  {
    pageNumber: 258,
    blocks: [
      { type: 'title', text: 'DJ COOL KEV', size: 24 },
      { type: 'divider' },
      { type: 'image', source: require('../assets/bm258-kev.png'), aspectRatio: 595 / 590, widthPct: 72 },
      { type: 'body', segs: [{ text: 'DJ COOL KEV has been dj’ing since 1989. He’s been making mixtapes since 1995. His major influences are 3 of his uncles, Stanley Scipio, Bobby Bowens (blues singer), and DJ SCIPIO. After high school, he attended the Institute of Audio Research, where he learned audio engineering and production. DJ COOL KEV has worked with numerous artists and producers such as DJ Red Alert, Fatman Scoop, Lil’ Flip, Glenn Lewis, Lil Vicious, Jason Weaver, Dame Grease, CeeLo of Goodie Mob, and McGruff - just to name a few. His mixtape collection includes over 100 volumes of R&B, over 50 volumes of party CDs, 20 volumes of Slow Jam CDs, over 30 volumes of Reggae CDs, plus way more - which makes DJ COOL KEV the Total Package!' }] },
      { type: 'body', segs: [{ text: 'DJ COOL KEV and STEADY BREEZIN ENT., would like to thank everyone that has supported our movement throughout the years. Your time and interest are greatly appreciated.' }] },
    ],
  },
  {
    pageNumber: 259,
    blocks: [
      { type: 'heading', text: 'For more information, you can contact DJ Cool Kev directly at:', size: 15 },
      { type: 'body', align: 'center', segs: [{ text: 'Email:', bold: true, underline: true }, { text: ' coolkev117@aol.com' }] },
      { type: 'image', source: require('../assets/bm259-collection.png'), aspectRatio: 578 / 548, widthPct: 70 },
      {
        type: 'imageRow', height: 165,
        items: [
          { source: require('../assets/bm259-photo1.png'), aspectRatio: 416 / 494 },
          { source: require('../assets/bm259-photo2.png'), aspectRatio: 411 / 494 },
        ],
      },
      {
        type: 'imageRow', height: 72,
        items: [
          { source: require('../assets/bm259-qr-instagram.png'), aspectRatio: 1, caption: 'Instagram', url: 'https://www.instagram.com/djcoolkev?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' },
          { source: require('../assets/bm259-qr-website.png'), aspectRatio: 1, caption: 'Website', url: 'https://www.instagram.com/djcoolkev?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' },
          { source: require('../assets/bm259-qr-article.png'), aspectRatio: 1, caption: 'Newly Published Article on Total Package Collection Brand:', url: 'https://hiphopsince1987.com/2024/news/dj-cool-kev-presents-the-hot-new-apparel-brand-called-total-package/' },
          { source: require('../assets/bm259-qr-brand.png'), aspectRatio: 1, caption: 'Total Package Brand', url: 'https://www.totalpackagebrand.com' },
        ],
      },
    ],
  },
  {
    pageNumber: 260,
    blocks: [
      { type: 'title', text: 'MARK BORINO', size: 24 },
      { type: 'divider' },
      { type: 'image', source: require('../assets/bm260-mark.png'), aspectRatio: 600 / 722, widthPct: 62 },
      {
        type: 'imageRow', height: 80,
        items: [
          { source: require('../assets/bm260-qr-instagram.png'), aspectRatio: 1, caption: 'Instagram', url: 'https://www.instagram.com/officialmarkborino?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' },
          { source: require('../assets/bm260-qr-ffmbio.png'), aspectRatio: 1, caption: 'ffm.bio', url: 'https://ffm.bio/markborino' },
        ],
      },
      { type: 'body', segs: [{ text: 'In 2021, Mark found himself landing his first major label placement on the biggest album release of the year, ' }, { text: '‘Certified Lover Boy,’', bold: true, italic: true }, { text: ' with Drake. Mark Borino co-produced track #2, titled ' }, { text: 'Papi’s Home,', italic: true }, { text: ' which peaked at #8 on ' }, { text: 'Billboard’s Hot 100', italic: true }, { text: ' & also landed him his first ' }, { text: 'platinum record', italic: true }, { text: ' as a producer. It continues to be a special year as he received the ' }, { text: 'Harold Adamson Lyric Award', bold: true, italic: true }, { text: ' from ' }, { text: 'ASCAP', italic: true }, { text: '. Mark not only works inside the industry but has independently released 30+ tracks of original music, which were all written, produced, mixed & mastered in house under his own label, ' }, { text: '‘House of Rivero', bold: true, italic: true }, { text: '.’ Mark recently released two new songs titled, ' }, { text: '‘Don’t Wait Up’', bold: true, italic: true }, { text: ', and ' }, { text: '‘Visions’', bold: true, italic: true }, { text: ', each accessible on all music platforms. ' }, { text: '***Check him out...there is something here for everyone! Anita', bold: true }] },
    ],
  },
  {
    pageNumber: 261,
    blocks: [
      { type: 'title', text: 'JAMIE LYNN', size: 24 },
      { type: 'divider', variant: 'pink' },
      {
        type: 'imageRow', height: 170,
        items: [
          { source: require('../assets/bm261-jamie.png'), aspectRatio: 520 / 622 },
          { source: require('../assets/bm261-bark-card.png'), aspectRatio: 600 / 622 },
        ],
      },
      { type: 'body', segs: [{ text: 'Hi there! I’m Jamie Lynn :-) For the past 21 years, I’ve worked in NYC radio and live studio environments, most recently as the executive morning show producer for the Lite FM morning show in New York City. It was a privilege to collaborate with some amazing legends over the years!' }] },
      { type: 'body', segs: [{ text: 'But dogs? They’re my true passion and happy place! I’ve created a dog treat line that’s not only nutritious and delicious but also handmade by me with the purest ingredients—you could even eat them yourself! I take great pride in my products and my love for animals, and I’d love for all the pups out there to enjoy these super healthy treats.' }] },
      { type: 'body', align: 'center', segs: [{ text: 'Please reach out to ' }, { text: 'Jamie Lynn', bold: true }, { text: ' for her great products! Thank you, Anita' }] },
      {
        type: 'imageRow', height: 80,
        items: [
          { source: require('../assets/bm261-qr-bark.png'), aspectRatio: 1, caption: '@BARKAVENUETREATS', url: 'https://www.instagram.com/barkavenuetreats?igsh=MXJ4bnFlZWh1MGw1eg%3D%3D&utm_source=qr' },
          { source: require('../assets/bm261-qr-instagram.png'), aspectRatio: 1, caption: 'Instagram', url: 'https://www.instagram.com/thetalkingjamie?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' },
        ],
      },
    ],
  },
  {
    pageNumber: 262,
    blocks: [
      { type: 'image', source: require('../assets/bm262-title.png'), aspectRatio: 923 / 142, widthPct: 78 },
      { type: 'spacer', height: 6 },
      {
        type: 'imageRow', height: 155,
        items: [
          { source: require('../assets/bm262-photo1.png'), aspectRatio: 588 / 491 },
          { source: require('../assets/bm262-photo2.png'), aspectRatio: 481 / 490 },
        ],
      },
      { type: 'body', segs: [{ text: 'Last Memorial Day weekend, my good friend and favorite comedian, Donnell Rawlings, invited me to Donnell Land in Yellow Springs, Ohio, and it was one of the best experiences of my life. Donnell isn’t just providing river rides, barbecues, comedy shows, and beyond—he’s “selling a vibe” of love and unity that starts with him. From the moment everyone gathers, the love and joy are palpable, creating memories with family and friends, both old and new. Don’t miss out on Donnell Land 2025—scan the QR code to register and check out his Instagram page. Can’t wait to see you there!' }] },
      { type: 'body', align: 'center', segs: [{ text: 'Hey Donnell, as you would say... “Me love you long time!” God willing, see you soon. Love always, Anita!', bold: true }] },
      {
        type: 'imageRow', height: 82,
        items: [
          { source: require('../assets/bm262-qr-donnell.png'), aspectRatio: 1, caption: 'Donnell Land', url: 'https://www.donnellrawlings.com/donnell-land' },
          { source: require('../assets/bm262-qr-instagram.png'), aspectRatio: 1, caption: 'Instagram', url: 'https://www.instagram.com/donnellrawlings?utm_source=qr' },
        ],
      },
    ],
  },
  {
    pageNumber: 263,
    blocks: [
      { type: 'image', source: require('../assets/bm263-vip.png'), aspectRatio: 285 / 244, widthPct: 30 },
      { type: 'title', text: 'Adrian Silvestre', serif: true, size: 26, underline: true },
      { type: 'heading', text: 'Director of Food and Beverage\nat City Experiences', size: 15 },
      { type: 'body', align: 'center', segs: [{ text: 'I want to give a heartfelt acknowledgment to Adrian Silvestre, who started from humble beginnings and has ascended to the esteemed position of Director of Food and Beverage for City Experiences, anchored by Hornblower. His journey and accomplishments are truly inspiring, reflecting hard work and dedication.' }] },
      { type: 'body', align: 'center', segs: [{ text: 'City Experiences is already an outstanding organization, and Adrian Silvestre’s integral role on the team takes it to the next level of excellence. Kudos to both his outstanding contributions and the cohesive teamwork of the entire group. My family, friends, and I have enjoyed many cruises over the years, and my personal favorite is the very beautiful and elegant New York Bateaux. When Adrian is onboard, his warmth and attention to detail ensure that we all feel like true VIP guests. His hospitality is greatly appreciated.' }] },
      { type: 'body', align: 'center', segs: [{ text: 'Thank you, Adrian Silvestre. My family and I look forward to our next onboard adventure and seeing you and your awesome team once again. You are truly our VIP!', bold: true }] },
      {
        type: 'imageRow', height: 78,
        items: [
          { source: require('../assets/bm263-qr-night.png'), aspectRatio: 1, caption: '“A Night To\nRemember!!!”', captionColor: P, url: 'https://photos.app.goo.gl/7jJcfuWLsVJJLWam6' },
          { source: require('../assets/bm263-logo-cityexp.png'), aspectRatio: 338 / 108 },
          { source: require('../assets/bm263-qr-cityexp.png'), aspectRatio: 1, url: 'https://cityexperiences.com' },
        ],
      },
    ],
  },
  {
    pageNumber: 264,
    blocks: [
      { type: 'image', source: require('../assets/bm264-logo.png'), aspectRatio: 490 / 250, widthPct: 46 },
      {
        type: 'imageRow', height: 140,
        items: [
          { source: require('../assets/bm264-photo1.png'), aspectRatio: 364 / 467 },
          { source: require('../assets/bm264-photo2.png'), aspectRatio: 387 / 466 },
          { source: require('../assets/bm264-photo3.png'), aspectRatio: 363 / 467 },
        ],
      },
      { type: 'body', segs: [{ text: 'One day, while at the front desk, I received a call from a soft-spoken woman who introduced herself as Shaw-nae, a soul-food chef who owned a local catering business. She spoke very passionately about her food and her love and faith in God. Her mission was to have a taste test at The Breakfast Club to gain more exposure for her business. After experiencing a few failed attempts at connecting with Eddie F., their super busy executive producer, I felt it within my spirit to personally give him the message. Eddie graciously agreed to her request, and a few days later, she arrived with an array of mouthwatering dishes, which staff and hosts (particularly Charlamagne) were raving about. At this point, Shaw-nae became “family.” Her food was a smash hit, and there were several on-air shout-outs and support from other iHeart personalities. The rest, as they say... is history. God is good all the time and all the time God is good!' }] },
      {
        type: 'imageRow', height: 62,
        items: [
          { source: require('../assets/bm264-qr-nyt.png'), aspectRatio: 1, caption: 'New York Times', url: 'https://www.nytimes.com/2024/04/02/dining/restaurant-review-shaw-naes-house-staten-island.html' },
          { source: require('../assets/bm264-qr-elvis.png'), aspectRatio: 1, caption: 'Elvis Duran', url: 'https://www.youtube.com/watch?v=uEQ6bF8tQDU' },
          { source: require('../assets/bm264-qr-tourism.png'), aspectRatio: 1, caption: 'NYC Tourism', url: 'https://www.nyctourism.com/articles/soul-food-and-soul-healing-at-shaw-naes-house/' },
          { source: require('../assets/bm264-qr-today.png'), aspectRatio: 1, caption: 'Today Show', url: 'https://www.today.com/video/chef-behind-shaw-nae-s-house-shares-passion-behind-soulful-food-210795589972' },
          { source: require('../assets/bm264-qr-50best.png'), aspectRatio: 1, caption: 'NYT - 50 Best Restaurants in America', url: 'https://www.nytimes.com/interactive/2024/dining/best-restaurants-america.html' },
        ],
      },
    ],
  },

  // ── 265 · Intentionally blank ──────────────────────────────────────────────
  { pageNumber: 265, blocks: [] },

  // ── 267 · DJ Scipio thank-yous ─────────────────────────────────────────────
  {
    pageNumber: 267,
    blocks: [
      { type: 'image', source: graffiti, aspectRatio: 470 / 130, widthPct: 46 },
      { type: 'heading', text: 'Shirley Williams', size: 19 },
      { type: 'image', source: require('../assets/bm267-flowers.png'), aspectRatio: 485 / 245, widthPct: 48 },
      { type: 'body', align: 'center', segs: [{ text: 'Thank you for your love and support through all the good times and not-so-good times. You are very special to me! I appreciate you so much, and I thank you for always having my back!' }] },
      { type: 'heading', text: 'Greg Simpkins', size: 19 },
      { type: 'image', source: require('../assets/bm267-greg.png'), aspectRatio: 708 / 530, widthPct: 80 },
      { type: 'body', align: 'center', segs: [{ text: 'I want to thank you for 46 years of support and friendship, for all the laughter and mutual stories we have shared throughout the years, and for our bond that can never be broken. I look forward to many more chapters together.' }] },
    ],
  },

  // ── 269-273 · DJ Scipio shout-outs ─────────────────────────────────────────
  {
    pageNumber: 269,
    blocks: [
      { type: 'image', source: graffiti, aspectRatio: 470 / 130, widthPct: 46 },
      { type: 'image', source: banner, aspectRatio: 690 / 230, widthPct: 58 },
      { type: 'body', segs: [{ text: 'I want to give a shout-out and all my love to my wonderful family. This includes all my sisters, every niece, nephew, cousin, brother-in-law, etc. Thank you for all your love and support throughout the years and all the years to come. You will never know how much you mean to me.' }] },
      { type: 'body', segs: [{ text: 'I would like to give a special shout-out to my amazing sister, Anita, for her unwavering support and dedication. Thank you for all of your love and for believing in me. Your incredibly hard work was so crucial in making this book come to life. I could not have done it without you!' }] },
      { type: 'body', segs: [{ text: 'Shout-out to my fellow DJs, MCs, On-Air Personalities, record producers, record labels, mixtape stores, and everyone who has contributed to the Hip-Hop culture and music. Thank you for your friendship and support over the years.' }] },
      {
        type: 'imageRow', height: 58,
        items: [
          { source: require('../assets/bm269-icon-vinyl.png'), aspectRatio: 1 },
          { source: require('../assets/bm269-icon-dj.png'), aspectRatio: 157 / 164 },
          { source: require('../assets/bm269-icon-disc.png'), aspectRatio: 1 },
        ],
      },
    ],
  },
  {
    pageNumber: 270,
    blocks: [
      { type: 'body', segs: [{ text: 'And last but not least, thank you to all of my wonderful fans who have supported me throughout the last 45 years. You have my deepest gratitude and undying devotion because without you, there would be no DJ SCIPIO!' }] },
      {
        type: 'imageRow', height: 92,
        items: [
          { source: require('../assets/bm270-flag-sc.png'), aspectRatio: 350 / 320 },
          { source: require('../assets/bm270-flag-nc.png'), aspectRatio: 246 / 342 },
        ],
      },
      { type: 'heading', text: 'S H O U T - O U T   T O   T H E\nC A R O L I N A S !', color: P, size: 16 },
      { type: 'body', segs: [{ text: 'I want to give a very special shout-out to ' }, { text: 'The Breakfast Club/Power 105.1', bold: true }, { text: ' for their generosity, kindness, and support throughout the years. You are appreciated. I would also like to shout-out Jess Hilarious and Loren LaRosa of The Breakfast Club. I look forward to meeting you both one day.' }] },
      { type: 'script', text: 'Thank You', size: 34 },
      {
        type: 'nameList', color: P, size: 14,
        names: [
          'Charlamagne Tha God (Shout- out Moncks Corner, SC)',
          'DJ Envy, Angela Yee,',
          'host of Way Up With Angela Yee, Jim Kerr,',
          'Kelly Kramer, DJ Clue, DJ Prostyle, DJ Suss One,',
          'Angie Martinez',
        ],
      },
      { type: 'spacer', height: 10 },
      { type: 'body', align: 'left', segs: [{ text: '*** Shout-out to Mikey Truth\nSouth Carolina’s #1 Urban Blogger and Queen of Paperwork', bold: true }] },
      { type: 'image', source: require('../assets/bm270-qop.png'), aspectRatio: 350 / 240, widthPct: 38 },
    ],
  },
  {
    pageNumber: 271,
    blocks: [
      { type: 'image', source: graffiti, aspectRatio: 470 / 130, widthPct: 42 },
      { type: 'image', source: banner, aspectRatio: 690 / 230, widthPct: 52 },
      { type: 'body', align: 'center', segs: [{ text: 'Shout-out to my wonderful sister, Deborah Scipio, and my wonderful nieces, Shirley Leslie Smith and Denise Scipio. Shout-out to my nephews, DJ Cool Kev and Melvin T. Hayes.', bold: true }] },
      { type: 'heading', text: 'KOOL MOE DEE', color: P, size: 20 },
      { type: 'body', align: 'center', segs: [{ text: '*Shout-out to my childhood friend Kool Moe Dee for participating in this book. I am proud and honored that you wrote the Foreword, and I am very grateful!', bold: true }] },
      { type: 'spacer', height: 6 },
      {
        type: 'nameList',
        names: [
          'DJ KFD aka Stanley Scipio,',
          'Jerry and Cynthia Hannah of Goldsteins,',
          'Paul Davis, Margaret Hair and Joe Rugby of',
          'The Columbia Record Pool,',
          'Del and Sharon Scott, Larry Mitchell,',
          'Sess, Doc and Nate Green, Jeffery Jackson,',
          'Kool Kyle, Craig Melvin (NBC Anchor Broadcaster),',
          'Radient, Ali and Dorothy, Zelda Council and family,',
          'DJ Afar, Malik Sherrod, DJ Silverback,',
          'DJ AL Sumter, DJ Effect,',
        ],
      },
    ],
  },
  {
    pageNumber: 272,
    blocks: [
      { type: 'image', source: graffiti, aspectRatio: 470 / 130, widthPct: 42 },
      { type: 'image', source: banner, aspectRatio: 690 / 230, widthPct: 52 },
      { type: 'spacer', height: 8 },
      {
        type: 'nameList',
        names: [
          'DJ Cannon Banyon, Servin’ Mike Ervin,',
          'DJ Dirty Baby, Derek White and Family, Krazy Obilla,',
          'Bacardi Gaffney, DJ Kaos, Van Silk, Bo Knows, DJ Chuck T,',
          'My Knucklehead Ent. Family, Carlos and Vanessa Shuler,',
          'Tone Henderson, Charm Warren, Kevin Gadson, DJ Eazy Lee,',
          'DJ MC Sly B, DJ Big G, DJ Budda Rat, DJ Jay Boy,',
          'Bobby Nichols, DJ Getlow, DJ Drama (SC), DJ VIP,',
          'DJ Jackie B., Kwazi, Jihad, DJ Bobby Brown',
          'DJ Prince Ice, DJ Robert Randolph, Neek In The Morning,',
          'Curtis Wilson, Vanessa Pendergrass, DJ Chuck Nice, DJ Deer,',
          'DJ Phingaz, DJ Beazo, Kevin Dorsey, Danja Graphix,',
        ],
      },
    ],
  },
  {
    pageNumber: 273,
    blocks: [
      { type: 'image', source: graffiti, aspectRatio: 470 / 130, widthPct: 42 },
      { type: 'image', source: banner, aspectRatio: 690 / 230, widthPct: 52 },
      { type: 'spacer', height: 8 },
      {
        type: 'nameList',
        names: [
          'Natalac, DJ Lord Jazz, Coke La Rock, Karate Pete Williams,',
          'Collardgreen, Lil Ru, Lil Bo, Mr. Flip, DJ 747, Dominic Gibbs,',
          'Troy L. Smith, DJ Not Not, 50 Cent, Prodigy (RIP),',
          'Master P, Scarface, Lil Jon, Snoop Dogg',
          'Blu Davinci, Big Pun, N.O.R.E., Rasheeda and Kirk (ATL),',
          'Scrappy, Lil Dogg (SC), Pastor Troy, Camouflage (RIP),',
          'Archie Eversole (RIP), Talib Kweli, Harvey Elwood,',
          'Dirt Dolla, DaMillz, Tariq Nasheed, Lord Jamar, Doggy Diamond,',
          'DJ Diamond D, King Kilumbia, Roosevelt “Dmite” Simmons,',
          'Angie Stone (RIP), DJ Frosty,',
          'Cecelia Fitchett, Karen Buckman, Koskey, Ecstasy Crew,',
          'BOSS, DJ Jazzy (SC)',
          'DJ VIP, R-Ready, Craig Mack, and Kash Kastro.',
        ],
      },
    ],
  },

  // ── 274-277 · About the Authors ────────────────────────────────────────────
  {
    pageNumber: 274,
    blocks: [
      { type: 'title', text: 'ABOUT THE AUTHOR', serif: true, size: 24 },
      { type: 'divider' },
      { type: 'image', source: require('../assets/bm274-scipio.png'), aspectRatio: 882 / 556, widthPct: 88, caption: 'Hilton V. Scipio, p.k.a DJ SCIPIO', captionColor: P },
      { type: 'spacer', height: 6 },
      { type: 'body', segs: [{ text: 'Hilton V. Scipio, known by his professional name DJ SCIPIO, is an American Mixtape DJ. He was born and raised in Harlem, N.Y. While growing up, he was intrigued by the soulful sounds of Marvin Gaye, The Stylistics, The Manhattans, The Delfonics, and many others. In 1973, right after a fire destroyed the family home, DJ SCIPIO and his family moved to The Bronx, also known as the Boogie Down Bronx.' }] },
      { type: 'body', segs: [{ text: 'At about that time, the first generation of Hip-Hop was born. With headphones, a mixer, and two Technics turntables, DJ SCIPIO began to experiment with this exciting new music. His first experience with Hip-Hop music included songs such as Apache by Incredible Bongo Band, Mardi Gra by Bob James, and Catch A' }] },
    ],
  },
  {
    pageNumber: 275,
    blocks: [
      { type: 'body', segs: [{ text: 'Grove by Juice. He was influenced by DJs such as Kool Herc, GrandMaster Flash, and Grand Wizard Theodore. DJ SCIPIO credits his good friend, Greg Simpkins, p.k.a. DJ Jazzy G, as one of his first Hip-Hop influencers. DJ SCIPIO was also influenced by his brother, Stanley Scipio, p.k.a. DJ KFD, who was also a Disco, Soul, and Funk DJ. DJ SCIPIO influenced the DJ’ing career of his nephew Kevin Bush, p.k.a. DJ Cool Kev, now the Founder and CEO of Steady Breezing Entertainment. Eventually, DJ SCIPIO went on to play at several clubs and house parties. In 1989, DJ SCIPIO left N.Y.C. and moved to Orangeburg, S.C.' }] },
      { type: 'body', segs: [{ text: 'There, he discovered that he had a real niche in the music of the South. With an ear for the hottest Dirty South Music, he quickly built his reputation with street-level rap music. He soon became a household name across The Carolinas and beyond. He incorporated other genres of music, such as West Coast and Southern Soul. He kept his ears to the streets, breaking records for major and local artists. Many N.Y.C. Mixtape stores and vendors credit him for being among the first DJs to bring Dirty South mixtapes to N.Y. He quickly climbed the ranks and soon received exclusive freestyles, shoutouts from major labels, artists, radio stations, and mixtape awards. DJ Scipio has received over twenty awards, including five consecutive awards for Mixtape DJ of the Year in South Carolina. DJ SCIPIO continues to be instrumental in the entertainment and music industry.' }] },
    ],
  },
  {
    pageNumber: 276,
    blocks: [
      { type: 'title', text: 'ABOUT THE AUTHOR', serif: true, size: 24 },
      { type: 'divider' },
      { type: 'image', source: require('../assets/bm276-anita.png'), aspectRatio: 590 / 595, widthPct: 66 },
      { type: 'heading', text: 'Anita Scipio, (Former) Receptionist for\niHeartMedia, New York', color: P, size: 16 },
      { type: 'body', segs: [{ text: 'In the pulsating heart of ' }, { text: 'iHeartMedia’s', italic: true }, { text: ' legacy, a luminary figure transcended far beyond the role of a receptionist. For almost two decades, she had been the steadfast cornerstone of ' }, { text: 'iHeartMedia', italic: true }, { text: ', New York. She was an indelible presence, witnessing the rise and evolution of the entertainment industry and the individuals who have graced its halls. Meet Anita Scipio, affectionately known as ' }, { text: 'Miss Anita', italic: true }, { text: ', or ' }, { text: 'Mama', italic: true }, { text: ', by many who traversed the corridors of ' }, { text: 'iHeartMedia', italic: true }, { text: '. What began as a receptionist’s role blossomed into an iconic position where she became the face and soul of ' }, { text: 'iHeartMedia', italic: true }, { text: '. Her journey at the media giant is a chronicle of intertwined destinies with the brightest stars of the entertainment realm.' }] },
    ],
  },
  {
    pageNumber: 277,
    blocks: [
      { type: 'body', segs: [{ text: 'From precocious talents to megastars, Anita Scipio has nurtured celebrities and her many “office children,” alike. She has witnessed the transformation of budding artists into venerable icons. However, not just her proximity to fame defines Anita’s legacy.' }] },
      { type: 'body', segs: [{ text: 'Her infectious personality transcends the corridors, infusing every interaction with warmth, compassion, and an unrelenting zeal for making everyone feel at home.' }] },
      { type: 'body', segs: [{ text: 'Many colleagues, artists, and visitors found solace in her welcoming demeanor and sage advice, earning her the revered title of ' }, { text: 'Mama', italic: true }, { text: '. Her colleagues loved her contagious laughter, the empathetic ear she lent, and the invaluable wisdom she shared with a simple smile.' }] },
      { type: 'body', segs: [{ text: 'Beyond her administrative duties, Anita Scipio became a beacon of support, celebrating triumphs and consoling during tribulations. Her desk became a haven where career aspirations were nurtured, concerns were allayed, and dreams were cheered on. Her spirit of generosity extends beyond the company, as she has been an ordained minister for over twenty years. She partakes in charitable endeavors, embodying the values of kindness and community that resonate with her core.' }] },
      { type: 'body', segs: [{ text: 'In the story of iHeartMedia’s New York office, Anita Scipio stands as an enduring testament to an individual’s profound impact on an entire branch and its lives.' }] },
    ],
  },

  // ── 278 · The interviews ───────────────────────────────────────────────────
  {
    pageNumber: 278,
    blocks: [
      { type: 'title', text: 'Hip-Hop Time Capsule and...', serif: true, size: 21, color: '#000', italic: true },
      { type: 'image', source: require('../assets/bm278-bc-logo.png'), aspectRatio: 514 / 147, widthPct: 58 },
      { type: 'image', source: require('../assets/bm278-group.png'), aspectRatio: 895 / 539 },
      {
        type: 'imageRow', height: 85, captionItalic: true,
        items: [{ source: require('../assets/bm278-qr-bc.png'), aspectRatio: 1, caption: '‘The Breakfast Club\nInterview’', url: 'https://youtu.be/kYXIY3n7QXQ?si=cxMiYZ5wJdJHqo1S' }],
      },
      {
        type: 'imageRow', height: 90, captionItalic: true,
        items: [
          { source: require('../assets/bm278-qr-yee.png'), aspectRatio: 1, caption: '‘Angela Yee\nInterview’', url: 'https://youtu.be/g7O7JIrAJtU?si=ApETysLmocmsetyu' },
          { source: require('../assets/bm278-wayup-logo.png'), aspectRatio: 220 / 218 },
        ],
      },
      { type: 'image', source: require('../assets/bm278-wayup-photo.png'), aspectRatio: 941 / 575 },
    ],
  },

  // ── 279-282 · Celebrity photo album ────────────────────────────────────────
  {
    pageNumber: 279,
    blocks: [
      { type: 'title', text: 'Thank you all, for the love and great memories...', serif: true, italic: true, color: '#000', size: 17 },
      {
        type: 'photoGrid', columns: 3, aspectRatio: 355 / 468,
        photos: [
          { source: require('../assets/bm279-kool-moe-dee.png'), caption: 'Kool Moe Dee' },
          { source: require('../assets/bm279-ll-cool-j.png'), caption: 'LL Cool J' },
          { source: require('../assets/bm279-ice-t.png'), caption: 'Ice-T' },
          { source: require('../assets/bm279-dmx.png'), caption: 'DMX' },
          { source: require('../assets/bm279-snoop.png'), caption: 'Snoop Dogg' },
          { source: require('../assets/bm279-rick-ross.png'), caption: 'Rick Ross' },
          { source: require('../assets/bm279-2chainz.png'), caption: '2 Chainz' },
          { source: require('../assets/bm279-fat-joe.png'), caption: 'Fat Joe' },
          { source: require('../assets/bm279-treach.png'), caption: 'Treach' },
        ],
      },
    ],
  },
  {
    pageNumber: 280,
    blocks: [
      {
        type: 'photoGrid', columns: 3, aspectRatio: 350 / 445,
        photos: [
          { source: require('../assets/bm280-mary-j.png'), caption: 'Mary J Blige' },
          { source: require('../assets/bm280-kid-n-play.png'), caption: 'Kid ’n Play' },
          { source: require('../assets/bm280-ice-cube.png'), caption: 'Ice Cube' },
          { source: require('../assets/bm280-redman.png'), caption: 'Redman' },
          { source: require('../assets/bm280-meek-mill.png'), caption: 'Meek Mill' },
          { source: require('../assets/bm280-moneybagg.png'), caption: 'Moneybagg Yo' },
          { source: require('../assets/bm280-rev-run.png'), caption: 'Rev Run' },
          { source: require('../assets/bm280-dmc.png'), caption: 'DMC' },
          { source: require('../assets/bm280-asap-rocky.png'), caption: 'A$AP Rocky' },
        ],
      },
    ],
  },
  {
    pageNumber: 281,
    blocks: [
      {
        type: 'photoGrid', columns: 3, aspectRatio: 355 / 512,
        photos: [
          { source: require('../assets/bm281-nelly.png'), caption: 'Nelly' },
          { source: require('../assets/bm281-big-sean.png'), caption: 'Big Sean' },
          { source: require('../assets/bm281-sean-paul.png'), caption: 'Sean Paul' },
          { source: require('../assets/bm281-jeezy.png'), caption: 'Jeezy' },
          { source: require('../assets/bm281-wiz.png'), caption: 'Wiz Kalifah' },
          { source: require('../assets/bm281-french.png'), caption: 'French Montana' },
          { source: require('../assets/bm281-ti.png'), caption: 'T.I.' },
          { source: require('../assets/bm281-ludacris.png'), caption: 'Ludacris' },
          { source: require('../assets/bm281-shaggy.png'), caption: 'Shaggy' },
        ],
      },
    ],
  },
  {
    pageNumber: 282,
    blocks: [
      {
        type: 'photoGrid', columns: 3, aspectRatio: 348 / 470,
        photos: [
          { source: require('../assets/bm282-chris-brown.png'), caption: 'Chris Brown' },
          { source: require('../assets/bm282-takashi.png'), caption: 'Takashi 69' },
          { source: require('../assets/bm282-casanova.png'), caption: 'Casanova 2x' },
          { source: require('../assets/bm282-waka.png'), caption: 'Waka Flocka' },
          { source: require('../assets/bm282-mgk.png'), caption: 'Machine Gun Kelly' },
          { source: require('../assets/bm282-rawlings-common.png'), caption: 'D. Rawlings & Common' },
        ],
      },
      {
        type: 'photoGrid', columns: 2, aspectRatio: 545 / 491,
        photos: [
          { source: require('../assets/bm282-young-ma.png'), caption: 'Young M.A with a T-shirt my Granddaughter Gayla made. Thank you My Dear!' },
          { source: require('../assets/bm282-salt-n-pepa.png'), caption: 'Salt-N-Pepa' },
        ],
      },
    ],
  },

  // ── 283-284 · Will Smith & closing letter ──────────────────────────────────
  {
    pageNumber: 283,
    blocks: [
      { type: 'title', text: 'THEN LAST BUT NOT LEAST...', serif: true, italic: true, color: '#000', size: 16 },
      { type: 'title', text: 'WILL SMITH', serif: true, color: P, size: 30 },
      { type: 'divider' },
      {
        type: 'imageRow', height: 88,
        items: [{ source: require('../assets/bm283-qr.png'), aspectRatio: 1, caption: 'AND MY (BARELY)\n15 MINUTES OF FAME!', url: 'https://youtu.be/Lh0JbP6y1y0' }],
        captionItalic: true,
      },
      {
        type: 'imageRow', height: 400,
        items: [
          { source: require('../assets/bm283-collage-left.png'), aspectRatio: 545 / 1300 },
          { source: require('../assets/bm283-collage-right.png'), aspectRatio: 535 / 1260 },
        ],
      },
    ],
  },
  {
    pageNumber: 284,
    blocks: [
      {
        type: 'imageRow', height: 82,
        items: [
          { source: require('../assets/bm284-qr-willsmith.png'), aspectRatio: 1, caption: 'Will Smith', captionColor: P, url: 'https://www.tiktok.com/@wayupwithyee/video/7450201635760065823' },
          { source: require('../assets/bm284-qr-reflecting.png'), aspectRatio: 1, caption: 'Reflecting on\nMy Viral\nMoment with\nWill Smith', captionColor: P, url: 'https://www.tiktok.com/@wayupwithyee/video/7450201635760065823' },
        ],
      },
      { type: 'image', source: require('../assets/bm284-ig-post.png'), aspectRatio: 520 / 462, widthPct: 72 },
      { type: 'script', align: 'left', size: 21, color: '#111', text: 'Now that I am retired, looking back at these moments, I feel nothing but gratitude. Each picture represents a story, a connection, and a piece of Hip-Hop history that I was lucky enough to witness firsthand. These weren’t just passing encounters; they were moments filled with respect, laughter, and genuine appreciation for the culture that brought us all together. It was an honor to stand in the presence of greatness, to share smiles, conversations, and memories with the very people who defined Hip-Hop. I will forever cherish these memories, and I hope this book inspires others to celebrate their own Hip-Hop journey just as I have been blessed to celebrate mine. In Hip-Hop Time Capsule: The Next Chapter, I will tell detailed stories of every celebrity that is pictured. I look forward to sharing my remaining memories with you! Thank you. Love, Anita' },
    ],
  },
  // ── 285 · Anita's retirement party ─────────────────────────────────────────
  {
    pageNumber: 285,
    blocks: [
      { type: 'body', align: 'center', size: 16, segs: [{ text: 'This is one of the happiest days of my life! Thank you Elvis Duran! I love you! 💛', bold: true, color: P }] },
      { type: 'image', source: require('../assets/bm285-elvis.png'), aspectRatio: 643 / 375 },
      { type: 'body', align: 'center', segs: [{ text: 'Elvis Duran Gives Retiring Employee A Trip To Paris, Nashville And $10,000 | Elvis Duran Exclusive', bold: true }] },
      {
        type: 'imageRow', height: 80,
        items: [{ source: require('../assets/bm285-qr-ugly.png'), aspectRatio: 1, caption: '*Ugly Cry Alert', url: 'https://youtu.be/BIUMOnQhKFI?si=Qui7KpQqIgjuQXV0' }],
      },
      { type: 'image', source: require('../assets/bm285-invite.png'), aspectRatio: 320 / 468, widthPct: 52 },
      { type: 'body', align: 'center', size: 15, segs: [{ text: 'Hala!!! I love you too!! 💛', bold: true, color: A }] },
      {
        type: 'imageRow', height: 80,
        items: [{ source: require('../assets/bm285-qr-suge.png'), aspectRatio: 1, caption: '*Favorite Dance Song of The\nNight: ‘Suge’ by DaBaby', url: 'https://youtu.be/KvuQNNVrbtM' }],
      },
      { type: 'body', align: 'center', size: 15, segs: [{ text: '*Shout Out To DJ Whuteva and DJ Will for rocking the house! 💛', bold: true, color: P }] },
      { type: 'image', source: require('../assets/bm285-cake.png'), aspectRatio: 356 / 486, widthPct: 48 },
      {
        type: 'imageRow', height: 80,
        items: [{ source: require('../assets/bm285-qr-rob.png'), aspectRatio: 1, caption: '*Classic Song of the night:\n‘It Takes Two’ by Rob Base', url: 'https://youtu.be/4lvlPp6Fo94' }],
      },
      { type: 'image', source: require('../assets/bm285-vip.png'), aspectRatio: 319 / 424, widthPct: 50, caption: '*Anita’s Retirement Pictures and videos' },
      {
        type: 'imageRow', height: 80,
        items: [{ source: require('../assets/bm285-qr-lean.png'), aspectRatio: 1, caption: '*Song I want to be remembered by:\n‘Lean On Me’ By Bill Withers', url: 'https://youtu.be/Nx_D0VTHBag' }],
      },
      { type: 'image', source: require('../assets/bm285-karaoke.png'), aspectRatio: 381 / 498, widthPct: 58 },
    ],
  },

  // ── 286 · Heartfelt Wishes ─────────────────────────────────────────────────
  {
    pageNumber: 286,
    blocks: [
      { type: 'script', text: 'Heartfelt Wishes', size: 36 },
      { type: 'body', segs: [{ text: 'As you reach the end of your journey with us, we hope you’ve enjoyed this fun and nostalgic trip down memory lane as much as we have. May the spirit, energy, and power of Hip-Hop continue to inspire and uplift you in the years to come as you reminisce and create new memories. Your participation and support have made this experience truly unforgettable. Thank you.' }] },
      { type: 'body', segs: [{ text: 'We have one final thought that we would like to leave with you. After countless years of discussing our shared desire/dream to become authors, we finally did it! It was challenging and somewhat intimidating, but we were determined to reach our goal. As mentioned earlier, numerous technical setbacks delayed this project for weeks, an illegitimate editor who set us back for months, and several other big and small obstacles. However, that is just life, ' }, { text: 'especially', italic: true }, { text: ' when trying to reach a particular goal or fulfill your dreams.' }] },
      { type: 'body', segs: [{ text: 'Thank God, no matter how difficult it was, we never gave up, and if you enjoyed this journal/book... it was worth every minute of it. I had a vision and I saw myself one day sitting down with the Breakfast Club and also Angela Yee on her show Way Up With Angela Yee to promote Hip-Hop Time Capsule: Document Your Personal Journey. Both visions came true, and as this book makes its rounds, I know that I will get more love from other members of my Power 105.1/iHeart family. I am overjoyed.' }] },
      { type: 'body', segs: [{ text: 'So, we ask you in all your endeavors - whether Hip-Hop-related or otherwise - to be kind, committed, patient, do the right thing, have faith, and always strive to (as much as humanly possible) honor your word. Surround yourself with people who want to see you be great, and then, last but certainly not least, as ' }, { text: 'DJ Envy', bold: true }, { text: ' would say...' }] },
      { type: 'image', source: require('../assets/bm286-fearless.png'), aspectRatio: 330 / 175, widthPct: 34 },
    ],
  },

  // ── 287 · Love and Blessings ───────────────────────────────────────────────
  {
    pageNumber: 287,
    blocks: [
      { type: 'script', text: 'Love and Blessings.', size: 34 },
      { type: 'image', source: require('../assets/bm287-couple.png'), aspectRatio: 832 / 742, widthPct: 88 },
      { type: 'body', align: 'center', size: 15, segs: [{ text: 'If you enjoy linked this book, would you kindly leave a review for us on Amazon? It would be greatly appreciated. See below.', bold: true, color: P }] },
      { type: 'script', text: 'Thank You.', color: A, size: 30 },
      { type: 'divider' },
      { type: 'script', text: 'Anita and Hilton', color: A, size: 30 },
      {
        type: 'imageRow', height: 68,
        items: [
          { source: require('../assets/bm287-qr-amazon.png'), aspectRatio: 1, caption: 'AMAZON\nREVIEWS', captionColor: P, url: 'https://www.amazon.com/HIP-HOP-TIME-CAPSULE-Document-Personal/product-reviews/B0DRNSKZPK' },
          { source: require('../assets/bm287-qr-ig.png'), aspectRatio: 1, caption: 'ANITA’S\nINSTAGRAM', captionColor: P, url: 'https://rebrand.ly/3bxmsdu?rb.src=QR' },
          { source: require('../assets/bm287-qr-web.png'), aspectRatio: 1, caption: 'TEAM SCIPIO\nWEBSITE\n(SUBJECT TO\nCHANGE)', captionColor: P, url: 'https://teamscipio.com' },
          { source: require('../assets/bm287-logo.png'), aspectRatio: 368 / 240, caption: 'DJ\nSCIPIO’S\nLOGO', captionColor: P },
        ],
      },
    ],
  },
];

export function getBackMatterPage(pageNumber: number): BackMatterPageData | undefined {
  return backMatterPages.find((p) => p.pageNumber === pageNumber);
}

export function isBackMatterPage(pageNumber: number): boolean {
  return pageNumber >= 223 && pageNumber <= 287;
}

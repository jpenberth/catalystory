export const site = {
  name: "Catalystory",
  url: "https://catalystory.com",
  email: "info@catalystory.com",
  tagline: "Write truth. Inspire love.",
  description:
    "Pittsburgh and Los Angeles film production company and story consultancy. Films, shorts and music videos, plus script notes and story coaching for writers.",
};

export const links = {
  filmSite: "https://dallasandallegra.com",
  director: "https://jpenberth.com",
  writersTable: "https://jpenberth.substack.com",
  imdb: "https://www.imdb.com/name/nm2399602/",
  youtube: "https://www.youtube.com/@j.penberthraboldstorytelle7092",
  instagram: "https://www.instagram.com/jpenberthstoryteller/",
};

export const nav = [
  { href: "/productions", label: "Productions" },
  { href: "/story-consulting", label: "Story Consulting" },
  { href: "/about", label: "About" },
];

export const proof = [
  { value: "15+", label: "Years as a UPM & 1st AD" },
  { value: "22", label: "Festival placements & awards" },
  { value: "2×", label: "Austin Film Festival second round" },
  { value: "1,000+", label: "Readers of The Writer's Table" },
];

export const productionServices = [
  {
    title: "Original Films",
    href: "/productions/short-film-production",
    body: "Shorts and features built around character, with a point of view and a plan for how they'll actually get made.",
  },
  {
    title: "Directing & Producing for Hire",
    href: "/productions/directing-and-producing-for-hire",
    body: "Commissioned work with a director and a producer on your side of the table: brand films, narrative spots, short-form and series pilots.",
  },
  {
    title: "Music Videos",
    href: "/productions/music-video-director",
    body: "Videos that give a song a story, built with artists we've worked with before, like Jacob Luttrell's “Way Too Soon” and “Familiar Faces.”",
  },
  {
    title: "Development & Packaging",
    body: "From a page to a package: budgets, schedules, pitch materials and the production plan investors and partners need to see.",
  },
];

export const consultingServices = [
  {
    title: "Script Notes",
    href: "/story-consulting/script-notes",
    body: "Deep, honest notes on plot, structure, character and theme for features, pilots and shorts. Not coverage, a conversation about what your story is trying to be.",
  },
  {
    title: "Story & Outline Sessions",
    href: "/story-consulting/story-coaching",
    body: "Stuck at the idea stage or the outline? We work out the engine of the story together: the want, the obstacle, the turns and the ending that earns itself.",
  },
  {
    title: "Series Bible Review",
    href: "/story-consulting/series-bible-review",
    body: "Notes on your world, characters, season arc and pitch.",
  },
  {
    title: "Ongoing Coaching",
    href: "/story-consulting/story-coaching",
    body: "Regular Zoom sessions that keep you writing and moving, with accountability, craft and a collaborator who wants you to finish.",
  },
];

export const consultingProcess = [
  { step: "01", title: "Tell us about the story", body: "Share a logline, a draft or just an idea, and what kind of help you want." },
  { step: "02", title: "We find the right fit", body: "We'll reply within a few business days with what we'd suggest and how we'd work together." },
  { step: "03", title: "Work on the story", body: "Notes, sessions or coaching over Zoom, shaped around where you are in the process." },
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "Do you offer script coverage?",
    a: "No. Coverage rates a script for a studio's pass or consider. Notes are different. They're a developmental conversation about plot, character, structure and theme, meant to help you make the script better.",
  },
  {
    q: "Who is story consulting for?",
    a: "Screenwriters and TV writers at any stage, from a first idea to a polished draft you're about to send out. It's built for writers who want to finish what they've started.",
  },
  {
    q: "How do sessions work?",
    a: "Sessions happen over Zoom, and notes can be delivered in writing. We'll agree the format when we talk about your project.",
  },
  {
    q: "What does it cost?",
    a: "We're opening story consulting to a limited number of writers and shaping pricing around what people need. Send a note and we'll tell you what we'd recommend and what it would cost.",
  },
  {
    q: "Do you take on work for hire?",
    a: "Yes. We direct and produce commissioned films, music videos and shorts. Tell us what you're making on the contact page.",
  },
];

export type TeamMember = {
  name: string;
  role: string;
  bio: string[];
  links?: { label: string; href: string }[];
};

export const team: TeamMember[] = [
  {
    name: "J. Penberth Rabold",
    role: "Writer · Director · Story Consultant",
    bio: [
      "J. Penberth Rabold moved to Los Angeles in 2000 to make movies, and spent fifteen years as a unit production manager and first assistant director learning what a story costs once it has to stand up on a set.",
      "In 2015 he made writing the job. Since then his series bibles, pilots and features have landed on desks at Netflix, Apple, Starz and HBO. He knows what “almost” feels like, and he knows it isn't the end of the story.",
      "He directed the short Connected, a Runner-Up for the Jury Prize and Best Visuals at the 2019 Filmmakers Collaboration Challenge, and developed the series Ghosts of War, a second-round selection at the Austin Film Festival. He's now directing Dallas & Allegra and writes The Writer's Table, a newsletter for screenwriters who are trying to finish what they start.",
    ],
    links: [
      { label: "jpenberth.com", href: links.director },
      { label: "IMDb", href: links.imdb },
      { label: "The Writer's Table", href: links.writersTable },
    ],
  },
  {
    name: "Shannon Geary",
    role: "Producer",
    bio: [
      "Shannon Geary spent 21 years as a music educator and theater director, teaching young artists how to turn a page into a performance.",
      "She brought that instinct for people and process to producing and set photography, and was mentored by the late Stephen Emery.",
      "Producing a film means putting together a thousand puzzle pieces, and she loves that part of it, on films of any type.",
    ],
  },
];

export const principles = [
  {
    title: "People first",
    body: "Plot is what happens. Story is who it happens to, and what it costs them.",
  },
  {
    title: "Imagination, with a pulse",
    body: "Worlds far beyond our own, or long ago, where the people feel real.",
  },
  {
    title: "Built to be made",
    body: "Fifteen years on set taught us that a great script is also one you can shoot, schedule and finance.",
  },
];

export const site = {
  name: "Catalystory",
  url: "https://catalystory.com",
  email: "info@catalystory.com",
  tagline: "Write truth. Inspire love.",
  description:
    "Catalystory is a Pittsburgh and Los Angeles film production company and story consultancy. We produce and direct character-driven films, shorts and music videos, and offer script and story consulting for writers.",
};

export const links = {
  campaign: "https://seedandspark.com/fund/dallasallegra",
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
  { href: "/work/dallas-and-allegra", label: "Work" },
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
    body: "Shorts and features built around character, with a point of view and a plan for how they'll actually get made.",
  },
  {
    title: "Directing & Producing for Hire",
    body: "Commissioned work with a director and a producer on your side of the table: brand films, narrative spots, short-form and series pilots.",
  },
  {
    title: "Music Videos",
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
    body: "Deep, honest notes on plot, structure, character and theme for features, pilots and shorts. Not coverage, a conversation about what your story is trying to be.",
  },
  {
    title: "Story & Outline Sessions",
    body: "Stuck at the idea stage or the outline? We work out the engine of the story together: the want, the obstacle, the turns and the ending that earns itself.",
  },
  {
    title: "Series Bible Review",
    body: "Notes on the world, the characters, the season arc and the pitch for television, from someone who has written series bibles that reached the desks of Netflix, Apple, Starz and HBO.",
  },
  {
    title: "Ongoing Coaching",
    body: "Regular Zoom sessions that keep you writing and moving, with accountability, craft and a collaborator who wants you to finish.",
  },
];

export const consultingProcess = [
  { step: "01", title: "Tell us about the story", body: "Share a logline, a draft or just an idea, and what kind of help you want." },
  { step: "02", title: "We find the right fit", body: "We'll reply within a few business days with what we'd suggest and how we'd work together." },
  { step: "03", title: "Work on the story", body: "Notes, sessions or coaching over Zoom, shaped around where you are in the process." },
];

export const faqs = [
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

export const film = {
  title: "Dallas & Allegra",
  tagline: "Love is destruction.",
  logline:
    "She's got a plane ticket to Oxford. He's got a safe full of cash and one last score. In a steel town built on dead dreams, they fall for each other anyway, and discover the fastest way out of hell is straight through it, together.",
};

export const stills = [
  { src: "/images/wildcats-bleachers.jpg", alt: "Empty football bleachers marked 'Home of the Wildcats' overlook a fog-covered steel mill town at dusk." },
  { src: "/images/dallas-mirror.jpg", alt: "Dallas washes his hands at a cracked bathroom mirror, the mill skyline out the window." },
  { src: "/images/mill-handoff.jpg", alt: "Two silhouetted figures exchange a bag inside the ruins of the old steel mill at sunset." },
  { src: "/images/lit-window.jpg", alt: "A single lit window glows in an otherwise dark row of brick houses at night." },
  { src: "/images/still-here-street.jpg", alt: "A decayed Bellvue Falls street lined with burned-out buildings." },
  { src: "/images/truck-warner-marquee.jpg", alt: "Dallas and Allegra sit in the bed of a truck overlooking Bellvue Falls, the Warner theater marquee glowing below." },
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
      "As Catalystory's producer, and a set photographer, she brings the same instinct for people, process and showing up to every film we make.",
    ],
  },
];

export const principles = [
  {
    title: "Character first",
    body: "Plot is what happens. Story is who it happens to, and what it costs them. We start with the people.",
  },
  {
    title: "Built to be made",
    body: "Fifteen years on set taught us that a great script is also one that can be shot, scheduled and financed.",
  },
  {
    title: "Human connection",
    body: "We make, and help make, stories about people finding a way to each other, and the love that makes us want to survive.",
  },
];

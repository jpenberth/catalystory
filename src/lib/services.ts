export type ServiceFaq = { q: string; a: string };
export type ServiceSection = { heading: string; body?: string[]; list?: { label: string; text: string }[] };

export type ServiceDef = {
  slug: string;
  group: "story-consulting" | "productions";
  navLabel: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: [string, string];
  intro: string;
  sections: ServiceSection[];
  faqs: ServiceFaq[];
  ctaHeading: string;
  ctaBody: string;
  ctaLabel: string;
  serviceType: string;
};

const credentials =
  "J. Penberth Rabold spent fifteen years as a unit production manager and first assistant director before making writing his full-time job in 2015. His series bibles, pilots and features have reached desks at Netflix, Apple, Starz and HBO.";

export const services: ServiceDef[] = [
  {
    slug: "script-notes",
    group: "story-consulting",
    navLabel: "Script Notes",
    metaTitle: "Script Notes & Screenplay Consulting",
    metaDescription:
      "Honest script notes on plot, structure, character and theme for features, pilots and shorts, from working writer-director J. Penberth Rabold. Not coverage.",
    eyebrow: "Story Consulting",
    h1: ["Script notes", "from a working writer."],
    intro:
      "Honest, specific notes on plot, structure, character and theme for features, pilots and shorts. This isn't coverage. It's a conversation about what your story is trying to be, and what's getting in its way.",
    sections: [
      {
        heading: "What the notes cover",
        list: [
          { label: "Plot and structure", text: "Where the story turns, where it stalls, and what the ending has to earn." },
          { label: "Character", text: "What each person wants, what they need, and what every choice costs them." },
          { label: "Theme and stakes", text: "What the story is really about, and why it matters to the person reading it." },
          { label: "Pacing, tone and clarity", text: "Where a reader leans in, and where they drift." },
        ],
      },
      {
        heading: "Notes, not coverage",
        body: [
          "Coverage is a pass-or-consider verdict written for someone deciding whether to read your script. Notes are written for you, the writer. They're about making the script better, not grading it.",
        ],
      },
      {
        heading: "Who it's for",
        body: [
          "Screenwriters and TV writers at any stage, from a first draft to a script you're about to send out. If you've come close and can't tell what's missing, this is where we start.",
        ],
      },
      {
        heading: "Who gives the notes",
        body: [credentials],
      },
      {
        heading: "How it works",
        list: [
          { label: "1. Tell us about the script", text: "Send a logline, the draft if you have one, and where you feel stuck." },
          { label: "2. We reply", text: "We'll tell you how we'd approach it and what it would cost." },
          { label: "3. Get your notes", text: "Over Zoom, in writing, or both, depending on what helps most." },
        ],
      },
    ],
    faqs: [
      {
        q: "Is this script coverage?",
        a: "No. Coverage rates a script for a studio's pass or consider. Notes are a developmental conversation about plot, character, structure and theme, meant to help you make the script better.",
      },
      { q: "What kinds of scripts do you read?", a: "Feature screenplays, TV pilots, short films and series material." },
      {
        q: "How much do script notes cost?",
        a: "It depends on the length of the material and the kind of help you want. Send a note about your project and we'll tell you what we'd recommend and what it would cost.",
      },
      {
        q: "How are notes delivered?",
        a: "Over Zoom, in writing, or a mix of both. We'll agree on the format when we talk about your script.",
      },
    ],
    ctaHeading: "Tell us about your script.",
    ctaBody: "A logline, a draft, or just an idea is enough to start.",
    ctaLabel: "Request script notes",
    serviceType: "Script notes and screenplay consulting",
  },
  {
    slug: "series-bible-review",
    group: "story-consulting",
    navLabel: "Series Bible Review",
    metaTitle: "Series Bible Review for TV Writers",
    metaDescription:
      "Notes on your series bible, world, characters, season arc and pitch, from a writer whose bibles and pilots have reached Netflix, Apple, Starz and HBO.",
    eyebrow: "Story Consulting",
    h1: ["Series bible review", "for TV writers."],
    intro:
      "A series bible has to do two jobs at once: make someone fall in love with a world, and prove the show can keep going. We review yours for both.",
    sections: [
      {
        heading: "What we look at",
        list: [
          { label: "World and tone", text: "Whether the setting feels specific, lived-in and impossible to confuse with another show." },
          { label: "Characters", text: "What each lead wants, what stands in the way, and how they change over time." },
          { label: "The engine", text: "The reason the story can keep going, season after season." },
          { label: "Season arc and pitch", text: "How the first season builds, and how the document sells it." },
        ],
      },
      {
        heading: "Where bibles stall",
        body: [
          "Most bibles that stall are missing the engine. The characters are vivid and the world is rich, but there's nothing that makes episode six different from episode two. Notes focus on finding it.",
        ],
      },
      {
        heading: "Experience",
        body: [
          credentials,
          "He developed the series Ghosts of War, a second-round selection at the Austin Film Festival.",
        ],
      },
    ],
    faqs: [
      { q: "What should I send for a series bible review?", a: "The bible, the pilot if you have one, and a logline. If you're stuck on something specific, tell us." },
      { q: "Do you review for streaming or network shows?", a: "Both. The notes are about the story: the engine, the characters and the season arc, whatever the platform." },
      {
        q: "Can you help with the pitch itself?",
        a: "Yes. Notes can cover how the bible reads as a pitch, including what to lead with and what to cut.",
      },
      { q: "How much does it cost?", a: "It depends on the size of the document and the kind of help you want. Send us a note and we'll tell you." },
    ],
    ctaHeading: "Have a series in the works?",
    ctaBody: "Tell us about the show and where it's stuck.",
    ctaLabel: "Request a bible review",
    serviceType: "Series bible review",
  },
  {
    slug: "story-coaching",
    group: "story-consulting",
    navLabel: "Story Coaching",
    metaTitle: "Story Coaching & Outline Sessions",
    metaDescription:
      "One-on-one Zoom story coaching and outline sessions for screenwriters who want a collaborator to help them work out the story and finish the script.",
    eyebrow: "Story Consulting",
    h1: ["Story coaching", "that keeps you writing."],
    intro:
      "One-on-one Zoom sessions for writers who want a collaborator: someone to work out the story with, hold the deadline, and help you reach the end.",
    sections: [
      {
        heading: "Outline sessions",
        body: [
          "Stuck at the idea or the outline? We work out the engine of the story together: the want, the obstacle, the turns, and an ending that earns itself. You leave with a story you can write, not just a set of notes.",
        ],
      },
      {
        heading: "Ongoing coaching",
        body: [
          "Regular sessions on a schedule we agree on, built around where you are. Craft, accountability, and a collaborator who wants you to finish.",
        ],
      },
      {
        heading: "Who it's for",
        body: [
          "Writers who've started more than they've finished, who work better with someone in their corner, or who want to learn the craft while writing their own script.",
        ],
      },
      {
        heading: "Who you'll work with",
        body: [credentials],
      },
    ],
    faqs: [
      { q: "How do coaching sessions work?", a: "Sessions are one-on-one over Zoom, on a schedule we agree on. Between sessions you write, and we pick up where you left off." },
      {
        q: "How is coaching different from script notes?",
        a: "Notes respond to pages you've written. Coaching works with you while you write, from outline through draft, with the accountability to keep going.",
      },
      { q: "What if I only have an idea?", a: "That's a fine place to start. Outline sessions are built for exactly that." },
      { q: "How much does it cost?", a: "It depends on how often we meet and for how long. Send us a note and we'll recommend a plan." },
    ],
    ctaHeading: "Ready to finish it?",
    ctaBody: "Tell us what you're working on and where you want to get.",
    ctaLabel: "Ask about coaching",
    serviceType: "Screenwriting story coaching",
  },
  {
    slug: "music-video-director",
    group: "productions",
    navLabel: "Music Videos",
    metaTitle: "Music Video Director, Pittsburgh & LA",
    metaDescription:
      "Story-driven music videos directed by J. Penberth Rabold and produced with Shannon Geary, from treatment to delivery. Based in Pittsburgh and Los Angeles.",
    eyebrow: "Productions",
    h1: ["Music video director", "in Pittsburgh & Los Angeles."],
    intro:
      "Story-driven music videos for artists who want the video to mean something. Directed by J. Penberth Rabold and produced with Shannon Geary, from the first treatment to the final delivery.",
    sections: [
      {
        heading: "Videos with a story",
        body: [
          "A song already carries a story. We find the one the video should tell, and build it around the artist, so the video feels like part of the song instead of an add-on to it.",
        ],
      },
      {
        heading: "Experience",
        body: [
          "Before he directed, J. Penberth Rabold spent fifteen years as a unit production manager and first assistant director on music videos, shorts and features. He has directed videos for artist Jacob Luttrell, including “Way Too Soon” and “Familiar Faces.”",
        ],
      },
      {
        heading: "Planned to be made",
        body: [
          "Knowing what a shot costs on set means a treatment can be ambitious and still get shot. We build the plan, schedule and budget alongside the idea.",
        ],
      },
      {
        heading: "How it works",
        list: [
          { label: "1. Treatment", text: "We listen to the song and write the idea." },
          { label: "2. Plan", text: "Budget, schedule, locations and crew." },
          { label: "3. Shoot", text: "Directed on set with a producer keeping everything moving." },
          { label: "4. Edit and delivery", text: "Cut, finished and delivered in the formats you need." },
        ],
      },
    ],
    faqs: [
      { q: "Where do you shoot?", a: "We're based in Pittsburgh and Los Angeles. Tell us where your project needs to be shot and we'll work out how." },
      { q: "How much does a music video cost?", a: "It depends on the idea, the locations and the crew. Send us the song and your budget range, and we'll tell you what's possible." },
      { q: "Do you work with independent artists?", a: "Yes. We love working with artists who care about the story, whatever the size of the project." },
    ],
    ctaHeading: "Have a song that needs a video?",
    ctaBody: "Send us the track, your timeline and a rough budget.",
    ctaLabel: "Start a music video",
    serviceType: "Music video direction and production",
  },
  {
    slug: "short-film-production",
    group: "productions",
    navLabel: "Short Films",
    metaTitle: "Short Film Production & Directing",
    metaDescription:
      "Character-driven short films written, directed and produced by Catalystory, with director and producer services for other storytellers.",
    eyebrow: "Productions",
    h1: ["Short film production", "and directing."],
    intro:
      "We write, direct and produce character-driven short films, and take on shorts for other storytellers as director, producer, or both.",
    sections: [
      {
        heading: "Our shorts",
        body: [
          "J. Penberth Rabold directed Connected, a short about a young woman struggling to find an authentic connection with her father in a technologically connected world. It was a Runner-Up for both the Jury Prize and Best Visuals at the 2019 Filmmakers Collaboration Challenge.",
          "Our current short is Dallas & Allegra, a Rust Belt Romeo and Juliet, produced by Shannon Geary and shot in Pittsburgh.",
        ],
      },
      {
        heading: "What we do",
        list: [
          { label: "Directing", text: "A director who also writes, with a point of view on character and performance." },
          { label: "Producing", text: "A producer who loves putting the puzzle pieces together." },
          { label: "Production management", text: "Scheduling and budgets by someone who spent fifteen years as a UPM and first AD." },
          { label: "Development", text: "Story notes and script work before the camera ever rolls." },
        ],
      },
    ],
    faqs: [
      { q: "Do you produce other people's scripts?", a: "Yes, as director, producer, or both, depending on the project. Tell us about the story." },
      { q: "Where do you shoot?", a: "We're based in Pittsburgh and Los Angeles. Tell us where your project needs to be shot and we'll work out how." },
      { q: "Can you help me get a script ready to shoot?", a: "Yes. Our story consulting can take a script from draft to shootable before production begins." },
    ],
    ctaHeading: "Have a short to make?",
    ctaBody: "Tell us about the script, the format and the timeline.",
    ctaLabel: "Start a short film",
    serviceType: "Short film production and directing",
  },
  {
    slug: "directing-and-producing-for-hire",
    group: "productions",
    navLabel: "Director & Producer for Hire",
    metaTitle: "Director & Producer for Hire",
    metaDescription:
      "Hire Catalystory's director and producer for commissioned films, music videos and narrative work in Pittsburgh and Los Angeles.",
    eyebrow: "Productions",
    h1: ["Director and producer", "for hire."],
    intro:
      "Commissioned work with a director who writes and a producer who plans. Short films, music videos and other narrative projects, on your side of the table from first idea to final delivery.",
    sections: [
      {
        heading: "What we take on",
        list: [
          { label: "Short films", text: "Directing and producing for your script, or developing one with you." },
          { label: "Music videos", text: "Story-driven videos for artists and labels." },
          { label: "Other narrative work", text: "If it tells a story, tell us about it." },
        ],
      },
      {
        heading: "Why hire us",
        body: [
          "J. Penberth Rabold directs and writes, and spent fifteen years as a unit production manager and first assistant director, so he knows what a story costs once it has to stand up on a set. Shannon Geary produces, with 21 years behind her as a music educator and theater director. Together, you get a creative partner and a plan.",
        ],
      },
    ],
    faqs: [
      { q: "Are you available to hire as both director and producer?", a: "Yes, together or separately, depending on what the project needs." },
      { q: "Where are you based?", a: "Pittsburgh and Los Angeles. Tell us where the project needs to shoot." },
      { q: "How do I get a quote?", a: "Send us the story, the format, your timeline and a rough budget range. We'll tell you what we'd do and what it would cost." },
    ],
    ctaHeading: "Have something to make?",
    ctaBody: "Tell us about the story, the format, the timeline and the budget.",
    ctaLabel: "Start a project",
    serviceType: "Film directing and producing for hire",
  },
];

export const servicesByGroup = (group: ServiceDef["group"]) => services.filter((s) => s.group === group);
export const getService = (group: ServiceDef["group"], slug: string) =>
  services.find((s) => s.group === group && s.slug === slug);

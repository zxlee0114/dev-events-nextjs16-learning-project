export type EventItem = {
  // id: string;
  title: string;
  slug: string;
  date: string; // ISO-ish or human readable
  time: string;
  location: string;
  // description?: string;
  image: string; // path to public image, e.g. /images/event1.png
  // url?: string;
  // tags?: string[];
  // type?: "conference" | "hackathon" | "meetup" | "workshop";
};

export const events: EventItem[] = [
  // {
  //   id: "devcon-2026",
  //   title: "DevCon 2026 — Global Developer Conference",
  //   slug: "devcon-2026",
  //   date: "2026-03-15",
  //   time: "09:00 - 18:00",
  //   location: "San Francisco, CA / Hybrid",
  //   description:
  //     "A large annual conference for engineers across web, cloud and ML. Keynotes, deep-dive tracks, and hands-on labs.",
  //   image: "/images/event-full.png",
  //   url: "https://www.devcon.org",
  //   tags: ["web", "cloud", "ml"],
  //   type: "conference",
  // },
  {
    // id: "react-europe-2026",
    title: "React Europe 2026",
    slug: "react-europe-2026",
    date: "2026-04-22",
    time: "10:00 - 17:30",
    location: "Paris, France",
    // description:
    //   "A focused conference for React developers with talks from core contributors and community leaders.",
    image: "/images/event1.png",
    // url: "https://www.reacteurope.org",
    // tags: ["react", "frontend", "javascript"],
    // type: "conference",
  },
  {
    // id: "nextjs-hackathon-2026",
    title: "Next.js Global Hackathon 2026",
    slug: "nextjs-hackathon-2026",
    date: "2026-02-07",
    time: "48 hours",
    location: "Online",
    // description:
    //   "A weekend hackathon building with Next.js, Edge functions, and Jamstack patterns. Prizes for developer tooling and UX.",
    image: "/images/event2.png",
    // url: "https://hackathon.nextjs.org",
    // tags: ["nextjs", "hackathon", "jamstack"],
    // type: "hackathon",
  },
  {
    // id: "kube-summit-2026",
    title: "Kube Summit 2026",
    slug: "kube-summit-2026",
    date: "2026-05-12",
    time: "09:00 - 17:00",
    location: "Berlin, Germany",
    // description:
    //   "Cloud native conference with sessions on Kubernetes, service meshes, and platform engineering best practices.",
    image: "/images/event3.png",
    // url: "https://www.kubesummit.io",
    // tags: ["kubernetes", "cloud", "devops"],
    // type: "conference",
  },
  {
    // id: "js-monthly-meetup-nyc",
    title: "JS Monthly — NYC Meetup",
    slug: "js-monthly-nyc",
    date: "2025-11-18",
    time: "18:30 - 21:00",
    location: "New York, NY",
    // description:
    //   "Local JavaScript meetup with lightning talks and open networking for developers in the NYC area.",
    image: "/images/event4.png",
    // url: "https://www.meetup.com/js-monthly-nyc",
    // tags: ["javascript", "community", "meetup"],
    // type: "meetup",
  },
  {
    // id: "aws-builders-day-2026",
    title: "AWS Builders Day — Serverless & Observability",
    slug: "aws-builders-2026",
    date: "2026-06-02",
    time: "09:30 - 16:30",
    location: "Seattle, WA",
    // description:
    //   "Hands-on workshops and customer stories focused on serverless architectures and observability tooling.",
    image: "/images/event5.png",
    // url: "https://aws.amazon.com/events/builders-day",
    // tags: ["serverless", "observability", "cloud"],
    // type: "workshop",
  },
  {
    // id: "local-hack-night",
    title: "Local Hack Night — Community Edition",
    slug: "local-hack-night",
    date: "2025-12-05",
    time: "18:00 - 22:00",
    location: "Community Hub — Remote-friendly",
    // description:
    //   "Casual monthly hack night for beginners and experienced devs to pair on small projects and open-source contributions.",
    image: "/images/event6.png",
    // url: "https://community.example.org/hack-night",
    // tags: ["community", "opensource", "pairing"],
    // type: "meetup",
  },
];

export default events;

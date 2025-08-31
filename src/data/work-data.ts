export type WorkData = {
  name: string;
  year: number;
  title: string;
  note: {
    icon?: string;
    content: string;
  };
  showcase: {
    type: "image" | "video";
    link: string;
  }[];
};

export const workData = [
  {
    name: "ProxyIts",
    year: 2025,
    title: "Web3 Cross-Chain Payment Platform.",
    note: {
      icon: "material-symbols:trophy",
      content: "2nd Place ― Lisk Builders Challenge: Round 2",
    },
    showcase: [
      {
        type: "video",
        link: "work-proxyits-1.mp4",
      },
      {
        type: "image",
        link: "work-proxyits-2.png",
      },
    ],
  },
  {
    name: "CIA",
    title: "On-Chain Analysis Platform for OJK.",
    year: 2025,
    note: {
      icon: "material-symbols:trophy",
      content: "Top 15 out of 3000 ― BI-OJK Hackathon",
    },
    showcase: [
      {
        type: "video",
        link: "work-cia-1.mp4",
      },
      {
        type: "image",
        link: "work-cia-2.png",
      },
    ],
  },
  {
    name: "Sakuin",
    year: 2025,
    title: "Centralized E-Wallet Payment System.",
    note: {
      content: "GEMASTIK 2025",
    },
    showcase: [
      {
        type: "image",
        link: "work-sakuin-1.png",
      },
      {
        type: "image",
        link: "work-sakuin-2.png",
      },
    ],
  },
  {
    name: "Catalyst",
    title: "Open Source Postman Alternative.",
    year: 2025,
    note: {
      icon: "",
      content: "Passion Project",
    },
    showcase: [
      {
        type: "video",
        link: "work-catalyst-1.mp4",
      },
      {
        type: "image",
        link: "work-catalyst-2.png",
      },
    ],
  },
] satisfies WorkData[];

import ogImageSrc from "@images/hero.avif";

interface Link {
  label: string;
  href: string;
}

interface IconLink extends Link {
  icon: string;
}

export interface Icon {
  icon: string;
  alt: string;
}

interface LinkCategory {
  title: string;
  href?: string;
  links: Link[];
}

export interface Person {
  name: string;
  role: string;
  about: string;
  image?: ImageMetadata;
  socials?: IconLink[];
}

export interface FAQ {
  question: string;
  answer: string;
}

interface HeaderLink extends Link {
  links?: Link[];
}

export interface Session {
  title: string;
  ages: string;
  day: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday";
  time: string;
  description: string;
  type: "After School" | "During School Enrichment";
  signupLink?: string;
  starts?: string;
}

export const board: Person[] = [
  {
    name: "Lillian Pak",
    role: "Chair",
    about:
      "Kia ora koutou katoa! Lillian Pak has had a varied career in education, libraries, and public service, in a range of roles covering programme and project management, senior management, teaching, curriculum and materials development, teacher training, quality assurance and stakeholder engagement, in both Aotearoa New Zealand and overseas. She also brings extensive governance, and grassroots community development experience. What she loves most about Tūhura Tech is how it removes barriers and provides free and equitable access to education, learning and knowledge.",
  },
  {
    name: "Simon McCallum",
    role: "Treasurer",
    about: "",
  },
  {
    name: "John Barrow",
    role: "Secretary",
    about:
      "With a range of experience spanning decades both in industry and education John provides a unique voice that bridge both industry and the education sector together. Currently a DigiTech teacher at Wellington High School they are also actively involved directly in our sessions at their school.",
  },
  {
    name: "Leon Bowie",
    role: "Trustee",
    about:
      "Leon is the Head of Operations for Tūhura Tech with a love of technology and a passion for education. Working in this space for the past 8 years they have a strong focus on supporting students and enhancing opportunities.",
  },
  {
    name: "Thomas Jackson",
    role: "Trustee",
    about:
      "Currently at Wellington High School as a student they have been attending the Tūhura Tech sessions since 2022 when they started and currently serve as a student voice on our board.",
  },
  {
    name: "Jerome Dolman",
    role: "Trustee",
    about: "",
  },
  {
    name: "Rose Langridge",
    role: "Trustee",
    about:
      "Rose has been working in the education industry for over a decade. Rose currently works with akonga in senior high school at Wa Ora Montessori School. Tuhura Tech's mission of equitable access to learning is a large reason why Rose has joined the board.",
  },
  {
    name: "Aleisha Amohia",
    role: "Trustee",
    about:
      "",
  },
  {
    name: "Kendra Ross",
    role: "Trustee",
    about:
      "",
  },
  {
    name: "Carl Ross",
    role: "Trustee",
    about:
      "",
  },
];

export const people: Person[] = [
  {
    name: "Leon Bowie",
    role: "Founder",
    about:
      "Actively involved in technology outreach for the past 7 years running Code Clubs, coaching robotics teams and working in industry as a DevOps Engineer. One of the founders who now runs Tūhura Tech working with our staff, volunteers and sponsors to make sure all kids can get the best support possible.",
    socials: [
      {
        label: "Mail",
        icon: "mdi:email",
        href: "mailto:leon@tuhuratech.org.nz",
      },
    ],
  },
  {
    name: "Ai Winters",
    role: "Head Mentor",
    about:
      "Doing a Bachelors of Design Innovation in Game Design, they have a firce passion for all things creation. From cybersecurity to 3D modelling, they strive to make wonders and spawn awe. Helping others on their path of creation is of top priority.",
  },
  {
    name: "Jennifer Howard",
    role: "Head Mentor",
    about:
      "Interested in supporting and helping the next generation of tech enthusiasts, she mostly enjoys working with the younger students and introducing them to technology.",
  },
  {
    name: "Abigail Clennell",
    role: "Head Mentor",
    about:
      "Abby has 2 degrees with majors varying from AI to Computer Graphics and Mathematics and currently pursuing a Master's Thesis on AI and wildlife conservation. She has tutored many university courses that range from Cybersecurity to Concurrent Programming and even Game Development. She is a leader at Karori West and Wadestown Scout Groups working with ages 8-18.",
  },
  {
    name: "Arianna Mulligan",
    role: "Head Mentor",
    about:
      "Ari has nearly finished her Computer Science and Media Design degree, and is passionate about giving kids an understanding and confidence in technology.",
  },
  {
    name: "Lillian Hide-Tobin",
    role: "Head Mentor",
    about:
      "Lillian has freshly graduated with degrees in Computer Science and Psychology. She has a great passion for the power of tech to act as a powerful creative medium, whether in Game Development, algorithmic audio and video, storytelling, or anything else. She strives to encourage young women to engage with technology",
  },
  
  // {
  //   name: "Zelle Marcovicci",
  //   role: "Head Mentor",
  //   about:
  //     "Zelle graduated with a Bachelors of Creative Media Production, specializing in video games and other kinds of wobbly interactive technology. In addition to her work with Tūhura Tech, she teaches immersive storytelling, programming and web development to first- and second-year students at Massey University.",
  // },
  {
    name: "Nixia C",
    role: "Volunteer - Graphic Designer",
    about:
      "A passionate graphical designer, Nixia is responsible for all of our graphics and generously donates her time and skills to make our content look professional and clear. They originally designed our Logo and now actively support us on all materials.",
  },
  {
    name: "Abhishek Rameshanand",
    role: "Volunteer - Social Media Manager",
    about: "",
  },
  {
    name: "Izaak Karasawa",
    role: "Volunteer - Cybersecurity",
    about: "",
  }
];

export const SITE = {
  title: "Tūhura Tech",
  tagline: "Empowering the next generation through Technology Education.",
  description: "Empowering the next generation through Technology Education",
  description_short:
    "Empowering the next generation through Technology Education",
  url: "https://tuhuratech.org.nz",
  image: ogImageSrc,
};

export const footerLinks: LinkCategory[] = [
  {
    title: "Tūhura Tech",
    links: [
      { label: "Wiki", href: "https://wiki.tuhuratech.org.nz" },
      { label: "GitHub", href: "https://github.com/Tuhura-Tech" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Support Us", href: "/support" },
      {
        label: "Identity proofs",
        href: "https://keyoxide.org/contact@tuhuratech.org.nz",
      },
    ],
  },
  {
    title: "Our Mahi",
    href: "/what-we-do",
    links: [
      {
        label: "Sessions",
        href: "/mahi/sessions",
      },
      {
        label: "Schooltime Sessions",
        href: "/mahi/school-sessions",
      },
      {
        label: "Teacher Workshops",
        href: "/mahi/teacher-workshops",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        label: "Mastodon",
        href: "https://mastodon.nzoss.nz/@tuhuratech",
      },
    ],
  },
];

export const headerLinks: HeaderLink[] = [
  {
    label: "What We Do",
    href: "/what-we-do",
    links: [
      { label: "What We Do", href: "/what-we-do" },
      { label: "Sessions", href: "/mahi/sessions" },
      { label: "Workshops", href: "/mahi/workshops" },
      { label: "Kura and Kaiako Support", href: "/mahi/kura-kaiako" },
    ],
  },
  { label: "Sessions", href: "/mahi/sessions" },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Wiki",
    href: "https://wiki.tuhuratech.org.nz",
  },
  {
    label: "Donate",
    href: "https://givealittle.co.nz/org/tuhura-tech",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
];

export const socials: IconLink[] = [
  {
    label: "Mastodon",
    icon: "mdi:mastodon",
    href: "https://mastodon.nzoss.nz/@tuhuratech",
  },
  {
    label: "Facebook",
    icon: "mdi:facebook",
    href: "https://www.facebook.com/p/Tūhura-Tech-100083052084710/",
  },
  {
    label: "LinkedIn",
    icon: "mdi:linkedin",
    href: "https://www.linkedin.com/company/tuhuratech",
  },
  {
    label: "Instagram",
    icon: "mdi:instagram",
    href: "https://www.instagram.com/tuhura_tech",
  },
  {
    label: "Discord",
    icon: "mdi:discord",
    href: "https://discord.gg/PNxh7cwKfQ",
  }
];

export const coreUrls: Link[] = [];

export const faqs: FAQ[] = [
  {
    question: "Who is this for?",
    answer:
      "We support and deliver content to akonga from years 5 to 13 in the Wellington, Lower & Upper Hutt regions. We are wanting to expand into Porirua this year.",
  },
  {
    question: "How are we funded?",
    answer:
      "As a charitable trust we rely on sponsorships and donations from companies and the community; this allows us to run all of our sessions for free. If you or your company are interested in supporting us, we would love to talk to you. ",
  },
  {
    question: "How do I help out?",
    answer:
      "We are looking for people with an interest in technology and working with rangatahi from current University students to industry professionals.",
  },
  {
    question: "How do I get involved as a learner?",
    answer:
      "If we are not already running sessions at your school, feel free to come to one of our after-school sessions at a nearby school, or ask your kaiako (school) to get in touch with us.",
  },
  {
    question: "What areas of Technology do we cover?",
    answer:
      "We cover many areas of technology with a focus on expanding what is covered in schools — this includes areas such as robotics, cybersecurity, Artificial Intelligence/Machine Learning and more.",
  },
  {
    question: "Who are we?",
    answer:
      "We are a group of volunteers, kaiako and industry professionals who all care about technology and want to support rangatahi.",
  },
];

export const sessions: { location: string; sessions: Session[] }[] = [
  {
    location: "Wellington",
    sessions: [
      // {
      //   title: "Wellington Girls College",
      //   ages: "9 - 13",
      //   day: "Monday",
      //   time: "3:30pm to 5:30pm",
      //   description:
      //     "Session to explore all areas of technology, work on projects and explore. This term there is a focus on Cybersecurity/Ethical Hacking.",
      //   type: "After School",
      // },
      // {
      //   title: "Wellington High School",
      //   ages: "9 - 13",
      //   day: "Tuesday",
      //   time: "3:30pm to 5:30pm",
      //   description:
      //     "Session to explore all areas of technology, work on projects and explore. This term there is a focus on Cybersecurity/Ethical Hacking.",
      //   type: "After School",
      // },
      {
        title: "Te Tūhunga Rau Community Centre",
        ages: "5 - 8",
        day: "Tuesday",
        time: "3:30pm to 5:30pm",
        description: "Introduction to programming using Python.",
        type: "After School",
        signupLink: "https://forms.gle/uCXEsoksTq3tSEBfA",
      },
      {
        title: "Cummings Park (Ngaio) Library",
        ages: "5 - 8",
        day: "Tuesday",
        time: "3:30pm to 5:15pm",
        description: "Introduction to programming using Scratch.",
        type: "After School",
        signupLink: "https://forms.gle/zDJQfMLadVoSLYzt8",
      },
      // {
      //   title: "Wellington College",
      //   ages: "9 - 13",
      //   day: "Wednesday",
      //   time: "3:30pm to 5:30pm",
      //   description:
      //     "Session to explore all areas of technology, work on projects and explore. This term there is a focus on Cybersecurity/Ethical Hacking.",
      //   type: "After School",
      // },
      {
        title: "Te Whare Pukapuka o Te Māhanga - Karori Library",
        ages: "5 - 8",
        day: "Wednesday",
        time: "3:30pm to 5:30pm",
        description: "Introduction to programming using Python.",
        type: "After School",
        signupLink: "https://forms.gle/PqwLGaTZJPuT4tLc6",
      },
      {
        title: "Johnsonville Library Makerspace",
        ages: "5 - 8",
        day: "Wednesday",
        time: "3:30pm to 5:30pm",
        description: "Introduction to programming using Scratch.",
        type: "After School",
        signupLink: "https://forms.gle/DL9esYDZBUUv5Yvy8",
      },
      {
        title: "Newtown Primary School",
        ages: "5 - 8",
        day: "Thursday",
        time: "3:30pm to 5:30pm",
        description: "Intorduction to programming exploring game design",
        type: "After School",
        signupLink: "https://forms.gle/uTfyK5yCncdFbbQk6",
      }
      {
        title: "Ruakawa Community Centre",
        ages: "5 - 8",
        day: "Thursday",
        time: "3:30pm to 5:30pm",
        description: "Introduction to programming using Scratch.",
        type: "After School",
        signupLink: "https://forms.gle/yxiPE7ccqQ6SZ5DZ9",
      },
      // {
      //   title: "Tawa College",
      //   ages: "9 - 13",
      //   day: "Thursday",
      //   time: "3:30pm to 5:30pm",
      //   description:
      //     "Session to explore all areas of technology, work on projects and explore.",
      //   type: "After School",
      // },
      {
        title: "South Wellington Intermediate School",
        ages: "7 - 8",
        day: "Friday",
        time: "In School Enrichment",
        description: "Introduction to programming using Python.",
        type: "During School Enrichment",
      },
    ],
  },
  {
    location: "Lower Hutt",
    sessions: [
      {
        title: "Te Mako Naenae Community Centre",
        ages: "5 - 8",
        day: "Monday",
        time: "3:30pm to 5:30pm",
        description: "Introduction to programming using Scratch.",
        type: "After School",
        signupLink: "https://forms.gle/mP16ndSfZwrTnYYw6",
      },
    ],
  },
  {
    location: "Porirua",
    sessions: [
      {
        title: "Ūpane",
        ages: "7 - 10",
        day: "Monday",
        time: "3:30pm to 5:30pm",
        description:
          "Session to explore all areas of technology, work on projects and explore. This term there is a focus on Cybersecurity/Ethical Hacking.",
        type: "After School",
        signupLink: "https://forms.gle/yoC2wsCnsPjwu8nv9",
      },
      {
        title: "Porirua College",
        ages: "9 - 10",
        day: "Tuesday",
        time: "In School Enrichment",
        description:
          "Exploring robotics, microelectronics and programming",
        type: "During School Enrichment",
      },
    ],
  },
];

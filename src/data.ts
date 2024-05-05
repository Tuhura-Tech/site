import ogImageSrc from "@images/hero.avif";
import nixHeadShot from "@images/people/nixia.jpeg";

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

export const board: Person[] = [
  {
    name: "Leon Bowie",
    role: "Chair",
    about:
      "Leon is the Head of Operations for Tūhura Tech with a love of technology and a passion for education. Working in this space for the past 8 years they have a strong focus on supporting students and enhancing opportunities. The former Robocup NZ representative and NZ Cyber Security Competition winner has a range of interests and passions across technology.",
  },
  {
    name: "John Barrow",
    role: "Secretary",
    about:
      "With a range of experience spanning decades both in industry and education John provides a unique voice that bridge both industry and the education sector together. Currently a DigiTech teacher at Wellington High School they are also actively involved directly in our sessions at their school.",
  },
  {
    name: "Lillian Pak",
    role: "Treasurer",
    about:
      "Kia ora koutou katoa! Lillian Pak has had a varied career in education, libraries, and public service, in a range of roles covering programme and project management, senior management, teaching, curriculum and materials development, teacher training, quality assurance and stakeholder engagement, in both Aotearoa New Zealand and overseas. She also brings extensive governance, and grassroots community development experience. What she loves most about Tūhura Tech is how it removes barriers and provides free and equitable access to education, learning and knowledge.",
  },
  {
    name: "Justin Chua",
    role: "Trustee",
    about:
      "Currently a student at Massey University they are passionate about giving kids opportunities and supporting them. They view accessible and public resources and education as essential and want to help the charity have the maximum possible reach.",
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
    name: "Simon McCallum",
    role: "Trustee",
    about: "",
  },
];

export const people: Person[] = [
  {
    name: "Leon Bowie",
    role: "Head of Operations",
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
    name: "Zelle Marcovicci",
    role: "Head Mentor",
    about:
      "Zelle graduated with a Bachelors of Creative Media Production, specializing in video games and other kinds of wobbly interactive technology. In addition to her work with Tūhura Tech, she teaches immersive storytelling, programming and web development to first- and second-year students at Massey University.",
  },
  {
    name: "Nixia C",
    role: "Volunteer - Graphic Designer",
    about:
      "A passionate graphical designer, Nixia is responsible for all of our graphics and generously donates her time and skills to make our content look professional and clear. They originally designed our Logo and now actively support us on all materials.",
    image: nixHeadShot,
  },
  {
    name: "Abhishek Rameshanand",
    role: "Volunteer - Social Media Manager",
    about: "",
  },
];

export const SITE = {
  title: "Tūhura Tech",
  tagline: "Empowering the next generation through Technology Education.",
  description:
    "Tūhura Tech offers top-tier hardware tools and expert construction services to meet all your project needs. Start exploring and contact our sales team for superior quality and reliability.",
  description_short:
    "Tūhura Tech offers top-tier hardware tools and expert construction services to meet all your project needs.",
  url: "https://tuhuratech.org.nz",
  author: "Tūhura Tech",
};

export const OG = {
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : Hardware Tools & Construction Services`,
  description:
    "Equip your projects with Tūhura Tech's top-quality hardware tools and expert construction services. Trusted by industry leaders, Tūhura Tech offers simplicity, affordability, and reliability. Experience the difference with user-centric design and cutting-edge tools. Start exploring now!",
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

export const headerLinks: Link[] = [
  {
    label: "What We Do",
    href: "/what-we-do",
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
  {
    label: "Wiki",
    href: "https://wiki.tuhuratech.org.nz",
  },
  {
    label: "Donate",
    href: "https://givealittle.co.nz/org/tuhura-tech",
  },
];

export const socials: IconLink[] = [
  {
    label: "Mastodon",
    icon: "simple-icons:mastodon",
    href: "https://mastodon.nzoss.nz/@tuhuratech",
  },
  {
    label: "Facebook",
    icon: "simple-icons:facebook",
    href: "https://www.facebook.com/tuhuratech",
  },
  {
    label: "LinkedIn",
    icon: "simple-icons:linkedin",
    href: "https://www.linkedin.com/company/tuhuratech",
  },
  {
    label: "Instagram",
    icon: "simple-icons:instagram",
    href: "https://www.instagram.com/tuhura_tech",
  },
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

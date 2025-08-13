import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
// import { FaHome } from 'react-icons/fa';

export const DATA = {
  name: "Reagan Lowe",
  initials: "RL",
  url: "https://test.com",
  location: "Atlanta, GA",
  locationLink: "https://www.google.com/maps/place/Atlanta",
  description:
    "Software Developer specializing in PHP, Node.js, React.js and JavaScript",
  summary: "Experienced in creating, maintaining, and optimizing websites and digital experiences. Skilled in collaborating with designers, product managers, and cross-functional teams to deliver responsive, high-performance solutions. Adept at WordPress development, browser/device testing, and meeting deadlines in fast-paced, high-visibility environments.	",
  avatarUrl: "/rloutside.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Go",
    "HTML5",
    "JavaScipt",
    "Vue.js",
    "PHP",
    "Express.js",
    "API's",
    "MySQL",
    "Angular",
    "Bootstrap",
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "reaganrl14@gmail.com",
    tel: "+7065645615",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/reagan1440",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/reagan-lowe-013764290/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "SolutionBuilt",
      href: "https://solutionbuilt.com",
      badges: [],
      location: "On-Site Atlanta GA",
      title: "Jr Developer",
      logoUrl: "/Logo-SB.webp",
      start: "April 2024",
      end: "Current",
      description:
        "I fully built out the company website from the ground up in React.js, resolving server-side rendering issues, boosting load times, and enhancing SEO. My work included delivering key software updates such as improved work order management, streamlined client password handling, and simplified client reporting for better workflow efficiency. I developed custom plugins to integrate Zoho and Mailchimp databases, automating data transfer and tracking to ensure accurate and timely updates. During critical launches and events, I provided live site support to maintain uptime and quickly resolve issues, while collaborating closely with designers and project managers to ensure brand consistency and usability across devices and browsers.",
    },
    {
      company: "RL Digital",
      badges: [],
      href: "https://shopify.com",
      location: "Remote - Augusta/Atlanta GA",
      title: "Freelance Full Stack Developer",
      logoUrl: "/rllogo.jpg",
      start: "November 2023",
      end: "Current",
      description:
        "Freelance Web Developer – Designed and developed fully functional websites with responsive front-end interfaces and secure back-end systems. Implemented SEO best practices including meta tags and site optimization. Integrated contact forms with spam protection and two-factor authentication. Delivered projects from initial concept to deployment, ensuring performance, security, and accessibility.",
    },
  ],
  education: [
    {
      school: "University of Miami - EDx",
      href: "https://welcome.miami.edu/",
      degree: "Full Stack Web Development",
      logoUrl: "/miami-logo.png",
      start: "2023",
      end: "2024",
    },
    {
      school: "Spartanburg Methodist College",
      href: "https://www.smcsc.edu/",
      degree: "Bachelor's Degree of Computer Science (In-Progress)",
      logoUrl: "/smc-logo.webp",
      start: "2022",
      end: "Current",
    },
  ],
  projects: [
    {
      title: "SkinbonesCME",
      href: "https://skinbonescme.com",
      dates: "",
      active: true,
      description:
        "Successfully integrated WooCommerce with the existing Lifter Learning Management platform, enabling 40,000+ users to migrate with all current courses and purchases intact. Rewrote two custom plugins to integrate with the customer database and mailer. Also performed consistent site refreshes, added new content, and developed new course landing pages, products, and integrations.",
      technologies: [
        "PHP",
        "JavaScript",
        "PHPMyAdmin",
        "Zoho Creator",
        "Mailchimp integration",
        "LifterLMS",
        "WooCommerce",
      ],
      links: [
        {
          type: "Website",
          href: "https://skinbonescme.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/videos/skinbonesfinal.gif",
      video:
        "",
    },
    {
      title: "SolutionBuilt",
      href: "https://solutionbuilt.com",
      dates: "",
      active: true,
      description:
        "Rebuilt my company website to resolve server-side rendering (SSR) issues, optimize performance, and significantly improve page speed and Google Lighthouse scores. Implemented best practices for SEO, accessibility, and code efficiency to enhance overall user experience and search engine visibility.",
      technologies: [
        "Next.js",
        "Typescript",
        "React.js",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://solutionbuilt.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/videos/sbfinal.gif",
      video: "",
    },
    {
      title: "Jackson Spaulding",
      href: "https://tmcapital.com",
      dates: "",
      active: true,
      description:
        "Collaborated with Jackson Spaulings to develop and enhance website features for a key client, ensuring all updates were delivered on schedule and rigorously quality-assured. Focused on optimizing the user experience and interface design to create an accessible, intuitive, and visually engaging site that caters effectively to a diverse visitor base. Maintained clear communication throughout the process to quickly identify and resolve issues, contributing to overall client satisfaction and site performance.",
      technologies: [
        "HTML",
        "PHP",
        "JavaScript",
        "Pantheon",
      ],
      links: [
        {
          type: "Website",
          href: "https://tmcapital.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/videos/tmcapital.gif",
      video: "",
    },
    {
      title: "IPW App",
      href: "#",
      dates: "",
      active: true,
      description:
        "Maintained and enhanced an application for tracking worker hours, work orders, equipment maintenance, and managerial tasks like billing and payroll. Added new features such as a customer dashboard showing on-site worker status and autocomplete salary inputs with automatic payout calculations, improving workflow efficiency and accuracy.",
      technologies: [
        "PHP",
        "JavaScript",
        "HTML",
        "CSS",
      ],
      links: [
        {
          type: "App",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/videos/ipw.gif",
      video: "",
    },
    {
      title: "EchoRoom",
      href: "",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed a comprehensive website for a venue that included seamless mailing list integration, interactive contact forms, and a booking system to manage reservations efficiently. Additionally, implemented dynamic event calendars to keep visitors informed of upcoming events, improving overall user engagement and streamlining the venue’s event management process.",
      technologies: [
        "Cloudflare",
        "PHP",
        "CSS",
        "JavaScript"
      ],
      links: [
        {
          type: "Website",
          href: "https://echoroomatl.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/videos/echoroom.gif",
      video: "",
    },
    {
      title: "Drone Clean",
      href: "",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Collaborated with a senior developer to build a client website that effectively captured contact form leads, showcased partner opportunities, and provided clear location information. Focused on improving SEO and enhancing user experience with eye-catching design and smooth animations.",
      technologies: [
        "PHP",
        "Elementor",
        "JavaScript",
        "CSS"
      ],
      links: [
        {
          type: "Website",
          href: "https://droneclean.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/videos/droneclean.gif",
      video:
        "",
    },
  ],
  hackathons: [
    {
      title: "Roomeo",
      dates: "Status: Beta",
      location: "Team Size: 4",
      description:
        "Developed a application as a team project to help near by users find the ideal roomate, using realistic surveys to match users by asking questions like (what is your preferred AC set at?)",
      image:
        "https://cdn1.iconfinder.com/data/icons/university-indigo-vol-2/256/Roommate-512.png",
      mlh: "#",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/reagan1440/roomate-finder",
        },
      ],
    },
    {
      title: "Echos Of Astra",
      dates: "Status: Completed",
      location: "Team Size: 5",
      description:
        "This application uses a API for ChatGPT to interpret your dreams, Astra will also record all dreams like a journal and recoginize patterns through the nights to figure out what your recent dreams have in common and could mean in your life",
      image:
        "https://static.vecteezy.com/system/resources/previews/020/528/222/non_2x/journal-icon-vector.jpg",
      mlh: "#",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/reagan1440/Echoes-of-Astra",
        },
      ],    },
    {
      title: "Weather App",
      dates: "Status: Completed",
      location: "Solo Project",
      description:
        "I wanted to test my knowdelege with integrating APIs so created this simple weather application",
      icon: "public",
      image:
        "https://static.vecteezy.com/system/resources/previews/026/571/030/original/weather-icon-with-sun-and-cloud-on-transparent-background-free-png.png",
        links: [
          {
            title: "Github",
            icon: <Icons.github className="h-4 w-4" />,
            href: "https://github.com/reagan1440/weather-search",
          },
        ],    },
    {
      title: "Birthday Cake",
      dates: "Status: Completed",
      location: "Solo Project",
      description:
        "This was my quickest yet favorite project so far, I wanted to work with computer audio so I made this simple cake that when connected to computer audio can be blown out with your breath!",
      image:
        "https://cdn2.iconfinder.com/data/icons/food-drink-60/50/1F382-birthday-cake-1024.png",
      links: [
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://reagan1440.github.io/birthday-cake/",
        },
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/reagan1440/birthday-cake",
        },
      ],
    },
    {
      title: "Random Outfit Generator",
      dates: "Status: Completed",
      location: "Group Project",
      description:
        "This application has all of my shirts, pants, shoes, shorts, dresses, etc and can randomly generate me an outfit if im feeling lazy enough!",
      image:
        "https://cdn-icons-png.flaticon.com/512/123/123001.png",
      mlh: "#",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/reagan1440/random-outfit-generator",
        },
      ],
    },
  ],
} as const;

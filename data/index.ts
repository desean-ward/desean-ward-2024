export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Some of my tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Upskilling my knowledge of Animation & 3D libraries",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/iphone15.png",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/three.svg",
      "/gsap.svg",
      "/styled-components.png",
    ],
    link: "https://dw-iphone15.vercel.app",
    gitUrl: "https://github.com/desean-ward/apple-clone",
  },

  {
    id: 2,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/adrianhajdin?tab=repositories",
    gitUrl: "",
  },
  {
    id: 3,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/adrianhajdin/zoom-clone",
    gitUrl: "",
  },
  {
    id: 4,
    title: "Brainwave",
    des: "Introducing Brainwave, a fully-featured AI landing page.",
    img: "/brainwave.png",
    iconLists: ["/next.svg", "/tail.svg", "/styled-components.png"],
    link: "https://dw-brainwave.vercel.app",
    gitUrl: "https://github.com/desean-ward/brainwave",
  },
];

export const testimonials = [
  {
    quote:
      "De Sean is a furious Technologist. I had the pleasure of watching De Sean lead the VB .NET team with great leadership, impressive communicational skills, and the amazing ability to understand the client. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. De Sean's enthusiasm for every facet of development truly stands out.",
    img: "/angel-coats.jpg",
    name: "Angel Coats",
    title: "Operational Monitoring | Project Senior Rep",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    img: "",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    img: "",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "i.c.stars",
    img: "/icstars.webp",
    // nameImg: "/publicicstars.webp",
    website: "https://www.icstars.org",
  },
  {
    id: 2,
    name: "Blue Cross and Blue Shield",
    img: "/bcbs-logo.svg",
    // nameImg: "/publicicstars.webp",
    website: "https://www.bcbs.com",
  },
  {
    id: 3,
    name: "Per Scholas",
    img: "/perscholas-logo.svg",
    // nameImg: "/publicicstars.webp",
    website: "https://perscholas.org",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Engineering Lite Virtual Experience Program",
    desc: "Completed a simulation focused on the process of completing an engineering ticket; for a system in the credit-card rewards department of JPMorgan Chase & Co.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Full Stack Software Engineer",
    desc: "Accrued 1500+ hours of training in Software Engineering utilizing the MERN stack.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 3,
    title: "Software Engineer Enthusiast and Self-Educator",
    desc: "For four years, I proactively honed my skills, in pursuit of transitioning from Front End Development to Full Stack Software Engineering.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 4,
    title: "Web Developer / Content Management / Systems Analyst",
    desc: "While at Blue Cross and Blue Shield, I developed and/or modified 100’s of web pages across multiple state divisions; while consistently meeting 98% SLA deadlines.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    socialUrl: "https://www.github.com/desean-ward/",
  },
  {
    id: 2,
    img: "/link.svg",
    socialUrl: "https://www.linkedin.com/in/desean-ward",
  },
];

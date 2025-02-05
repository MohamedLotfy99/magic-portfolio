import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Mohamed Adel",
  lastName: "Lotfy",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Computer Engineer",
  avatar: "/images/myImage.jpg",
  location: "Africa/Cairo", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Arabic", "English", "German"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/MohamedLotfy99",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/malotfy/",
  },
  {
    name: "+01096636317",
    icon: "phone",
    link: "/about",
  },
  {
    name: "malotfe99@gmail.com",
    icon: "email",
    link: "/about"
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Computer Engineer</>,
  subline: (
    <>
      I'm {person.name}, a {person.role} graduate from <a href="https://www.asu.edu.eg/1185/page/faculty-of-engineering">Ain Shams University, Faculty of engineering</a>,
      <br /> Passionate to produce intuitive UI/UX applications and websites.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Mohamed is an Experienced Full Stack Developer proficient in multiple programming languages, with a strong focus on front-end development and Android applications. 
        Skilled in building dynamic, user-friendly interfaces. Passionate about game development, always exploring innovative technologies to create engaging digital experiences.
      </>
    ),
  },
  education: {
    display: true, // set to false to hide this section
    title: "Education",
    experiences: [
      {
        company: "Ain Shams University, Faculty of Engineering",
        timeframe: "2018 - 2023",
        role: "Computer Engineering and Software Systems",
        achievements: [
          <>
            Graduated with <b>B+</b> GPA.
          </>,
          <>
            Achieved <b className="Text:bold">A+</b> on my video game graduation
            project "A Giants Conscience: The Evil Seed"
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/GradProject.jpg",
            alt: "Game Poster",
            width: 16,
            height: 19,
          },
        ],
      },
    ],
  },
  courses: {
    display: true, // set to false to hide this section
    title: "Courses",
    institutions: [
      {
        name: "Ethical Hacking Workshop",
        role: "NTI Egypt",
        timeframe: "Sept 2022",
        description: <>Studied vulnerability detection, exploitation, prevention, and
        security awareness.</>,
      },
      {
        name: "Data Science Workshop",
        role: "Sprints",
        timeframe: "Sept 2021",
        description: <>Studied data cleaning, organization, and categorization.</>,
      },
      {
        name: "Android Development Workshop",
        role: "Sprints",
        timeframe: "Sept 2020",
        description: <>Studied Rest APIs, data storage & manipulation, layouts and style creation.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Expert",
        achievements: [
          <>
            Android Studio
          </>,
          <>
            Unreal Engine
          </>,
          <>
            Python
          </>,
          <>
            Kotlin
          </>,         
          <>
            JavaScript
          </>,
          <>
            Git
          </>,
          <>
            HTML
          </>,
          <>
            CSS
          </>,
        ],
        // optional: leave the array empty if you don't want to display images
        images: [

        ],
      },
      {
        title: "Intermediate",
        // optional: leave the array empty if you don't want to display images
        achievements:[
          <>
            Angular
          </>,
          <>
            NodeJS
          </>,
          <>
            TypeScript
          </>,
        ],
        images: [

        ],
      },
      {
        title: "Novice",
        achievements: [
          <>
            SQL
          </>,
          <>
            Autopsy
          </>,
          <>OSForensics</>,
          <>WinHex</>,
        ],
        images: [

        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };

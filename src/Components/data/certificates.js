import gsoc from '../../Images/gsoc.png';
import freecodecamp from '../../Images/freecodecamp.png';
import coursera8 from '../../Images/coursera8.png';
import coursera7 from '../../Images/coursera7.png';
import coursera4 from '../../Images/coursera4.png';
import coursera3 from '../../Images/coursera3.png';
import coursera from '../../Images/coursera.jpg';
import udacity from '../../Images/udacity.jpg';
import linkedin2 from '../../Images/linkedin2.jpg';

const certificates = [
    {
        title: 'Google Summer of Code',
        subtitle: 'Eventyay-FOSSASIA',
        image: gsoc,
        imageAlt: 'Google Summer of Code',
        heading: 'Google Summer of Code Certificate',
        description: 'This certificate is awarded for participation in Google Summer of Code with Eventyay-FOSSASIA.',
    },
    {
        title: 'FreeCodeCamp',
        subtitle: 'Freecodecamp',
        image: freecodecamp,
        imageAlt: 'Freecodecamp',
        imageUrl: 'https://www.freecodecamp.org/certification/tari/front-end-development-libraries',
        heading: 'Front End Development Libraries',
        validateUrl: 'https://freecodecamp.org/certification/tari/front-end-development-libraries',
        description: 'FreeCodeCamp completion certificates in Front-end Development Libraries. As part of this certification, I built 5 projects and got all automated test suites to pass.',
    },
    {
        title: 'The Hong Kong University of Science and Technology',
        subtitle: 'Coursera',
        image: coursera8,
        imageAlt: 'Coursera',
        imageUrl: 'https://www.coursera.org/account/accomplishments/specialization/MHKB2TGZNRUR',
        heading: 'Full-Stack Web Development with React',
        validateUrl: 'https://www.coursera.org/account/accomplishments/specialization/MHKB2TGZNRUR',
        description: 'Coursera certifies successful completion of The Hong Kong University of Science and Technology Full-Stack Web Development with React Specialization.',
    },
    {
        title: 'The Hong Kong University of Science and Technology',
        subtitle: 'Coursera',
        image: coursera7,
        imageAlt: 'Coursera',
        imageUrl: 'https://www.coursera.org/account/accomplishments/verify/VMZFGHLFZP6M',
        heading: 'Multiplatform Mobile App Development with React Native',
        validateUrl: 'https://www.coursera.org/account/accomplishments/verify/VMZFGHLFZP6M',
        description: "This course focuses on developing cross-platform, native iOS and Android apps using React Native and the Expo SDK. React Native uses modern JavaScrip and learnt about UI development with React Native UI and layout support and access the native mobile platform's capabilities from Javascript using the Expo SDK.",
    },
    {
        title: 'The Hong Kong University of Science and Technology',
        subtitle: 'Coursera',
        image: coursera4,
        imageAlt: 'Coursera',
        imageUrl: 'https://www.coursera.org/account/accomplishments/verify/EKSYUEPWV7M2',
        heading: 'Server-side Development with NodeJS, Express and MongoDB',
        validateUrl: 'https://www.coursera.org/account/accomplishments/verify/EKSYUEPWV7M2',
        description: "The entire course around the NodeJS platform. Started with an overview of the Web protocols: HTTP and HTTPS. I learnt how to examine NodeJS and NodeJS modules (Express for building web servers). On the database side, I learnt basic CRUD operations, NoSQL databases, in particular MongoDB and Mongoose for accessing MongoDB from NodeJS. I learnt to examine the REST concepts and building a RESTful API, authentication and security. Review backend as a service (BaaS) approaches, including mobile BaaS, both open-source and commercial BaaS services.",
    },
    {
        title: 'The Hong Kong University of Science and Technology',
        subtitle: 'Coursera',
        image: coursera3,
        imageAlt: 'Coursera',
        imageUrl: 'https://www.coursera.org/account/accomplishments/verify/NJNHSQS846AV',
        heading: 'Front-End Web UI Frameworks and Tools: Bootstrap 4',
        validateUrl: 'https://www.coursera.org/account/accomplishments/verify/NJNHSQS846AV',
        description: 'This course give an overview of client-side web UI frameworks, in particular Bootstrap 4. I learnt about grids and responsive design, Bootstrap CSS and JavaScript components. Learnt about CSS preprocessors, Less and Sass. Also learn the basics of Node.js and NPM and task runners like Grunt and Gulp. In this course, I\'m be able to: -Set up, design and style a web page using Bootstrap 4 and its components. -Create a responsive web page design. -Make use of web tools to setup and manage web sites.',
    },
    {
        title: 'The Hong Kong University of Science and Technology',
        subtitle: 'Coursera',
        image: coursera,
        imageAlt: 'Coursera',
        imageUrl: 'https://www.coursera.org/account/accomplishments/verify/BKU2AYMC57EN',
        heading: 'Front-End Web Development with React with Honours',
        validateUrl: 'https://www.coursera.org/account/accomplishments/verify/BKU2AYMC57EN',
        description: 'This course explores Javascript based front-end application development, and in particular the React library (Currently Ver. 16.3), JavaScript ES6 for developing React application. Introduction to the use of Reactstrap for Bootstrap 4-based responsive UI design. Introduced to various aspects of React components. Learn about React router and its use in developing single-page applications. Learn about designing controlled forms. Introduced to the Flux architecture and Redux various aspects of Redux and use it to develop React-Redux powered applications. Learn to use Fetch for client-server communication and the use of REST API on the server side.',
    },
    {
        title: 'Udacity',
        image: udacity,
        imageAlt: 'udacity',
        imageUrl: 'https://confirm.udacity.com/JNT26JSH',
        heading: 'Programming Languages Introduction',
        validateUrl: 'https://confirm.udacity.com/JNT26JSH',
        description: 'Introduction to the fundamentals of programming languages. HTML: Web development in HTML including document structure, tags, syntax, inline and block elements. CSS: Combine CSS and HTML for visual styling using browser devtools, CSS divs, spans, classes and semantic tags. Built a project that links HTML and CSS using semantically organized classes. Python: Create object oriented Python programs using classes and functions, Command Line Interface (CLI) inputs, string manipulations, and version control. JavaScript: Create websites using Document Object Model (DOM), ES6 Syntax, browser events ,JQuery in functions, arrays, and objects. Created an intuitive and responsive web application that allows the user to create and edit their design pixel by pixel with different sizes and colors.',
    },
    {
        title: 'LinkedIn Learning',
        subtitle: 'React Learning Path',
        image: linkedin2,
        imageAlt: 'linkedin',
        heading: 'Front-End Web Developer Learning Path',
        validateUrl: 'https://www.linkedin.com/learning/paths/become-a-front-end-web-developer',
        description: 'Web Development: Core responsibilities of front-end vs back-end developers. Web Design: UX design principles, structure content, use graphics, integration of Video, audio, and other media. Front-end Development: Python, HTML5 semantic markup, style text and layouts with Flexbox and Grid, fluid layouts with CSS, JavaScript principles: variables, data types, conditionals, functions, loops, closures, and DOM. Bootstrap 4 and SASS: Bootstrap responsive layout, SassScript to create complex functions from Sass lists and control statements. Github & Git: GitHub web, git: branching, commits, and pull requests, create a local project and move it to GitHub. React.js: Operate Components, elements, and state, leverage JSX syntax extension, render components from a list, generate an optimized production build with create-react-app.',
    },
];

export default certificates;

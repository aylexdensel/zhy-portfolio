import html5Icon from '../assets/icons/html5.svg';
import css3Icon from '../assets/icons/css3.svg';
import jsIcon from '../assets/icons/javascript.svg';
import reactIcon from '../assets/icons/react.svg';
import csharpIcon from '../assets/icons/csharp.svg';
import aspnetIcon from '../assets/icons/aspnet.svg';
import mssqlIcon from '../assets/icons/mssql.svg';
import figmaIcon from '../assets/icons/figma.svg';
import gitIcon from '../assets/icons/git.svg';
import githubIcon from '../assets/icons/github.svg';
import vscodeIcon from '../assets/icons/vscode.svg';
import visualstudioIcon from '../assets/icons/visualstudio.svg';

export const skills = [
  { 
    id: 'html5', 
    name: 'HTML5', 
    keyChar: 'H',
    category: 'Frontend', 
    icon: html5Icon,
    tagline: 'Semantic web markup, accessible structure & WCAG standards.' 
  },
  { 
    id: 'css3', 
    name: 'CSS3', 
    keyChar: 'C',
    category: 'Frontend', 
    icon: css3Icon,
    tagline: 'Design tokens, CSS Modules, fluid clamp() typography & 3D transforms.' 
  },
  { 
    id: 'javascript', 
    name: 'JavaScript', 
    keyChar: 'J',
    category: 'Frontend', 
    icon: jsIcon,
    tagline: 'ES6+ logic, DOM interaction & async workflows.' 
  },
  { 
    id: 'react', 
    name: 'React', 
    keyChar: 'R',
    category: 'Frontend', 
    icon: reactIcon,
    tagline: 'Component composition, custom hooks, dynamic state & SPA routing.' 
  },
  { 
    id: 'csharp', 
    name: 'C#', 
    keyChar: 'S',
    category: 'Backend', 
    icon: csharpIcon,
    tagline: 'Object-oriented application logic, type-safe services & clean architecture.' 
  },
  { 
    id: 'aspnet', 
    name: 'ASP.NET Core', 
    keyChar: 'A',
    category: 'Backend', 
    icon: aspnetIcon,
    tagline: 'RESTful API design, controller routes, backend validation & middleware.' 
  },
  { 
    id: 'mssql', 
    name: 'MSSQL Server', 
    keyChar: 'M',
    category: 'Database', 
    icon: mssqlIcon,
    tagline: 'Relational database schemas, SQL queries, keys & data integrity.' 
  },
  { 
    id: 'figma', 
    name: 'Figma', 
    keyChar: 'F',
    category: 'Design', 
    icon: figmaIcon,
    tagline: 'Interface wireframing, component design systems & prototypes.' 
  },
  { 
    id: 'git', 
    name: 'Git', 
    keyChar: 'G',
    category: 'Workflow', 
    icon: gitIcon,
    tagline: 'Version control, commit history, branching strategies & merging code.' 
  },
  { 
    id: 'github', 
    name: 'GitHub', 
    keyChar: 'U',
    category: 'Workflow', 
    icon: githubIcon,
    tagline: 'Remote repositories, pull requests & project deployment.' 
  },
  { 
    id: 'vscode', 
    name: 'VS Code', 
    keyChar: 'V',
    category: 'Workflow', 
    icon: vscodeIcon,
    tagline: 'Primary workspace configured for rapid React & Web builds.' 
  },
  { 
    id: 'visualstudio', 
    name: 'Visual Studio', 
    keyChar: 'D',
    category: 'Workflow', 
    icon: visualstudioIcon,
    tagline: 'Enterprise IDE utilized for C# and ASP.NET Core API backend code.' 
  }
];

export const skillCategories = ['All', 'Frontend', 'Backend', 'Database', 'Design', 'Workflow'];
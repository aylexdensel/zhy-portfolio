export const projects = [
  {
    id: 'e-voting',
    slug: 'e-voting',
    title: 'E-Voting System',
    summary: 'A full-stack web application designed to replace a manual, paper-based student election process with a secure, transparent, and highly accessible digital platform across four academic groups.',
    description: 'Developed independently as a solo full-stack engineer, this web-based election management platform automates candidate registration, ballot creation, voter authentication, real-time vote counting, and election audit logging. It provides customized, age-appropriate interfaces tailored for Elementary, Junior High, Senior High, and College students.',
    role: 'Solo Full-Stack Developer & UI/UX Designer',
    featured: true,
    published: true,
    status: 'Deployment in progress',
    technologies: ['React', 'JavaScript', 'C#', 'ASP.NET Core Web API', 'MSSQL', 'HTML5', 'CSS Modules'],
    academicGroups: ['College', 'Senior High School', 'Junior High School', 'Elementary'],
    problem: 'The institution relied on manual paper ballots, requiring hours of physical vote counting, high paper waste, human error during tallying, and vulnerability to election disputes. Furthermore, different student age groups required vastly different digital interface complexities.',
    solution: 'Engineered a centralized, role-based full-stack web application with ASP.NET Core REST API backend and React frontend. Integrated age-customized election ballots, automated cryptographic vote hashing, real-time result tabulation, and comprehensive audit logs for election administrators.',
    responsibilities: [
      'UI/UX Design & Figma Prototyping for 4 academic tiers',
      'Frontend React component architecture & responsive CSS Modules',
      'Backend ASP.NET Core Web API REST endpoints & controller logic',
      'Database relational schema modeling & stored procedures in MSSQL',
      'Role-based access control (RBAC) & security audit logging',
      'End-to-end voter workflow testing & deployment prep'
    ],
    features: [
      {
        title: 'Multi-Tier Academic Ballots',
        description: 'Tailored voting interfaces designed specifically for College, Senior High, Junior High, and Elementary student experience levels.'
      },
      {
        title: 'Real-Time Result Tabulation',
        description: 'Automated backend tallying providing instant, tamper-evident election results to authorized election committees.'
      },
      {
        title: 'Role-Based Authentication',
        description: 'Secure voter authorization preventing duplicate ballot submission and enforcing student group permission boundaries.'
      },
      {
        title: 'Election Audit Trail',
        description: 'Immutable system logs tracking registration, ballot activation, and election status transitions.'
      }
    ],
    challenges: [
      {
        title: 'Multi-Tier Student Access & UX Complexity',
        description: 'Elementary students needed simple, highly visual graphical voting elements, while College students required detailed candidate platforms and position filters.',
        solution: 'Built a dynamic React ballot layout generator driven by student tier metadata, delivering simplified visual cards for younger groups and full information matrices for higher tiers.'
      },
      {
        title: 'Data Integrity & Vote Duplication Prevention',
        description: 'Ensuring that concurrent student login sessions across multiple campus devices could not submit duplicate votes or alter tallies.',
        solution: 'Utilized atomic database transactions in MSSQL combined with server-side JWT verification in ASP.NET Core to guarantee single-ballot execution per student ID.'
      }
    ],
    lessons: 'Building a solo full-stack system across four academic levels reinforced the importance of domain modeling before writing code. Designing the relational database schema in MSSQL and defining clean REST API contracts early eliminated frontend integration friction.',
    coverImage: '[E_VOTING_COVER]',
    screenshots: [
      '[E_VOTING_SCREENSHOT_01]',
      '[E_VOTING_SCREENSHOT_02]',
      '[E_VOTING_SCREENSHOT_03]'
    ],
    liveUrl: null,
    repositoryUrl: null
  },
  {
    id: 'olms',
    slug: 'olms',
    title: 'Online Library Management System (OLMS)',
    summary: 'A full-stack library management system engineered to digitize book inventories, student borrowing workflows, return tracking, overdue fines, and historical audit records.',
    description: 'Built independently end-to-end, OLMS replaces spreadsheet-based book tracking with a web portal. Librarians can manage catalog inventory, process loans and returns, and monitor borrow histories, while students can search for titles and reserve available books.',
    role: 'Solo Full-Stack Developer & UI/UX Designer',
    featured: false,
    published: true,
    status: 'Completed / Internal Case Study',
    technologies: ['React', 'JavaScript', 'C#', 'ASP.NET Core Web API', 'MSSQL', 'HTML5', 'CSS Modules'],
    academicGroups: ['Campus Library', 'Students & Faculty'],
    problem: 'Manual book logging resulted in misplaced inventory records, untracked overdue returns, inefficient search processes for students, and lack of historical borrowing analytics.',
    solution: 'Designed and implemented an integrated library portal connecting a React single-page application with a C# ASP.NET Core Web API and Microsoft SQL Server database.',
    responsibilities: [
      'UI/UX wireframing for student portal and librarian admin console',
      'React frontend interface for catalog searching and book status tracking',
      'ASP.NET Core Web API endpoints for borrow/return lifecycle transactions',
      'MSSQL database schema design for catalog items, loans, and fines',
      'System integration and data validation'
    ],
    features: [
      {
        title: 'Digital Book Catalog',
        description: 'Searchable inventory with real-time status indicators (Available, Borrowed, Reserved).'
      },
      {
        title: 'Loan & Return Processing',
        description: 'Automated check-out and check-in workflows for library administrators.'
      },
      {
        title: 'Borrowing History & Audit',
        description: 'Comprehensive historical records for student account management.'
      }
    ],
    challenges: [
      {
        title: 'Managing State Transitions for Loaned Items',
        description: 'Handling edge cases where books were requested while transitioning between return verification and shelving.',
        solution: 'Designed an explicit finite state machine for book inventory statuses in the backend database with stored procedure validation.'
      }
    ],
    lessons: 'Gained deep practical experience in database relational normalization and state lifecycle management across React components and REST API controllers.',
    coverImage: '[OLMS_COVER]',
    screenshots: [
      '[OLMS_SCREENSHOT_01]',
      '[OLMS_SCREENSHOT_02]',
      '[OLMS_SCREENSHOT_03]'
    ],
    liveUrl: null,
    repositoryUrl: null
  }
];
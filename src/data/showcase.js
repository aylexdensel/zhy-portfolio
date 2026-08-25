export const showcaseItems = [
  {
    id: 'auth-experience',
    title: '1. Authentication Experience',
    category: 'Forms & State Management',
    description: 'Interactive authentication interface featuring controlled form inputs, password visibility toggle, real-time validation feedback, loading states, and accessible error handling.',
    uiDecisions: 'Immediate visual feedback on input focus, high-contrast password visibility toggle, accessible aria-describedby error associations, and disabled submission during pending state.',
    concepts: ['Controlled Inputs', 'Password Visibility', 'Form Validation', 'ARIA Error Handling'],
    demoKey: 'auth',
    codeUrl: null
  },
  {
    id: 'responsive-navigation',
    title: '2. Responsive Navigation',
    category: 'Navigation & Accessibility',
    description: 'Interactive navigation bar demonstrating desktop link states, accessible mobile hamburger toggle, keyboard focus trap, and Escape key listener.',
    uiDecisions: 'Translucent backdrop blur, high-contrast active route indicators, clear hover states, and seamless mobile menu drawer transitions.',
    concepts: ['Mobile Menu State', 'Keyboard Escape Handling', 'ARIA Expanded', 'Backdrop Blur'],
    demoKey: 'nav',
    codeUrl: null
  },
  {
    id: 'buttons-interaction',
    title: '3. Buttons & Interaction States',
    category: 'Design System & Micro-Interactions',
    description: 'A comprehensive button state matrix demonstrating primary, secondary, destructive, loading, and disabled interaction states with keyboard focus rings.',
    uiDecisions: 'Distinct color coding for destructive actions, smooth hover scale elevation, visible focus indicators, and loading spinners replacing label copy during active async requests.',
    concepts: ['Design Tokens', 'State Variants', 'Focus Indicators', 'Micro-Interactions'],
    demoKey: 'buttons',
    codeUrl: null
  },
  {
    id: 'card-components',
    title: '4. Card Components & Information Hierarchy',
    category: 'Layout & Composition',
    description: 'Demonstrating modular card component composition across Profile, Project, and Content information structures.',
    uiDecisions: 'Clear visual contrast between titles, body copy, tags, and action buttons. Restricted line lengths and hover surface elevation.',
    concepts: ['Component Composition', 'Grid & Flexbox', 'Typography Scale', 'Hover Depth'],
    demoKey: 'cards',
    codeUrl: null
  },
  {
    id: 'form-validation',
    title: '5. Form & Validation Experience',
    category: 'UX Engineering & Data Entry',
    description: 'Interactive multi-field form with real-time onBlur validation, custom email regex checks, error clearing on keystroke, and success feedback banner.',
    uiDecisions: 'Field validation delayed until user blur to prevent premature errors, programmatically associated error messages, and disabled submit button when invalid.',
    concepts: ['onBlur Validation', 'Regex Validation', 'Feedback Banners', 'Keyboard Usability'],
    demoKey: 'form',
    codeUrl: null
  },
  {
    id: 'dashboard-interface',
    title: '6. Integrated Dashboard Interface',
    category: 'Complex UI Systems',
    description: 'A fully integrated mini-dashboard combining top navigation, summary stat cards, dynamic data filtering, search control, and interactive empty states.',
    uiDecisions: 'High-density information layout with clear visual grouping, instant client-side filtering, and helpful empty state feedback when filters return no matches.',
    concepts: ['Client-Side Filtering', 'Integrated State', 'Data Summary Cards', 'Empty State UI'],
    demoKey: 'dashboard',
    codeUrl: null
  }
];
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  screenshots: string[];
  features: string[];
  team?: string;
  showScreenshots?: boolean;
}

export const projects: Project[] = [
  {
    id: 'munch',
    title: 'Munch 🍔',
    description: 'Mobile application restaurant finder',
    image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828',
    tags: ['Flutter', 'Django'],
    githubUrl: 'https://github.com/jpiekut/munchapp',
    screenshots: [
'https://live.staticflickr.com/65535/54204247250_0d51d83404_o.jpg',
'https://live.staticflickr.com/65535/54204247240_ae632d1315_o.jpg',
'https://live.staticflickr.com/65535/54203824106_2295d2b715_o.jpg',
'https://live.staticflickr.com/65535/54203824116_22367d4593_o.jpg',
'https://live.staticflickr.com/65535/54204247270_b77b1ddc62_o.jpg',
'https://live.staticflickr.com/65535/54202925437_893518664c_o.jpg'
    ],
    features: [
      'Restaurant discovery within specified radius',
      'Price range filtering',
      'Opening hours and menu information',
      'Interactive map integration',
      'User reviews and ratings'
    ],
    team: 'X7',
    showScreenshots: true
  },
  {
    id: 'spoiler-detector',
    title: 'Spoiler Detector',
    description: 'Film review spoiler detection program',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728',
    tags: ['Python', 'NumPy'],
    screenshots: [],
    features: [
      'Natural language processing for spoiler detection',
      'Machine learning-based classification',
      'Review analysis and scoring',
      'Automated content moderation',
      'Customizable sensitivity settings'
    ],
    showScreenshots: false
  },
  {
    id: 'ev-routing',
    title: 'Third Year Project',
    description: 'Electric Vehicle Routing Problem solver',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7',
    tags: ['Python'],
    screenshots: [],
    features: [
      'Optimal route calculation for electric vehicles',
      'Charging station location optimization',
      'Battery consumption modeling',
      'Real-time route adjustments',
      'Multi-vehicle coordination'
    ],
    showScreenshots: false
  },
  {
    id: 'stock-control',
    title: 'College Final Project',
    description: 'Stock Control and Business Management System',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    tags: ['Java'],
    screenshots: [],
    features: [
      'Inventory tracking and management',
      'Order processing system',
      'Sales analytics and reporting',
      'User authentication and roles',
      'Automated stock alerts'
    ],
    showScreenshots: false
  },
  {
    id: 'snowland',
    title: 'Snowland Mini Project',
    description: 'Interactive Motion Physics Simulator',
    image: 'https://images.unsplash.com/photo-1611117775350-ac3950990985',
    tags: ['Three.js', 'JavaScript', 'WebGL'],
    features: [
      'Real-time physics simulation',
      'Interactive 3D environment',
      'Particle system for snowfall effects',
      'Adjustable physics parameters',
      'Performance optimization'
    ],
    screenshots: [],
    team: 'Solo Project',
    showScreenshots: false
  }
];
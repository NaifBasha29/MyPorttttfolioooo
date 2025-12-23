// Portfolio Data - Easy to customize
export const personalInfo = {
  name: "Naif Basha R",
  title: "React Developer",
  tagline: "Building beautiful, performant web experiences",
  bio: "I'm a passionate React developer with 5+ years of experience crafting modern web applications. I love turning complex problems into simple, elegant solutions that users love.",
  email: "naifbasha50@gmail.com",
  location: "Chennai, Tamil Nadu, India",
  avatar: "src/assets/IMG_5574.jpg",
  resume: "/resume.pdf",
  social: {
    github: "https://github.com/NaifBasha29",
    linkedin: "https://www.linkedin.com/in/naif-basha-r-a77810183/",
    instagram: "https://www.instagram.com/___B_ASH_A___/",
    email: "mailto:naifbasha50@gmail.com"
  }
};

export const skills = [
  // Frontend
  { name: "React", level: 95, category: "Frontend", icon: "react" },
  { name: "JavaScript", level: 90, category: "Frontend", icon: "javascript" },
  { name: "TypeScript", level: 85, category: "Frontend", icon: "typescript" },
  { name: "HTML5", level: 95, category: "Frontend", icon: "html5" },
  { name: "CSS3", level: 90, category: "Frontend", icon: "css3" },
  { name: "Next.js", level: 80, category: "Frontend", icon: "nextjs" },
  { name: "Redux", level: 85, category: "Frontend", icon: "redux" },
  { name: "Tailwind CSS", level: 88, category: "Frontend", icon: "tailwind" },
  
  // Backend
  { name: "Node.js", level: 80, category: "Backend", icon: "nodejs" },
  { name: "Express", level: 75, category: "Backend", icon: "express" },
  { name: "MongoDB", level: 70, category: "Backend", icon: "mongodb" },
  
  // Tools
  { name: "Git", level: 90, category: "Tools", icon: "git" },
  { name: "VS Code", level: 95, category: "Tools", icon: "vscode" },
  { name: "Figma", level: 70, category: "Tools", icon: "figma" },
  { name: "Antigravity", level: 85, category: "Tools", icon: "antigravity" },
  { name: "Windsor", level: 80, category: "Tools", icon: "windsor" },

  // Multimedia
  { name: "CapCut", level: 85, category: "Multimedia", icon: "capcut" },
  { name: "PicsArt", level: 80, category: "Multimedia", icon: "picsart" },
  { name: "Lightroom", level: 75, category: "Multimedia", icon: "lightroom" },
];

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with cart management, payment integration, and admin dashboard. Built with React, Redux, and Node.js.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    technologies: ["React", "Redux", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
    codeSnippet: `// Shopping Cart Hook
const useCart = () => {
  const [items, setItems] = useState([]);
  
  const addItem = (product) => {
    setItems(prev => [...prev, product]);
  };
  
  const total = items.reduce(
    (sum, item) => sum + item.price, 0
  );
  
  return { items, addItem, total };
};`
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team workspaces.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
    codeSnippet: `// Drag and Drop Handler
const handleDrop = (taskId, newStatus) => {
  updateTask(taskId, { 
    status: newStatus,
    updatedAt: new Date()
  });
  
  // Optimistic UI update
  setTasks(prev => prev.map(task =>
    task.id === taskId 
      ? { ...task, status: newStatus }
      : task
  ));
};`
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A beautiful weather dashboard with 7-day forecasts, location search, and interactive weather maps using OpenWeather API.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
    technologies: ["React", "Chart.js", "OpenWeather API", "CSS Modules"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
    codeSnippet: `// Weather Data Fetcher
const fetchWeather = async (city) => {
  const response = await fetch(
    \`\${API_URL}?q=\${city}&appid=\${API_KEY}\`
  );
  const data = await response.json();
  
  return {
    temp: data.main.temp,
    condition: data.weather[0].main,
    icon: data.weather[0].icon
  };
};`
  },
  {
    id: 4,
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media managers with real-time metrics, engagement tracking, and automated reporting.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    technologies: ["React", "D3.js", "Node.js", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
    codeSnippet: `// Analytics Component
const EngagementChart = ({ data }) => {
  return (
    <ResponsiveContainer>
      <LineChart data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line 
          type="monotone" 
          dataKey="engagement" 
          stroke="#6366f1" 
        />
      </LineChart>
    </ResponsiveContainer>
  );
};`
  }
];

export const experiences = [
  {
    id: 0,
    role: "Your Role Here",
    company: "Company Name",
    location: "Chennai, India",
    period: "2024 - Present",
    description: "Update this with your job description and responsibilities.",
    achievements: [
      "Add your first achievement here",
      "Add your second achievement here",
      "Add your third achievement here"
    ]
  },
  {
    id: 1,
    role: "Senior React Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    period: "2022 - Present",
    description: "Leading frontend development for the company's flagship SaaS product. Mentoring junior developers and establishing best practices for React development.",
    achievements: [
      "Reduced bundle size by 40% through code splitting",
      "Implemented CI/CD pipeline reducing deployment time by 60%",
      "Led team of 5 developers on major product redesign"
    ]
  },
  {
    id: 2,
    role: "React Developer",
    company: "StartupXYZ",
    location: "Remote",
    period: "2020 - 2022",
    description: "Built and maintained multiple React applications for various clients. Worked closely with designers to implement pixel-perfect UIs.",
    achievements: [
      "Developed 10+ production React applications",
      "Achieved 95% code coverage with comprehensive testing",
      "Introduced TypeScript, reducing bugs by 30%"
    ]
  },
  {
    id: 3,
    role: "Junior Frontend Developer",
    company: "WebAgency",
    location: "Los Angeles, CA",
    period: "2018 - 2020",
    description: "Started my professional journey building responsive websites and single-page applications for small to medium businesses.",
    achievements: [
      "Converted 20+ static sites to React SPAs",
      "Improved page load times by 50% on average",
      "Received 'Rising Star' award in first year"
    ]
  }
];

export const education = [
  {
    id: 1,
    degree: "Bachelor of Science in Computer Science",
    school: "University of California, Berkeley",
    period: "2014 - 2018",
    description: "Focused on software engineering and web technologies. Graduated with honors."
  },
  {
    id: 2,
    degree: "Full Stack Web Development Bootcamp",
    school: "Coding Academy",
    period: "2018",
    description: "Intensive 12-week program covering modern web development technologies."
  }
];

export const certifications = [
  { name: "Meta React Professional Certificate", issuer: "Meta", year: "2023" },
  { name: "AWS Certified Developer", issuer: "Amazon", year: "2022" },
  { name: "Google UX Design Certificate", issuer: "Google", year: "2021" }
];

export const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" }
];

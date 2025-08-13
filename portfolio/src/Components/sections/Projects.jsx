import { RevealOnScroll } from "./RevealOnScroll";
const myProjects = [

  {
    title: "Social Blog Application",
    description:
      "Built a scalable social blog application with features like user authentication, post creation, commenting, and real-time updates.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Redux"],
    githubLink: "https://github.com/tshering10/SocialBlog",
  },
  {
    title: "E-commerce Platform",
    description:
      "Developed a full-stack e-commerce site featuring a secure payment gateway, product management, and a user-friendly shopping cart.",
    techStack: ["React", "Stripe", "Firebase", "Tailwind CSS"],
    githubLink: "https://github.com/yourusername/ecommerce-platform",
  },
  {
    title: "Weather Dashboard",
    description:
      "A clean and responsive web application that fetches and displays real-time weather data using a public API.",
    techStack: ["HTML", "CSS", "JavaScript", "RESTful APIs"],
    githubLink: "https://github.com/yourusername/weather-dashboard",
  },
  {
    title: "Portfolio Website",
    description: "A portfolio website to showcase my projects and skills.",
    techStack: ["React", "Tailwind CSS"],
    githubLink: "https://github.com/tshering10/my-portfolio",
  },
  {
    title: "Weather Dashboard v2",
    description:
      "An improved version of the weather dashboard with a modern UI.",
    techStack: ["React", "Tailwind CSS", "RESTful APIs"],
    githubLink: "https://github.com/tshering10/weather-dashboard-v2",
  },
  {
    title: "Task Management App",
    description: "A simple task management application to organize daily tasks.",
    techStack: ["React", "CSS"],
    githubLink: "https://github.com/tshering10/task-management-app",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="min-h-screen py-20 flex items-center">
      <div className="max-w-6xl mx-auto w-full">

        <RevealOnScroll> 
          <div className="text-center mb-12 sm:mb-16">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 text-transparent bg-clip-text mb-4"
            >
              Projects
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            {myProjects.map((project, index) => (
  
              <div
                key={index}
                className="p-6 rounded-xl border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500  transform hover:scale-105"
              >
                <h3 className="text-xl font-bold mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-500/20 text-blue-300 text-xs px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-400 hover:text-blue-200 transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
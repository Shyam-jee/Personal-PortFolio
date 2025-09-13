import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
    {
      title: "Personal Portfolio",
      description:
        "🌐 A modern and responsive personal portfolio built using React, Tailwind CSS, and Framer Motion. Showcases projects, skills, education and experience with dark mode support.",
      tech: ["React", "javaScript", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/Shyam-jee/Personal-PortFolio",
      demo: "https://shyam-jee-portfolio.netlify.app/",
      img: "/projects/PersonalPortFolio.png",
    },
    {
      title: "AI Chatbot",
      description:
        "🤖 A React-based AI chatbot web application powered by Gemini API, providing interactive conversational experiences with a clean UI.",
      tech: ["React", "JavaScript", "API", "LocalStorage"],
      github: "https://github.com/Shyam-jee/React-AI-Chatbot",
      demo: "https://shyam-jee.github.io/React-AI-Chatbot",
      img: "/projects/AIChatbot.png",
    },
    {
      title: "Sudoku Solver & Game",
      description:
        "🧩 Sudoku Solver & Game A responsive, mobile-friendly web application built using HTML, CSS, and JavaScript that lets users play, validate, and solve Sudoku puzzles with built-in hints feature.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Shyam-jee/Sudoku-Solver-Game",
      demo: "https://shyam-jee.github.io/Sudoku-Solver-Game/",
      img: "/projects/sudoku.png",
    },
    {
      title: "Tic Tac Toe Game",
      description:
        "❌⭕ A fun Tic Tac Toe game built with HTML, CSS, and JavaScript. Features include two-player mode, win detection, and a responsive layout.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Shyam-jee/Tic-Tac-Toe-Game",
      demo: "https://shyam-jee.github.io/Tic-Tac-Toe-Game/",
      img: "/projects/TicTacToe.png",
    },

    {
      title: "ToDo App",
      description:
        "📝 A simple and responsive To-Do web application built with HTML, CSS, JavaScript. Allows users to add, delete, and mark tasks as completed.",
      tech: ["HTML", "CSS", "JavaScript", "LocalStorage"],
      github: "hhttps://github.com/Shyam-jee/ToDo-App",
      demo: "https://shyam-jee.github.io/ToDo-App/",
      img: "/projects/ToDoApp.png",
    },
    {
      title: "Rock Paper Scissor Game",
      description:
        "✊✋✌️ A Rock-Paper-Scissors game built with HTML, CSS, and JavaScript. Includes score tracking and an interactive, responsive UI.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Shyam-jee/Rock-Paper-Scissor-Game",
      demo: "https://shyam-jee.github.io/Rock-Paper-Scissor-Game/",
      img: "/projects/RockPaperScissors.png",
    },
    {
      title: "EncryptoPad",
      description:
        "🔐 EncryptoPad A secure note-taking web app built using HTML, CSS, and JavaScript that allows users to write, encrypt, and decrypt notes, ensuring privacy and security of sensitive data.",
      tech: ["Python", "File Handling", "Cipher Algorithm"],
      github: "https://github.com/Shyam-jee/EncryptoPad",
      demo: "",
      img: "/projects/EncryptoPad.png",
    },

    {
      title: "Scientific Calculator",
      description:
        "🧮 A Python-based scientific calculator with both Command Line Interface (CLI) and Graphical User Interface (GUI using Tkinter). It supports a wide range of operations including arithmetic, scientific functions, base conversions, and BMI calculation.",
      tech: ["Python", "Tkinter"],
      github: "https://github.com/Shyam-jee/Scientific-Calculator",
      demo: "",
      img: "/projects/Scientific_calculator.png",
    },
  ];
  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-16 bg-gray-50 dark:bg-gray-900"
    >
      <h2 className="text-3xl font-bold text-blue-500 text-center mb-12">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((proj, index) => (
          <ProjectCard key={index} {...proj} />
        ))}
      </div>
    </section>
  );
}

export default Projects;

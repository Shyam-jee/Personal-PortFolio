import ProjectCard from "./ProjectCard";

function Projects(){

    const projects=[
        {
            title: "Sudoku Solver & Game",
            description: "🧩 Sudoku Solver & Game A responsive, mobile-friendly web application built using HTML, CSS, and JavaScript that lets users play, validate, and solve Sudoku puzzles with built-in hints feature.",
            tech: ["HTML", "CSS", "JavaScript"],
            github: "https://github.com/Shyam-jee/Sudoku-Solver-Game",
            demo: "https://shyam-jee.github.io/Sudoku-Solver-Game/",
            img: "/projects/sudoku.png"
        },
        {
            title: "Scientific Calculator",
            description: "A Python-based scientific calculator with both Command Line Interface (CLI) and Graphical User Interface (GUI using Tkinter). It supports a wide range of operations including arithmetic, scientific functions, base conversions, and BMI calculation.",
            tech: ["Python", "Tkinter"],
            github: "https://github.com/Shyam-jee/Scientific-Calculator",
            img: "/projects/Scientific_calculator.png"
        },
    ]
    return (
        <section id="projects" className="min-h-screen px-6 py-16 bg-gray-50 dark:bg-gray-900">
            <h2 className="text-3xl font-bold text-blue-500 text-center mb-12">Projects</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
                {projects.map((proj, index)=>(
                    <ProjectCard key={index} {...proj} />
                ))}
            </div>
        </section>
    )
}

export default Projects;
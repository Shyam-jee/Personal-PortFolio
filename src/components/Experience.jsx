import { motion } from "framer-motion";
function Experience() {
  const experiences = [
    {
      role: "Summer Training (Data Structures & Algorithms)",
      company: "TrainX + College Collaboration",
      duration: "Jun 2025 - Aug 2024",
      description:
        "Completed 8 weeks of intensive training on Data Structures and Algorithms. Solved problems on LeetCode and worked on real-world coding challenges.",
    },
    {
      role: "Web Development Projects",
      company: "Personal Projects",
      duration: "2024 - Present",
      description:
        "Built Web development projects like Sudoku Solver, React AI Chatbot, ToDo App, Tic Tac Toe Game, Rock Paper Scissor Game. Focused on scalable, user-friendly design.",
    },
  ];
  return (
    <section id="experience" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-blue-600 dark:text-blue-400 mb-12">
          Experience
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                {exp.role}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {exp.company} | {exp.duration}
              </p>
              <p className="mt-3 text-gray-700 dark:text-gray-300">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;

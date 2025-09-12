import { motion } from "framer-motion";

function Skills() {
  const skills = {
    Frontend: ["React", "HTML", "CSS", "JavaScript", "TailwindCSS"],
    // Backend: ["Node.js", "Express.js"],
    Database: [/*{MongoDB"}, */ "MySQL"],
    Tools: ["Git", "Github", "VS Code"],
    DSA: ["Problem Solving", "Algorithm", "Data Structures"],
  };
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center px-6 py-16 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-4xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-blue-500 text-center mb-10"
        >
          My Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div key={category}
                initial={{opacity: 0, x:index%2===0?-40:40}}
                whileInView={{opacity: 1, x:0}}
                transition={{duration: 0.6}}
                viewport={{once: true}}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold text-blue-500 mb-4">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <span key={skill}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-200 rounded-full text-sm shadow-md hover:scale-105 transition"
                  >{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

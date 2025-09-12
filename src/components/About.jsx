import { motion } from "framer-motion";
function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-16 bg-gray-50 dark:bg-gray-900"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl text-center bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
      >
        <h2 className="text-3xl font-bold text-blue-500 mb-4">About Me</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          I'm <span className="font-semibold text-blue-500">Shyam Jee</span>, a
          passionate{" "}
          <span className="font-semibold">Software Development Engineer</span>{" "}
          and <span className="font-semibold">Web Developer</span>. I love
          building modern web applications using the{" "}
          <span className="font-semibold">MERN stack</span> and solving{" "}
          <span className="font-semibold">DSA problems</span> to sharpen my
          skills.
        </p>
        <p className="text-gray-600 dark:text-gray-400 italic">
          ⚡Fun fact: In can code for hours without realizing time but chai is
          my debugger! ☕
        </p>
      </motion.div>
    </section>
  );
}

export default About;

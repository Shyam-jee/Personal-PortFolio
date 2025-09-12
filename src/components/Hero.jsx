import { motion } from "framer-motion";
function Hero() {
  return (
    <section id="home" className="pt-20 flex flex-col md:flex-row items-center justify-center min-h-screen px-6 md:px-8 gap-10">
      {/* left content */}
      <div className="flex-1 text-center md:text-left">
        <motion.h1 className="text-4xl md:text-6xl font-bold mb-4" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          Hi, I'm <span className="text-blue-500">Shyam Jee</span>
        </motion.h1>
        <p className="text-lg md:text-2xl mb-6">Software Development Engineer | Web Developer</p>
        <ul className="mb-6 space-y-2 text-sm md:text-base">
          <li>⚡ I write clean and optimized code</li>
          <li>⚡ I solve DSA problems</li>
          <li>⚡ I design full-stack projects</li>
        </ul>
        <div className="flex flex-col md:flex-row gap-4">
          <a
            href="/myResume.pdf" download
            className="px-4 py-3 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 w-full md:w-auto text-center"
          >
            Resume Download
          </a>
          <a
            href="#contact"
            className="px-4 py-3 bg-gray-200 dark:bg-gray-700 rounded-md shadow w-full md:w-auto text-center"
          >
            Hire Me
          </a>
        </div>
      </div>

      {/* right content */}
      <motion.div
        className="flex-1 flex justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="/avatar.png"
          alt="developer avatar"
          className="rounded-full shadow-lg w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96"
        />
      </motion.div>
    </section>
  );
}

export default Hero;

import { motion } from "framer-motion";
function ProjectCard({title, description, tech, github, demo, img}){
    return (
        <motion.div
            initial={{opacity: 0, y:40}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
            viewport={{once:true}}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
        >
            <div className="overflow-hidden">
                <img src={img} alt={title} className="w-full object-cover hover:scale-105 transition-transform"/>
            </div>

            <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-500 mb-2">
                    {title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                    {
                        tech.map((item)=>(
                        <span key={item} className="px-3 py-1 bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-200 rounded-full text-sm">
                            {item}
                        </span>))
                    }
                </div>

                <div className="flex gap-4">
                    <a href={github} target="_blank" rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600">Github</a>

                    {demo?<a href={demo} target="_blank" rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >Live Demo</a>:""}
                </div>
            </div>
        </motion.div>
    )
}

export default ProjectCard;
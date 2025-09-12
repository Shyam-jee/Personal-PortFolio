import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";


function Footer(){
    return (
        <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-6">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                <h1 className="text-lg font-bold mb-4 md:mb-0">
                    {"<ShyamJee/>"}
                </h1>
                
                <div className="flex space-x-6 text-xl">
                    <a href="https://github.com/Shyam-jee" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/shyam-jee/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
                        <FaLinkedin />
                    </a>
                    <a href="https://x.com/Shyajee1155" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
                        <FaTwitter />
                    </a>
                    
                </div>

                <p>
                    © {new Date().getFullYear()} Shyam Jee. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer;
import React from "react";

const Education = () => {
  return (
    <section id="education" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-blue-500 mb-10">
          Education
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              B.Tech in Computer Science and Engineering (AKTU)
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              RR Institute of Modern Technology, 2022 - Present
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              Intermediate (UP Board)
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Government Inter College, 2019 - 2021
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              High School (UP Board)
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              City Montessori Inter College, 2017 - 2019
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

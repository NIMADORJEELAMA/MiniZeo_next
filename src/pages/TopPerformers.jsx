import { topPerformers } from "../constants/index";
import { Link } from "react-router-dom";
const TopPerformers = () => {
  return (
    <div className="  bg-neutral-950 text-white px-6 py-12 flex flex-col">
      <h1 className="text-3xl font-bold text-center mb-10">Top Performers</h1>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto flex-1 content-center">
        {topPerformers.map((student) => (
          <Link
            to={`/verify/${student.id}`}
            key={student.id}
            className="group block bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-purple-600 transition-all duration-300 hover:shadow-[0_0_20px_-5px_rgba(147,51,234,0.3)]"
          >
            {/* Header */}
            <div className="flex items-center gap-4">
              <img
                src={student.image}
                alt={student.name}
                className="w-16 h-16 rounded-full border-2 border-purple-600 object-cover group-hover:scale-105 transition-transform"
              />
              <div>
                <h2 className="text-lg font-semibold group-hover:text-purple-400 transition-colors">
                  {student.name}
                </h2>
                <p className="text-purple-400 text-sm">{student.role}</p>
                <p className="text-xs text-neutral-400">{student.college}</p>
              </div>
            </div>

            {/* Work Done */}
            <div className="mt-4">
              <h3 className="text-sm font-semibold text-purple-300 mb-2">
                Work & Contributions
              </h3>
              <ul className="list-disc list-inside text-sm text-neutral-300 space-y-1">
                {student.work.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="mt-4 flex flex-wrap gap-2">
              {student.tech.map((tech, index) => (
                <span
                  key={index}
                  className="text-xs px-2 py-1 bg-purple-800/40 rounded-full group-hover:bg-purple-700/60 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Subtle "View Certificate" indicator */}
            <div className="mt-4 text-xs text-neutral-500 text-right group-hover:text-purple-400 italic">
              View Certificate →
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopPerformers;

import {
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaCode,
  FaPhp,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
  FaCodeBranch,
  FaDocker,
} from "react-icons/fa";
import { FaCss3, FaSquareJs } from "react-icons/fa6";

export default function Skills() {
  return (
    <section className="py-16 px-6 bg-zinc-900 text-white">
      <h2 className="text-2xl font-bold text-orange-400 mb-8 text-center">
        Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center">
        <div>
          <FaSquareJs className="mx-auto text-4xl text-yellow-400 mb-2" />
          <p>JavaScript</p>
        </div>
        <div>
          <FaReact className="mx-auto text-4xl text-cyan-400 mb-2" />
          <p>React</p>
        </div>
        <div>
          <FaVuejs className="mx-auto text-4xl text-green-400 mb-2" />
          <p>Vue 2 e 3</p>
        </div>
        <div>
          <FaCode className="mx-auto text-4xl text-blue-400 mb-2" />
          <p>TypeScript</p>
        </div>
        <div>
          <FaNodeJs className="mx-auto text-4xl text-lime-400 mb-2" />
          <p>Node.js</p>
        </div>
        <div>
          <FaPhp className="mx-auto text-4xl text-sky-700 mb-2" />
          <p>PHP</p>
        </div>
        <div>
          <FaHtml5 className="mx-auto text-4xl text-orange-600 mb-2" />
          <p>HTML</p>
        </div>
        <div>
          <FaCss3Alt className="mx-auto text-4xl text-purple-500 mb-2" />
          <p>CSS</p>
        </div>
        <div>
          <FaCss3 className="mx-auto text-4xl text-red-500 mb-2" />
          <p>SCSS</p>
        </div>
        <div>
          <FaCss3 className="mx-auto text-4xl text-lime-400 mb-2" />
          <p>Tailwind</p>
        </div>
        <div>
          <FaDatabase className="mx-auto text-4xl text-slate-700 mb-2" />
          <p>MySql</p>
        </div>
        <div>
          <FaCodeBranch className="mx-auto text-4xl text-indigo-800 mb-2" />
          <p>Git</p>
        </div>
        <div>
          <FaDocker className="mx-auto text-4xl text-cyan-700 mb-2" />
          <p>Docker</p>
        </div>
      </div>
    </section>
  );
}

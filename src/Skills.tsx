import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHtml5, 
  FaJs, 
  FaReact, 
  FaJava, 
  FaPython, 
  FaNodeJs, 
  FaGitAlt, 
  FaGithub, 
  FaLinux 
} from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiSupabase } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

const Skills = () => {
  // Define the skills with categories
  const skillsData = [
    { name: 'HTML', category: 'frontend', icon: FaHtml5 },
    { name: 'JavaScript', category: 'frontend', icon: FaJs },
    { name: 'React', category: 'frontend', icon: FaReact },
    { name: 'Tailwind', category: 'frontend', icon: SiTailwindcss },
    { name: 'TypeScript', category: 'frontend', icon: SiTypescript },
    { name: 'Java', category: 'programming', icon: FaJava },
    { name: 'Python', category: 'programming', icon: FaPython },
    { name: 'Node.js', category: 'backend', icon: FaNodeJs },
    { name: 'REST API', category: 'backend', icon: TbApi },
    { name: 'Supabase', category: 'backend', icon: SiSupabase },
    { name: 'Git', category: 'tools', icon: FaGitAlt },
    { name: 'GitHub', category: 'tools', icon: FaGithub },
    { name: 'Linux', category: 'tools', icon: FaLinux },
  ];

  return (
    <div className="min-h-screen bg-[#35374B] text-white overflow-y-auto">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10 text-[#78A083] tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            My <span className="text-white underline decoration-[#78A083] decoration-4 underline-offset-8">Skills</span>
          </motion.h1>

          <motion.div
            className="max-w-3xl mx-auto leading-relaxed text-lg md:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <p className="mb-6 font-light">
              Here lies a growing arsenal of tools, languages, and frameworks I've picked up along the way — some through structured learning, others by <span className="text-[#78A083] font-medium">smashing my head against the keyboard</span> until it finally worked.
            </p>
            
            <div className="mb-6 relative pl-6 border-l-4 border-[#78A083]/50 text-left italic">
              <p>This isn't just a list — it's proof of late nights, debug battles, Stack Overflow scrolls, and tiny "aha!" moments that made it all worth it.</p>
            </div>
            
            <p className="mb-6">
              I'm always learning, leveling up, and adding new weapons to this dev toolkit.
            </p>
            
            <p className="text-[#78A083] text-2xl font-bold mt-10 flex items-center justify-center gap-3">
              Take a peek <span className="animate-bounce inline-block">👇</span>
            </p>
          </motion.div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skillsData.map((skill, index) => (
            <motion.div 
              key={skill.name}
              className="bg-[#344955]/80 backdrop-blur-md border border-[#50727B]/30 rounded-lg p-6 flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(120, 160, 131, 0.3)" }}
            >
              <div className="text-4xl mb-3">
                {React.createElement(skill.icon, { className: "text-[#78A083]" })}
              </div>
              <h3 className="text-xl font-bold text-[#78A083]">{skill.name}</h3>
              <span className="mt-2 text-sm bg-[#50727B]/30 px-3 py-1 rounded-full text-white/80">
                {skill.category}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Learning Section */}
        <motion.div
          className="mt-20 bg-[#50727B]/30 p-8 rounded-xl border border-[#78A083] shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-[#78A083]">Always Leveling Up</h3>
          <p className="text-white mb-6">
            Technology never stops evolving, and neither do I. Currently exploring new territories and expanding my skillset further.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-[#35374B]/70 text-[#78A083] rounded-md">Next.js</span>
            <span className="px-4 py-2 bg-[#35374B]/70 text-[#78A083] rounded-md">Three.js</span>
            <span className="px-4 py-2 bg-[#35374B]/70 text-[#78A083] rounded-md">UI/UX Design</span>
            <span className="px-4 py-2 bg-[#35374B]/70 text-[#78A083] rounded-md">Machine Learning</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
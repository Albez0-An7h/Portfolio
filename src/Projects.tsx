import React from 'react'
import { motion } from 'framer-motion';
import { projects } from './data/projectsData';
import ProjectCard from './components/ProjectCard';

const Projects = () => {
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
            My <span className="text-white underline decoration-[#78A083] decoration-4 underline-offset-8">Projects</span>
          </motion.h1>

          <motion.div
            className="max-w-3xl mx-auto leading-relaxed text-lg md:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <p className="mb-6 font-light">
              Welcome to the <span className="text-[#78A083] font-medium">laboratory of late-night ideas</span>, shower thoughts turned real, and "wait, what if we built this?" moments.
            </p>
            
            <div className="mb-6 relative pl-6 border-l-4 border-[#78A083]/50 text-left italic">
              <p>This is where I bring my curiosity to life — through personal projects, side experiments, and builds that taught me more than any tutorial ever could.</p>
            </div>
            
            <p className="mb-6">
              Some are <span className="text-[#78A083]">functional</span>, some are <span className="text-[#50727B]">fun</span>, and some are just <span className="bg-[#78A083]/20 px-2 py-1 rounded">beautifully chaotic</span>.
            </p>
            
            <p className="mb-8">
              I don't chase perfection here — I chase progress, creativity, and learning by doing.
            </p>
            
            <p className="text-[#78A083] text-2xl font-bold mt-10 flex items-center justify-center gap-3">
              Explore the madness <span className="animate-bounce inline-block">👇</span>
            </p>
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Add Project Info */}
        <motion.div
          className="mt-20 bg-[#50727B]/30 p-8 rounded-xl border border-[#78A083] shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-[#78A083]">Got an idea for a project?</h3>
          <p className="text-white mb-6">
            I'm always looking for interesting collaborations and new projects to work on. 
            Feel free to reach out if you have something in mind!
          </p>
          <a 
            href="/contact" 
            className="inline-block px-6 py-3 bg-[#78A083] hover:bg-[#78A083]/80 text-white rounded-md transition-colors"
          >
            Get in touch
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
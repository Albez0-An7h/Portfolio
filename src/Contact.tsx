import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Contact = () => {
  const contactMethods = [
    {
      name: 'Email',
      value: 'ansh.km7096@gmail.com',
      icon: <MdEmail className="text-2xl" />,
      link: 'mailto:ansh.km7096@gmail.com',
    },
    {
      name: 'LinkedIn',
      value: 'ansh-kumar',
      icon: <FaLinkedin className="text-2xl" />,
      link: 'https://www.linkedin.com/in/ansh-kumar-723696305/',
    },
    {
      name: 'GitHub',
      value: 'Albez0-An7h',
      icon: <FaGithub className="text-2xl" />,
      link: 'https://github.com/Albez0-An7h',
    },
    {
      name: 'Instagram',
      value: 'an7h_0',
      icon: <FaInstagram className="text-2xl" />,
      link: 'https://www.instagram.com/an7h_0/',
    },
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
            Get In <span className="text-white underline decoration-[#78A083] decoration-4 underline-offset-8">Touch</span>
          </motion.h1>

          <motion.div
            className="max-w-3xl mx-auto leading-relaxed text-lg md:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <p className="mb-6 font-light">
              Got a project idea, a wild collaboration pitch, or just want to say hi?
            </p>
            
            <div className="mb-6 relative pl-6 border-l-4 border-[#78A083]/50 text-left italic">
              <p>Whether it's about tech, building cool stuff, or exchanging the best debugging horror stories — I'm all ears. 
              I'm always open to connecting with fellow creators, learners, or just genuinely awesome people.</p>
            </div>
            
            <p className="mb-6">
              Don't worry, I don't bite. I reply fast (unless I'm lost in a <span className="text-[#78A083] font-medium">code loop</span>).
            </p>
            
            <p className="text-[#78A083] text-2xl font-bold mt-10 flex items-center justify-center gap-3">
              Slide into my inbox — let's chat <span className="animate-bounce inline-block">👇</span>
            </p>
          </motion.div>
        </motion.div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.name}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#344955]/80 backdrop-blur-md border border-[#50727B]/30 rounded-lg p-6 flex items-center gap-4 hover:border-[#78A083] transition-colors"
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(120, 160, 131, 0.3)" }}
            >
              <div className="h-12 w-12 rounded-full bg-[#78A083]/20 flex items-center justify-center text-[#78A083]">
                {method.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#78A083]">{method.name}</h3>
                <p className="text-white/80">{method.value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Message Form or Additional Info */}
        <motion.div
          className="mt-20 bg-[#50727B]/30 p-8 rounded-xl border border-[#78A083] shadow-xl max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-[#78A083]">Response Time</h3>
          <p className="text-white mb-4">
            I typically respond within 24-48 hours. For urgent inquiries, please mention "URGENT" in the subject line of your email.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-[#35374B]/70 text-[#78A083] rounded-md">Open to Collaborations</span>
            <span className="px-4 py-2 bg-[#35374B]/70 text-[#78A083] rounded-md">Project Inquiries</span>
            <span className="px-4 py-2 bg-[#35374B]/70 text-[#78A083] rounded-md">Coffee Chats</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
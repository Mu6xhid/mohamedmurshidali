import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, Linkedin, Github, ChevronDown, Code, Briefcase, Award, Languages, Target, User } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section[id]').forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const projects = [
    {
      title: "AIris",
      subtitle: "AI-Powered Voice-Controlled Object Detection App",
      tech: ["Flutter", "Machine Learning", "Voice Recognition"],
      description: "Developed a mobile app with real-time object detection and text reading. Provided full voice control for hands-free interaction, enhancing accessibility.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Isha Boutique",
      subtitle: "E-Commerce Web Application",
      tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      description: "Built a modern online shopping platform for a boutique using full-stack technologies. Implemented admin dashboard for product management, authentication, and order handling.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Own Stitches",
      subtitle: "Custom Merchandise Website",
      tech: ["HTML", "CSS", "JavaScript", "PHP"],
      description: "Created an online platform for designing and buying custom clothing. Implemented intuitive UI for advanced personalization tools and order handling.",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const skills = {
    technical: ["HTML", "CSS", "JavaScript", "PHP", "Flutter", "Python", "Java", "Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    soft: ["Problem Solving", "Communication", "Adaptability", "Time Management", "Creativity", "Team Collaboration"],
    tools: ["Graphic Designing", "Video Editing", "Cloudinary", "Prisma ORM"]
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white min-h-screen overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              MA
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="hover:text-purple-400 transition-colors duration-300"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-purple-500/20">
            {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left px-4 py-3 hover:bg-purple-900/20 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">Mohamed Murshid Ali</h1>
            <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
            <p className="text-2xl md:text-3xl text-purple-300 mb-8">Flutter & Full-Stack Web Developer</p>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Building responsive, user-focused applications with modern technologies. Creating intuitive mobile and web solutions that make a difference.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:scale-105 transition-transform duration-300"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border-2 border-purple-500 rounded-full font-semibold hover:bg-purple-500/20 transition-colors duration-300"
              >
                Get In Touch
              </button>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} className="text-purple-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            About <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className={`transform transition-all duration-1000 ${isVisible.about ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
              <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
                <div className="flex items-center mb-6">
                  <User className="text-purple-400 mr-3" size={28} />
                  <h3 className="text-2xl font-bold">Background</h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  I'm a passionate Flutter and full-stack web developer currently pursuing my Diploma in Computer Engineering at Kuttukaran Polytechnic College, North Paravur (2022-2025).
                </p>
                <p className="text-gray-300 leading-relaxed">
                  With hands-on experience from my internship at Zoople Technologies and multiple personal projects, I specialize in creating responsive, user-focused applications using modern technologies.
                </p>
              </div>
            </div>

            <div className={`transform transition-all duration-1000 delay-300 ${isVisible.about ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
              <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20">
                <div className="flex items-center mb-6">
                  <Target className="text-blue-400 mr-3" size={28} />
                  <h3 className="text-2xl font-bold">Objective</h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Eager to contribute to innovative teams and grow through real-world development challenges. I'm passionate about building intuitive mobile and web solutions that solve real problems.
                </p>
                <div className="flex items-center mb-4">
                  <Briefcase className="text-blue-400 mr-3" size={24} />
                  <h4 className="text-xl font-semibold">Experience</h4>
                </div>
                <p className="text-gray-300">
                  <span className="font-semibold text-blue-300">Flutter Development Intern</span><br />
                  Zoople Technologies Pvt Ltd, Cochin<br />
                  March 2024 – April 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Featured <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Projects</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`transform transition-all duration-1000 delay-${index * 200} ${isVisible.projects ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
              >
                <div className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 h-full">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  <div className="p-8 relative z-10">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-400 transition-colors">{project.title}</h3>
                    <p className="text-purple-300 mb-4 text-sm">{project.subtitle}</p>
                    <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-purple-500/20 rounded-full text-sm border border-purple-500/30">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Skills & <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {Object.entries(skills).map(([category, items], idx) => (
              <div
                key={category}
                className={`transform transition-all duration-1000 delay-${idx * 200} ${isVisible.skills ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
              >
                <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 h-full">
                  <div className="flex items-center mb-6">
                    {category === 'technical' && <Code className="text-purple-400 mr-3" size={28} />}
                    {category === 'soft' && <User className="text-blue-400 mr-3" size={28} />}
                    {category === 'tools' && <Award className="text-pink-400 mr-3" size={28} />}
                    <h3 className="text-2xl font-bold capitalize">{category.replace('-', ' ')}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill, i) => (
                      <span key={i} className="px-3 py-2 bg-purple-500/20 rounded-lg text-sm border border-purple-500/30 hover:bg-purple-500/30 transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

<section
  id="contact"
  className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50 w-full min-h-screen overflow-x-hidden"
>
  <div className="max-w-4xl mx-auto">
    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
      Get In <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Touch</span>
    </h2>

    <div
      className={`transform transition-all duration-1000 ${isVisible.contact ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
    >
      <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-sm rounded-2xl p-6 sm:p-12 border border-purple-500/20 w-full">
        <p className="text-xl text-center text-gray-300 mb-12">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a
            href="mailto:mohamedmurshidali@gmail.com"
            className="flex items-center justify-center space-x-3 p-6 bg-purple-500/20 rounded-xl hover:bg-purple-500/30 transition-colors border border-purple-500/30 w-full break-words"
          >
            <Mail className="text-purple-400" size={24} />
            <span className="text-lg text-center break-words">mohamedmurshidali@gmail.com</span>
          </a>

          <a
            href="tel:+919074472201"
            className="flex items-center justify-center space-x-3 p-6 bg-blue-500/20 rounded-xl hover:bg-blue-500/30 transition-colors border border-blue-500/30 w-full break-words"
          >
            <Phone className="text-blue-400" size={24} />
            <span className="text-lg text-center break-words">+91 90744 72201</span>
          </a>

          <a
            href="https://linkedin.com/in/mohamedmurshidali"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-3 p-6 bg-pink-500/20 rounded-xl hover:bg-pink-500/30 transition-colors border border-pink-500/30 w-full break-words"
          >
            <Linkedin className="text-pink-400" size={24} />
            <span className="text-lg text-center break-words">LinkedIn Profile</span>
          </a>

          <div className="flex items-center justify-center space-x-3 p-6 bg-green-500/20 rounded-xl border border-green-500/30 w-full break-words">
            <span className="text-lg text-center">📍 Thrissur, Kerala, India</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="py-8 px-4 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">© 2025 Mohamed Murshid Ali</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out; }
      `}</style>
    </div>
  );
};

export default Portfolio;

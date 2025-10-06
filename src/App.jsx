import React, { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  Mail,
  Phone,
  Linkedin,
  ChevronDown,
  Code,
  Briefcase,
  Target,
  User,
} from "lucide-react";
import emailjs from "@emailjs/browser"; 

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState({});
  const form = useRef();
  const [toast, setToast] = useState({ visible: false, message: "" });


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

    document
      .querySelectorAll("section[id]")
      .forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

const projects = [
  {
    title: "AIris",
    subtitle: "AI-Powered Voice-Controlled Object Detection App",
    tech: ["Flutter", "Machine Learning", "Voice Recognition"],
    description:
      "Developed a mobile app with real-time object detection and text reading. Provided full voice control for hands-free interaction, enhancing accessibility.",
    gradient: "from-teal-500 to-emerald-500",
    image: "/images/airis.jpg", // 🖼️ add screenshot path
  },
  {
    title: "Isha Boutique",
    subtitle: "E-Commerce Web Application",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    description:
      "Built a modern online shopping platform for a boutique using full-stack technologies. Implemented admin dashboard for product management, authentication, and order handling.",
    gradient: "from-amber-500 to-yellow-500",
    image: "/images/isha.png",
  },
  {
    title: "Own Stitches",
    subtitle: "Custom Merchandise Website",
    tech: ["HTML", "CSS", "JavaScript", "PHP"],
    description:
      "Created an online platform for designing and buying custom clothing. Implemented intuitive UI for advanced personalization tools and order handling.",
    gradient: "from-cyan-500 to-teal-400",
    image: "/images/ownstitches.png",
  },
];


  const skills = {
    technical: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "Flutter",
      "Python",
      "Java",
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
    ],
    soft: [
      "Problem Solving",
      "Communication",
      "Adaptability",
      "Time Management",
      "Creativity",
      "Team Collaboration",
    ],
    tools: ["Graphic Designing", "Video Editing", "Cloudinary", "Prisma ORM"],
  };

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_6sv4amm",
      "template_fli2s6b",
      form.current,
      "KBVE_yv8U7o0PVCMA"
    )
    .then(
      (result) => {
        console.log("Email successfully sent!", result.text);
        setToast({ visible: true, message: "Message sent successfully!" });
        e.target.reset();

        // Hide toast after 3 seconds
        setTimeout(() => setToast({ visible: false, message: "" }), 3000);
      },
      (error) => {
        console.error("Failed to send email:", error.text);
        setToast({ visible: true, message: "Oops! Something went wrong." });
        setTimeout(() => setToast({ visible: false, message: "" }), 3000);
      }
    );
};


  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 text-white min-h-screen overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-emerald-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-amber-400 bg-clip-text text-transparent">
              MA
            </div>

            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="hover:text-amber-400 transition-colors duration-300"
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-emerald-500/20">
            {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left px-4 py-3 hover:bg-teal-900/20 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Mohamed Murshid Ali
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-teal-400 to-amber-400 mx-auto mb-6"></div>
            <p className="text-2xl md:text-3xl text-teal-300 mb-8">
              Flutter & Full-Stack Web Developer
            </p>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Building responsive, user-focused applications with modern
              technologies. Creating intuitive mobile and web solutions that
              make a difference.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => scrollToSection("projects")}
                className="px-8 py-3 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full font-semibold hover:scale-105 transition-transform duration-300"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-3 border-2 border-teal-400 rounded-full font-semibold hover:bg-teal-500/20 transition-colors duration-300"
              >
                Get In Touch
              </button>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} className="text-teal-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            About{" "}
            <span className="bg-gradient-to-r from-teal-400 to-amber-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-teal-900/40 to-emerald-900/40 backdrop-blur-sm rounded-2xl p-8 border border-teal-500/20">
              <div className="flex items-center mb-6">
                <User className="text-teal-400 mr-3" size={28} />
                <h3 className="text-2xl font-bold">Background</h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm a passionate Flutter and full-stack web developer currently
                pursuing my Diploma in Computer Engineering at Kuttukaran
                Polytechnic College, North Paravur (2022-2025).
              </p>
              <p className="text-gray-300 leading-relaxed">
                With hands-on experience from my internship at Zoople
                Technologies and multiple personal projects, I specialize in
                creating responsive, user-focused applications using modern
                technologies.
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-900/40 to-yellow-900/40 backdrop-blur-sm rounded-2xl p-8 border border-amber-500/20">
              <div className="flex items-center mb-6">
                <Target className="text-amber-400 mr-3" size={28} />
                <h3 className="text-2xl font-bold">Objective</h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Eager to contribute to innovative teams and grow through
                real-world development challenges. I'm passionate about building
                intuitive mobile and web solutions that solve real problems.
              </p>
              <div className="flex items-center mb-4">
                <Briefcase className="text-amber-400 mr-3" size={24} />
                <h4 className="text-xl font-semibold">Experience</h4>
              </div>
              <p className="text-gray-300">
                <span className="font-semibold text-amber-300">
                  Flutter Development Intern
                </span>
                <br />
                Zoople Technologies Pvt Ltd, Cochin
                <br />
                March 2024 – April 2024
              </p>
            </div>
          </div>
        </div>
      </section>

{/* Projects Section */}
<section
  id="projects"
  className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800 text-white w-full min-h-screen"
>
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl md:text-5xl font-bold mb-12">
      Featured{" "}
      <span className="bg-gradient-to-r from-teal-400 to-amber-400 bg-clip-text text-transparent">
        Projects
      </span>
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
      {projects.map((p) => (
        <div
          key={p.title}
          className={`bg-gradient-to-br ${p.gradient} p-[1px] rounded-2xl`}
        >
          <div className="bg-slate-900 rounded-2xl p-6 h-full flex flex-col">
            {/* 🖼️ Project Screenshot */}
            <div className="w-full h-48 mb-4 overflow-hidden rounded-xl border border-slate-700">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* 🔹 Project Info */}
            <h3 className="text-2xl font-bold mb-2">{p.title}</h3>
            <p className="text-lg text-teal-300 mb-4">{p.subtitle}</p>
            <p className="text-gray-300 mb-6 flex-grow">{p.description}</p>

            {/* 🔹 Tech Stack */}
            <div className="flex flex-wrap gap-2 justify-center">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 bg-slate-700 rounded-full text-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white w-full min-h-screen"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            My{" "}
            <span className="bg-gradient-to-r from-teal-400 to-amber-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {Object.entries(skills).map(([category, list]) => (
              <div
                key={category}
                className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-teal-500/40 transition"
              >
                <h3 className="text-2xl font-semibold mb-6 capitalize text-amber-400">
                  {category} Skills
                </h3>
                <ul className="space-y-2 text-gray-300">
                  {list.map((s) => (
                    <li key={s}>• {s}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50 w-full min-h-screen overflow-x-hidden"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Get In{" "}
            <span className="bg-gradient-to-r from-teal-400 to-amber-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>

          {/* Contact Info */}
          <div className="bg-gradient-to-br from-teal-900/40 to-amber-900/40 backdrop-blur-sm rounded-2xl p-6 sm:p-12 border border-teal-500/20 w-full mb-16">
            <p className="text-xl text-center text-gray-300 mb-12">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a
                href="mailto:mohamedmurshidali@gmail.com"
                className="flex items-center justify-center space-x-3 p-6 bg-teal-500/20 rounded-xl hover:bg-teal-500/30 transition-colors border border-teal-500/30 w-full break-words"
              >
                <Mail className="text-teal-400" size={24} />
                <span className="text-lg text-center break-words">
                  mohamedmurshidali@gmail.com
                </span>
              </a>

              <a
                href="tel:+919074472201"
                className="flex items-center justify-center space-x-3 p-6 bg-amber-500/20 rounded-xl hover:bg-amber-500/30 transition-colors border border-amber-500/30 w-full break-words"
              >
                <Phone className="text-amber-400" size={24} />
                <span className="text-lg text-center break-words">
                  +91 90744 72201
                </span>
              </a>

              <a
                href="https://linkedin.com/in/mohamedmurshidali"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 p-6 bg-cyan-500/20 rounded-xl hover:bg-cyan-500/30 transition-colors border border-cyan-500/30 w-full break-words"
              >
                <Linkedin className="text-cyan-400" size={24} />
                <span className="text-lg text-center break-words">
                  LinkedIn Profile
                </span>
              </a>

              <div className="flex items-center justify-center space-x-3 p-6 bg-emerald-500/20 rounded-xl border border-emerald-500/30 w-full break-words">
                <span className="text-lg text-center">
                  📍 Thrissur, Kerala, India
                </span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-2xl p-6 sm:p-12 border border-amber-500/20 w-full">
            <h3 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-teal-400 to-amber-400 bg-clip-text text-transparent">
              Send a Message
            </h3>

            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full p-4 rounded-xl bg-slate-800/70 border border-teal-500/30 text-white placeholder-gray-400 focus:border-teal-400 outline-none"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full p-4 rounded-xl bg-slate-800/70 border border-teal-500/30 text-white placeholder-gray-400 focus:border-teal-400 outline-none"
                />
              </div>

              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                required
                className="w-full p-4 rounded-xl bg-slate-800/70 border border-teal-500/30 text-white placeholder-gray-400 focus:border-teal-400 outline-none"
              ></textarea>

              <input
                type="hidden"
                name="time"
                value={new Date().toLocaleString()}
              />

              <div className="text-center">
                <button
                  type="submit"
                  className="px-8 py-3 bg-gradient-to-r from-teal-500 to-amber-500 rounded-full font-semibold hover:scale-105 transition-transform duration-300"
                >
                  Send Message
                </button>
                {/* Toast Notification */}
{toast.visible && (
  <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-teal-500 text-white px-6 py-3 rounded-full shadow-lg border border-teal-400/50 animate-fade-in-up z-50">
    {toast.message}
  </div>
)}

              </div>
            </form>
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer className="py-8 px-4 border-t border-teal-500/20">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">© 2025 Mohamed Murshid Ali</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;

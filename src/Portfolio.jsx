import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Database, Server, GitBranch, Layers, Box, ChevronDown, Menu, X, MapPin, Phone, Send, FileText, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');
  const [isSubmitting] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'testimonial', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

const handleSubmit = (e) => {
  e.preventDefault();

  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  // Template එකට යන දත්ත
  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    subject: formData.subject,
    message: formData.message,
    to_name: 'Anjana Fernando',
  };

  emailjs.send(serviceId, templateId, templateParams, publicKey)
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setFormStatus('Message sent successfully! 🚀');
      setFormData({ name: '', email: '', subject: '', message: '' });
    })
    .catch((err) => {
      console.error('FAILED...', err);
      setFormStatus('Failed to send message. Please try again.');
    });
};

  const skills = [
    { name: 'React', icon: Code2, color: 'text-blue-400', bgColor: 'bg-blue-400/10' },
    { name: 'Node.js', icon: Server, color: 'text-green-400', bgColor: 'bg-green-400/10' },
    { name: 'Express', icon: Layers, color: 'text-gray-400', bgColor: 'bg-gray-400/10' },
    { name: 'MongoDB', icon: Database, color: 'text-emerald-400', bgColor: 'bg-emerald-400/10' },
    { name: 'Tailwind CSS', icon: Box, color: 'text-cyan-400', bgColor: 'bg-cyan-400/10' },
    { name: 'Git', icon: GitBranch, color: 'text-orange-400', bgColor: 'bg-orange-400/10' },
    { name: 'REST APIs', icon: Server, color: 'text-purple-400', bgColor: 'bg-purple-400/10' },
    { name: 'WordPress', icon: Box, color: 'text-blue-500', bgColor: 'bg-blue-500/10' }
  ];

  const techColors = {
    'React': { text: 'text-blue-400', bg: 'bg-blue-500/20', border: 'border-blue-400/50' },
    'Node.js': { text: 'text-green-400', bg: 'bg-green-500/20', border: 'border-green-400/50' },
    'MongoDB': { text: 'text-emerald-400', bg: 'bg-emerald-500/20', border: 'border-emerald-400/50' },
    'Express': { text: 'text-gray-300', bg: 'bg-gray-500/20', border: 'border-gray-400/50' },
    'Tailwind CSS': { text: 'text-cyan-400', bg: 'bg-cyan-500/20', border: 'border-cyan-400/50' },
    'JWT': { text: 'text-purple-400', bg: 'bg-purple-500/20', border: 'border-purple-400/50' },
    'Redux': { text: 'text-violet-400', bg: 'bg-violet-500/20', border: 'border-violet-400/50' },
    'Firebase': { text: 'text-yellow-400', bg: 'bg-yellow-500/20', border: 'border-yellow-400/50' },
    'Quill': { text: 'text-pink-400', bg: 'bg-pink-500/20', border: 'border-pink-400/50' },
    'HTML5': { text: 'text-orange-500', bg: 'bg-orange-500/20', border: 'border-orange-500/50' },
    'CSS3': { text: 'text-blue-500', bg: 'bg-blue-500/20', border: 'border-blue-500/50' },
    'JavaScript': { text: 'text-yellow-400', bg: 'bg-yellow-500/20', border: 'border-yellow-400/50' },
    'WordPress': { text: 'text-sky-500', bg: 'bg-sky-500/20', border: 'border-sky-500/50' },
    'Elementor': { text: 'text-pink-500', bg: 'bg-pink-500/20', border: 'border-pink-500/50' },
    'PHP': { text: 'text-indigo-400', bg: 'bg-indigo-500/20', border: 'border-indigo-400/50' },
    'SEO': { text: 'text-emerald-500', bg: 'bg-emerald-500/20', border: 'border-emerald-500/50' }
  };

  const projects = [
    {
      title: 'Veritas International Campus LMS',
      description: 'A comprehensive Learning Management System developed for Veritas International Campus, enabling course management, student enrollment, assignment tracking, and interactive learning experiences.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
      highlights: ['Course Management', 'Student Dashboard', 'Assignment Tracking'],
      link: 'https://veritas-campus-lms-ywm1.vercel.app/',
      github: 'https://github.com/Savanrajakaruna/Veritas-International-Statistics-Website',
      period: 'May 2025 - Aug 2025',
      company: 'Gamage Recruiters',
      role: 'Lead Developer',
      featured: true
    },
    {
      title: 'Avion Farm Website',
      description: 'A comprehensive and responsive web platform developed for the agricultural sector, focusing on modern UI/UX principles. Built from scratch to ensure optimal performance and cross-browser compatibility.',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      highlights: ['Modern UI/UX', 'Performance Optimization', 'Cross-browser Compatibility'],
      link: 'https://avionfarm.com/',
      github: '#',
      role: 'Web Developer'
    },
    {
      title: 'Lanka Holiday Journey',
      description: 'A professional travel and tourism website built using WordPress. Features include custom theme adjustments, SEO optimization, and an intuitive user interface to streamline the vacation planning process.',
      tech: ['WordPress', 'Elementor', 'PHP', 'SEO'],
      highlights: ['Custom Theme Adjustments', 'SEO Optimization', 'User Interface Design'],
      link: 'https://lankaholidayjourney.com/',
      github: '#',
      role: 'WordPress Developer'
    },
    {
      title: 'Job Portal',
      description: 'A comprehensive platform connecting job seekers with recruiters, featuring secure authentication, CRUD operations, and advanced filtering capabilities.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
      highlights: ['User Authentication', 'Role-based Access', 'Job Management'],
      link: 'https://github.com/Anji-fdo/mern-job-protal',
      github: 'https://github.com/Anji-fdo/mern-job-protal',
      role: 'Full-stack Developer'
    },
    {
      title: 'MERN Estate',
      description: 'Full-featured real estate application with image upload functionality, property listings, and advanced search filters for seamless property discovery.',
      tech: ['React', 'Redux', 'MongoDB', 'Express', 'Firebase'],
      highlights: ['Image Uploads', 'Search Filters', 'Property Listings'],
      link: 'https://mern-estate-gwsi.onrender.com/',
      github: 'https://github.com/Anji-fdo/mern-estate',
      role: 'Full-stack Developer'
    },
    {
      title: 'MERN Blog',
      description: 'Complete blogging system with rich text editor, user authentication, comment system, and admin dashboard for content management.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Quill'],
      highlights: ['Rich Text Editor', 'Comment System', 'Admin Dashboard'],
      link: 'https://mern-blog-gl76.onrender.com/',
      github: 'https://github.com/Anji-fdo/mern-blog',
      role: 'Full-stack Developer'
    }
  ];

  const experiences = [
    {
      title: 'Software Engineering Intern',
      company: 'Gamage Recruiters (PVT) LTD',
      period: 'April 2025 - October 2025',
      duration: '6 months',
      location: 'Colombo, Western Province, Sri Lanka',
      type: 'Internship',
      responsibilities: [
        'Developed and maintained full-stack web applications using React, Node.js, Express, and MongoDB',
        'Integrated RESTful APIs and third-party services to enhance application functionality',
        'Performed database operations including schema design, queries, and optimization',
        'Collaborated in Agile development environment with daily standups and sprint planning',
        'Conducted thorough code reviews ensuring code quality and best practices',
        'Implemented unit testing and debugging to maintain high software reliability',
        'Utilized Git for version control and collaborative development workflows',
        'Demonstrated strong analytical thinking and problem-solving in resolving technical challenges',
        'Delivered clean, maintainable code while meeting tight project deadlines'
      ],
      featuredProject: {
        name: 'Veritas International Campus LMS',
        description: 'Led the development of a comprehensive Learning Management System serving Veritas International Campus',
        link: 'https://veritas-campus-lms-ywm1.vercel.app/'
      }
    },
    {
      title: 'Data Processing and Analysing Associate',
      company: 'Adelanka (PVT) LTD',
      period: 'July 2021 - July 2022',
      duration: '1 yr 1 mo',
      location: 'Gampaha, Western Province, Sri Lanka',
      type: 'Contract',
      responsibilities: [
        'Processed and analyzed large datasets to extract meaningful insights and patterns',
        'Developed data processing workflows to improve efficiency and accuracy',
        'Applied problem-solving techniques to resolve data inconsistencies and quality issues',
        'Collaborated with cross-functional teams to understand data requirements',
        'Created reports and visualizations to communicate findings effectively',
        'Maintained data integrity and ensured compliance with data handling procedures'
      ]
    }
  ];

  return (
    <div className="bg-slate-950 text-gray-100 min-h-screen">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .float-animation {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        @keyframes successPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .success-pulse {
          animation: successPulse 0.5s ease-in-out;
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              AF
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'experience', 'projects', 'testimonial', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors ${
                    activeSection === item ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              className="md:hidden text-gray-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-slate-800">
            <div className="px-4 py-3 space-y-3">
              {['home', 'about', 'skills', 'experience', 'projects', 'testimonial', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left capitalize text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <div className="">
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
                transition={{ 
                  duration: 0.8, 
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" } 
                }}
                className="w-52 h-52 mx-auto mb-8 rounded-full overflow-hidden border-4 border-cyan-500 shadow-2xl shadow-cyan-500/20"
              >
                <img 
                  src="/Anjana.jpg"
                  alt="Anjana Fernando" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent fade-in-up">
            Anjana Fernando
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-4 fade-in-up">
            Full-Stack Software Engineer
          </p>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto fade-in-up">
            MERN Stack Developer | IT Undergraduate at SLIIT | Building scalable web applications with modern technologies
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12 fade-in-up">
            <a
              href="https://drive.google.com/drive/folders/1jI_2foQFcprEASXE_rsFqp619ZOltV7K?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-500 hover:to-blue-700 px-6 py-3 rounded-lg transition-all transform hover:scale-105"
            >
              <FileText size={20} />
              <span>Download Resume</span>
            </a>
            <a
              href="https://github.com/Anji-fdo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-lg transition-all transform hover:scale-105"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/anjana-fernando-5757811b7/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-all transform hover:scale-105"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </div>
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-cyan-400"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 px-4 bg-slate-900/50 ${visibleSections.has('about') ? 'fade-in-up' : 'opacity-0'}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I'm a final-year IT undergraduate at Sri Lanka Institute of Information Technology (SLIIT), graduating in March 2026. My journey from academics to industry has been marked by a successful 6-month Software Engineering Internship at Gamage Recruiters (PVT) LTD, where I honed my skills in full-stack development.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              During my internship from April 2025 to October 2025, I worked extensively on both frontend and backend development, integrating APIs and managing database operations. I thrived in an Agile environment, contributing to code reviews, implementing unit tests, and utilizing Git for seamless collaboration.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My technical foundation is built on the MERN stack, and I'm passionate about creating efficient, scalable web applications. I bring strong analytical thinking, problem-solving abilities, and a commitment to writing clean, maintainable code. I excel under pressure and am always eager to learn and adapt to new technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 px-4 ${visibleSections.has('skills') ? 'fade-in-up' : 'opacity-0'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`${skill.bgColor} rounded-xl p-6 border border-slate-700 hover:border-cyan-400 transition-all hover:transform hover:scale-105 flex flex-col items-center justify-center`}
              >
                <skill.icon className={`${skill.color} mb-3`} size={40} />
                <span className="text-gray-300 text-center font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={`py-20 px-4 bg-slate-900/50 ${visibleSections.has('experience') ? 'fade-in-up' : 'opacity-0'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex items-start mb-4 md:mb-0">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                      <Code2 size={32} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-cyan-400 mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-xl text-gray-300 mb-1">{exp.company}</p>
                      <div className="flex flex-wrap gap-2 items-center text-gray-400">
                        <span>{exp.period}</span>
                        <span>•</span>
                        <span>{exp.duration}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:items-end">
                    <span className="px-3 py-1 bg-cyan-900/30 text-cyan-400 text-sm rounded-full border border-cyan-400/30 mb-2">
                      {exp.type}
                    </span>
                    <p className="text-gray-400 text-sm">{exp.location}</p>
                  </div>
                </div>

                {exp.featuredProject && (
                  <div className="mb-6 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 rounded-lg p-6 border-2 border-cyan-400/30">
                    <div className="flex items-center mb-3">
                      <Award className="text-cyan-400 mr-2" size={24} />
                      <h4 className="text-xl font-bold text-cyan-400">Featured Project</h4>
                    </div>
                    <p className="text-lg font-semibold text-gray-200 mb-2">{exp.featuredProject.name}</p>
                    <p className="text-gray-300 mb-3">{exp.featuredProject.description}</p>
                    <a
                      href={exp.featuredProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span>View Live Project</span>
                    </a>
                  </div>
                )}

                <div className="space-y-3">
                  {exp.responsibilities.map((item, i) => (
                    <div key={i} className="flex items-start">
                      <div className="flex-shrink-0 w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3"></div>
                      <p className="text-gray-300">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 px-4 ${visibleSections.has('projects') ? 'fade-in-up' : 'opacity-0'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`bg-slate-800/50 rounded-xl p-6 border ${project.featured ? 'border-cyan-400 shadow-lg shadow-cyan-400/20' : 'border-slate-700'} hover:border-cyan-400 transition-all hover:transform hover:scale-105 flex flex-col`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <h3 className="text-2xl font-bold text-cyan-400">{project.title}</h3>
                    {project.featured && (
                      <Award className="text-yellow-400" size={20} />
                    )}
                  </div>
                </div>
                
                <div className="mb-3 flex items-center justify-between">
                  <span className="px-3 py-1 bg-purple-900/30 text-purple-400 text-xs rounded-full border border-purple-400/30">
                    {project.role}
                  </span>
                  {project.period && (
                    <p className="text-xs text-gray-400">{project.period}</p>
                  )}
                </div>

                {project.company && (
                  <p className="text-sm text-cyan-400 mb-3">{project.company}</p>
                )}

                <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
                
                <div className="mb-4">
                  <p className="text-sm text-gray-400 mb-2 font-semibold">Key Features:</p>
                  <div className="space-y-1">
                    {project.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => {
                    const colors = techColors[tech] || { text: 'text-gray-400', bg: 'bg-gray-500/20', border: 'border-gray-400/50' };
                    return (
                      <span
                        key={i}
                        className={`px-3 py-1 ${colors.bg} ${colors.text} text-xs rounded-full border ${colors.border}`}
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>

                <div className="flex gap-3 pt-4 border-t border-slate-700">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center space-x-2 bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-lg transition-all text-sm font-medium"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center space-x-2 bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg transition-all text-sm font-medium"
                  >
                    <Github size={16} />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section id="testimonial" className={`py-20 px-4 bg-slate-900/50 ${visibleSections.has('testimonial') ? 'fade-in-up' : 'opacity-0'}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Recommendation
          </h2>
          <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 rounded-xl p-8 border-2 border-cyan-400/30">
            <div className="text-6xl text-cyan-400 mb-4">"</div>
            <p className="text-xl text-gray-300 italic leading-relaxed mb-6">
              Anjana demonstrated exceptional dedication and a remarkable ability to learn quickly. His analytical thinking and problem-solving skills were evident throughout his internship. He consistently delivered clean, efficient code while handling pressure with professionalism. His strong work ethic and technical aptitude make him a valuable asset to any development team.
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full mr-4">
                <img 
                  src="/Gamage.png"
                  alt="Gamage Recruiters" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-gray-300 font-semibold">Harshana Gamage - Chairman/Director</p>
                <p className="text-gray-400">Gamage Recruiters (PVT) LTD</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 px-4 ${visibleSections.has('contact') ? 'fade-in-up' : 'opacity-0'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">Let's Connect</h3>
                <p className="text-gray-300 mb-6">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-4 bg-slate-800/50 p-4 rounded-lg border border-slate-700 hover:border-cyan-400 transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Email</p>
                    <a href="mailto:anjanafdoas@gmail.com" className="text-gray-300 hover:text-cyan-400 transition-colors">
                      anjanafdoas@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-slate-800/50 p-4 rounded-lg border border-slate-700 hover:border-cyan-400 transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Phone</p>
                    <a href="tel:+94123456789" className="text-gray-300 hover:text-cyan-400 transition-colors">
                      +94 71 344 1221
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-slate-800/50 p-4 rounded-lg border border-slate-700 hover:border-cyan-400 transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Location</p>
                    <p className="text-gray-300">
                      Katunayake, Sri Lanka
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <p className="text-gray-400 text-sm mb-4">Follow me on social media</p>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/Anji-fdo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center border border-slate-700 hover:border-cyan-400 transition-all"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/anjana-fernando-5757811b7/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center border border-slate-700 hover:border-cyan-400 transition-all"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-300 mb-2 font-medium">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder="Project Discussion"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="5"
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                {formStatus === 'success' && (
                  <div className="text-center p-4 rounded-lg bg-green-900/30 text-green-400 border border-green-400/30 success-pulse">
                    <div className="flex items-center justify-center space-x-2">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="font-semibold">Message sent successfully!</span>
                    </div>
                    <p className="text-sm mt-2">I'll get back to you as soon as possible.</p>
                  </div>
                )}

                {formStatus === 'error' && (
                  <div className="text-center p-4 rounded-lg bg-red-900/30 text-red-400 border border-red-400/30">
                    <div className="flex items-center justify-center space-x-2">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                      </svg>
                      <span className="font-semibold">Please fill in all fields correctly.</span>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-500 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all flex items-center justify-center space-x-2 transform hover:scale-105 ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={20} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 mb-4">© 2026 Anjana Fernando. All rights reserved.</p>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/Anji-fdo" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/anjana-fernando-5757811b7/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
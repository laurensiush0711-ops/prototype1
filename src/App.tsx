/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Moon, 
  Sun, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  X, 
  MessageCircle, 
  FileText,
  ChevronRight,
  Database,
  Gamepad2,
  Code2,
  Terminal
} from 'lucide-react';
import { EXPERIENCES, PROJECTS, SKILLS } from './constants';
import { Project } from './types';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? 'dark' : ''} min-h-screen transition-colors duration-300`}>
      <div className="bg-stone-50 dark:bg-[#0a0a0a] text-stone-900 dark:text-stone-100 font-sans selection:bg-emerald-500/30">
        
        {/* Navigation */}
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-stone-200 dark:border-white/10 py-4' : 'bg-transparent py-6'}`}>
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold tracking-tighter flex items-center gap-2"
            >
              <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-white">
                <Terminal size={18} />
              </div>
              <span className="hidden sm:inline">LAURENSIUS.DEV</span>
            </motion.div>
            
            <div className="flex items-center gap-8">
              <div className="hidden md:flex items-center gap-6 text-sm font-medium opacity-70">
                <a href="#about" className="hover:opacity-100 transition-opacity">About</a>
                <a href="#experience" className="hover:opacity-100 transition-opacity">Experience</a>
                <a href="#projects" className="hover:opacity-100 transition-opacity">Projects</a>
                <a href="#steps" className="hover:opacity-100 transition-opacity">Process</a>
                <a href="#skills" className="hover:opacity-100 transition-opacity">Skills</a>
              </div>
              
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-full bg-stone-200 dark:bg-white/10 hover:scale-110 transition-transform"
                aria-label="Toggle Theme"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-20 dark:opacity-40">
            <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/30 rounded-full blur-[120px]" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]" />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative">
            <div className="grid md:grid-columns-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold tracking-wider uppercase mb-6 border border-emerald-500/20">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  Available for new projects
                </div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
                  Hi, I'm <span className="text-emerald-500">Laurensius</span>.
                </h1>
                <p className="text-lg md:text-xl text-stone-600 dark:text-stone-400 max-w-xl mb-10 leading-relaxed">
                  A data-driven Quality Assurance professional with 2+ years in game development. I bridge the gap between <span className="text-emerald-500">Game QA</span> and <span className="text-blue-500">Data Analytics</span>.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="#projects" 
                    className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-semibold transition-all shadow-lg shadow-emerald-500/20 flex items-center gap-2"
                  >
                    View Projects <ChevronRight size={18} />
                  </a>
                  <a 
                    href="#contact" 
                    className="px-8 py-4 bg-stone-200 dark:bg-white/5 hover:bg-stone-300 dark:hover:bg-white/10 rounded-xl font-semibold transition-all"
                  >
                    Let's Talk
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative aspect-square max-w-md mx-auto md:ml-auto"
              >
                <div className="absolute inset-0 border-2 border-emerald-500/20 rounded-3xl rotate-6 translate-x-4 translate-y-4" />
                <div className="absolute inset-0 border-2 border-blue-500/20 rounded-3xl -rotate-3 -translate-x-2 -translate-y-2" />
                <div className="relative w-full h-full bg-stone-200 dark:bg-stone-800 rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="/profile.webp" 
                    alt="Laurensius Haryo Radyobaskoro P" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-emerald-500 rounded-lg text-white">
                        <Gamepad2 size={20} />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest opacity-60">Currently Playing</p>
                        <p className="font-semibold">Elden Ring: Shadow of the Erdtree</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="py-24 bg-white dark:bg-[#0f0f0f]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
                  <span className="w-12 h-px bg-emerald-500" />
                  About Me
                </h2>
                <div className="space-y-6 text-stone-600 dark:text-stone-400 leading-relaxed">
                  <p>
                    I am a data-driven Quality Assurance professional with over two years of experience in game development. My background includes documenting 120+ bugs in Unity and conducting root cause analysis to improve team efficiency.
                  </p>
                  <p>
                    To enhance my analytical capabilities, I joined the RevoU Data Analytics program, building hands-on skills in data cleaning, exploratory data analysis (EDA), and visualization using Tableau and Python.
                  </p>
                  <div className="pt-6 border-t border-stone-200 dark:border-white/10">
                    <h4 className="font-bold text-stone-900 dark:text-white mb-4">Education</h4>
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold text-emerald-500">Binus University</p>
                        <p className="text-sm">Bachelor of Computer Science (GPA: 3.07)</p>
                      </div>
                      <div>
                        <p className="font-semibold text-emerald-500">RevoU</p>
                        <p className="text-sm">Full-Stack Data Analysis (2025 - Present)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-8 bg-stone-50 dark:bg-white/5 rounded-3xl border border-stone-200 dark:border-white/10">
                  <Database className="text-blue-500 mb-4" size={32} />
                  <h3 className="font-bold text-xl mb-2">Data First</h3>
                  <p className="text-sm opacity-60">Turning raw telemetry into actionable design insights.</p>
                </div>
                <div className="p-8 bg-stone-50 dark:bg-white/5 rounded-3xl border border-stone-200 dark:border-white/10 mt-8">
                  <Gamepad2 className="text-emerald-500 mb-4" size={32} />
                  <h3 className="font-bold text-xl mb-2">Game Core</h3>
                  <p className="text-sm opacity-60">Deep understanding of gameplay loops and player psychology.</p>
                </div>
                <div className="p-8 bg-stone-50 dark:bg-white/5 rounded-3xl border border-stone-200 dark:border-white/10">
                  <Code2 className="text-orange-500 mb-4" size={32} />
                  <h3 className="font-bold text-xl mb-2">Full Stack</h3>
                  <p className="text-sm opacity-60">Building the tools that make data-driven design possible.</p>
                </div>
                <div className="p-8 bg-stone-50 dark:bg-white/5 rounded-3xl border border-stone-200 dark:border-white/10 mt-8">
                  <Terminal className="text-purple-500 mb-4" size={32} />
                  <h3 className="font-bold text-xl mb-2">Systems</h3>
                  <p className="text-sm opacity-60">Architecting robust and scalable game systems.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-16 text-center">Work Experience</h2>
            <div className="space-y-12">
              {EXPERIENCES.map((exp, index) => (
                <motion.div 
                  key={exp.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative pl-8 border-l-2 border-stone-200 dark:border-white/10"
                >
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-emerald-500 border-4 border-stone-50 dark:border-[#0a0a0a]" />
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{exp.role}</h3>
                      <p className="text-emerald-500 font-medium">{exp.company}</p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-stone-200 dark:bg-white/5 text-xs font-bold opacity-60">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-3 text-stone-600 dark:text-stone-400">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="text-emerald-500 mt-1.5">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 bg-white dark:bg-[#0f0f0f]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
                <p className="text-stone-600 dark:text-stone-400 max-w-lg">A selection of tools and games that showcase the intersection of design and data.</p>
              </div>
              <div className="flex gap-2">
                <div className="w-12 h-1 bg-emerald-500 rounded-full" />
                <div className="w-4 h-1 bg-stone-200 dark:bg-white/10 rounded-full" />
                <div className="w-4 h-1 bg-stone-200 dark:bg-white/10 rounded-full" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {PROJECTS.map((project) => (
                <motion.div 
                  key={project.id}
                  layoutId={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer bg-stone-50 dark:bg-white/5 rounded-3xl overflow-hidden border border-stone-200 dark:border-white/10 hover:border-emerald-500/50 transition-all duration-500"
                >
                  <div className="aspect-video overflow-hidden relative">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                      <span className="text-white font-bold flex items-center gap-2">
                        View Details <ExternalLink size={16} />
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-emerald-500/10 text-emerald-500 rounded border border-emerald-500/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-emerald-500 transition-colors">{project.title}</h3>
                    <p className="text-stone-600 dark:text-stone-400 line-clamp-2">{project.shortDescription}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-16 text-center">Technical Skills</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {SKILLS.map((category) => (
                <div key={category.category} className="p-8 bg-white dark:bg-white/5 rounded-3xl border border-stone-200 dark:border-white/10">
                  <h3 className="text-xl font-bold mb-6 text-emerald-500">{category.category}</h3>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map(skill => (
                      <span key={skill} className="px-4 py-2 bg-stone-100 dark:bg-white/5 rounded-xl text-sm font-medium border border-stone-200 dark:border-white/10 hover:border-emerald-500/30 transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Simple Steps Section (Phase 5) */}
        <section id="steps" className="py-24 bg-stone-50 dark:bg-[#0a0a0a]">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How It Works</h2>
              <p className="text-stone-600 dark:text-stone-400">Translating the tech into simple steps.</p>
            </div>
            
            {/* The Blue Bordered Box from Screenshot */}
            <div className="border-2 border-blue-500/40 rounded-2xl p-8 md:p-12 bg-white dark:bg-white/5 shadow-xl shadow-blue-500/5">
              <div className="grid md:grid-cols-3 gap-12">
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center font-bold">1</div>
                  <h3 className="font-bold text-lg">Gather Data</h3>
                  <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                    We track how players move and interact. Think of it like a "digital footprint" of their fun.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center font-bold">2</div>
                  <h3 className="font-bold text-lg">Find Patterns</h3>
                  <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                    My tools look for where players get stuck or bored. It's like finding the "clog" in a pipe.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center font-bold">3</div>
                  <h3 className="font-bold text-lg">Level Up</h3>
                  <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                    We tweak the game rules based on the facts, making the experience smoother and more exciting for everyone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-emerald-500 text-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Let's build something data-driven.</h2>
            <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto">
              Whether you're looking for a lead developer or a data consultant for your next game, I'd love to hear from you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://wa.me/1234567890" 
                className="px-8 py-4 bg-white text-emerald-600 rounded-2xl font-bold flex items-center gap-2 hover:scale-105 transition-transform shadow-xl"
              >
                <MessageCircle size={20} /> WhatsApp
              </a>
              <a 
                href="https://linkedin.com" 
                className="px-8 py-4 bg-black/20 backdrop-blur-md text-white border border-white/30 rounded-2xl font-bold flex items-center gap-2 hover:scale-105 transition-transform"
              >
                <Linkedin size={20} /> LinkedIn
              </a>
              <a 
                href="/resume.pdf" 
                className="px-8 py-4 bg-black/20 backdrop-blur-md text-white border border-white/30 rounded-2xl font-bold flex items-center gap-2 hover:scale-105 transition-transform"
              >
                <FileText size={20} /> Download Resume
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-stone-200 dark:border-white/10">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-sm opacity-50">
              © 2024 Data-Driven Game Dev. Built with React & Tailwind.
            </div>
            <div className="flex gap-6">
              <a href="#" className="opacity-50 hover:opacity-100 transition-opacity"><Github size={20} /></a>
              <a href="#" className="opacity-50 hover:opacity-100 transition-opacity"><Linkedin size={20} /></a>
              <a href="#" className="opacity-50 hover:opacity-100 transition-opacity"><Mail size={20} /></a>
            </div>
          </div>
        </footer>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              />
              <motion.div 
                layoutId={selectedProject.id}
                className="relative w-full max-w-4xl bg-white dark:bg-[#111] rounded-[2rem] overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
              >
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                >
                  <X size={24} />
                </button>
                
                <div className="aspect-video w-full">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                <div className="p-8 md:p-12">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tags.map(tag => (
                      <span key={tag} className="text-xs font-bold uppercase tracking-widest px-3 py-1 bg-emerald-500/10 text-emerald-500 rounded-full border border-emerald-500/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-4xl font-bold mb-6">{selectedProject.title}</h2>
                  <div className="prose prose-stone dark:prose-invert max-w-none mb-10">
                    <p className="text-lg text-stone-600 dark:text-stone-400 leading-relaxed">
                      {selectedProject.fullDescription}
                    </p>
                  </div>
                  <a 
                    href={selectedProject.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 text-white rounded-2xl font-bold hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-500/20"
                  >
                    View Live Project <ExternalLink size={20} />
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}

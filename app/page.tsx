"use client"

import Image from "next/image";
import type React from "react"
import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Sun,
  Moon,
  Send,
  Briefcase,
  Home,
  GraduationCap,
  Award,
  X,
  Eye,
  Download,
  Instagram,
  Twitter,
  Calendar,
  Building,
} from "lucide-react"

export default function Portfolio() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [selectedCertificate, setSelectedCertificate] = useState<any>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  useEffect(() => {
    setIsVisible(true)
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "dark") {
      setIsDarkMode(true)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light")
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Message sent successfully!")
    setFormData({ name: "", email: "", message: "" })
  }

  const projects = [
    {
      title: "Real-time Process Monitoring Dashboard",
      description: "Visualizes system processes in real-time with alerting features and live updates via APIs.",
      category: "Dashboard",
      date: "Mar 2025",
      tech: ["HTML", "CSS", "JavaScript", "Python"],
      github: "https://github.com/tanya/process-dashboard",
      demo: "#",
      image: "/profile.jpg?height=200&width=300",
    },
    {
      title: "Daily Challenge Bot",
      description: "Provides daily personalized challenges with motivational feedback.",
      category: "Web App",
      date: "Feb 2025",
      tech: ["HTML", "Tailwind CSS", "JavaScript", "APIs"],
      github: "https://github.com/tanya/challenge-bot",
      demo: "https://daily-challenge-bot.onrender.com",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Agri-Commerce Platform for Farmers",
      description: "E-commerce site tailored for agricultural needs like seeds, fertilizers, etc.",
      category: "E-commerce",
      date: "Mar 2025",
      tech: ["HTML", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/tanya/agri-commerce",
      demo: "#",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const skills = {
    Languages: ["Java", "JavaScript", "HTML", "CSS", "C++"],
    Frameworks: ["Bootstrap", "Tailwind CSS"],
    "Soft Skills": ["Problem-Solving", "Time Management", "Adaptability", "Team Collaboration"],
  }

  const certifications = [
    {
      title: "Computer Programming of C",
      issuer: "Neo Colab",
      date: "May 2024",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Crash Course on Python",
      issuer: "Google Coursera",
      date: "March 2024",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Responsive Web Design",
      issuer: "Free Code Camp",
      date: "Nov 2023",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Offline Marketing for Customers",
      issuer: "Infosys Springboard",
      date: "Nov 2023",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  const education = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      school: "Lovely Professional University, Punjab",
      date: "Aug 2023 – Present",
      cgpa: "8.19",
      status: "Current",
    },
    {
      degree: "Intermediate",
      school: "Rainbow School, Uttar Pradesh",
      date: "2021 – 2022",
      cgpa: "9.60",
      status: "Completed",
    },
    {
      degree: "10th Grade",
      school: "Rainbow School, Uttar Pradesh",
      date: "2019 – 2020",
      cgpa: "9.94",
      status: "Completed",
    },
  ]

  return (
    <div
      className={`min-h-screen transition-colors duration-300 text-sm ${
        isDarkMode
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-br from-cream via-accent-light to-peach"
      }`}
    >
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full backdrop-blur-md z-50 border-b transition-colors duration-300 ${
          isDarkMode ? "bg-gray-900/80 border-gray-700" : "bg-white/80 border-accent-light"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className={`text-xl font-bold ${isDarkMode ? "text-orange-400" : "text-orange-600"}`}
            >
              Tanya Portfolio
            </motion.div>

            <div className="hidden md:flex items-center justify-center flex-1 space-x-8">
              {[
                { name: "Home", icon: Home },
                { name: "Projects", icon: Briefcase },
                { name: "Skills", icon: Code },
                { name: "Education", icon: GraduationCap },
                { name: "Contact", icon: Mail },
              ].map((item) => (
                <a
                  key={item.name}
                  href={`#${item.name.toLowerCase()}`}
                  className={`flex items-center space-x-2 transition-colors duration-300 font-medium hover:scale-105 text-sm ${
                    isDarkMode ? "text-gray-300 hover:text-orange-400" : "text-gray-700 hover:text-orange-600"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </a>
              ))}
            </div>

            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                isDarkMode
                  ? "bg-gray-700 text-yellow-400 hover:bg-gray-600"
                  : "bg-orange-100 text-orange-600 hover:bg-orange-200"
              }`}
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero + About Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <motion.div style={{ y }} className="absolute inset-0 opacity-20">
          <div
            className={`absolute top-20 left-20 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl animate-blob ${
              isDarkMode ? "bg-orange-500" : "bg-orange-200"
            }`}
          ></div>
          <div
            className={`absolute top-40 right-20 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000 ${
              isDarkMode ? "bg-yellow-500" : "bg-peach"
            }`}
          ></div>
          <div
            className={`absolute bottom-20 left-40 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000 ${
              isDarkMode ? "bg-red-500" : "bg-coral"
            }`}
          ></div>
        </motion.div>

        <div className="max-w-6xl mx-auto px-4 z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.h1
                className={`text-4xl md:text-6xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-800"}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Hi, I'm{" "}
                <span
                  className={`bg-gradient-to-r bg-clip-text text-transparent ${
                    isDarkMode ? "from-orange-400 to-yellow-400" : "from-orange-600 to-red-500"
                  }`}
                >
                  Tanya Yadav
                </span>
              </motion.h1>

              <motion.p
                className={`text-lg md:text-xl mb-6 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Aspiring Full Stack Developer | WordPress Enthusiast
              </motion.p>

              <motion.p
                className={`text-sm mb-6 max-w-2xl ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                I specialize in building responsive, user-friendly websites using modern web technologies and WordPress.
                I'm passionate about bringing creative ideas to life through code and design.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-3 justify-center lg:justify-start mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    isDarkMode ? "bg-orange-900/50 text-orange-300" : "bg-orange-100 text-orange-700"
                  }`}
                >
                  Problem-Solving
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    isDarkMode ? "bg-yellow-900/50 text-yellow-300" : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  Time Management
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    isDarkMode ? "bg-red-900/50 text-red-300" : "bg-red-100 text-red-700"
                  }`}
                >
                  Adaptability
                </span>
              </motion.div>

              <motion.div
                className="flex flex-wrap gap-3 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-2 rounded-full font-semibold shadow-lg transition-all duration-300 text-sm ${
                    isDarkMode
                      ? "bg-gradient-to-r from-orange-600 to-red-600 text-white hover:shadow-orange-500/25"
                      : "bg-gradient-to-r from-orange-600 to-red-500 text-white hover:shadow-orange-500/25"
                  } hover:shadow-xl`}
                >
                  <Github className="w-4 h-4 inline mr-2" />
                  GitHub
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                  className={`px-6 py-2 rounded-full font-semibold shadow-lg transition-all duration-300 text-sm ${
                    isDarkMode
                      ? "bg-gradient-to-r from-orange-600 to-red-600 text-white hover:shadow-orange-500/25"
                      : "bg-gradient-to-r from-orange-600 to-red-500 text-white hover:shadow-orange-500/25"
                  } hover:shadow-xl`}
                >
                  <Briefcase className="w-4 h-4 inline mr-2" />
                  Projects
                </motion.button>
              </motion.div>
            </motion.div>

            {/* About Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="relative mx-auto lg:mx-0 w-80 h-80">
                <div className="w-full h-full rounded-full overflow-hidden shadow-2xl">
                  <img
                    src="/profile.jpg?height=320&width=320"
                    alt="Tanya Yadav - Full Stack Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div
                  className={`absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-20 ${
                    isDarkMode
                      ? "bg-gradient-to-r from-orange-400 to-yellow-400"
                      : "bg-gradient-to-r from-orange-200 to-yellow-200"
                  }`}
                ></div>
                <div
                  className={`absolute -bottom-4 -left-4 w-32 h-32 rounded-full opacity-20 ${
                    isDarkMode
                      ? "bg-gradient-to-r from-red-400 to-orange-400"
                      : "bg-gradient-to-r from-red-200 to-orange-200"
                  }`}
                ></div>
              </div>

              <div className="text-center lg:text-left">
                <motion.h3
                  className={`text-2xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-800"}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  About Me
                </motion.h3>
                <motion.p
                  className={`text-sm leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  I'm a dedicated and curious B.Tech student with a growing passion for web development and WordPress. I
                  enjoy building digital experiences that are not only functional but also visually engaging. From
                  designing custom WordPress themes to developing full-stack web applications, I'm always exploring new
                  ways to improve my skills and deliver impactful solutions.
                </motion.p>

                <motion.div
                  className="flex flex-wrap gap-3 justify-center lg:justify-start mt-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 rounded-full font-medium shadow-md transition-all duration-300 text-xs ${
                      isDarkMode
                        ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                        : "bg-white text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <Download className="w-3 h-3 inline mr-2" />
                    Resume
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 rounded-full font-medium shadow-md transition-all duration-300 text-xs ${
                      isDarkMode
                        ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                        : "bg-white text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <Github className="w-3 h-3 inline mr-2" />
                    GitHub
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 rounded-full font-medium shadow-md transition-all duration-300 text-xs ${
                      isDarkMode
                        ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                        : "bg-white text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <Linkedin className="w-3 h-3 inline mr-2" />
                    LinkedIn
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 rounded-full font-medium shadow-md transition-all duration-300 text-xs ${
                      isDarkMode
                        ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                        : "bg-white text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <Twitter className="w-3 h-3 inline mr-2" />
                    Gmail
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 rounded-full font-medium shadow-md transition-all duration-300 text-xs ${
                      isDarkMode
                        ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                        : "bg-white text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <Instagram className="w-3 h-3 inline mr-2" />
                    Instagram
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${
                isDarkMode ? "bg-orange-900/50" : "bg-orange-100"
              }`}
            >
              <Code className={`w-6 h-6 ${isDarkMode ? "text-orange-400" : "text-orange-600"}`} />
            </div>
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
              Skills & Expertise
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, skillList], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, rotateY: 5 }}
                className={`rounded-2xl p-6 shadow-lg transition-all duration-300 ${
                  isDarkMode ? "bg-gray-800 hover:bg-gray-750" : "bg-white hover:bg-gray-50"
                } border border-orange-200/20`}
              >
                <h3 className={`text-lg font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-800"}`}>{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.1, rotate: 2 }}
                      viewport={{ once: true }}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer ${
                        isDarkMode
                          ? "bg-orange-900/50 text-orange-300 hover:bg-orange-800/70"
                          : "bg-orange-100 text-orange-700 hover:bg-orange-200"
                      }`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-16 px-4 ${isDarkMode ? "bg-gray-800/50" : "bg-white/50"}`}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
              Featured Projects
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className={`rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full flex flex-col ${
                  isDarkMode ? "bg-gray-800" : "bg-white"
                }`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.category === "Dashboard"
                          ? isDarkMode
                            ? "bg-orange-900/50 text-orange-300"
                            : "bg-orange-100 text-orange-700"
                          : project.category === "Web App"
                            ? isDarkMode
                              ? "bg-blue-900/50 text-blue-300"
                              : "bg-blue-100 text-blue-700"
                            : isDarkMode
                              ? "bg-green-900/50 text-green-300"
                              : "bg-green-100 text-green-700"
                      }`}
                    >
                      {project.category}
                    </span>
                    <span className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                      <Calendar className="w-3 h-3 inline mr-1" />
                      {project.date}
                    </span>
                  </div>
                  <h3 className={`text-lg font-bold mb-2 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
                    {project.title}
                  </h3>
                  <p className={`text-sm mb-4 flex-1 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          isDarkMode ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 px-4 py-2 rounded-lg font-medium text-center transition-all duration-300 text-xs ${
                        isDarkMode
                          ? "bg-orange-600 text-white hover:bg-orange-700"
                          : "bg-orange-600 text-white hover:bg-orange-700"
                      }`}
                    >
                      <Code className="w-3 h-3 inline mr-2" />
                      Code
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 px-4 py-2 rounded-lg font-medium text-center transition-all duration-300 text-xs ${
                        isDarkMode
                          ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      <ExternalLink className="w-3 h-3 inline mr-2" />
                      Live
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${
                isDarkMode ? "bg-orange-900/50" : "bg-orange-100"
              }`}
            >
              <Award className={`w-6 h-6 ${isDarkMode ? "text-orange-400" : "text-orange-600"}`} />
            </div>
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
              Certifications
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`rounded-2xl p-6 shadow-lg ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        isDarkMode ? "bg-orange-900/50" : "bg-orange-100"
                      }`}
                    >
                      <Award className={`w-5 h-5 ${isDarkMode ? "text-orange-400" : "text-orange-600"}`} />
                    </div>
                    <div className="flex-1">
                      <h4 className={`text-lg font-bold mb-1 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
                        {cert.title}
                      </h4>
                      <p className={`font-semibold mb-1 text-sm ${isDarkMode ? "text-orange-400" : "text-orange-600"}`}>
                        {cert.issuer}
                      </p>
                      <p className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                        <Calendar className="w-3 h-3 inline mr-1" />
                        {cert.date}
                      </p>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCertificate(cert)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 text-xs ${
                      isDarkMode
                        ? "bg-orange-600 text-white hover:bg-orange-700"
                        : "bg-orange-600 text-white hover:bg-orange-700"
                    }`}
                  >
                    <Eye className="w-3 h-3 inline mr-2" />
                    View
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className={`rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-gray-800"}`}>
                {selectedCertificate.title}
              </h3>
              <button
                onClick={() => setSelectedCertificate(null)}
                className={`p-2 rounded-full transition-colors ${
                  isDarkMode ? "hover:bg-gray-700 text-gray-300" : "hover:bg-gray-100 text-gray-600"
                }`}
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="text-center">
              <img
                src={selectedCertificate.image || "/placeholder.svg"}
                alt={selectedCertificate.title}
                className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
              />
              <div className="mt-4">
                <p className={`text-lg font-semibold ${isDarkMode ? "text-orange-400" : "text-orange-600"}`}>
                  {selectedCertificate.issuer}
                </p>
                <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                  {selectedCertificate.date}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Education Section */}
      <section id="education" className={`py-16 px-4 ${isDarkMode ? "bg-gray-800/50" : "bg-white/50"}`}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${
                isDarkMode ? "bg-orange-900/50" : "bg-orange-100"
              }`}
            >
              <GraduationCap className={`w-6 h-6 ${isDarkMode ? "text-orange-400" : "text-orange-600"}`} />
            </div>
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
              Education
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-orange-300"></div>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative flex items-start"
                >
                  <div className="absolute left-2 w-4 h-4 bg-orange-500 rounded-full border-4 border-white"></div>
                  <div className={`ml-12 rounded-2xl p-6 shadow-lg flex-1 ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h4 className={`text-lg font-bold mb-2 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
                          {edu.degree}
                        </h4>
                        <p className={`font-semibold mb-1 text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                          <Building className="w-3 h-3 inline mr-1" />
                          {edu.school}
                        </p>
                        <p className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                          <Calendar className="w-3 h-3 inline mr-1" />
                          {edu.date}
                        </p>
                      </div>
                      <div className="flex flex-col items-end space-y-2">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            edu.status === "Current"
                              ? isDarkMode
                                ? "bg-green-900/50 text-green-300"
                                : "bg-green-100 text-green-700"
                              : isDarkMode
                                ? "bg-gray-700 text-gray-300"
                                : "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {edu.status}
                        </span>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            isDarkMode ? "bg-orange-900/50 text-orange-300" : "bg-orange-100 text-orange-700"
                          }`}
                        >
                          CGPA: {edu.cgpa}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
              Get In Touch
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
                  Let's work together!
                </h3>
                <p className={`text-sm mb-6 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                  I'm always interested in new opportunities and exciting projects. Whether you have a question, want to
                  collaborate, or just want to say hello, feel free to reach out!
                </p>
              </div>

              <div className="flex space-x-4">
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  href="mailto:tanya@example.com"
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-300 ${
                    isDarkMode
                      ? "bg-gradient-to-r from-orange-600 to-red-600 hover:shadow-orange-500/25"
                      : "bg-gradient-to-r from-orange-600 to-red-500 hover:shadow-orange-500/25"
                  } hover:shadow-lg`}
                >
                  <Mail className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://linkedin.com/in/tanya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-300 ${
                    isDarkMode
                      ? "bg-gradient-to-r from-orange-600 to-red-600 hover:shadow-orange-500/25"
                      : "bg-gradient-to-r from-orange-600 to-red-500 hover:shadow-orange-500/25"
                  } hover:shadow-lg`}
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <form
                onSubmit={handleSubmit}
                className={`rounded-2xl p-6 shadow-lg ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
              >
                <div className="space-y-4">
                  <div>
                    <label
                      className={`block text-sm font-semibold mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 border rounded-lg transition-all duration-300 text-sm ${
                        isDarkMode
                          ? "bg-gray-700 border-gray-600 text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                          : "bg-white border-gray-200 text-gray-900 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      }`}
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label
                      className={`block text-sm font-semibold mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 border rounded-lg transition-all duration-300 text-sm ${
                        isDarkMode
                          ? "bg-gray-700 border-gray-600 text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                          : "bg-white border-gray-200 text-gray-900 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      }`}
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label
                      className={`block text-sm font-semibold mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                    >
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className={`w-full px-4 py-3 border rounded-lg transition-all duration-300 resize-none text-sm ${
                        isDarkMode
                          ? "bg-gray-700 border-gray-600 text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                          : "bg-white border-gray-200 text-gray-900 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      }`}
                      placeholder="Tell me about your project or just say hello..."
                    ></textarea>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className={`w-full py-3 rounded-lg font-semibold shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 text-sm ${
                      isDarkMode
                        ? "bg-gradient-to-r from-orange-600 to-red-600 text-white hover:shadow-orange-500/25"
                        : "bg-gradient-to-r from-orange-600 to-red-500 text-white hover:shadow-orange-500/25"
                    } hover:shadow-xl`}
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-4 ${isDarkMode ? "bg-gray-900" : "bg-gray-800"}`}>
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 text-sm">© 2024 Tanya Yadav. Made with ❤️ and lots of coffee.</p>
        </div>
      </footer>
    </div>
  )
}

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ArrowUpRight,
  Calendar,
  MapPin,
  Building,
  Users,
  TrendingUp,
  Code,
  Database,
  Server,
  Globe,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SimpleThemeToggle } from "@/components/simple-theme-toggle";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="grid-container">
          <div className="flex justify-between items-center h-16">
            <Link
              href="/"
              className="text-xl font-semibold text-gray-900 dark:text-gray-50"
            >
              Usama Razzaq
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="#work"
                className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50 transition-colors"
              >
                Work
              </Link>
              <Link
                href="#about"
                className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50 transition-colors"
              >
                About
              </Link>
              <Link
                href="#writing"
                className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50 transition-colors"
              >
                Writing
              </Link>
              <Link
                href="#contact"
                className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50 transition-colors"
              >
                Contact
              </Link>
              {/* <SimpleThemeToggle /> */}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-12 lg:py-16">
        <div className="grid-container">
          <div className="max-w-3xl">
            <div className="mb-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100 text-emerald-600 text-sm font-medium mb-6 dark:bg-emerald-900/20 dark:text-emerald-400">
                <div className="w-2 h-2 bg-emerald-600 rounded-full mr-2 dark:bg-emerald-400"></div>
                Available for opportunities
              </div>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-gray-50 mb-6 text-balance leading-tight">
              Full-Stack Engineer building scalable systems
            </h1>
            <p className="text-xl text-gray-500 dark:text-gray-400 mb-8 text-balance leading-relaxed">
              I design and develop robust web applications with modern
              technologies. Currently focused on distributed systems,
              performance optimization, and developer experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white"
              >
                View my work
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="cursor-pointer hover:border-white"
              >
                Download resume
              </Button>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="#"
                className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50 transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://linkedin.com/in/usamarazzaq90"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="#"
                className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50 transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Overview */}
      <section className="section-padding bg-gray-100 dark:bg-gray-900">
        <div className="grid-container">
          <div className="grid lg:grid-cols-4 gap-6">
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-50 mb-3">
                Experience
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                5+ years building production systems at scale
              </p>
            </div>
            <div className="lg:col-span-3 grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-2">
                  50+
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Projects delivered
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-2">
                  99.9%
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Uptime achieved
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-2">
                  10M+
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  API requests handled
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section-padding">
        <div className="grid-container">
          <div className="grid lg:grid-cols-4 gap-6">
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-50 mb-3">
                Tech Stack
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                Technologies I use to build reliable, performant applications
              </p>
            </div>
            <div className="lg:col-span-3 grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-4">
                  <Code className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mr-3" />
                  <h3 className="font-semibold text-gray-900 dark:text-gray-50">
                    Frontend
                  </h3>
                </div>
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Next.js</Badge>
                    <Badge variant="secondary">TypeScript</Badge>
                    <Badge variant="secondary">Tailwind CSS</Badge>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <Server className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mr-3" />
                  <h3 className="font-semibold text-gray-900 dark:text-gray-50">
                    Backend
                  </h3>
                </div>
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Node.js</Badge>
                    <Badge variant="secondary">Laravel</Badge>
                    <Badge variant="secondary">NestJS</Badge>
                    <Badge variant="secondary">GraphQL</Badge>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <Database className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mr-3" />
                  <h3 className="font-semibold text-gray-900 dark:text-gray-50">
                    Database
                  </h3>
                </div>
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">PostgreSQL</Badge>
                    <Badge variant="secondary">Redis</Badge>
                    <Badge variant="secondary">Prisma</Badge>
                    <Badge variant="secondary">MongoDB</Badge>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <Globe className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mr-3" />
                  <h3 className="font-semibold text-gray-900 dark:text-gray-50">
                    Infrastructure
                  </h3>
                </div>
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">AWS</Badge>
                    <Badge variant="secondary">Docker</Badge>
                    <Badge variant="secondary">Kubernetes</Badge>
                    <Badge variant="secondary">Vercel</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section
        id="work"
        className="section-padding bg-gray-100 dark:bg-gray-900"
      >
        <div className="grid-container">
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-50 mb-3">
              Selected Work
            </h2>
            <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl">
              Recent projects showcasing technical depth and business impact
            </p>
          </div>

          <div className="space-y-16">
            {/* Project 1 */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="aspect-video bg-gray-200 dark:bg-gray-800 rounded-lg mb-6 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="E-commerce Platform Dashboard"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="outline">Featured</Badge>
                  <Badge variant="outline">Full-Stack</Badge>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-50 mb-4">
                  Enterprise E-commerce Platform
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
                  Built a high-performance e-commerce platform handling 10K+
                  concurrent users. Implemented microservices architecture with
                  real-time inventory management, payment processing, and
                  advanced analytics dashboard.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center text-sm">
                    <TrendingUp className="h-4 w-4 text-emerald-600 dark:text-emerald-400 mr-2" />
                    <span className="text-gray-500 dark:text-gray-400">
                      40% improvement in page load times
                    </span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Users className="h-4 w-4 text-emerald-600 dark:text-emerald-400 mr-2" />
                    <span className="text-gray-500 dark:text-gray-400">
                      Scaled to support 50K+ daily active users
                    </span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Building className="h-4 w-4 text-emerald-600 dark:text-emerald-400 mr-2" />
                    <span className="text-gray-500 dark:text-gray-400">
                      Reduced infrastructure costs by 30%
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                  <Badge variant="secondary">Redis</Badge>
                  <Badge variant="secondary">AWS</Badge>
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm">
                    View case study
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live demo
                  </Button>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <div className="aspect-video bg-gray-200 dark:bg-gray-800 rounded-lg mb-6 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Real-time Analytics Dashboard"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="lg:order-1">
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="outline">SaaS</Badge>
                  <Badge variant="outline">Real-time</Badge>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-50 mb-4">
                  Real-time Analytics Platform
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
                  Developed a comprehensive analytics platform processing
                  millions of events daily. Features real-time data
                  visualization, custom reporting, and machine learning-powered
                  insights for enterprise clients.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center text-sm">
                    <TrendingUp className="h-4 w-4 text-emerald-600 dark:text-emerald-400 mr-2" />
                    <span className="text-gray-500 dark:text-gray-400">
                      Processing 5M+ events per day
                    </span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Users className="h-4 w-4 text-emerald-600 dark:text-emerald-400 mr-2" />
                    <span className="text-gray-500 dark:text-gray-400">
                      Serving 100+ enterprise clients
                    </span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Building className="h-4 w-4 text-emerald-600 dark:text-emerald-400 mr-2" />
                    <span className="text-gray-500 dark:text-gray-400">
                      Sub-second query response times
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Laravel</Badge>
                  <Badge variant="secondary">ClickHouse</Badge>
                  <Badge variant="secondary">Kafka</Badge>
                  <Badge variant="secondary">Docker</Badge>
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm">
                    View case study
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live demo
                  </Button>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="aspect-video bg-gray-200 dark:bg-gray-800 rounded-lg mb-6 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="API Development Framework Interface"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="outline">Open Source</Badge>
                  <Badge variant="outline">Developer Tools</Badge>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-50 mb-4">
                  API Development Framework
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
                  Created an open-source framework for rapid API development
                  with built-in authentication, rate limiting, and documentation
                  generation. Adopted by 500+ developers worldwide.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center text-sm">
                    <TrendingUp className="h-4 w-4 text-emerald-600 dark:text-emerald-400 mr-2" />
                    <span className="text-gray-500 dark:text-gray-400">
                      2.5K+ GitHub stars
                    </span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Users className="h-4 w-4 text-emerald-600 dark:text-emerald-400 mr-2" />
                    <span className="text-gray-500 dark:text-gray-400">
                      500+ active developers
                    </span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Building className="h-4 w-4 text-emerald-600 dark:text-emerald-400 mr-2" />
                    <span className="text-gray-500 dark:text-gray-400">
                      Used in 50+ production apps
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">NestJS</Badge>
                  <Badge variant="secondary">OpenAPI</Badge>
                  <Badge variant="secondary">Jest</Badge>
                  <Badge variant="secondary">GitHub Actions</Badge>
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm">
                    View on GitHub
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Documentation
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Button variant="outline" size="lg">
              View all projects
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section-padding">
        <div className="grid-container">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-50 mb-6">
                About
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
                  I'm a full-stack software engineer with 5+ years of experience
                  building scalable web applications and distributed systems. I
                  specialize in modern JavaScript ecosystems and have a strong
                  background in system architecture and performance
                  optimization.
                </p>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
                  Currently, I'm focused on building developer tools and
                  infrastructure that help teams ship faster and more reliably.
                  I'm passionate about clean code, automated testing, and
                  creating systems that can handle millions of users.
                </p>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
                  When I'm not coding, I contribute to open-source projects,
                  write technical articles, and mentor junior developers. I
                  believe in continuous learning and staying up-to-date with the
                  latest technologies and best practices.
                </p>
              </div>
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                Let's work together
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div>
              <div className="space-y-8">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-50 mb-4">
                    Currently
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <Building className="h-4 w-4 text-emerald-600 dark:text-emerald-400 mr-3" />
                      <span className="text-gray-500 dark:text-gray-400">
                        Senior Engineer at TechCorp
                      </span>
                    </div>
                    <div className="flex items-center text-sm">
                      <MapPin className="h-4 w-4 text-emerald-600 dark:text-emerald-400 mr-3" />
                      <span className="text-gray-500 dark:text-gray-400">
                        Lahore, Pakistan
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-50 mb-4">
                    Interests
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">System Design</Badge>
                    <Badge variant="secondary">Performance</Badge>
                    <Badge variant="secondary">DevOps</Badge>
                    <Badge variant="secondary">Open Source</Badge>
                    <Badge variant="secondary">Mentoring</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Writing */}
      <section
        id="writing"
        className="section-padding bg-gray-100 dark:bg-gray-900"
      >
        <div className="grid-container">
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-50 mb-3">
              Writing
            </h2>
            <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl">
              Thoughts on software engineering, system design, and technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover-lift border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  Dec 15, 2024
                </div>
                <CardTitle className="text-lg text-gray-900 dark:text-gray-50">
                  Building Scalable APIs with TypeScript and NestJS
                </CardTitle>
                <CardDescription>
                  A comprehensive guide to creating robust, type-safe APIs that
                  can handle enterprise-level traffic.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-0 h-auto font-medium text-emerald-600 dark:text-emerald-400"
                >
                  Read article
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-lift border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  Dec 10, 2024
                </div>
                <CardTitle className="text-lg text-gray-900 dark:text-gray-50">
                  React Performance: Beyond the Basics
                </CardTitle>
                <CardDescription>
                  Advanced techniques for optimizing React applications, from
                  code splitting to memory management.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-0 h-auto font-medium text-emerald-600 dark:text-emerald-400"
                >
                  Read article
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-lift border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  Dec 5, 2024
                </div>
                <CardTitle className="text-lg text-gray-900 dark:text-gray-50">
                  Lessons from 5 Years of Full-Stack Development
                </CardTitle>
                <CardDescription>
                  Key insights and hard-learned lessons from building production
                  systems at scale.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-0 h-auto font-medium text-emerald-600 dark:text-emerald-400"
                >
                  Read article
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View all articles
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section-padding">
        <div className="grid-container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-50 mb-3">
              Get in touch
            </h2>
            <p className="text-xl text-gray-500 dark:text-gray-400 mb-8">
              I'm always interested in hearing about new opportunities and
              interesting projects.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-0 shadow-sm">
                <CardHeader className="text-center">
                  <Mail className="h-8 w-8 text-emerald-600 dark:text-emerald-400 mx-auto mb-4" />
                  <CardTitle className="text-lg text-gray-900 dark:text-gray-50">
                    Email
                  </CardTitle>
                  <CardDescription>usama.razzaq@example.com</CardDescription>
                </CardHeader>
              </Card>

              <Link
                href="https://linkedin.com/in/usamarazzaq90"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card className="border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                  <CardHeader className="text-center">
                    <Linkedin className="h-8 w-8 text-emerald-600 dark:text-emerald-400 mx-auto mb-4" />
                    <CardTitle className="text-lg text-gray-900 dark:text-gray-50">
                      LinkedIn
                    </CardTitle>
                    <CardDescription>
                      Connect with me professionally
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            </div>

            <Card className="border-0 shadow-sm text-left">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-gray-50">
                  Send a message
                </CardTitle>
                <CardDescription>
                  I'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-900 dark:text-gray-50 mb-2 block">
                      First name
                    </label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-900 dark:text-gray-50 mb-2 block">
                      Last name
                    </label>
                    <Input placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-900 dark:text-gray-50 mb-2 block">
                    Email
                  </label>
                  <Input type="email" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-900 dark:text-gray-50 mb-2 block">
                    Subject
                  </label>
                  <Input placeholder="Let's discuss a project" />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-900 dark:text-gray-50 mb-2 block">
                    Message
                  </label>
                  <Textarea
                    placeholder="Tell me about your project or opportunity..."
                    rows={4}
                  />
                </div>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                  Send message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 py-8">
        <div className="grid-container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                © {new Date().getFullYear()} Usama Razzaq. All rights reserved.
              </p>
            </div>
            <div className="flex items-center space-x-6">
              <Link
                href="#"
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50 transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50 transition-colors"
              >
                Terms
              </Link>
              <div className="flex items-center space-x-4">
                <Link
                  href="#"
                  className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50 transition-colors"
                >
                  <Github className="h-4 w-4" />
                </Link>
                <Link
                  href="https://linkedin.com/in/usamarazzaq90"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50 transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                </Link>
                <Link
                  href="#"
                  className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50 transition-colors"
                >
                  <Mail className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

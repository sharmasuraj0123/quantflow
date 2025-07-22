"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Zap,
  Shield,
  Brain,
  ArrowRight,
  Play,
  Check,
  Star,
  Menu,
  X,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  RotateCcw,
  DollarSign,
  Users,
  Activity,
  BarChart3,
  TrendingUp,
  TrendingDown,
} from "lucide-react"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [showDemo, setShowDemo] = useState(false)
  const [demoStep, setDemoStep] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
    setEmail("")
  }

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsVideoPlaying(!isVideoPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const startDemo = () => {
    setShowDemo(true)
    setDemoStep(0)
  }

  const nextDemoStep = () => {
    setDemoStep((prev) => (prev + 1) % 4)
  }

  const resetDemo = () => {
    setDemoStep(0)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav
        className={`border-b transition-all duration-300 sticky top-0 z-50 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white/80 backdrop-blur-sm border-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center cursor-pointer" onClick={() => scrollToSection("hero")}>
              <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-teal-700 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">Q</span>
              </div>
              <span className="ml-2 text-xl font-semibold text-gray-900">QuantaFlow</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("features")}
                className="text-gray-600 hover:text-teal-600 transition-colors"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-gray-600 hover:text-teal-600 transition-colors"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-gray-600 hover:text-teal-600 transition-colors"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-600 hover:text-teal-600 transition-colors"
              >
                Contact
              </button>
              <Button variant="outline" className="border-teal-200 text-teal-700 hover:bg-teal-50 bg-transparent">
                Login
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-100 py-4 space-y-4">
              <button
                onClick={() => scrollToSection("features")}
                className="block w-full text-left px-4 py-2 text-gray-600 hover:text-teal-600"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="block w-full text-left px-4 py-2 text-gray-600 hover:text-teal-600"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="block w-full text-left px-4 py-2 text-gray-600 hover:text-teal-600"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-4 py-2 text-gray-600 hover:text-teal-600"
              >
                Contact
              </button>
              <div className="px-4">
                <Button
                  variant="outline"
                  className="w-full border-teal-200 text-teal-700 hover:bg-teal-50 bg-transparent"
                >
                  Login
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-teal-50">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-100 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-100 rounded-full opacity-20 animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left">
              <Badge className="mb-3 bg-teal-100 text-teal-800 hover:bg-teal-200 text-xs">
                🚀 Now with AI-powered insights
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                Data at the Speed of{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
                  Thought
                </span>
              </h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Supercharge your data workflows with QuantaFlow's AI-powered platform. Transform complex data into
                actionable insights in seconds, not hours.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-6">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white px-6 py-3 text-base font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 group"
                  onClick={() => scrollToSection("pricing")}
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-gray-300 hover:border-teal-300 px-6 py-3 text-base font-semibold rounded-lg group bg-transparent"
                  onClick={startDemo}
                >
                  <Play className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </Button>
              </div>

              {/* Social Proof */}
              <div className="flex items-center justify-center lg:justify-start gap-3 text-sm text-gray-500">
                <div className="flex items-center">
                  <div className="flex -space-x-1">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-6 h-6 rounded-full bg-gradient-to-br from-teal-400 to-blue-500 border-2 border-white"
                      ></div>
                    ))}
                  </div>
                  <span className="ml-2">Join 10,000+ data teams</span>
                </div>
              </div>
            </div>

            {/* Right Column - Compact Demo */}
            <div className="relative">
              <div className="relative bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                {/* Compact Dashboard */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-gray-900">Analytics Dashboard</h3>
                    <Badge className="bg-green-100 text-green-800 text-xs">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse mr-1"></div>
                      Live
                    </Badge>
                  </div>

                  {/* Compact Metrics Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs text-gray-600">Revenue</p>
                          <p className="text-lg font-bold text-gray-900">$125K</p>
                        </div>
                        <DollarSign className="w-5 h-5 text-green-500" />
                      </div>
                      <div className="flex items-center mt-1">
                        <TrendingUp className="w-3 h-3 text-green-500 mr-1" />
                        <span className="text-xs text-green-600">+12.5%</span>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs text-gray-600">Users</p>
                          <p className="text-lg font-bold text-gray-900">2.8K</p>
                        </div>
                        <Users className="w-5 h-5 text-blue-500" />
                      </div>
                      <div className="flex items-center mt-1">
                        <TrendingUp className="w-3 h-3 text-green-500 mr-1" />
                        <span className="text-xs text-green-600">+8.2%</span>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs text-gray-600">Conversion</p>
                          <p className="text-lg font-bold text-gray-900">3.2%</p>
                        </div>
                        <Activity className="w-5 h-5 text-teal-500" />
                      </div>
                      <div className="flex items-center mt-1">
                        <TrendingDown className="w-3 h-3 text-red-500 mr-1" />
                        <span className="text-xs text-red-600">-0.3%</span>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs text-gray-600">Growth</p>
                          <p className="text-lg font-bold text-gray-900">12.5%</p>
                        </div>
                        <BarChart3 className="w-5 h-5 text-purple-500" />
                      </div>
                      <div className="flex items-center mt-1">
                        <TrendingUp className="w-3 h-3 text-green-500 mr-1" />
                        <span className="text-xs text-green-600">+2.1%</span>
                      </div>
                    </div>
                  </div>

                  {/* Compact Chart */}
                  <div className="bg-gray-50 rounded-lg p-3">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Revenue Trend</h4>
                    <div className="h-16 bg-gradient-to-r from-teal-50 to-blue-50 rounded flex items-end justify-between p-2">
                      {[65, 78, 82, 88, 95, 92, 98].map((height, index) => (
                        <div
                          key={index}
                          className="bg-gradient-to-t from-teal-500 to-teal-400 rounded-t transition-all duration-500"
                          style={{
                            height: `${height * 0.6}%`,
                            width: "10%",
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>

                  {/* Compact AI Insights */}
                  <div className="mt-3 p-3 bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg">
                    <h4 className="text-sm font-semibold text-gray-900 mb-1">🤖 AI Insights</h4>
                    <ul className="text-xs text-gray-700 space-y-0.5">
                      <li>• Revenue growth accelerating (+12.5%)</li>
                      <li>• User acquisition trending upward</li>
                      <li>• Predicted 15% growth next quarter</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Compact Floating Elements */}
              <div className="absolute -top-2 -right-2 bg-teal-500 text-white px-2 py-1 rounded-full text-xs font-medium shadow-lg animate-bounce">
                Live Demo
              </div>
              <div className="absolute -bottom-2 -left-2 bg-white border border-gray-200 px-3 py-1 rounded-lg shadow-lg">
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-gray-600">1.2M records/sec</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      {showDemo && (
        <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">See QuantaFlow in Action</h2>
              <p className="text-xl text-gray-300">Experience the power of AI-driven data analytics in real-time</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Video Player */}
              <div className="relative">
                <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
                  <video
                    ref={videoRef}
                    className="w-full h-auto"
                    poster="/placeholder.svg?height=400&width=600"
                    onPlay={() => setIsVideoPlaying(true)}
                    onPause={() => setIsVideoPlaying(false)}
                    muted={isMuted}
                    loop
                  >
                    <source src="/placeholder.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Video Controls Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center group">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-4">
                      <Button
                        onClick={toggleVideo}
                        className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white border-0 rounded-full w-16 h-16"
                      >
                        {isVideoPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                      </Button>
                      <Button
                        onClick={toggleMute}
                        className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white border-0 rounded-full w-12 h-12"
                      >
                        {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                      </Button>
                      <Button className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white border-0 rounded-full w-12 h-12">
                        <Maximize className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>

                  {/* Video Progress Indicator */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-600">
                    <div className="h-full bg-teal-500 w-1/3 transition-all duration-1000"></div>
                  </div>
                </div>

                {/* Video Stats */}
                <div className="mt-6 grid grid-cols-3 gap-4">
                  <div className="bg-gray-800 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-teal-400">2.3M</div>
                    <div className="text-sm text-gray-400">Records Processed</div>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-teal-400">0.3s</div>
                    <div className="text-sm text-gray-400">Query Response</div>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-teal-400">99.9%</div>
                    <div className="text-sm text-gray-400">Accuracy Rate</div>
                  </div>
                </div>
              </div>

              {/* Interactive Demo Steps */}
              <div className="space-y-6">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold">Interactive Demo</h3>
                  <div className="flex items-center gap-2">
                    <Button
                      onClick={resetDemo}
                      variant="outline"
                      size="sm"
                      className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
                    >
                      <RotateCcw className="w-4 h-4 mr-2" />
                      Reset
                    </Button>
                  </div>
                </div>

                {/* Demo Steps */}
                <div className="space-y-4">
                  {[
                    {
                      title: "Upload Your Data",
                      description: "Drag and drop CSV, JSON, or connect to your database",
                      active: demoStep >= 0,
                      completed: demoStep > 0,
                    },
                    {
                      title: "AI Analysis",
                      description: "Our AI automatically detects patterns and anomalies",
                      active: demoStep >= 1,
                      completed: demoStep > 1,
                    },
                    {
                      title: "Generate Insights",
                      description: "Get actionable insights with natural language explanations",
                      active: demoStep >= 2,
                      completed: demoStep > 2,
                    },
                    {
                      title: "Share Results",
                      description: "Export reports or share interactive dashboards",
                      active: demoStep >= 3,
                      completed: demoStep > 3,
                    },
                  ].map((step, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg border-2 transition-all duration-300 cursor-pointer ${
                        step.active
                          ? step.completed
                            ? "border-teal-500 bg-teal-500 bg-opacity-10"
                            : "border-teal-400 bg-teal-400 bg-opacity-5"
                          : "border-gray-600 bg-gray-800"
                      }`}
                      onClick={() => setDemoStep(index)}
                    >
                      <div className="flex items-center">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 ${
                            step.completed
                              ? "bg-teal-500 text-white"
                              : step.active
                                ? "bg-teal-400 text-gray-900"
                                : "bg-gray-600 text-gray-400"
                          }`}
                        >
                          {step.completed ? <Check className="w-4 h-4" /> : index + 1}
                        </div>
                        <div>
                          <h4 className="font-semibold text-white">{step.title}</h4>
                          <p className="text-sm text-gray-400">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <Button
                  onClick={nextDemoStep}
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3"
                  disabled={demoStep >= 3}
                >
                  {demoStep >= 3 ? "Demo Complete!" : "Next Step"}
                  {demoStep < 3 && <ArrowRight className="ml-2 w-4 h-4" />}
                </Button>

                {/* Demo CTA */}
                <div className="mt-8 p-6 bg-gradient-to-r from-teal-600 to-blue-600 rounded-lg">
                  <h4 className="text-xl font-bold mb-2">Ready to try it yourself?</h4>
                  <p className="text-teal-100 mb-4">Start your free trial and experience the power of QuantaFlow</p>
                  <Button
                    onClick={() => scrollToSection("pricing")}
                    className="bg-white text-teal-600 hover:bg-gray-100"
                  >
                    Start Free Trial
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Feature Highlights */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Powerful Features for Modern Teams</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to transform your data workflows and make better decisions faster.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* AI-Powered */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-teal-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Brain className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">AI-Powered Analytics</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Advanced machine learning algorithms automatically detect patterns, anomalies, and trends in your data
                  streams for intelligent insights.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-teal-500 mr-2" />
                    Automated pattern recognition
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-teal-500 mr-2" />
                    Predictive analytics
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-teal-500 mr-2" />
                    Natural language queries
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Secure */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-teal-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Enterprise Security</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Bank-grade security with end-to-end encryption, SOC 2 compliance, and granular access controls to
                  protect your most sensitive data.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-teal-500 mr-2" />
                    End-to-end encryption
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-teal-500 mr-2" />
                    SOC 2 Type II certified
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-teal-500 mr-2" />
                    Role-based access control
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Lightning Fast */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-teal-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Lightning Fast</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Process millions of data points in real-time with our optimized infrastructure built for speed, scale,
                  and reliability.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-teal-500 mr-2" />
                    Sub-second query response
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-teal-500 mr-2" />
                    Auto-scaling infrastructure
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-teal-500 mr-2" />
                    99.99% uptime SLA
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600">
              Choose the plan that fits your team's needs. No hidden fees, cancel anytime.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Starter Plan */}
            <Card className="border-2 border-gray-200 hover:border-teal-300 transition-colors">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Starter</h3>
                <p className="text-gray-600 mb-6">Perfect for small teams getting started</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">$29</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-teal-500 mr-3" />
                    Up to 100K records/month
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-teal-500 mr-3" />5 team members
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-teal-500 mr-3" />
                    Basic analytics
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-teal-500 mr-3" />
                    Email support
                  </li>
                </ul>
                <Button className="w-full bg-transparent" variant="outline">
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>

            {/* Professional Plan */}
            <Card className="border-2 border-teal-500 relative shadow-lg">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-teal-500 text-white px-4 py-1">Most Popular</Badge>
              </div>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional</h3>
                <p className="text-gray-600 mb-6">For growing teams with advanced needs</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">$99</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-teal-500 mr-3" />
                    Up to 1M records/month
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-teal-500 mr-3" />
                    25 team members
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-teal-500 mr-3" />
                    Advanced AI analytics
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-teal-500 mr-3" />
                    Priority support
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-teal-500 mr-3" />
                    Custom integrations
                  </li>
                </ul>
                <Button className="w-full bg-teal-600 hover:bg-teal-700">Start Free Trial</Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="border-2 border-gray-200 hover:border-teal-300 transition-colors">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise</h3>
                <p className="text-gray-600 mb-6">For large organizations with custom needs</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">Custom</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-teal-500 mr-3" />
                    Unlimited records
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-teal-500 mr-3" />
                    Unlimited team members
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-teal-500 mr-3" />
                    White-label solution
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-teal-500 mr-3" />
                    Dedicated support
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-teal-500 mr-3" />
                    On-premise deployment
                  </li>
                </ul>
                <Button className="w-full bg-transparent" variant="outline" onClick={() => scrollToSection("contact")}>
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Loved by Data Teams Worldwide</h2>
            <p className="text-xl text-gray-600">See what our customers have to say about QuantaFlow</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "Head of Data Science",
                company: "TechCorp",
                content:
                  "QuantaFlow has revolutionized how we handle data analysis. What used to take hours now takes minutes.",
                rating: 5,
              },
              {
                name: "Michael Rodriguez",
                role: "CTO",
                company: "DataFlow Inc",
                content: "The AI-powered insights have helped us identify patterns we never would have found manually.",
                rating: 5,
              },
              {
                name: "Emily Johnson",
                role: "Analytics Manager",
                company: "Growth Labs",
                content: "Incredible platform with outstanding support. Our team productivity has increased by 300%.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logo Strip */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-medium text-gray-500 mb-8 uppercase tracking-wide">
            Trusted by leading companies worldwide
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
            {[
              { name: "Microsoft", query: "Microsoft logo" },
              { name: "Google", query: "Google logo" },
              { name: "Amazon", query: "Amazon logo" },
              { name: "Netflix", query: "Netflix logo" },
              { name: "Spotify", query: "Spotify logo" },
            ].map((company, i) => (
              <div key={i} className="opacity-60 hover:opacity-100 transition-opacity duration-200">
                <Image
                  src={`/placeholder.svg?height=60&width=120&query=${company.query}`}
                  alt={`${company.name} logo`}
                  width={120}
                  height={60}
                  className="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600">
              Join thousands of teams already using QuantaFlow to supercharge their data workflows.
            </p>
          </div>

          <Card className="border-0 shadow-xl">
            <CardContent className="p-8">
              <form onSubmit={handleEmailSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <Input id="name" type="text" placeholder="Enter your full name" className="w-full" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Work Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your work email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <Input id="company" type="text" placeholder="Enter your company name" className="w-full" required />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about your data challenges..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white py-3 text-lg font-semibold"
                  disabled={isSubmitted}
                >
                  {isSubmitted ? (
                    <>
                      <Check className="mr-2 w-5 h-5" />
                      Thank you! We'll be in touch soon.
                    </>
                  ) : (
                    <>
                      Get Started Free
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-teal-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">Q</span>
                </div>
                <span className="ml-2 text-xl font-semibold">QuantaFlow</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Empowering data teams worldwide with AI-powered analytics and lightning-fast insights. Transform your
                data workflows today.
              </p>
              <div className="flex space-x-4">
                {["Twitter", "LinkedIn", "GitHub"].map((social) => (
                  <div
                    key={social}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-teal-600 transition-colors cursor-pointer"
                  >
                    <span className="text-sm">{social[0]}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button onClick={() => scrollToSection("features")} className="hover:text-white transition-colors">
                    Features
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("pricing")} className="hover:text-white transition-colors">
                    Pricing
                  </button>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API Docs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Integrations
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <button onClick={() => scrollToSection("contact")} className="hover:text-white transition-colors">
                    Contact
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} QuantaFlow. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

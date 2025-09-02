import { useState } from "react"
import { motion } from "motion/react"
import { Button } from "./components/ui/button"
import { Input } from "./components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select"
import { Card, CardContent } from "./components/ui/card"
import { Badge } from "./components/ui/badge"
import { Sheet, SheetContent, SheetTrigger } from "./components/ui/sheet"
import { Search, Calendar, UserCheck, GraduationCap, BookOpen, TrendingUp, Users, ChevronDown, Menu, X, Star, Shield, ArrowRight, Sparkles, Target, Brain, Award, Clock, Phone, Mail, MapPin, MessageCircle, Crown, Compass, Globe, Lightbulb, CheckCircle2, Heart, Zap, Rocket, Briefcase, BookMarked, Presentation, Users2, Telescope, Cpu, Palette, Headphones } from "lucide-react"

const NextPathLogo = () => (
  <motion.div 
    className="flex items-center space-x-3"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
  >
    <div className="relative">
      <motion.div 
        className="w-10 h-10 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-xl flex items-center justify-center shadow-lg"
        whileHover={{ scale: 1.05, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Brain className="w-6 h-6 text-white" />
      </motion.div>
      <motion.div 
        className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full flex items-center justify-center shadow-sm"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Sparkles className="w-2 h-2 text-white" />
      </motion.div>
    </div>
    <div>
      <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-800 to-indigo-900 bg-clip-text text-transparent">Next Path</h1>
      <p className="text-xs text-gray-600">Educational Consulting</p>
    </div>
  </motion.div>
)

const ServiceCard = ({ icon: Icon, title, subtitle, status, onClick }: {
  icon: React.ElementType
  title: string
  subtitle: string
  status?: "new" | "coming-soon"
  onClick?: () => void
}) => (
  <motion.div
    whileHover={{ scale: 1.02, y: -5 }}
    whileTap={{ scale: 0.98 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
  >
    <Card className="relative hover:shadow-xl transition-all duration-500 cursor-pointer group overflow-hidden" onClick={onClick}>
      {status && (
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.3, type: "spring" }}
        >
          <Badge
            className={`absolute -top-2 -right-2 z-10 ${
              status === "new" 
                ? "bg-gradient-to-r from-emerald-500 to-green-500 shadow-green-200 shadow-lg" 
                : "bg-gradient-to-r from-purple-500 to-violet-500 shadow-purple-200 shadow-lg"
            }`}
          >
            {status === "new" ? "New" : "Coming Soon"}
          </Badge>
        </motion.div>
      )}
      <CardContent className="p-4 md:p-6 text-center relative">
        <motion.div 
          className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center group-hover:from-blue-200 group-hover:to-indigo-200 transition-all duration-300 shadow-md"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          <Icon className="w-6 h-6 md:w-8 md:h-8 text-blue-600 group-hover:text-blue-700 transition-colors" />
        </motion.div>
        <h3 className="font-semibold text-gray-800 mb-1 text-sm md:text-base group-hover:text-blue-700 transition-colors">{title}</h3>
        <p className="text-xs md:text-sm text-gray-600 group-hover:text-gray-700 transition-colors">{subtitle}</p>
        
        {/* Subtle background animation */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
        />
      </CardContent>
    </Card>
  </motion.div>
)

const MobileNav = ({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void }) => (
  <Sheet open={isOpen} onOpenChange={setIsOpen}>
    <SheetContent side="right" className="w-80">
      <div className="flex flex-col space-y-6 mt-8">
        <div className="flex justify-between items-center">
          <NextPathLogo />
        </div>
        <nav className="flex flex-col space-y-4">
          <motion.a 
            href="#" 
            className="text-gray-700 hover:text-blue-600 py-2 border-b transition-colors"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            My Appointments
          </motion.a>
          <motion.a 
            href="#" 
            className="text-gray-700 hover:text-blue-600 py-2 border-b transition-colors"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Blog
          </motion.a>
          <motion.a 
            href="#" 
            className="text-gray-700 hover:text-blue-600 py-2 border-b transition-colors"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            About
          </motion.a>
        </nav>
        <div className="flex flex-col space-y-3">
          <Button variant="outline" className="w-full">Sign In</Button>
          <Button className="w-full">Sign Up</Button>
        </div>
      </div>
    </SheetContent>
  </Sheet>
)

export default function HomePage() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <NextPathLogo />
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">My Appointments</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Blog</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" className="hidden sm:inline-flex">Sign In</Button>
              <Button size="sm" className="hidden sm:inline-flex">Sign Up</Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="md:hidden"
                onClick={() => setMobileNavOpen(true)}
              >
                <Menu className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
        <MobileNav isOpen={mobileNavOpen} setIsOpen={setMobileNavOpen} />
      </header>

      {/* Hero Banner Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-white/30"></div>
        
        {/* Floating Shapes */}
        <motion.div 
          className="absolute top-20 left-10 w-20 h-20 bg-blue-200/30 rounded-full"
          animate={{ y: [-10, 10, -10], rotate: [0, 180, 360] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-40 right-20 w-16 h-16 bg-orange-200/30 rounded-full"
          animate={{ y: [10, -10, 10], x: [-5, 5, -5] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 left-1/4 w-12 h-12 bg-green-200/30 rounded-full"
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        
        {/* Gentle Gradient Orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-100/40 to-purple-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-orange-100/40 to-pink-100/40 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center text-gray-800">
            {/* Trust Badge */}
            <motion.div 
              className="flex justify-center mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div 
                className="flex items-center space-x-2 bg-white/70 backdrop-blur-md rounded-full px-6 py-3 border border-emerald-200/50 shadow-md"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <Shield className="w-5 h-5 text-emerald-600" />
                </motion.div>
                <span className="font-medium text-emerald-700">Trusted by 10,000+ Students</span>
              </motion.div>
            </motion.div>
            
            {/* Main Heading */}
            <motion.h1 
              className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Shape Your Future with
              </motion.span>
              <motion.span 
                className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
              >
                Expert Guidance
              </motion.span>
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p 
              className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Sri Lanka's premier educational consulting platform connecting students with certified counsellors 
              for career planning, university admissions, and academic success.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300 group border-0">
                  <Target className="w-5 h-5 mr-2" />
                  Book Free Consultation
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" size="lg" className="border-2 border-gray-400 text-gray-700 hover:bg-gray-700 hover:text-white px-8 py-4 bg-white/80 backdrop-blur-sm transition-all duration-300">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Explore Services
                </Button>
              </motion.div>
            </motion.div>
            
            {/* Animated Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              {[
                { number: "500+", label: "Expert Counsellors", icon: Users2, delay: 0.1 },
                { number: "10K+", label: "Students Guided", icon: Heart, delay: 0.2 },
                { number: "95%", label: "Success Rate", icon: CheckCircle2, delay: 0.3 },
                { number: "24/7", label: "Support", icon: Headphones, delay: 0.4 }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.6 + stat.delay }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className="flex justify-center mb-2"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <stat.icon className="w-6 h-6 text-blue-600 group-hover:text-indigo-600 transition-colors" />
                  </motion.div>
                  <motion.div 
                    className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-300"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.8 + stat.delay, type: "spring", stiffness: 200 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hero Section with Service Cards */}
      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 -mt-8 md:-mt-16 relative z-10">
            {[
              {
                bg: "bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600",
                icon: MessageCircle,
                title: "Counsellor Consultation",
                subtitle: "Book a consultation",
                delay: 0.1,
                pattern: "consultation"
              },
              {
                bg: "bg-gradient-to-br from-orange-400 via-orange-500 to-amber-500",
                icon: Crown,
                title: "Premium Services",
                subtitle: "Member Benefits",
                delay: 0.2,
                pattern: "premium"
              },
              {
                bg: "bg-gradient-to-br from-purple-500 via-purple-600 to-violet-600",
                icon: Compass,
                title: "Career Guidance",
                subtitle: "Plan your future",
                delay: 0.3,
                pattern: "career"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: service.delay }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="relative group"
              >
                <Card className={`${service.bg} text-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden relative`}>
                  {/* Decorative Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    {service.pattern === "consultation" && (
                      <div className="absolute top-2 right-2 w-16 h-16 border-2 border-white/20 rounded-full"></div>
                    )}
                    {service.pattern === "premium" && (
                      <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 transform rotate-45 translate-x-10 -translate-y-10"></div>
                    )}
                    {service.pattern === "career" && (
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full transform -translate-x-12 translate-y-12"></div>
                    )}
                  </div>
                  
                  <CardContent className="p-3 sm:p-4 md:p-6 relative">
                    {/* Background animation */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3 relative z-10">
                      <motion.div 
                        className="w-10 h-10 sm:w-12 sm:h-12 bg-white bg-opacity-25 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/40 shadow-lg"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <service.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </motion.div>
                      <div className="text-center sm:text-left">
                        <h3 className="font-semibold text-xs sm:text-sm md:text-base leading-tight">{service.title}</h3>
                        <p className="text-white/80 text-xs leading-tight">{service.subtitle}</p>
                      </div>
                    </div>
                    
                    <motion.div
                      className="mt-3 sm:mt-4"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        variant="secondary" 
                        size="sm" 
                        className="w-full bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 relative z-10 text-xs sm:text-sm py-2"
                      >
                        {index === 0 ? "Book Now" : index === 1 ? "Explore" : "Start"}
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 md:py-12 bg-white relative">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute top-10 left-20 w-32 h-32 bg-blue-100/40 rounded-full blur-2xl"
            animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-10 right-20 w-40 h-40 bg-purple-100/40 rounded-full blur-2xl"
            animate={{ scale: [1.1, 1, 1.1], opacity: [0.6, 0.4, 0.6] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Card className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 border border-blue-100 shadow-lg overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/20 rounded-full transform translate-x-32 -translate-y-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-100/20 rounded-full transform -translate-x-24 translate-y-24"></div>
            </div>
            
            <CardContent className="p-4 md:p-8 relative">
              <motion.div 
                className="text-center mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center justify-center mb-4">
                  <motion.div
                    className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-blue-200/50 shadow-sm"
                    whileHover={{ scale: 1.02 }}
                  >
                    <Search className="w-5 h-5 text-blue-600" />
                    <span className="text-sm font-medium text-blue-700">Smart Search</span>
                  </motion.div>
                </div>
                <h2 className="text-xl md:text-2xl font-bold mb-2 text-gray-800">Find Your Perfect Counsellor</h2>
                <p className="text-gray-600">Search from our network of certified educational consultants</p>
              </motion.div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">Counsellor name</label>
                  <Input
                    placeholder="Search Counsellor Name"
                    className="bg-white text-gray-900 border-gray-300 shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">Specialization</label>
                  <Select>
                    <SelectTrigger className="bg-white text-gray-900 border-gray-300 shadow-sm">
                      <SelectValue placeholder="Select Specialization" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="after-ol">After O/L Guidance</SelectItem>
                      <SelectItem value="after-al">After A/L Guidance</SelectItem>
                      <SelectItem value="vocational">Vocational & Skills</SelectItem>
                      <SelectItem value="undergraduate">Undergraduate Consulting</SelectItem>
                      <SelectItem value="graduate">Graduate Consulting</SelectItem>
                      <SelectItem value="career">Career Counselling</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">Location</label>
                  <Select>
                    <SelectTrigger className="bg-white text-gray-900 border-gray-300 shadow-sm">
                      <SelectValue placeholder="Select Location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="online">Online Consultation</SelectItem>
                      <SelectItem value="colombo">Colombo</SelectItem>
                      <SelectItem value="kandy">Kandy</SelectItem>
                      <SelectItem value="galle">Galle</SelectItem>
                      <SelectItem value="jaffna">Jaffna</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">Date</label>
                  <Input
                    type="date"
                    className="bg-white text-gray-900 border-gray-300 shadow-sm"
                  />
                </div>
              </div>
              <motion.div 
                className="mt-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 md:px-12 shadow-lg hover:shadow-xl border-0">
                    <Zap className="w-5 h-5 mr-2" />
                    Search Now
                    <Sparkles className="w-4 h-4 ml-2" />
                  </Button>
                </motion.div>
              </motion.div>
              <motion.div 
                className="mt-4 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <motion.button 
                  className="text-gray-600 hover:text-gray-800 text-sm flex items-center mx-auto transition-colors group"
                  whileHover={{ y: -1 }}
                >
                  <Telescope className="w-4 h-4 mr-2 group-hover:rotate-6 transition-transform" />
                  Advanced search
                  <ChevronDown className="w-4 h-4 ml-1 group-hover:translate-y-0.5 transition-transform" />
                </motion.button>
              </motion.div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quick Access Services */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative">
        {/* Decorative Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-50/60 to-purple-50/60 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-orange-50/60 to-pink-50/60 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            className="text-center mb-8 md:mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-6">
              <motion.div
                className="flex items-center space-x-3 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full px-6 py-3 shadow-md border border-blue-200"
                whileHover={{ scale: 1.02 }}
                animate={{ y: [-2, 2, -2] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Rocket className="w-5 h-5" />
                <span className="font-medium">Quick Access</span>
                <Sparkles className="w-4 h-4" />
              </motion.div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-800 via-blue-700 to-purple-700 bg-clip-text text-transparent mb-4">
              Educational Services Hub
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Choose from our comprehensive range of educational consulting services designed to guide you at every step of your academic journey.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ServiceCard
              icon={BookMarked}
              title="After O/L Guide"
              subtitle="Subject selection & career planning"
            />
            <ServiceCard
              icon={GraduationCap}
              title="After A/L Guide"
              subtitle="University & course guidance"
            />
            <ServiceCard
              icon={Cpu}
              title="Vocational Skills"
              subtitle="Professional skill development"
            />
            <ServiceCard
              icon={Users2}
              title="Graduate Consulting"
              subtitle="Career transition support"
              status="new"
            />
            <ServiceCard
              icon={Briefcase}
              title="Undergraduate"
              subtitle="Academic & career guidance"
            />
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <ServiceCard
              icon={Compass}
              title="Career Planning"
              subtitle="Long-term career strategy"
              status="new"
            />
            <ServiceCard
              icon={Globe}
              title="Study Abroad"
              subtitle="International education guidance"
              status="new"
            />
            <ServiceCard
              icon={Lightbulb}
              title="Skill Assessment"
              subtitle="Evaluate your strengths"
              status="coming-soon"
            />
            <ServiceCard
              icon={Presentation}
              title="Group Sessions"
              subtitle="Peer learning programs"
              status="coming-soon"
            />
            <ServiceCard
              icon={Award}
              title="Exam Prep"
              subtitle="Test preparation guidance"
              status="coming-soon"
            />
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-100 via-blue-50 to-purple-50 text-gray-800 py-8 md:py-12 relative overflow-hidden border-t border-gray-200">
        {/* Decorative Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100/30 rounded-full transform -translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-100/30 rounded-full transform translate-x-40 translate-y-40"></div>
          <motion.div 
            className="absolute top-1/2 left-1/2 w-4 h-4 bg-blue-200/40 rounded-full"
            animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <NextPathLogo />
              <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                Sri Lanka's premier educational consulting platform connecting students with expert counsellors for academic and career success.
              </p>
              <div className="flex items-center mt-4 space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <motion.div
                    key={star}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  </motion.div>
                ))}
                <span className="text-sm text-gray-600 ml-2">4.9/5 Rating</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="font-semibold mb-4 flex items-center text-gray-800">
                <Palette className="w-4 h-4 mr-2 text-blue-600" />
                Services
              </h3>
              <ul className="space-y-3 text-gray-600 text-sm">
                {[
                  { name: "After O/L Guidance", icon: BookMarked },
                  { name: "After A/L Guidance", icon: GraduationCap },
                  { name: "Vocational Guidance", icon: Cpu },
                  { name: "Graduate Consulting", icon: Users2 },
                  { name: "Career Planning", icon: Compass }
                ].map((service, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a href="#" className="hover:text-gray-800 transition-colors flex items-center group">
                      <service.icon className="w-3 h-3 mr-2 text-blue-500 group-hover:text-blue-600 transition-colors" />
                      {service.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="font-semibold mb-4 flex items-center text-gray-800">
                <Headphones className="w-4 h-4 mr-2 text-blue-600" />
                Contact
              </h3>
              <div className="space-y-3 text-gray-600 text-sm">
                {[
                  { icon: Phone, text: "+94 11 123 4567", color: "text-blue-500" },
                  { icon: Mail, text: "info@nextpath.lk", color: "text-indigo-500" },
                  { icon: MapPin, text: "Colombo, Sri Lanka", color: "text-purple-500" },
                  { icon: Clock, text: "Mon-Sun: 8AM-8PM", color: "text-orange-500" }
                ].map((contact, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center space-x-3 group cursor-pointer"
                    whileHover={{ x: 5, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <contact.icon className={`w-4 h-4 ${contact.color} group-hover:text-gray-800 transition-colors`} />
                    </motion.div>
                    <span className="group-hover:text-gray-800 transition-colors">{contact.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          <motion.div 
            className="mt-8 pt-8 border-t border-gray-300/50 text-center text-gray-600 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Heart className="w-4 h-4 text-red-500" />
              <span>Made with passion for education</span>
            </div>
            <p>&copy; 2025 Next Path Educational Consulting. All rights reserved.</p>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
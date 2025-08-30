import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Calendar, User, GraduationCap, BookOpen, TrendingUp, Users, ChevronDown, Menu } from "lucide-react"

const NextPathLogo = () => (
  <div className="flex items-center space-x-3">
    <div className="relative">
      <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
        <div className="w-6 h-6 text-white">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7V10C2 16 6 20.9 12 22C18 20.9 22 16 22 10V7L12 2ZM12 7.5L7.5 10V8.5L12 6L16.5 8.5V10L12 7.5ZM12 20C7.59 18.8 4 15.1 4 10V8.84L12 5.34L20 8.84V10C20 15.1 16.41 18.8 12 20Z"/>
          </svg>
        </div>
      </div>
      <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center">
        <div className="w-2 h-2 bg-white rounded-full"></div>
      </div>
    </div>
    <div>
      <h1 className="text-2xl font-bold text-blue-800">Next Path</h1>
      <p className="text-xs text-gray-600">Educational Consulting</p>
    </div>
  </div>
)

const ServiceCard = ({ icon: Icon, title, subtitle, status, onClick }: {
  icon: React.ElementType
  title: string
  subtitle: string
  status?: "new" | "coming-soon"
  onClick?: () => void
}) => (
  <Card className="relative hover:shadow-lg transition-shadow cursor-pointer" onClick={onClick}>
    {status && (
      <Badge
        className={`absolute -top-2 -right-2 z-10 ${
          status === "new" ? "bg-green-500" : "bg-red-500"
        }`}
      >
        {status === "new" ? "New" : "Coming Soon"}
      </Badge>
    )}
    <CardContent className="p-6 text-center">
      <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
        <Icon className="w-8 h-8 text-blue-600" />
      </div>
      <h3 className="font-semibold text-gray-800 mb-1">{title}</h3>
      <p className="text-sm text-gray-600">{subtitle}</p>
    </CardContent>
  </Card>
)

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <NextPathLogo />
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600">My Appointments</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">Blog</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">About</a>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">Sign In</Button>
              <Button size="sm">Sign Up</Button>
              <Button variant="ghost" size="sm" className="md:hidden">
                <Menu className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Service Cards */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-blue-600 text-white">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Counsellor Consultation</h3>
                    <p className="text-blue-100 text-sm">Book a consultation</p>
                  </div>
                </div>
                <Button variant="secondary" size="sm" className="mt-4 bg-green-500 hover:bg-green-600 text-white">
                  Book Now
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-orange-500 text-white">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Premium Services</h3>
                    <p className="text-orange-100 text-sm">Member Benefits</p>
                  </div>
                </div>
                <Button variant="secondary" size="sm" className="mt-4 bg-green-500 hover:bg-green-600 text-white">
                  Explore
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-purple-600 text-white">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Career Guidance</h3>
                    <p className="text-purple-100 text-sm">Plan your future</p>
                  </div>
                </div>
                <Button variant="secondary" size="sm" className="mt-4 bg-green-500 hover:bg-green-600 text-white">
                  Start
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-blue-600 text-white">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Counsellor name</label>
                  <Input
                    placeholder="Search Counsellor Name"
                    className="bg-white text-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Specialization</label>
                  <Select>
                    <SelectTrigger className="bg-white text-gray-900">
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
                  <label className="block text-sm font-medium mb-2">Location</label>
                  <Select>
                    <SelectTrigger className="bg-white text-gray-900">
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
                  <label className="block text-sm font-medium mb-2">Date</label>
                  <Input
                    type="date"
                    className="bg-white text-gray-900"
                  />
                </div>
              </div>
              <div className="mt-6 text-center">
                <Button size="lg" className="bg-gray-600 hover:bg-gray-700 text-white px-12">
                  <Search className="w-5 h-5 mr-2" />
                  Search
                </Button>
              </div>
              <div className="mt-4 text-center">
                <button className="text-blue-200 hover:text-white text-sm flex items-center mx-auto">
                  Advanced search
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quick Access Services */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Quick Access</h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-8">
            <ServiceCard
              icon={BookOpen}
              title="After O/L Guide"
              subtitle="Subject selection & career planning"
            />
            <ServiceCard
              icon={GraduationCap}
              title="After A/L Guide"
              subtitle="University & course guidance"
            />
            <ServiceCard
              icon={TrendingUp}
              title="Vocational Skills"
              subtitle="Professional skill development"
            />
            <ServiceCard
              icon={Users}
              title="Graduate Consulting"
              subtitle="Career transition support"
              status="new"
            />
            <ServiceCard
              icon={User}
              title="Undergraduate"
              subtitle="Academic & career guidance"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <ServiceCard
              icon={Calendar}
              title="Career Planning"
              subtitle="Long-term career strategy"
              status="new"
            />
            <ServiceCard
              icon={BookOpen}
              title="Study Abroad"
              subtitle="International education guidance"
              status="new"
            />
            <ServiceCard
              icon={TrendingUp}
              title="Skill Assessment"
              subtitle="Evaluate your strengths"
              status="coming-soon"
            />
            <ServiceCard
              icon={Users}
              title="Group Sessions"
              subtitle="Peer learning programs"
              status="coming-soon"
            />
            <ServiceCard
              icon={GraduationCap}
              title="Exam Prep"
              subtitle="Test preparation guidance"
              status="coming-soon"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <NextPathLogo />
              <p className="mt-4 text-blue-200 text-sm">
                Sri Lanka's premier educational consulting platform connecting students with expert counsellors.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-blue-200 text-sm">
                <li><a href="#" className="hover:text-white">After O/L Guidance</a></li>
                <li><a href="#" className="hover:text-white">After A/L Guidance</a></li>
                <li><a href="#" className="hover:text-white">Vocational Guidance</a></li>
                <li><a href="#" className="hover:text-white">Graduate Consulting</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <p className="text-blue-200 text-sm">+94 11 123 4567</p>
              <p className="text-blue-200 text-sm">info@nextpath.lk</p>
              <p className="text-blue-200 text-sm">Colombo, Sri Lanka</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-blue-700 text-center text-blue-200 text-sm">
            <p>&copy; 2025 Next Path Educational Consulting. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Star, Calendar, MapPin, GraduationCap, Clock, Phone, Video, User, BookOpen } from "lucide-react"
import Link from "next/link"

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

interface Counsellor {
  id: number
  name: string
  specialization: string
  qualifications: string
  location: string
  experience: number
  fee: string
  reviews: number
  consultationTypes: string[]
  nextAvailable: string
}

const CounsellorCard = ({ counsellor }: { counsellor: Counsellor }) => (
  <Card className="hover:shadow-lg transition-shadow">
    <CardContent className="p-6">
      <div className="flex items-start space-x-4">
        <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
          <User className="w-10 h-10 text-blue-600" />
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{counsellor.name}</h3>
              <p className="text-blue-600 font-medium">{counsellor.specialization}</p>
              <div className="flex items-center mt-1">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">({counsellor.reviews} reviews)</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold text-gray-900">Rs. {counsellor.fee}</p>
              <p className="text-sm text-gray-600">per session</p>
            </div>
          </div>

          <div className="mt-3 space-y-2">
            <div className="flex items-center text-sm text-gray-600">
              <GraduationCap className="w-4 h-4 mr-2" />
              <span>{counsellor.qualifications}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <MapPin className="w-4 h-4 mr-2" />
              <span>{counsellor.location}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Clock className="w-4 h-4 mr-2" />
              <span>{counsellor.experience} years experience</span>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="flex space-x-2">
              {counsellor.consultationTypes.map((type: string) => (
                <Badge key={type} variant="secondary" className="text-xs">
                  {type === 'online' && <Video className="w-3 h-3 mr-1" />}
                  {type === 'phone' && <Phone className="w-3 h-3 mr-1" />}
                  {type === 'in-person' && <User className="w-3 h-3 mr-1" />}
                  {type}
                </Badge>
              ))}
            </div>
            <div className="flex space-x-2">
              <Link href={`/counsellors/${counsellor.id}`}>
                <Button variant="outline" size="sm">
                  View Profile
                </Button>
              </Link>
              <Link href={`/book/${counsellor.id}`}>
                <Button size="sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
)

const mockCounsellors = [
  {
    id: 1,
    name: "Dr. Priya Wijesinghe",
    specialization: "After A/L Guidance & University Selection",
    qualifications: "PhD in Educational Psychology, University of Colombo",
    location: "Colombo & Online",
    experience: 12,
    fee: "3,500",
    reviews: 89,
    consultationTypes: ["online", "in-person"],
    nextAvailable: "Today 2:00 PM"
  },
  {
    id: 2,
    name: "Mr. Rohan Fernando",
    specialization: "Career Development & Graduate Consulting",
    qualifications: "MSc Career Guidance, Certified Career Coach",
    location: "Kandy & Online",
    experience: 8,
    fee: "2,800",
    reviews: 156,
    consultationTypes: ["online", "phone", "in-person"],
    nextAvailable: "Tomorrow 10:00 AM"
  },
  {
    id: 3,
    name: "Ms. Samantha Perera",
    specialization: "Vocational & Skills Development",
    qualifications: "Diploma in Vocational Guidance, SLIATE",
    location: "Galle & Online",
    experience: 6,
    fee: "2,200",
    reviews: 73,
    consultationTypes: ["online", "in-person"],
    nextAvailable: "Today 4:30 PM"
  },
  {
    id: 4,
    name: "Dr. Kasun Silva",
    specialization: "After O/L Subject Selection",
    qualifications: "MEd Educational Guidance, University of Peradeniya",
    location: "Online Only",
    experience: 10,
    fee: "3,000",
    reviews: 112,
    consultationTypes: ["online", "phone"],
    nextAvailable: "Today 6:00 PM"
  }
]

export default function CounsellorsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/">
              <NextPathLogo />
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="#" className="text-gray-700 hover:text-blue-600">My Appointments</Link>
              <Link href="#" className="text-gray-700 hover:text-blue-600">Blog</Link>
              <Link href="#" className="text-gray-700 hover:text-blue-600">About</Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">Sign In</Button>
              <Button size="sm">Sign Up</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Search Bar */}
      <section className="bg-blue-600 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-white">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <Input
                    placeholder="Search Counsellor Name"
                    className="bg-white text-gray-900"
                  />
                </div>
                <div>
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
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <Search className="w-4 h-4 mr-2" />
                    Search
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Results */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Available Counsellors</h1>
              <p className="text-gray-600 mt-1">{mockCounsellors.length} counsellors found</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Sort by:</span>
              <Select>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Rating" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">Highest Rating</SelectItem>
                  <SelectItem value="experience">Most Experience</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="availability">Earliest Available</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-6">
            {mockCounsellors.map((counsellor) => (
              <CounsellorCard key={counsellor.id} counsellor={counsellor} />
            ))}
          </div>

          {/* Load More */}
          <div className="mt-8 text-center">
            <Button variant="outline" size="lg">
              Load More Counsellors
            </Button>
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
                <li><Link href="#" className="hover:text-white">After O/L Guidance</Link></li>
                <li><Link href="#" className="hover:text-white">After A/L Guidance</Link></li>
                <li><Link href="#" className="hover:text-white">Vocational Guidance</Link></li>
                <li><Link href="#" className="hover:text-white">Graduate Consulting</Link></li>
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

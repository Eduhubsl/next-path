import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, User, CreditCard, CheckCircle, Video, Phone } from "lucide-react"
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

const TimeSlot = ({ time, selected, onClick }: { time: string, selected?: boolean, onClick?: () => void }) => (
  <Button
    variant={selected ? "default" : "outline"}
    size="sm"
    onClick={onClick}
    className={selected ? "bg-blue-600 text-white" : "hover:bg-blue-50 hover:border-blue-300"}
  >
    {time}
  </Button>
)

const mockCounsellor = {
  id: 1,
  name: "Dr. Priya Wijesinghe",
  specialization: "After A/L Guidance & University Selection",
  fee: "3,500",
  consultationTypes: ["online", "in-person"]
}

const availableSlots = [
  { date: "Today (Jan 15)", day: "Monday", slots: ["2:00 PM", "4:30 PM", "6:00 PM"] },
  { date: "Tomorrow (Jan 16)", day: "Tuesday", slots: ["9:00 AM", "11:00 AM", "2:00 PM", "4:00 PM"] },
  { date: "Jan 17", day: "Wednesday", slots: ["10:00 AM", "1:00 PM", "3:30 PM", "5:00 PM"] },
  { date: "Jan 18", day: "Thursday", slots: ["9:30 AM", "12:00 PM", "2:30 PM", "4:30 PM"] }
]

export default function BookingPage() {
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <Link href="/counsellors" className="hover:text-blue-600">Counsellors</Link>
            <span>/</span>
            <Link href={`/counsellors/${mockCounsellor.id}`} className="hover:text-blue-600">{mockCounsellor.name}</Link>
            <span>/</span>
            <span className="text-gray-900">Book Session</span>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-8">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                1
              </div>
              <span className="ml-2 text-sm font-medium text-blue-600">Select Time</span>
            </div>
            <div className="w-12 h-0.5 bg-gray-300"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center text-sm font-medium">
                2
              </div>
              <span className="ml-2 text-sm text-gray-600">Personal Details</span>
            </div>
            <div className="w-12 h-0.5 bg-gray-300"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center text-sm font-medium">
                3
              </div>
              <span className="ml-2 text-sm text-gray-600">Payment</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Counsellor Info */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
                    <User className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">{mockCounsellor.name}</h2>
                    <p className="text-blue-600 font-medium">{mockCounsellor.specialization}</p>
                    <p className="text-gray-600 text-sm">Rs. {mockCounsellor.fee} per session</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Consultation Type */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Consultation Type</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="cursor-pointer hover:shadow-md transition-shadow border-2 border-blue-600">
                    <CardContent className="p-4 text-center">
                      <Video className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <h4 className="font-medium text-gray-900">Online Session</h4>
                      <p className="text-sm text-gray-600 mt-1">Video call via secure platform</p>
                      <Badge className="mt-2 bg-green-100 text-green-800">Recommended</Badge>
                    </CardContent>
                  </Card>
                  <Card className="cursor-pointer hover:shadow-md transition-shadow border-2 border-transparent hover:border-gray-300">
                    <CardContent className="p-4 text-center">
                      <MapPin className="w-8 h-8 text-gray-600 mx-auto mb-2" />
                      <h4 className="font-medium text-gray-900">In-Person</h4>
                      <p className="text-sm text-gray-600 mt-1">Face to face in Colombo office</p>
                      <p className="text-xs text-gray-500 mt-1">Additional Rs. 500 venue fee</p>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>

            {/* Date & Time Selection */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Date & Time</h3>

                <div className="space-y-6">
                  {availableSlots.map((daySlot) => (
                    <div key={daySlot.date}>
                      <div className="flex items-center space-x-4 mb-3">
                        <Calendar className="w-5 h-5 text-gray-600" />
                        <div>
                          <h4 className="font-medium text-gray-900">{daySlot.date}</h4>
                          <p className="text-sm text-gray-600">{daySlot.day}</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 md:grid-cols-4 gap-3 ml-9">
                        {daySlot.slots.map((time) => (
                          <TimeSlot
                            key={time}
                            time={time}
                            selected={time === "2:00 PM" && daySlot.date === "Today (Jan 15)"}
                            onClick={() => {}}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Student Details */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Student Information</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <Input placeholder="Enter first name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <Input placeholder="Enter last name" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <Input type="email" placeholder="Enter email address" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <Input placeholder="Enter phone number" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Educational Level</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your current level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ol-completed">O/L Completed</SelectItem>
                        <SelectItem value="al-studying">A/L Studying</SelectItem>
                        <SelectItem value="al-completed">A/L Completed</SelectItem>
                        <SelectItem value="undergraduate">Undergraduate</SelectItem>
                        <SelectItem value="graduate">Graduate</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Brief Description of What You'd Like to Discuss</label>
                    <textarea
                      className="w-full h-20 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Please describe your questions or areas you'd like guidance on..."
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar - Booking Summary */}
          <div className="space-y-6">
            <Card className="sticky top-4">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Booking Summary</h3>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium text-gray-900">Today, Jan 15</p>
                      <p className="text-sm text-gray-600">Monday, 2:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                    <Video className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium text-gray-900">Online Session</p>
                      <p className="text-sm text-gray-600">60 minutes duration</p>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">Session Fee</span>
                      <span className="font-medium">Rs. 3,500</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">Platform Fee</span>
                      <span className="font-medium">Rs. 150</span>
                    </div>
                    <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                      <span className="font-semibold text-gray-900">Total</span>
                      <span className="text-xl font-bold text-gray-900">Rs. 3,650</span>
                    </div>
                  </div>

                  <Button className="w-full" size="lg">
                    <CreditCard className="w-5 h-5 mr-2" />
                    Proceed to Payment
                  </Button>

                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Free cancellation up to 24 hours</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Secure payment processing</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Session recording available</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Help */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Need Help?</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Contact our support team if you have any questions about booking.
                </p>
                <Button variant="outline" className="w-full" size="sm">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Support
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-800 text-white py-8 mt-12">
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

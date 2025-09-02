import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { GraduationCap, BookOpen, Star, MapPin, Calendar, Filter } from "lucide-react";
import Link from "next/link";

// Sample consultant data (would come from backend in real app)
const consultants = [
  {
    id: 1,
    name: "Dr. Priya Wijesinghe",
    specialty: "Career Guidance Expert",
    avatar: "PW",
    image: "/api/placeholder/200/200",
    rating: 4.9,
    reviews: 150,
    experience: "12+ years",
    location: "Colombo",
    languages: ["English", "Sinhala"],
    specialties: ["After O/L", "After A/L", "Career Planning"],
    bio: "Dr. Priya is a seasoned educational consultant with over 12 years of experience helping students navigate their academic and career paths. She specializes in post-O/L and A/L guidance.",
    qualifications: ["PhD in Educational Psychology", "MA in Career Counseling", "Certified Career Coach"],
    availableHours: "Mon-Fri: 9:00 AM - 6:00 PM"
  },
  {
    id: 2,
    name: "Mr. Kamal Fernando",
    specialty: "University Counselor",
    avatar: "KF",
    image: "/api/placeholder/200/200",
    rating: 4.8,
    reviews: 98,
    experience: "8+ years",
    location: "Kandy",
    languages: ["English", "Sinhala", "Tamil"],
    specialties: ["After A/L", "University Selection", "Undergraduate Consulting"],
    bio: "Kamal specializes in university admissions and course selection. He has helped hundreds of students get into their dream universities both locally and internationally.",
    qualifications: ["MSc in Higher Education Management", "BSc in Mathematics", "University Admissions Specialist"],
    availableHours: "Mon-Sat: 10:00 AM - 7:00 PM"
  },
  {
    id: 3,
    name: "Ms. Anusha Perera",
    specialty: "Study Abroad Specialist",
    avatar: "AP",
    image: "/api/placeholder/200/200",
    rating: 4.9,
    reviews: 75,
    experience: "10+ years",
    location: "Colombo",
    languages: ["English", "Sinhala"],
    specialties: ["Study Abroad", "International Applications", "Scholarship Guidance"],
    bio: "Anusha is an expert in international education with extensive experience in study abroad programs. She has helped students secure placements in top universities worldwide.",
    qualifications: ["MS in International Education", "Certified Study Abroad Counselor", "IELTS Trainer"],
    availableHours: "Tue-Sat: 9:00 AM - 5:00 PM"
  },
  {
    id: 4,
    name: "Dr. Rajesh Kumar",
    specialty: "Vocational Skills Expert",
    avatar: "RK",
    image: "/api/placeholder/200/200",
    rating: 4.7,
    reviews: 112,
    experience: "15+ years",
    location: "Galle",
    languages: ["English", "Sinhala", "Tamil"],
    specialties: ["Vocational Skills", "Professional Development", "Industry Training"],
    bio: "Dr. Rajesh brings 15 years of industry experience in vocational training and professional development. He helps students identify and develop in-demand skills.",
    qualifications: ["PhD in Vocational Education", "Industry Certification Specialist", "Skills Development Trainer"],
    availableHours: "Mon-Fri: 8:00 AM - 5:00 PM"
  },
  {
    id: 5,
    name: "Ms. Samanthi Silva",
    specialty: "Graduate Career Coach",
    avatar: "SS",
    image: "/api/placeholder/200/200",
    rating: 4.8,
    reviews: 89,
    experience: "7+ years",
    location: "Colombo",
    languages: ["English", "Sinhala"],
    specialties: ["Graduate Consulting", "Career Transition", "Professional Development"],
    bio: "Samanthi specializes in helping graduates transition into successful careers. She provides guidance on job search strategies, interview preparation, and career development.",
    qualifications: ["MBA in Human Resources", "Certified Career Coach", "Professional Development Specialist"],
    availableHours: "Mon-Thu: 1:00 PM - 8:00 PM"
  },
  {
    id: 6,
    name: "Mr. Dinesh Jayawardena",
    specialty: "Academic Advisor",
    avatar: "DJ",
    image: "/api/placeholder/200/200",
    rating: 4.6,
    reviews: 95,
    experience: "9+ years",
    location: "Negombo",
    languages: ["English", "Sinhala"],
    specialties: ["Undergraduate Consulting", "Academic Planning", "Study Skills"],
    bio: "Dinesh provides comprehensive academic guidance to undergraduate students. He helps with course selection, study strategies, and academic goal setting.",
    qualifications: ["MSc in Educational Management", "Academic Advisor Certification", "Study Skills Specialist"],
    availableHours: "Mon-Fri: 10:00 AM - 6:00 PM"
  }
];

const specialtyFilters = [
  "All Specialties",
  "After O/L",
  "After A/L",
  "Vocational Skills",
  "Undergraduate Consulting",
  "Graduate Consulting",
  "Study Abroad"
];

export default function ConsultantsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-soft-cream to-white">
      {/* Header */}
      <header className="border-b border-border/50 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-serif font-semibold text-foreground">NextPath</h1>
                <p className="text-sm text-muted-foreground">Educational Consulting</p>
              </div>
            </Link>

            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/services" className="text-foreground/80 hover:text-foreground transition-colors">Services</Link>
              <Link href="/consultants" className="text-primary font-medium">Consultants</Link>
              <Link href="/resources" className="text-foreground/80 hover:text-foreground transition-colors">Resources</Link>
              <Link href="/webinars" className="text-foreground/80 hover:text-foreground transition-colors">Webinars</Link>
            </nav>

            <Button size="sm">Book Consultation</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif font-medium text-foreground mb-6">
              Meet Our Expert Consultants
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Connect with experienced professionals who are passionate about helping you
              achieve your educational and career goals. Each consultant brings unique expertise
              and a personalized approach to guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center space-x-4 mb-8">
              <Filter className="w-5 h-5 text-muted-foreground" />
              <span className="font-medium text-foreground">Filter by Specialty:</span>
            </div>
            <div className="flex flex-wrap gap-3 mb-8">
              {specialtyFilters.map((filter, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  size="sm"
                  className="rounded-full"
                >
                  {filter}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Consultants Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {consultants.map((consultant) => (
                <Card key={consultant.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 gentle-shadow border-0">
                  <CardHeader className="text-center pb-4">
                    <Avatar className="w-24 h-24 mx-auto mb-4">
                      <AvatarImage src={consultant.image} alt={consultant.name} />
                      <AvatarFallback className="text-lg font-semibold bg-primary/10 text-primary">
                        {consultant.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-xl font-serif">{consultant.name}</CardTitle>
                    <CardDescription className="text-primary font-medium">
                      {consultant.specialty}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Stats */}
                    <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span>{consultant.rating}</span>
                      </div>
                      <span>•</span>
                      <span>{consultant.reviews} reviews</span>
                      <span>•</span>
                      <span>{consultant.experience}</span>
                    </div>

                    {/* Location */}
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{consultant.location}</span>
                    </div>

                    {/* Specialties */}
                    <div className="flex flex-wrap gap-2 justify-center">
                      {consultant.specialties.slice(0, 2).map((spec, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {spec}
                        </Badge>
                      ))}
                      {consultant.specialties.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{consultant.specialties.length - 2} more
                        </Badge>
                      )}
                    </div>

                    {/* Languages */}
                    <div className="text-center text-sm text-muted-foreground">
                      <span className="font-medium">Languages: </span>
                      {consultant.languages.join(", ")}
                    </div>

                    {/* Availability */}
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span className="text-xs">{consultant.availableHours}</span>
                    </div>

                    {/* Bio Preview */}
                    <p className="text-sm text-muted-foreground text-center line-clamp-2">
                      {consultant.bio}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-2 pt-2">
                      <Button asChild className="w-full">
                        <Link href={`/consultants/${consultant.id}`}>
                          View Profile
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm" className="w-full">
                        Book Consultation
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-6">
              Can't Find the Right Consultant?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact us and we'll help match you with the perfect consultant for your specific needs and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Contact Us
              </Button>
              <Button variant="outline" size="lg">
                Request Custom Matching
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <Link href="/" className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-semibold">NextPath</h3>
                  <p className="text-sm text-background/70">Educational Consulting</p>
                </div>
              </Link>
              <p className="text-background/80 max-w-md">
                Sri Lanka's premier educational consulting platform, connecting students
                with expert consultants to navigate their academic and career journeys.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li><Link href="/services/after-ol" className="hover:text-background transition-colors">After O/L Guidance</Link></li>
                <li><Link href="/services/after-al" className="hover:text-background transition-colors">After A/L Guidance</Link></li>
                <li><Link href="/services/vocational" className="hover:text-background transition-colors">Vocational Skills</Link></li>
                <li><Link href="/services/study-abroad" className="hover:text-background transition-colors">Study Abroad</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-background/80">
                <p>+94 11 123 4567</p>
                <p>info@nextpath.lk</p>
                <p>Colombo, Sri Lanka</p>
              </div>
            </div>
          </div>

          <div className="border-t border-background/20 mt-12 pt-8 text-center text-sm text-background/60">
            <p>&copy; 2025 NextPath Educational Consulting. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

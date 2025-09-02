import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { GraduationCap, BookOpen, Star, MapPin, Calendar, Clock, Globe, Award, Users } from "lucide-react";
import Link from "next/link";
import BookingCalendar from "@/components/booking-calendar";

// Sample consultant data (would come from backend/database in real app)
const consultantData = {
  "1": {
    id: 1,
    name: "Dr. Priya Wijesinghe",
    specialty: "Career Guidance Expert",
    avatar: "PW",
    image: "/api/placeholder/300/300",
    rating: 4.9,
    reviews: 150,
    experience: "12+ years",
    location: "Colombo",
    languages: ["English", "Sinhala"],
    specialties: ["After O/L", "After A/L", "Career Planning"],
    bio: "Dr. Priya Wijesinghe is a distinguished educational consultant with over 12 years of experience in guiding students through their academic and career decisions. She holds a PhD in Educational Psychology and has helped thousands of students achieve their educational goals. Her approach combines evidence-based counseling techniques with deep understanding of the Sri Lankan education system.",
    detailedBio: "Dr. Priya's journey in educational consulting began after completing her doctoral studies at the University of Colombo. She has since become one of Sri Lanka's most respected career guidance experts, known for her personalized approach and comprehensive understanding of both local and international educational opportunities. Her expertise spans across helping O/L students choose their A/L streams, guiding A/L students in university selection, and providing career planning services to students at all levels.",
    qualifications: [
      "PhD in Educational Psychology - University of Colombo",
      "MA in Career Counseling - University of Kelaniya",
      "Certified Career Coach - International Coach Federation",
      "Advanced Diploma in Psychological Counseling"
    ],
    achievements: [
      "Guided over 2,000 students in their educational journey",
      "Featured expert on education programs on national television",
      "Published researcher in educational psychology journals",
      "Winner of Excellence in Educational Consulting Award 2023"
    ],
    availableHours: "Monday to Friday: 9:00 AM - 6:00 PM",
    consultationTypes: [
      { type: "Initial Career Assessment", duration: "90 minutes", price: "Free" },
      { type: "Stream Selection Guidance", duration: "60 minutes", price: "LKR 3,000" },
      { type: "University Selection Counseling", duration: "75 minutes", price: "LKR 4,000" },
      { type: "Comprehensive Career Planning", duration: "120 minutes", price: "LKR 6,000" }
    ],
    testimonials: [
      {
        name: "Saman Perera",
        role: "University Student",
        content: "Dr. Priya helped me choose the right A/L stream after my O/Ls. Her guidance was invaluable and I'm now studying Engineering at University of Moratuwa.",
        rating: 5
      },
      {
        name: "Nishani Silva",
        role: "A/L Graduate",
        content: "The career planning session with Dr. Priya opened my eyes to opportunities I never knew existed. Highly recommended!",
        rating: 5
      }
    ]
  }
  // Add other consultants here...
};

export default async function ConsultantProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = params;
  const consultant = consultantData[id as keyof typeof consultantData];

  if (!consultant) {
    return <div>Consultant not found</div>;
  }

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
              <Link href="/consultants" className="text-foreground/80 hover:text-foreground transition-colors">Consultants</Link>
              <Link href="/resources" className="text-foreground/80 hover:text-foreground transition-colors">Resources</Link>
              <Link href="/webinars" className="text-foreground/80 hover:text-foreground transition-colors">Webinars</Link>
            </nav>

            <Button size="sm">Book Consultation</Button>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <section className="py-4 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <Link href="/consultants" className="hover:text-foreground transition-colors">Consultants</Link>
            <span>/</span>
            <span className="text-foreground">{consultant.name}</span>
          </div>
        </div>
      </section>

      {/* Profile Header */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Profile Info */}
              <div className="lg:col-span-2">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <Avatar className="w-32 h-32 mx-auto md:mx-0">
                    <AvatarImage src={consultant.image} alt={consultant.name} />
                    <AvatarFallback className="text-3xl font-semibold bg-primary/10 text-primary">
                      {consultant.avatar}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex-1 text-center md:text-left">
                    <h1 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-2">
                      {consultant.name}
                    </h1>
                    <p className="text-xl text-primary font-medium mb-4">{consultant.specialty}</p>

                    {/* Stats */}
                    <div className="flex flex-wrap gap-6 justify-center md:justify-start mb-6">
                      <div className="flex items-center gap-2">
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{consultant.rating}</span>
                        <span className="text-muted-foreground">({consultant.reviews} reviews)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="w-5 h-5 text-primary" />
                        <span>{consultant.experience}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-muted-foreground" />
                        <span>{consultant.location}</span>
                      </div>
                    </div>

                    {/* Specialties */}
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-6">
                      {consultant.specialties.map((spec, index) => (
                        <Badge key={index} variant="secondary">
                          {spec}
                        </Badge>
                      ))}
                    </div>

                    {/* Languages */}
                    <div className="flex items-center gap-2 justify-center md:justify-start">
                      <Globe className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">Languages: {consultant.languages.join(", ")}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-4">
                <Card className="gentle-shadow border-0">
                  <CardHeader className="text-center">
                    <CardTitle className="text-lg font-serif">Book Consultation</CardTitle>
                    <CardDescription>Start with a free initial session</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full" size="lg">
                      Book Free Consultation
                    </Button>
                    <Button variant="outline" className="w-full">
                      View Available Times
                    </Button>
                  </CardContent>
                </Card>

                <Card className="gentle-shadow border-0">
                  <CardHeader>
                    <CardTitle className="text-lg font-serif">Availability</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-primary mt-0.5" />
                      <span className="text-sm">{consultant.availableHours}</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-8">
                {/* About */}
                <Card className="gentle-shadow border-0">
                  <CardHeader>
                    <CardTitle className="text-2xl font-serif">About {consultant.name.split(' ')[1]}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-base leading-relaxed">{consultant.bio}</p>
                    <p className="text-base leading-relaxed">{consultant.detailedBio}</p>
                  </CardContent>
                </Card>

                {/* Qualifications */}
                <Card className="gentle-shadow border-0">
                  <CardHeader>
                    <CardTitle className="text-2xl font-serif">Qualifications & Certifications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {consultant.qualifications.map((qual, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Award className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>{qual}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Achievements */}
                <Card className="gentle-shadow border-0">
                  <CardHeader>
                    <CardTitle className="text-2xl font-serif">Key Achievements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {consultant.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Star className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Testimonials */}
                <Card className="gentle-shadow border-0">
                  <CardHeader>
                    <CardTitle className="text-2xl font-serif">What Students Say</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {consultant.testimonials.map((testimonial, index) => (
                      <div key={index} className="border-l-4 border-primary/20 pl-6">
                        <div className="flex items-center gap-1 mb-2">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <p className="text-base italic mb-3">"{testimonial.content}"</p>
                        <div>
                          <p className="font-medium">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Consultation Types */}
                <Card className="gentle-shadow border-0">
                  <CardHeader>
                    <CardTitle className="text-xl font-serif">Consultation Types</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {consultant.consultationTypes.map((type, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <h4 className="font-medium mb-2">{type.type}</h4>
                        <div className="flex justify-between items-center text-sm text-muted-foreground mb-2">
                          <span>{type.duration}</span>
                          <span className={`font-medium ${type.price === 'Free' ? 'text-green-600' : 'text-foreground'}`}>
                            {type.price}
                          </span>
                        </div>
                        <Button variant="outline" size="sm" className="w-full">
                          Book This Session
                        </Button>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Booking Calendar */}
                <div>
                  <h3 className="text-xl font-serif font-medium mb-4">Book Your Session</h3>
                  <BookingCalendar />
                </div>
              </div>
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

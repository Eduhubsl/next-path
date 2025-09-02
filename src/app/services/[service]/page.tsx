import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Download, Video, BookOpen, Users, ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import BookingCalendar from "@/components/booking-calendar";

// Service data configuration
const serviceData = {
  'after-ol': {
    title: 'After O/L Guidance',
    description: 'Navigate your A/L stream selection with confidence. Get expert guidance on subject combinations and career pathways.',
    heroImage: '/api/placeholder/600/300',
    consultationTitle: 'Book Your After O/L Consultation',
    consultationDescription: 'Get personalized guidance from our experts to choose the right A/L stream and subjects that align with your career goals.',
    resources: [
      { title: 'A/L Stream Selection Guide', type: 'PDF', icon: Download, description: 'Complete guide to choosing your A/L stream' },
      { title: 'Subject Combination Calculator', type: 'Tool', icon: BookOpen, description: 'Interactive tool to find the best subject combinations' },
      { title: 'Career Path Mapping', type: 'Video', icon: Video, description: 'Video series on different career pathways' },
      { title: 'University Requirements Guide', type: 'PDF', icon: Download, description: 'Entry requirements for Sri Lankan universities' }
    ],
    webinars: [
      { title: 'Choosing Your A/L Stream: Complete Guide', date: '2025-02-15', time: '7:00 PM', instructor: 'Dr. Priya Wijesinghe' },
      { title: 'Science vs. Commerce: Making the Right Choice', date: '2025-02-22', time: '7:00 PM', instructor: 'Mr. Kamal Fernando' },
      { title: 'Arts Stream Opportunities in 2025', date: '2025-03-01', time: '7:00 PM', instructor: 'Ms. Anusha Perera' }
    ]
  },
  'after-al': {
    title: 'After A/L Guidance',
    description: 'Make informed decisions about university courses and career paths after completing your A/Levels.',
    heroImage: '/api/placeholder/600/300',
    consultationTitle: 'Book Your After A/L Consultation',
    consultationDescription: 'Get expert advice on university selection, course choices, and career planning tailored to your A/L results.',
    resources: [
      { title: 'University Selection Guide 2025', type: 'PDF', icon: Download, description: 'Comprehensive guide to Sri Lankan universities' },
      { title: 'Course Comparison Tool', type: 'Tool', icon: BookOpen, description: 'Compare different degree programs' },
      { title: 'Scholarship Application Guide', type: 'PDF', icon: Download, description: 'How to apply for scholarships and financial aid' },
      { title: 'Career Planning Workbook', type: 'PDF', icon: Download, description: 'Step-by-step career planning exercises' }
    ],
    webinars: [
      { title: 'University Applications: A Complete Guide', date: '2025-02-18', time: '7:30 PM', instructor: 'Dr. Priya Wijesinghe' },
      { title: 'Alternative Career Paths After A/L', date: '2025-02-25', time: '7:30 PM', instructor: 'Mr. Kamal Fernando' },
      { title: 'Preparing for University Life', date: '2025-03-04', time: '7:30 PM', instructor: 'Ms. Anusha Perera' }
    ]
  },
  // Add other services...
  'vocational': {
    title: 'Vocational Skills Development',
    description: 'Develop practical skills and professional certifications to enhance your career prospects.',
    heroImage: '/api/placeholder/600/300',
    consultationTitle: 'Book Your Vocational Skills Consultation',
    consultationDescription: 'Discover the best vocational training programs and certification courses for your career goals.',
    resources: [
      { title: 'Skills Gap Analysis Tool', type: 'Tool', icon: BookOpen, description: 'Identify in-demand skills in your field' },
      { title: 'Certification Programs Guide', type: 'PDF', icon: Download, description: 'List of recognized certification programs' },
      { title: 'Professional Development Plan', type: 'PDF', icon: Download, description: 'Template for creating your development plan' },
      { title: 'Industry Insights Report', type: 'PDF', icon: Download, description: 'Current trends in vocational training' }
    ],
    webinars: [
      { title: 'Top Vocational Skills for 2025', date: '2025-02-20', time: '7:00 PM', instructor: 'Mr. Kamal Fernando' },
      { title: 'Building Your Professional Portfolio', date: '2025-02-27', time: '7:00 PM', instructor: 'Dr. Priya Wijesinghe' },
      { title: 'Networking for Career Success', date: '2025-03-06', time: '7:00 PM', instructor: 'Ms. Anusha Perera' }
    ]
  }
  // Add remaining services (undergraduate, graduate, study-abroad) in the same format
};

export default async function ServicePage({ params }: { params: Promise<{ service: string }> }) {
  const { service: serviceParam } = await params;
  const service = serviceData[serviceParam as keyof typeof serviceData];

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-soft-cream to-white">
      {/* Header - keeping the same style as homepage */}
      <header className="border-b border-border/50 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
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

      {/* Individual Consulting Section */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-serif font-medium text-foreground mb-6">
                {service.consultationTitle}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {service.consultationDescription}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Service Info */}
              <div className="space-y-6">
                <Card className="gentle-shadow border-0">
                  <CardHeader>
                    <CardTitle className="text-2xl font-serif">What You'll Get</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Star className="w-3 h-3 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Personalized Assessment</p>
                        <p className="text-sm text-muted-foreground">Comprehensive evaluation of your interests, strengths, and goals</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Star className="w-3 h-3 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Expert Guidance</p>
                        <p className="text-sm text-muted-foreground">Professional advice from experienced educational consultants</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Star className="w-3 h-3 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Action Plan</p>
                        <p className="text-sm text-muted-foreground">Step-by-step roadmap to achieve your educational goals</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Star className="w-3 h-3 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Follow-up Support</p>
                        <p className="text-sm text-muted-foreground">Ongoing guidance and resource recommendations</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="bg-accent/20 rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="font-medium">Session Duration: 60 minutes</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
                      Free First Consultation
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Booking Calendar */}
              <div>
                <BookingCalendar />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Resources Section */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-4">
                Free Resources to Help You Succeed
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Access our curated collection of guides, tools, and resources designed specifically for your educational journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.resources.map((resource, index) => {
                const IconComponent = resource.icon;
                return (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300 gentle-shadow border-0">
                    <CardHeader className="pb-4">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl font-serif group-hover:text-primary transition-colors">
                            {resource.title}
                          </CardTitle>
                          <Badge variant="outline" className="mt-2">
                            {resource.type}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base mb-4">
                        {resource.description}
                      </CardDescription>
                      <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-white transition-colors">
                        Access Resource
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Webinars Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-4">
                Join Our Upcoming '{service.title}' Webinars
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Learn from our experts in interactive online sessions designed to answer your questions and provide valuable insights.
              </p>
            </div>

            <div className="space-y-6">
              {service.webinars.map((webinar, index) => (
                <Card key={index} className="gentle-shadow hover:shadow-lg transition-shadow border-0">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-serif font-medium text-foreground mb-2">
                          {webinar.title}
                        </h3>
                        <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(webinar.date).toLocaleDateString('en-US', {
                              weekday: 'long',
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4" />
                            <span>{webinar.time}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Users className="w-4 h-4" />
                            <span>{webinar.instructor}</span>
                          </div>
                        </div>
                      </div>
                      <Button className="md:flex-shrink-0">
                        Register Now
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button variant="outline" size="lg">
                View All Webinars
                <ArrowRight className="ml-2 w-5 h-5" />
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
                  <BookOpen className="w-6 h-6 text-white" />
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

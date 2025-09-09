import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  GraduationCap,
  BookOpen,
  Briefcase,
  Users,
  Globe,
  Trophy,
  ArrowRight,
  Star,
  Lightbulb, // Import the Lightbulb icon
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: 'after-ol',
    title: 'After O/L',
    description: 'Subject selection guidance and A/L stream planning for O/L students',
    icon: BookOpen,
    gradient: 'from-blue-50 to-indigo-50',
    iconColor: 'text-blue-600',
    href: '/services/after-ol'
  },
  {
    id: 'after-al',
    title: 'After A/L',
    description: 'University selection, course guidance, and career pathway planning',
    icon: GraduationCap,
    gradient: 'from-green-50 to-emerald-50',
    iconColor: 'text-green-600',
    href: '/services/after-al'
  },
  {
    id: 'vocational',
    title: 'Vocational Skills',
    description: 'Professional skill development and certification programs',
    icon: Briefcase,
    gradient: 'from-orange-50 to-amber-50',
    iconColor: 'text-orange-600',
    href: '/services/vocational'
  },
  {
    id: 'undergraduate',
    title: 'Undergraduate Consulting',
    description: 'Academic guidance and career planning for university students',
    icon: Users,
    gradient: 'from-purple-50 to-violet-50',
    iconColor: 'text-purple-600',
    href: '/services/undergraduate'
  },
  {
    id: 'graduate',
    title: 'Graduate Consulting',
    description: 'Career transition support and professional development',
    icon: Trophy,
    gradient: 'from-rose-50 to-pink-50',
    iconColor: 'text-rose-600',
    href: '/services/graduate'
  },
  {
    id: 'study-abroad',
    title: 'Study Abroad',
    description: 'International education guidance and application support',
    icon: Globe,
    gradient: 'from-teal-50 to-cyan-50',
    iconColor: 'text-teal-600',
    href: '/services/study-abroad'
  },
  // New Business Consultation Service
  {
    id: 'business-consultation',
    title: 'Business Consultation',
    description: 'Expert advice for startups and small businesses on strategy and growth',
    icon: Lightbulb,
    gradient: 'from-yellow-50 to-orange-50',
    iconColor: 'text-yellow-600',
    href: '/services/business-consultation'
  }
];

const consultants = [
  {
    name: 'Dr. Priya Wijesinghe',
    specialty: 'Career Guidance Expert',
    image: '/api/placeholder/120/120',
    rating: 4.9,
    reviews: 150,
    experience: '12+ years'
  },
  {
    name: 'Mr. Kamal Fernando',
    specialty: 'University Counselor',
    image: '/api/placeholder/120/120',
    rating: 4.8,
    reviews: 98,
    experience: '8+ years'
  },
  {
    name: 'Ms. Anusha Perera',
    specialty: 'Study Abroad Specialist',
    image: '/api/placeholder/120/120',
    rating: 4.9,
    reviews: 75,
    experience: '10+ years'
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-soft-cream to-white">
      {/* Header */}
      <header className="border-b border-border/50 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-serif font-semibold text-foreground">NextPath</h1>
                <p className="text-sm text-muted-foreground">Educational Consulting</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/services" className="text-foreground/80 hover:text-foreground transition-colors">
                Services
              </Link>
              <Link href="/consultants" className="text-foreground/80 hover:text-foreground transition-colors">
                Consultants
              </Link>
              <Link href="/resources" className="text-foreground/80 hover:text-foreground transition-colors">
                Resources
              </Link>
              <Link href="/webinars" className="text-foreground/80 hover:text-foreground transition-colors">
                Webinars
              </Link>
              <Link href="/about" className="text-foreground/80 hover:text-foreground transition-colors">
                About
              </Link>
            </nav>

            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="sm">Sign In</Button>
              <Button size="sm">Get Started</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-serif font-medium text-foreground mb-6 leading-tight">
              Your Educational Journey,{" "}
              <span className="text-primary">Guided with Care</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Navigate your academic and career decisions with confidence.
              Connect with expert consultants who understand your unique path
              and help you achieve your goals in Sri Lanka and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                Book Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Explore Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-4">
              Choose Your Path Forward
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert guidance tailored to every stage of your educational journey.
              Select the service that matches where you are today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <Link key={service.id} href={service.href}>
                  <Card className="group h-full gentle-shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 overflow-hidden">
                    <div className={`h-2 bg-gradient-to-r ${service.gradient}`} />
                    <CardHeader className="text-center pb-4">
                      <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-4`}>
                        <IconComponent className={`w-8 h-8 ${service.iconColor}`} />
                      </div>
                      <CardTitle className="text-xl font-serif">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <CardDescription className="text-base leading-relaxed mb-4">
                        {service.description}
                      </CardDescription>
                      <Button variant="ghost" className="group-hover:text-primary transition-colors">
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Consultants Spotlight */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-4">
              Meet Our Expert Consultants
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals dedicated to helping you make informed decisions
              about your education and career.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {consultants.map((consultant, index) => (
              <Card key={index} className="text-center gentle-shadow hover:shadow-lg transition-shadow border-0">
                <CardHeader>
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src={consultant.image} alt={consultant.name} />
                    <AvatarFallback>{consultant.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-xl font-serif">{consultant.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {consultant.specialty}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>{consultant.rating}</span>
                    </div>
                    <span>•</span>
                    <span>{consultant.reviews} reviews</span>
                    <span>•</span>
                    <span>{consultant.experience}</span>
                  </div>
                  <Button variant="outline" size="sm">View Profile</Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline">
              Meet All Our Consultants
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-6">
              Ready to Take the Next Step?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Book your free consultation today and let our experts guide you toward
              a brighter educational future.
            </p>
            <Button size="lg" className="text-lg px-8 py-6">
              Book Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-semibold">NextPath</h3>
                  <p className="text-sm text-background/70">Educational Consulting</p>
                </div>
              </div>
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
                 <li><Link href="/services/business-consultation" className="hover:text-background transition-colors">Business Consultation</Link></li>
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

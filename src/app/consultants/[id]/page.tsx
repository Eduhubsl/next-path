import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { GraduationCap, Award, Star, MapPin, Clock, Globe } from "lucide-react";
import Link from "next/link";
import BookingCalendar from "@/components/booking-calendar";
import React from 'react';

// --- DATA ---
// In a real app, this data would come from a database.
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
    bio: "Dr. Priya Wijesinghe is a distinguished educational consultant with over 12 years of experience...",
    detailedBio: "Dr. Priya's journey in educational consulting began after her doctoral studies...",
    qualifications: [
      "PhD in Educational Psychology - University of Colombo",
      "MA in Career Counseling - University of Kelaniya",
      "Certified Career Coach - International Coach Federation",
    ],
    achievements: [
      "Guided over 2,000 students",
      "Featured expert on national television",
      "Winner of Excellence in Educational Consulting Award 2023",
    ],
    availableHours: "Monday to Friday: 9:00 AM - 6:00 PM",
    consultationTypes: [
      { type: "Initial Career Assessment", duration: "90 minutes", price: "Free" },
      { type: "Stream Selection Guidance", duration: "60 minutes", price: "LKR 3,000" },
      { type: "University Selection Counseling", duration: "75 minutes", price: "LKR 4,000" },
    ],
    testimonials: [
      { name: "Saman Perera", role: "University Student", content: "Dr. Priya's guidance was invaluable...", rating: 5 },
      { name: "Nishani Silva", role: "A/L Graduate", content: "The career planning session opened my eyes...", rating: 5 }
    ]
  }
  // You can add other consultants here with keys "2", "3", etc.
};

// --- TYPE DEFINITION ---
type ConsultantProfilePageProps = {
  params: {
    id: string;
  };
};

// --- MAIN PAGE COMPONENT ---
export default function ConsultantProfilePage({ params }: ConsultantProfilePageProps) {
  const { id } = params;
  const consultant = consultantData[id as keyof typeof consultantData];

  if (!consultant) {
    return <div>Consultant not found</div>;
  }

  // The return statement with all the JSX is now correctly INSIDE the function
  return (
    <div className="min-h-screen bg-gradient-to-br from-soft-cream to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
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
            <Link href="/" className="hover:text-foreground">Home</Link>
            <span>/</span>
            <Link href="/consultants" className="hover:text-foreground">Consultants</Link>
            <span>/</span>
            <span className="text-foreground">{consultant.name}</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Left Column */}
              <div className="lg:col-span-2 space-y-8">
                 <Card className="border-0">
                  <CardHeader><CardTitle className="text-2xl font-serif">About {consultant.name.split(' ')[1]}</CardTitle></CardHeader>
                  <CardContent className="space-y-4 text-base leading-relaxed">
                    <p>{consultant.bio}</p>
                    <p>{consultant.detailedBio}</p>
                  </CardContent>
                </Card>
                <Card className="border-0">
                  <CardHeader><CardTitle className="text-2xl font-serif">Qualifications</CardTitle></CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {consultant.qualifications.map((qual, index) => (
                        <li key={index} className="flex items-start gap-3"><Award className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" /><span>{qual}</span></li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column (Sidebar) */}
              <div className="lg:col-span-1 space-y-8">
                <Card className="border-0">
                  <CardHeader><CardTitle className="text-xl font-serif">Consultation Types</CardTitle></CardHeader>
                  <CardContent className="space-y-4">
                    {consultant.consultationTypes.map((type, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <h4 className="font-medium mb-2">{type.type}</h4>
                        <div className="flex justify-between items-center text-sm text-muted-foreground mb-2">
                          <span>{type.duration}</span>
                          <span className={`font-medium ${type.price === 'Free' ? 'text-green-600' : 'text-foreground'}`}>{type.price}</span>
                        </div>
                        <Button variant="outline" size="sm" className="w-full">Book This Session</Button>
                      </div>
                    ))}
                  </CardContent>
                </Card>
                <div>
                  <h3 className="text-xl font-serif font-medium mb-4">Book Your Session</h3>
                  <BookingCalendar />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16">
        <div className="container mx-auto px-4">
            <p className="text-center text-sm text-background/60">&copy; 2025 NextPath Educational Consulting. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
} // <--- The function now correctly ends here
import SiteHeader from "@/components/SiteHeader"; // Corrected path
import SiteFooter from "@/components/SiteFooter"; // Corrected path
import ProfileHeader from "@/components/consultant/ProfileHeader";
import AboutSection from "@/components/consultant/AboutSection";
import Testimonials from "@/components/consultant/Testimonials";
import Sidebar from "@/components/consultant/Sidebar";
import { consultantData } from "@/lib/data";
import Link from "next/link";

type ConsultantProfilePageProps = {
  params: {
    id: string;
  };
};

export default function ConsultantProfilePage({ params }: ConsultantProfilePageProps) {
  const { id } = params;
  const consultant = consultantData[id];

  if (!consultant) {
    return <div>Consultant not found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-soft-cream to-white">
      <SiteHeader />

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

      <ProfileHeader consultant={consultant} />

      <section className="py-12 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-8">
                <AboutSection consultant={consultant} />
                <Testimonials testimonials={consultant.testimonials} />
              </div>
              <div className="lg:col-span-1">
                <Sidebar consultant={consultant} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
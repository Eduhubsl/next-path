// src/app/consultants/page.tsx

// This page now displays a list of all available consultants.
import { Star } from "lucide-react";

// This is the list of consultants from your homepage design.
// Later, you can fetch this data from your Firebase database.
const consultants = [
  {
    name: "Dr. Priya Wijesinghe",
    specialty: "Career Guidance Expert",
    imageUrl: "https://placehold.co/120x120/E2E8F0/4A5568?text=PW",
    rating: 4.9,
    reviews: 150,
    experience: "12+ years",
  },
  {
    name: "Mr. Kamal Fernando",
    specialty: "University Counselor",
    imageUrl: "https://placehold.co/120x120/E2E8F0/4A5568?text=KF",
    rating: 4.8,
    reviews: 98,
    experience: "8+ years",
  },
  {
    name: "Ms. Anusha Perera",
    specialty: "Study Abroad Specialist",
    imageUrl: "https://placehold.co/120x120/E2E8F0/4A5568?text=AP",
    rating: 4.9,
    reviews: 75,
    experience: "10+ years",
  },
  {
    name: "Dr. Anura Perera",
    email: "info@nextpath.lk",
    specialization: "University & Career Guidance",
    bio: "With over 15 years of experience, Dr. Perera specializes in helping A/L students navigate their university options and career paths, ensuring they make informed decisions for a successful future.",
    imageUrl: `https://placehold.co/400x400/E2E8F0/4A5568?text=AP`,
    rating: 4.9,
    reviews: 210,
    experience: "15+ years"
  }
];

export default function ConsultantsPage() {
  return (
    <main className="bg-gray-50 min-h-screen p-4 sm:p-6 md:p-8">
      <div className="max-w-5xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-medium text-gray-900 mb-4">
            Meet Our Expert Consultants
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experienced professionals dedicated to helping you make informed decisions
            about your education and career.
          </p>
        </div>

        {/* Consultants Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {consultants.map((consultant, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-gray-200/80">
              <div className="p-6 text-center">
                <img
                  className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-gray-100 mb-4"
                  src={consultant.imageUrl}
                  alt={consultant.name}
                />
                <h2 className="text-xl font-bold font-serif text-gray-900">{consultant.name}</h2>
                <p className="text-blue-600 font-medium mt-1">{consultant.specialty}</p>

                <div className="flex items-center justify-center gap-4 text-sm text-gray-500 my-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>{consultant.rating}</span>
                  </div>
                  <span>•</span>
                  <span>{consultant.reviews} reviews</span>
                </div>
                
                <button className="w-full mt-2 px-4 py-2 bg-blue-50 text-blue-700 font-semibold rounded-lg hover:bg-blue-100 transition-colors">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}


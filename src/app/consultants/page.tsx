// src/app/consultants/page.tsx

// This is a static page to replace the dynamic [id] route.
// This will resolve the build error and allow you to deploy the site.

export default function ConsultantsPage() {
  // We are using hardcoded data for a generic profile.
  // This can be replaced with a list of consultants from your database later.
  const consultant = {
    name: "Dr. Anura Perera",
    email: "info@nextpath.lk",
    specialization: "University & Career Guidance",
    bio: "With over 15 years of experience, Dr. Perera specializes in helping A/L students navigate their university options and career paths, ensuring they make informed decisions for a successful future.",
    imageUrl: `https://placehold.co/400x400/E2E8F0/4A5568?text=AP`,
  };

  return (
    <main className="bg-gray-100 min-h-screen p-4 sm:p-6 md:p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="p-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
            <img
              className="w-32 h-32 rounded-full object-cover border-4 border-blue-200 shadow-md"
              src={consultant.imageUrl}
              alt={consultant.name}
            />
            <div className="text-center sm:text-left">
              <h1 className="text-3xl font-bold text-gray-900">{consultant.name}</h1>
              <p className="mt-1 text-lg text-blue-600 font-semibold">{consultant.specialization}</p>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-6">
            <h2 className="text-xl font-bold text-gray-800">About</h2>
            <p className="mt-3 text-gray-600 leading-relaxed">
              {consultant.bio}
            </p>
          </div>
          
          <div className="mt-8 border-t border-gray-200 pt-6">
            <h2 className="text-xl font-bold text-gray-800">Contact Information</h2>
            <div className="mt-4">
              <p className="text-gray-600">
                <strong className="font-medium text-gray-900">Email:</strong> 
                <a href={`mailto:${consultant.email}`} className="text-blue-600 hover:underline ml-2">
                  {consultant.email}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

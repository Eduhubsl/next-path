// src/app/consultants/[id]/page.tsx

// Keep Node runtime for server-side operations
export const runtime = "nodejs";

// --- The Page Component (Test Version) ---
// This is a simplified version to test the build process without Firebase.
// We will add the data fetching back once the build succeeds.

type PageProps = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function ConsultantProfilePage({ params }: PageProps) {
  // Temporarily removed the call to getConsultant to isolate the build issue.
  const consultant = {
    id: params.id,
    name: "Test Consultant Name",
    email: "test@example.com",
    specialization: "Testing Specialization",
    bio: "This is a temporary bio for testing the page layout and build process.",
    imageUrl: `https://placehold.co/400x400/E2E8F0/4A5568?text=Test`,
  };

  if (!consultant) {
    return (
      <main className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center p-8">
          <h1 className="text-2xl font-bold text-gray-700">Consultant Not Found</h1>
          <p className="mt-2 text-gray-500">
            We couldn't find a consultant with the ID: {params.id}
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-gray-100 min-h-screen p-4 sm:p-6 md:p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="p-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
            <img
              className="w-32 h-32 rounded-full object-cover border-4 border-blue-200 shadow-md"
              src={consultant.imageUrl || `https://placehold.co/400x400/E2E8F0/4A5568?text=${consultant.name?.[0]}`}
              alt={consultant.name ?? "Consultant"}
            />
            <div className="text-center sm:text-left">
              <h1 className="text-3xl font-bold text-gray-900">{consultant.name ?? "Unnamed Consultant"}</h1>
              <p className="mt-1 text-lg text-blue-600 font-semibold">{consultant.specialization ?? "No specialization listed"}</p>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-6">
            <h2 className="text-xl font-bold text-gray-800">About</h2>
            <p className="mt-3 text-gray-600 leading-relaxed">
              {consultant.bio ?? "No biography available."}
            </p>
          </div>
          
          <div className="mt-8 border-t border-gray-200 pt-6">
            <h2 className="text-xl font-bold text-gray-800">Contact Information</h2>
            <div className="mt-4">
              {consultant.email ? (
                <p className="text-gray-600">
                  <strong className="font-medium text-gray-900">Email:</strong> 
                  <a href={`mailto:${consultant.email}`} className="text-blue-600 hover:underline ml-2">
                    {consultant.email}
                  </a>
                </p>
              ) : (
                <p className="text-gray-500">Email not provided.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}


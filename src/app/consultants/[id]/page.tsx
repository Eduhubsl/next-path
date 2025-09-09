// src/app/consultants/[id]/page.tsx

// Keep Node runtime for server-side operations
export const runtime = "nodejs";

import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";

// Define the type for our consultant data model
type Consultant = {
  id:string;
  name?: string;
  email?: string;
  specialization?: string;
  // Add any other fields you store for a consultant
};

// --- Data fetching function (server-side) ---
async function getConsultant(id: string): Promise<Consultant | null> {
  try {
    const consultantDocRef = doc(db, "consultants", id);
    const consultantSnap = await getDoc(consultantDocRef);

    if (!consultantSnap.exists()) {
      console.log(`No consultant found with ID: ${id}`);
      return null;
    }

    const data = consultantSnap.data();
    return {
      id: consultantSnap.id,
      name: data.name,
      email: data.email,
      specialization: data.specialization,
    } as Consultant;

  } catch (error) {
    console.error("Error fetching consultant:", error);
    return null;
  }
}

// --- The Page Component ---
// This component fetches and displays a single consultant's profile.
export default async function ConsultantProfilePage({ params }: { params: { id: string } }) {
  const consultant = await getConsultant(params.id);

  if (!consultant) {
    return (
      <main className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Consultant Not Found</h1>
          <p className="mt-2 text-gray-500">
            Could not find a consultant with ID: {params.id}
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="p-6 md:p-8 bg-gray-50 min-h-screen">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-800">{consultant.name ?? "Unnamed Consultant"}</h1>
        <p className="mt-1 text-lg text-blue-600 font-medium">{consultant.specialization ?? "No specialization listed"}</p>
        
        <div className="mt-6 border-t pt-6">
          <h2 className="text-xl font-semibold text-gray-700">Contact Information</h2>
          <div className="mt-4 space-y-2">
            {consultant.email && (
              <p className="text-gray-600">
                <strong className="font-medium text-gray-800">Email:</strong> {consultant.email}
              </p>
            )}
            {/* Add more contact details here if available */}
          </div>
        </div>
      </div>
    </main>
  );
}


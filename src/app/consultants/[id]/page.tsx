// src/app/consultants/[id]/page.tsx

// Keep Node runtime (Firebase Web SDK doesn't run on Edge/Deno)
export const runtime = "nodejs";

// --- Data access (server) ---
import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";

// Define the type for the props that Next.js passes to the page
type PageProps = {
  params: { id: string };
};

// Define the type for our consultant data
type Consultant = {
  id: string;
  name?: string;
  email?: string;
  specialization?: string;
  // add any other fields you store
};

// Async function to fetch a single consultant from Firestore
async function getConsultant(id: string): Promise<Consultant | null> {
  const ref = doc(db, "consultants", id);
  const snap = await getDoc(ref);

  if (!snap.exists()) {
    return null;
  }

  const data = snap.data() as Omit<Consultant, "id">;
  return { id: snap.id, ...data };
}

// --- The Page Component ---
export default async function ConsultantProfilePage({ params }: PageProps) {
  const consultant = await getConsultant(params.id);

  // If the consultant is not found, show a clear message
  if (!consultant) {
    return (
      <main className="p-6">
        <h1 className="text-xl font-bold">Consultant not found</h1>
        <p className="text-sm text-gray-500">ID: {params.id}</p>
      </main>
    );
  }

  // If the consultant is found, display their profile
  return (
    <main className="p-6 space-y-2">
      <h1 className="text-2xl font-bold">{consultant.name ?? "Unnamed consultant"}</h1>
      {consultant.email && <p>Email: {consultant.email}</p>}
      {consultant.specialization && <p>Specialization: {consultant.specialization}</p>}
    </main>
  );
}

import { FC } from "react";

// Define the type of props your page receives
interface ConsultantProfilePageProps {
  params: {
    id: string; // The dynamic [id] from the URL
  };
  searchParams?: { [key: string]: string | string[] | undefined };
}

// Define the page component with the correct typing
const ConsultantProfilePage: FC<ConsultantProfilePageProps> = ({ params }) => {
  const { id } = params; // Access the id from the URL

  return (
    <div>
      <h1>Consultant Profile</h1>
      <p>Consultant ID: {id}</p>
    </div>
  );
};

export default ConsultantProfilePage;

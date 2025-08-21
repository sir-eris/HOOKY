import { UserManualCard } from "../../../components/userManualCard"

export const metadata = {
  title: "PRO User Manual - HOOKY",
  description: "Learn more about how HOOKY PRO works and other best practices.",
};

export default function ProSetup() {
  const item = {
    title: "PRO",
    image: "",
    pdf: "",
  }
  return (
    <main>
      <UserManualCard item={item} />
    </main>
  );
}

import { UserManualCard } from "../../../components/userManualCard"

export const metadata = {
  title: "Breeze 1 User Manual - HOOKY",
  description: "Learn more about how Breeze 1 works and other best practices.",
};

export default function HowToUse() {
  const item = {
    title: "Breeze 1",
    image: "",
    pdf: "",
  }
  return (
    <main>
      <UserManualCard item={item} />
    </main>
  );
}

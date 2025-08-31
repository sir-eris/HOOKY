import ProRegisterForm from "../../../components/forms/proRegisterForm"

export const metadata = {
  title: "PRO Register- HOOKY",
  description: "Register your business .",
};

export default function MemberRegister() {
  return (
    <main className="pt-12">
      <ProRegisterForm />
    </main>
  );
}

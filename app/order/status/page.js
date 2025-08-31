import { OrderStatusForm } from "../../../components/forms/orderStatusForm";

export const metadata = {
  title: "Order Details",
  description: "Check the status of the order.",
};

export default function Status() {

  return (
    <main>
      <section className="min-h-96 lg:min-h-screen w-screen flex items-center py-16 bg-[url('/.png')] bg-no-repeat bg-center bg-contain">
        <OrderStatusForm />
      </section>
    </main>
  );
}

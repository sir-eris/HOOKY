import { OrderUpdateShippingForms } from "../../../../components/orderUpdateShippingFroms";

export const metadata = {
  title: "Order Details",
  description: "",
};


export default function Status({ params }) {
  return (
    <main>
      <section className="min-h-96 lg:min-h-screen w-screen flex items-center py-16 bg-[url('/.png')] bg-no-repeat bg-center bg-contain">
        <OrderUpdateShippingForms params={params} />
      </section>
    </main>
  );
}

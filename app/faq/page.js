import Link from "next/link";

export const metadata = {
  title: "FAQs",
  description: "Explore top Frequently Asked Questions.",
};

export default function FAQ() {
  return (
    <main>
      <section className="min-h-screen w-screen bg-[url('/.png')] bg-no-repeat bg-center bg-contain pt-24">
        <div className="w-full h-96 flex flex-col justify-center items-center mb-12 pb-6 px-12 lg:px-0 border-b">
          <h1 className="font-normal text-lg uppercase mb-4 text-center">
            Frequently Asked Questions
          </h1>
          <h2 className="text-sm text-center text-slate-600 font-medium">
            Explore the top most frequently asked questions about Hooky and
            other related topics.
          </h2>
        </div>

        <div className="w-full lg:w-1/3 min-h-screen mx-auto px-8">
          <ul className="mb-12">
            <li className="py-6 border-b font-medium text-base text-left">
              <p className="text-lg mb-4">
                <span className="font-extrabold pr-2 text-xl">{">"}</span>What's
                the best way to change trays?
              </p>
              <small className="text-sm text-gray-600">
                If device is in use and you want to change trays immediately,
                you can force sleep the device by holding your finger on the
                touch button until the light indicator turns off and wait a
                couple of minutes until the Damper cools off. Otherwise, simply
                lift the Damper and Tray from the top, replace the contents of
                the Tray and replace them back on the head and you're done!
              </small>
            </li>
            <li className="py-6 border-b font-medium text-base text-left">
              <p className="text-lg mb-4">
                <span className="font-extrabold pr-2 text-xl">{">"}</span>For
                how long can the device be used continuously?
              </p>
              <small className="text-sm text-gray-600">
                The Smart Power Management System™ protects the battery and
                allows the device to operate even when the battery is charging.
                Given the materials used and the build-quality of the device
                there is not an exact limit as to how long can the device be
                used continuously. The device is designed to be able to handle
                load as would any conventional solution; however you may stop if
                device stops performing as expected.
              </small>
            </li>
            <li className="py-6 border-b font-medium text-base text-left">
              <p className="text-lg mb-4">
                <span className="font-extrabold pr-2 text-xl">{">"}</span>How
                warm will the device get after constant use?
              </p>
              <small className="text-sm text-gray-600">
                Conveniently the aluminum body of the device acts as a great
                heat-sink. The internal components are all rated for well above
                the maximum temperature the device would ever reach. In normal
                operating conditions, the body of the device should not reach
                hot-to-touch temperatures. Keep in mind during use, the Heating
                Chamber™ –– consisting of the Damper, Tray, and the Heating
                Chamber Base –– may get hot; be cautious when changing Trays.
              </small>
            </li>
            <li className="py-6 border-b font-medium text-base text-left">
              <p className="text-lg mb-4">
                <span className="font-extrabold pr-2 text-xl">{">"}</span>How
                hot will the Heating Chamber™ get?
              </p>
              <small className="text-sm text-gray-600">
                Like any heat-operated device after a few minutes of use the
                Heating Chamber will reach intolerable temperatures. Be cautious
                when handling the Damper or the Tray. If you need to move it
                while device is turned on, you can grab the base of the neck and
                lift the device.
              </small>
            </li>
            <li className="py-6 border-b font-medium text-base text-left">
              <p className="text-lg mb-4">
                <span className="font-extrabold pr-2 text-xl">{">"}</span>How
                waterproof is Hooky?
              </p>
              <small className="text-sm text-gray-600">
                Hooky is not rated for any waterproof categories. The water
                filter is a uni-body tank and completely sealed off from all the
                electronics and accessories. However, external water penetration
                may be possible and would cause damage. Be cautious if you are
                in a a wet environment.
              </small>
            </li>
            <li className="py-6 border-b font-medium text-base text-left">
              <p className="text-lg mb-4">
                <span className="font-extrabold pr-2 text-xl">{">"}</span>How
                often should the water in the filter be replaced?
              </p>
              <small className="text-sm text-gray-600">
                Maintenance of the water filter mainly depends on how often the
                device is used. It's recommended to replace the water after
                every 20 sessions or if water level changes due to evaporation.
                For average usage, replacing the water monthly will keep the
                device operationally healthy. Keep in mind if the device sits
                stagnant for more than a couple of days, the water needs to be
                replaced before the next use.
              </small>
            </li>
            <li className="py-6 font-medium text-base text-left">
              <p className="text-lg mb-4">
                <span className="font-extrabold pr-2 text-xl">{">"}</span>How to
                clean Hooky?
              </p>
              <small className="text-sm text-gray-600">
                If the device is kept away from water or harsh environments,
                there is little maintenance required to keep the device
                operationally healthy. With Hooky unlike conventional solutions
                replacing the Tray and getting started doesn't create any mess.
                This reduces clean-up time to zero.
              </small>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}

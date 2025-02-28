"use client";
import {
  AcademicCapIcon,
  BanknotesIcon,
  CheckBadgeIcon,
  ClockIcon,
  ReceiptRefundIcon,
  UsersIcon,
  TableCellsIcon,
} from "@heroicons/react/24/outline";

const actions = [
  {
    title: "Deep Learning-ANN Classification",
    desc: "",
    href: "https://dl-ann-classification-zireael.streamlit.app/",
    icon: TableCellsIcon,
    iconForeground: "text-blue-700",
    iconBackground: "bg-blue-50",
  },
  {
    title: "Welfare-system management app",
    href: "#",
    desc: "",
    icon: UsersIcon,
    iconForeground: "text-teal-700",
    iconBackground: "bg-teal-50",
  },
  {
    title: "Next JS Website",
    href: "https://ieeeaiubsb.com/",
    desc: "",
    icon: AcademicCapIcon,
    iconForeground: "text-purple-700",
    iconBackground: "bg-purple-50",
  },
  {
    title: "Transaction system database model",
    desc: "",
    href: "#",
    icon: UsersIcon,
    iconForeground: "text-sky-700",
    iconBackground: "bg-sky-50",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// export  function Project() {
//   return (
//     <div className="bg-white mx-auto px-4 sm:px-6 lg:px-8 pb-5" id="pr">
//       <div className="mx-auto max-w-3xl">
//         <div className="relative pb-5">
//           <div
//             className="absolute inset-0 flex items-center"
//             aria-hidden="true"
//           >
//             <div className="w-full border-t border-gray-300" />
//           </div>
//           <div className="relative flex justify-end">
//             <span className="bg-white p-3 text-3xl sm:text-5xl font-bold leading-tight text-gray-900 ">
//               Projects
//             </span>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }

export default function Project() {
  return (
    <>
      <div className="bg-gray-900 py-12 " id="pr">
        <main className="relative isolate mx-auto max-w-7xl px-6 sm:mt-10 lg:px-8">
          <div className="">
            <h2 className=" text-3xl sm:text-5xl font-bold text-white pb-8">
              Projects
            </h2>
          </div>
          <div className="divide-y shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0 ">
            {actions.map((action, actionIdx) => (
              <div
                key={action.title}
                className={classNames(
                  actionIdx === 0
                    ? "rounded-tl-lg rounded-tr-lg sm:rounded-tr-none"
                    : "",
                  actionIdx === 1 ? "sm:rounded-tr-lg" : "",
                  actionIdx === actions.length - 2 ? "sm:rounded-bl-lg" : "",
                  actionIdx === actions.length - 1
                    ? "rounded-bl-lg rounded-br-lg sm:rounded-bl-none"
                    : "",
                  "group relative bg-white/2 p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-gray-500"
                )}
              >
                <div>
                  <span
                    className={classNames(
                      action.iconBackground,
                      action.iconForeground,
                      "inline-flex rounded-lg p-3 ring-4 ring-white"
                    )}
                  >
                    <action.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                </div>
                <div className="mt-8">
                  <h3 className="text-base font-semibold leading-6 text-white">
                    <a
                      href={action.href}
                      className="focus:outline-none"
                      target="_blank"
                    >
                      {/* Extend touch target to entire panel */}
                      <span className="absolute inset-0" aria-hidden="true" />
                      {action.title}
                    </a>
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">{action.desc}</p>
                </div>
                <span
                  className="pointer-events-none absolute right-6 top-6 text-gray-300 group-hover:text-gray-400"
                  aria-hidden="true"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                  </svg>
                </span>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}

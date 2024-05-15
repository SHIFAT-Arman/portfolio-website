"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  {
    icon: "H",
    text: "Home",
    href: "/",
  },
  {
    icon: "S",
    text: "Skills",
    href: "/#sk",
  },
  {
    icon: "P",
    text: "Project",
    href: "/#pr",
  },
  {
    icon: "S",
    text: "Socials",
    href: "/#footer",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div>
      <nav className="flex-col flex w-full justify-center items-center bg-white p-4 fixed z-10">
        <ul role="list" className="mt-2 -mx-2 list-none list-inside flex">
          {links.map((link) => (
            <li key={link.text}>
              <motion.div
                whileHover={{ scale: 1.2 }}
                onHoverStart={(e) => {}}
                onHoverEnd={(e) => {}}
                whileTap={{ scale: 0.8 }}
              >
                <Link
                  className={`${
                    link.href === pathname ? "text-fuchsia-500 font-bold" : ""
                  }text-fuchsia-500 leading-6 font-semibold text-sm p-2 rounded-md gap-x-3 flex decoration-inherit hover:text-fuchsia-500`}
                  href={link.href}
                >
                  <span className="text-gray-400 font-medium text-[0.625rem] bg-white border-gray-200 border rounded-lg justify-center items-center shrink-0 w-6 h-6 flex">
                    {link.icon}
                  </span>
                  <span className="text-ellipsis overflow-hidden whitespace-nowrap">
                    {link.text}
                  </span>
                </Link>
              </motion.div>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

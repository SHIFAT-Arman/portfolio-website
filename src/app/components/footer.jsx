import { TwitterOriginal, GithubOriginal } from "devicons-react";

const navigation = {
  social: [
    {
      name: "X",
      href: "#",
      icon: TwitterOriginal,
    },
    {
      name: "GitHub",
      href: "github.com/SHIFAT-Arman",
      icon: GithubOriginal,
    },
  ],
};

export default function SocialLinks() {
  return (
    <footer className="bg-white" id="footer">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:pb-24 lg:px-8">
        <div className="mt-10 flex justify-center space-x-10">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-fuchsia-400 hover:text-fuchsia-500"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy; 2024 made by Shifat Arman.
        </p>
      </div>
    </footer>
  );
}

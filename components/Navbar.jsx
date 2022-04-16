import { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import Image from "next/image";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Swipe", href: "/swipe" },
  { name: "Likes", href: "/viewlikes" },
];

const tenderIcon = "/favicon.ico";
const otherIcon = "/broccoli.png";

export default function Swipe() {
  const [iconLink, setIconLink] = useState("/favicon.ico");
  function changeImg() {
    if (iconLink === tenderIcon) {
      setIconLink(otherIcon);
    } else {
      setIconLink(tenderIcon);
    }
  }

  return (
    <div className="relative pt-6">
      <Popover>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav
            className="relative flex items-center justify-between sm:h-10 md:justify-center"
            aria-label="Global"
          >
            <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
              <div className="flex items-center justify-between w-full md:w-auto">
                <Link href={"/"} passHref>
                  <a>
                    <span className="sr-only">Tender</span>
                    <div className="h-8 w-auto sm:h-10">
                      <Image
                        src={iconLink}
                        alt={"Tender Logo"}
                        width={32}
                        height={32}
                      />
                    </div>
                  </a>
                </Link>
                <div className="-mr-2 flex items-center md:hidden">
                  <Popover.Button className="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open main menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="hidden md:flex md:space-x-10">
              {navigation.map((item) => (
                <Link href={item.href} passHref key={item.name}>
                  <a className="font-medium text-gray-500 hover:text-gray-900">
                    {item.name}
                  </a>
                </Link>
              ))}
            </div>
            <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
              <span className="inline-flex rounded-md shadow">
                <button
                  onClick={() => {
                    changeImg();
                  }}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-semibold rounded-md text-indigo-600 bg-white hover:bg-gray-50"
                >
                  Change Logo
                </button>
              </span>
            </div>
          </nav>
        </div>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                <div>
                  <div className="h-8 w-auto">
                    <Image
                      src={iconLink}
                      alt={"Tender Logo"}
                      width={32}
                      height={32}
                    />
                  </div>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <Link href={item.href} passHref key={item.name}>
                    <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                      {item.name}
                    </a>
                  </Link>
                ))}
              </div>
              <button
                onClick={() => {
                  changeImg();
                }}
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-semibold rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
              >
                Change Logo
              </button>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
}

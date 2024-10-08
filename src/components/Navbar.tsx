"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { motion } from 'framer-motion';

type Item = {
  title: string;
  url: string;
};

type Links = Array<Item>;

const Links: Links = [
  {
    title: "Ana Sayfa",
    url: "/",
  },
  {
    title: "Hakkımda",
    url: "/about",
  },
  {
    title: "Deneyim",
    url: "/experiences",
  },
  {
    title: "İletişim",
    url: "/contact",
  },
];


export default function Navbar() {
  const currentPath = usePathname();
  const [showHamburgerMenu, setShowHamburgerMenu] = useState<boolean>(false);

  const handleShowMenu = () => {
    setShowHamburgerMenu((prevState) => {
      return !prevState;
    });
  };

  const variants = {
    open: {
      y: 0,
      transition: { type: 'spring', stiffness: 200 }
    },
    closed: {
      y: '-101%',
      transition: { type: 'spring', stiffness: 200 }
    }
  };

  return (
    <Fragment>
        {showHamburgerMenu && <div className="w-screen h-screen absolute top-0 left-0 bg-[#eee] opacity-50"></div>}
        <RxHamburgerMenu
          className="w-6 h-6 hamburger min-[768px]:hidden"
          onClick={handleShowMenu}
        />
        <motion.div
          animate={showHamburgerMenu ? "open" : "closed"}
          variants={variants}
          className="hamburger-area hidden flex-col items-end h-screen absolute right-0 bg-[#ff642d] w-40 p-2 top-0 max-[767px]:flex"
        >
          <IoCloseCircleOutline
            className="w-6 h-6 close"
            onClick={handleShowMenu}
          />

          <nav className="flex w-full mt-3 z-[999] justify-center">
            <ul className="flex flex-col gap-2">
              {Links.map((item, index) => {
                return (
                  <li key={index}>
                    <Link href={item.url} className="text-white">{item.title}</Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </motion.div>
        <nav className="max-[767px]:hidden">
        <ul className="flex gap-7">
          {Links.map((item, index) => {
            if (item.url === currentPath) {
              return (
                <li
                  key={index}
                  className="border-b-2 border-solid border-[#ff642d] transition-colors duration-300"
                >
                  <Link
                    href={item.url}
                    className="text-[#ff642d] transition-colors duration-300"
                  >
                    {item.title}
                  </Link>
                </li>
              );
            }
            return (
              <li key={index}>
                <Link href={item.url}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </Fragment>
  );
}

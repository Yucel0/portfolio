import { FaLinkedin } from "react-icons/fa";
import { VscGithubInverted } from "react-icons/vsc";
import { FaXTwitter } from "react-icons/fa6";
import { ReactNode } from "react";
import Link from "next/link";

type Item = {
  icon: ReactNode;
  url: string;
};

type SocialMedia = Array<Item>;

const socialMedia: SocialMedia = [
  {
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/yucel-yilmaz34/",
  },
  {
    icon: <VscGithubInverted />,
    url: "https://www.linkedin.com/in/yucel-yilmaz34/",
  },
  {
    icon: <FaXTwitter />,
    url: "https://www.linkedin.com/in/yucel-yilmaz34/",
  }
];

export default function Social() {
  return (
    <ul className="flex gap-3">
      {socialMedia.map((item, index) => {
        return (
          <li key={index} className="rounded-[100px] bg-black w-10 h-10 hover:border hover:border-solid hover:border-[#ff642d] hover:bg-white transition ease-linear duration-200">
            <Link href={item.url} target="_blank" className="text-[#ff642d] flex w-full h-full justify-center items-center">{item.icon}</Link>
          </li>
        );
      })}
    </ul>
  );
}
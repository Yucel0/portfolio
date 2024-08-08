import Image from "next/image";
import Navbar from "./Navbar";
import logo from '../../public/logo.jpeg';

export default function Header() {
  return (
    <header className="container mx-auto flex justify-between items-center py-4 h-[120px] max-[767px]:max-w-full max-[767px]:px-4 max-[767px]:relative">
      <Image src={logo} alt="logo" width={88} className="rounded-[50%]" />
      <Navbar />
    </header>
  );
}
